<template>
  <div class="team-member">
    <img :src="profileImage" :alt="name" class="team-member-image">
    <h3 class="team-member-name">{{ name }}</h3>
    <p class="team-member-bio">{{ bio }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  profileImage: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.team-member {
  padding: 1.5rem;
  text-align: center;
  max-width: 800px; /* Increased from 600px */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.team-member-image {
  width: 300px; /* Increased from 250px */
  height: 300px; /* Increased from 250px */
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.team-member-name {
  margin-bottom: 0.5rem;
  font-size: 1.75rem; /* Increased from 1.5rem */
  text-align: center;
}

.team-member-bio {
  font-size: 1.125rem; /* Changed to match home.vue */
  line-height: 1.6;
  text-align: left;
  color: #555;
  margin: 0;
  padding: 1.5rem; /* Increased from 1rem */
  background-color: #f9f9f9;
  border-radius: 8px;
  width: 100%; /* Added to ensure bio takes full width */
}
</style> 