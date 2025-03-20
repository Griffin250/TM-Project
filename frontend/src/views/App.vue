<script setup>
import { ref, onMounted } from "vue";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

const users = ref([]);

const fetchUsers = async () => {
  try {
    const response = await fetch("http://localhost:8000/users/");
    const data = await response.json();
    users.value = data.users;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

onMounted(fetchUsers);
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <main class="flex-grow">
      <h1 className="text-center font-bold">Ship Data</h1>
      <ul>

      

      </ul>
      <router-view />
    </main>
    <Footer />
  </div>
</template>
