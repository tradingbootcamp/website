<template>
  <Layout>
    <div class="team-page">
      <h1 class="team-title">Meet Our Team</h1>
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
import Layout from './layout.vue'
import TeamMember from './TeamMember.vue'

// Import images directly
import rickiImage from '../assets/ricki.jpeg'
import yoavImage from '../assets/yoav_headshot.jpg'
import rossImage from '../assets/rossry_4.jpg'
import nicholasImage from '../assets/nicholas_headshot.jpeg'
import saulImage from '../assets/saul_munn.png'


const teamMembers = [
  {
    id: 1,
    name: 'Ricki Heicklen',
    bio: 'Ricki runs this bootcamp, where she gets to fulfill her lifelong dream of yelling at people for their trade mistakes. In the past, she\'s worked in quant trading, electoral forecasting, teaching, writing, software development, data science, and briefly, construction. She likes to plan weird events.',
    image: rickiImage
  },
  {
    id: 2,
    name: 'Yoav Tzfati',
    bio: 'Yoav is a coding nerd that stumbled onto the trading bootcamp while making his first steps in AI Safety. He couldn\'t help himself from rewriting the mock trading infrastructure in Rust, and here we are.',
    image: yoavImage
  },
  {
    id: 3,
    name: 'Ross Rheingans-Yoo',
    bio: 'Ross left his job at a well-regarded trading firm in 2022 to work at a new philanthropic foundation funded by crypto money, where he learned that the worst part about not working in trading is not getting to teach early-career traders.', 
    //(It turns out that the worst part of your philanthropic foundation shutting down because the crypto money collapsed among allegations of fraud is that you still don\'t get to teach early-career traders.) Fortunately, the free market seems to have devised a solution to that problem.',
    image: rossImage
  }
]
</script>

<style scoped>
.team-page {
  padding: 2rem;
}

.team-title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: bold;
  color: #1a202c;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  justify-items: center;
  max-width: 1400px;
  margin: 0 auto;
}

@media (max-width: 640px) {
  .team-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .team-page {
    padding: 1rem;
  }
}
</style>