<template>
  <div class="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
    <blockquote class="text-xl italic text-gray-700 mb-4">
      "{{ currentTestimonial.quote }}"
    </blockquote>
    <footer v-if="currentTestimonial.author" class="text-gray-600 font-medium">
      — {{ currentTestimonial.author }}
    </footer>
    <button 
      @click="randomizeTestimonial" 
      class="mt-6 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors duration-200"
    >
      New Quote
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { testimonials } from '@/data/testimonials'

const currentTestimonial = ref(testimonials[Math.floor(Math.random() * testimonials.length)])

const randomizeTestimonial = () => {
  let newIndex
  do {
    newIndex = Math.floor(Math.random() * testimonials.length)
  } while (testimonials[newIndex].quote === currentTestimonial.value.quote)
  
  currentTestimonial.value = testimonials[newIndex]
}
</script>