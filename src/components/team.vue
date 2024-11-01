<template>
  <Layout>
    <div class="team-page">
      <h1 class="team-title">Our Team</h1>
      <div class="team-grid">
        <TeamMember
          v-for="member in teamMembers"
          :key="member.id"
          :name="member.name"
          :bio="member.bio"
          :profile-image="member.image"
        />
      </div>
    </div>
  </Layout>
</template>

<script setup>
import Layout from './Layout.vue'
import TeamMember from './TeamMember.vue'

const teamMembers = [
  {
    id: 1,
    name: 'Jane Doe',
    bio: 'Lead Developer with 10 years of experience in web development and team leadership.',
    image: '/images/jane-doe.jpg'
  },
  {
    id: 2,
    name: 'John Smith',
    bio: 'Senior Designer specializing in user experience and interface design.',
    image: '/images/john-smith.jpg'
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    bio: 'Full-stack developer with a passion for creating scalable applications.',
    image: '/images/sarah-johnson.jpg'
  }
]
</script>

<style scoped>
.team-page {
  padding: 2rem;
}

.team-title {
  text-align: center;
  margin-bottom: 3rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-items: center;
}
</style>