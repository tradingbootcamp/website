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
  max-width: 300px;
}

.team-member-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.team-member-name {
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.team-member-bio {
  font-size: 0.9rem;
  line-height: 1.5;
}
</style> 