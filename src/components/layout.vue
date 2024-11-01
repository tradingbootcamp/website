<!-- Layout.vue -->
<template>
    <div class="min-h-screen bg-gray-50">
      <!-- Navbar -->
      <nav class="bg-white shadow-sm">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <span class="text-xl font-bold text-gray-800">Trading Bootcamp</span>
            </div>
            
            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center space-x-8">
              <router-link to="/" class="text-gray-600 hover:text-gray-900">Home</router-link>
              <router-link to="/schedule" class="text-gray-600 hover:text-gray-900">Schedule</router-link>
              <router-link to="/team" class="text-gray-600 hover:text-gray-900">Team</router-link>
              <router-link to="/faq" class="text-gray-600 hover:text-gray-900">FAQ</router-link>
              <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Register
              </button>
            </div>
  
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
            <router-link to="/" class="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Home</router-link>
            <router-link to="/schedule" class="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Schedule</router-link>
            <router-link to="/team" class="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Team</router-link>
            <router-link to="/faq" class="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50">FAQ</router-link>
            <button class="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Register
            </button>
          </div>
        </div>
      </nav>
  
      <!-- Main Content -->
      <slot></slot>
  
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
                <li><router-link to="/" class="text-gray-400 hover:text-white">Home</router-link></li>
                <li><router-link to="/schedule" class="text-gray-400 hover:text-white">Schedule</router-link></li>
                <li><router-link to="/team" class="text-gray-400 hover:text-white">Team</router-link></li>
                <li><router-link to="/faq" class="text-gray-400 hover:text-white">FAQ</router-link></li>
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
  import { Menu, X } from 'lucide-vue-next'
  
  const isMenuOpen = ref(false)
  </script>