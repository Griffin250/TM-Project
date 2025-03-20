<template>
  <div class="container mx-auto p-4">
    <div class="max-w-2xl mx-auto mb-4">
      <select 
        v-model="selectedBoat" 
        @change="fetchBoatPosition"
        class="border p-2 mb-4 w-full"
      >
        <option disabled value="">Velg båt</option>
        <option>COLOR MAGIC</option>
        <option>COLOR FANTASY</option>
      </select>
    </div>

    <div id="map" class="h-[600px]"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import L from 'leaflet'
import axios from 'axios'

const map = ref(null)
const markers = ref([])
const selectedBoat = ref('')

// Mock API endpoint - replace with your actual API URL
const API_BASE = 'http://localhost:8000/items'

onMounted(() => {
  map.value = L.map('map').setView([60.4720, 8.4689], 6)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map.value)
})

const fetchBoatPosition = async () => {
  try {
    // Clear existing markers
    markers.value.forEach(marker => marker.removeFrom(map.value))
    markers.value = []

    // Fetch position from API
    const response = await axios.get(`${API_BASE}/${selectedBoat.value}`)
    const { position } = response.data || {};
    if (!position) {
      console.error("Boat position missing!");
      return;
    }
    const { lat, lng } = position;


    // Add new marker
    const marker = L.marker([lat, lng], {
      icon: L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41]
      })
    }).addTo(map.value) .bindPopup('Here will be the boat name and details')

    markers.value.push(marker)
    
    // Center map on marker
    map.value.panTo([lat, lng])

  } catch (error) {
    console.error('Error fetching boat position:', error)
    alert('Kunne ikke hente båtposisjon')
  }
}
</script>

<style>
@import 'leaflet/dist/leaflet.css';

.leaflet-default-icon-path {
  background-image: url(https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png);
}
</style>