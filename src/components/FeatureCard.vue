<template>
  <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <div class="mb-4">
      <component :is="icon" class="w-8 h-8 text-blue-600" />
    </div>
    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: Object,
    required: true
  }
})
</script> 