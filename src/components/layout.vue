<!-- Layout.vue -->
<template>
    <div class="min-h-screen bg-gray-50 flex flex-col">
      <!-- Navbar -->
      <nav class="bg-white shadow-sm">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <router-link to="/" class="hover:opacity-80 text-xl font-bold text-gray-800 hover:text-gray-900 flex items-center gap-1">
                <img src="../assets/trading_bootcamp_logo.png" alt="Quantitative Trading Bootcamp Logo" class="h-14" />
                QTB
              </router-link>
            </div>
            
            
            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center space-x-8">
              <router-link to="/" class="text-gray-600 hover:text-gray-900">Home</router-link>
              <router-link to="/schedule" class="text-gray-600 hover:text-gray-900">Schedule</router-link>
              <router-link to="/team" class="text-gray-600 hover:text-gray-900">Team</router-link>
              <router-link to="/faq" class="text-gray-600 hover:text-gray-900">FAQ</router-link>
              <router-link to="/socialproof" class="text-gray-600 hover:text-gray-900">Social Proof</router-link>
              <router-link to="/corporate-partnerships" class="text-gray-600 hover:text-gray-900">Corporate Partnerships</router-link>
              <a target="_blank" :href="registerUrl" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Register Now
              </a>
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
            <router-link to="/socialproof" class="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Social Proof</router-link>
            <router-link to="/corporate-partnerships" class="text-gray-600 hover:text-gray-900">Corporate Partnerships</router-link>
            <a :href="registerUrl" class="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Register Now
            </a>
          </div>
        </div>
      </nav>
  
      <!-- Main Content -->
      <div class="flex-grow">
        <slot></slot>
      </div>
  
      <!-- Footer -->
      <footer class="bg-gray-800 text-white">
        <div class="max-w-6xl mx-auto px-4 py-8">
          <div class="flex justify-center">
            <div>
              <h4 class="text-lg font-semibold mb-4 text-center">Contact</h4>
              <ul class="space-y-2 text-gray-400 text-center">
                <li>hello at trading dot camp</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Menu, X } from 'lucide-vue-next'
  import { links } from '../data/links.js'
  const interestUrl = links.interest
  const registerUrl = links.register
  const registerFebUrl = links.registerFeb

  
  const isMenuOpen = ref(false)
  </script>