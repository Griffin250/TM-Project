<template>
    <nav class="bg-blue-950 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/" class="text-xl font-bold">Boat Site</router-link>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-6">
          <router-link to="/" class="hover:text-gray-300">Home</router-link>
          <router-link to="/map" class="hover:text-gray-300">Map</router-link>
        </div>
  
        <!-- Mobile Menu -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
  
      <!-- Mobile Dropdown -->
      <div v-if="isMenuOpen" class="md:hidden absolute w-full bg-blue-950 text-center py-2">
        <router-link to="/" class="block py-2 hover:bg-blue-800">Home</router-link>
        <router-link to="/map" class="block py-2 hover:bg-blue-800">Map</router-link>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isMenuOpen = ref(false)
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }
  </script>