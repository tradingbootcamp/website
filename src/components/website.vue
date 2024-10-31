<template>
    <div class="min-h-screen bg-gray-50">
      <!-- Navbar -->
      <nav class="bg-white shadow-sm">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <span class="text-xl font-bold text-gray-800">Your Brand</span>
            </div>
            
            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center space-x-8">
              <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
              <a href="#" class="text-gray-600 hover:text-gray-900">Services</a>
              <a href="#" class="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
  
            <!-- Mobile menu button -->
            <div class="md:hidden flex items-center">
              <button
                @click="isMenuOpen = !isMenuOpen"
                class="text-gray-500 hover:text-gray-900"
              >
                <Menu v-if="!isMenuOpen" :size="24" />
                <X v-else :size="24" />
              </button>
            </div>
          </div>
        </div>
  
        <!-- Mobile Menu -->
        <div v-if="isMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a href="#" class="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Home</a>
            <a href="#" class="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50">About</a>
            <a href="#" class="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Services</a>
            <a href="#" class="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Contact</a>
          </div>
        </div>
      </nav>
  
      <!-- Hero Section -->
      <div class="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-6xl mx-auto">
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Welcome to Your Website
          </h1>
          <p class="text-lg text-gray-600 mb-8">
            A simple, responsive website built with Vue 3 and Tailwind CSS.
          </p>
          <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center">
            Get Started
            <ChevronRight class="ml-2" :size="20" />
          </button>
        </div>
      </div>
  
      <!-- Content Sections -->
      <div class="max-w-6xl mx-auto px-4 py-12">
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Feature Cards -->
          <div v-for="item in 3" :key="item" class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-2">Feature {{ item }}</h3>
            <p class="text-gray-600">
              This is a brief description of feature {{ item }}. Add your content here.
            </p>
          </div>
        </div>
      </div>
  
      <!-- Footer -->
      <footer class="bg-gray-800 text-white">
        <div class="max-w-6xl mx-auto px-4 py-8">
          <div class="grid md:grid-cols-4 gap-8">
            <div>
              <h4 class="text-lg font-semibold mb-4">About</h4>
              <p class="text-gray-400">
                Your company description goes here.
              </p>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Links</h4>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Contact</h4>
              <ul class="space-y-2 text-gray-400">
                <li>123 Street Name</li>
                <li>City, Country</li>
                <li>contact@example.com</li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Follow Us</h4>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" class="text-gray-400 hover:text-white">LinkedIn</a>
                <a href="#" class="text-gray-400 hover:text-white">GitHub</a>
              </div>
            </div>
          </div>
          <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {{ new Date().getFullYear() }} Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Menu, X, ChevronRight } from 'lucide-vue-next'
  
  const isMenuOpen = ref(false)
  </script>