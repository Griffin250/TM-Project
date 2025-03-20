<template>
    <div class="container mx-auto px-4 py-8">
      <!-- Main boat image section -->
      <div class="max-w-4xl mx-auto">
        <img 
          src="../assets/images/travel-photo-alaska-cruise-e1500687725115.jpeg" 
          alt="Boat Image"
          class="w-full h-auto rounded-lg shadow-xl object-cover"
          style="min-height: 70vh;"
        />
      </div>
  
      <!-- Optional text section -->
      <div class="mt-8 text-center max-w-2xl mx-auto text-red-200">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Welcome to Telenor Maritime</h1>
        <p class="text-gray-600 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  // No need for complex logic here unless you need it
  </script>
  
  <style scoped>
  /* Optional custom styles */
  img {
    max-height: 80vh;
    object-position: center;
  }
  
  @media (max-width: 768px) {
    img {
      min-height: 50vh;
    }
  }
  </style>