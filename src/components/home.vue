<!-- Home.vue -->
<template>
  <Layout>
    <div class="hero-section">
      <div class="hero-container">
        <div class="hero-grid">
          <div class="hero-content">
          <h1 class="hero-title">
            Quantitative Trading Bootcamp
        </h1>
        <p class="hero-text">
          Quantitative Trading Bootcamp teaches the fundamentals of quantitative trading: markets, order books, auctions, risk and sizing, adverse selection, arbitrage, and how quant trading firms make money.
          <br />
          <br />
          The philosophy of this bootcamp is that the best way to learn to trade is by trading. We'll use a fake economy and exchange, run through many sessions of trading games designed to teach progressively more complex concepts, and auction off prizes at the end using our internal currency.
        </p>
        <p class="hero-text">
          The course is taught by <a target="_blank" href="https://rickiheicklen.com/index.html" class="text-blue-600 hover:text-blue-800">Ricki Heicklen</a>, a former quantitative trader at Jane Street, along with a team of 2-3 others.
        </p>
        <p class="hero-text">
          The next public bootcamps will be in <b>NYC on Jan 22-26</b>, and in <b>SF/Bay Area on Feb 13-17</b>.
        </p>
        <div class="flex flex-col items-start gap-4">
          <a target="_blank" :href="registerUrl" class="register-button">
            Register now: Jan 22-26 (NYC) <ChevronRight class="ml-2" :size="24" />
          </a>
          <a target="_blank" :href="registerFebUrl" class="register-button">
            Register now: Feb 13-17 (Bay Area) <ChevronRight class="ml-2" :size="24" />
          </a>
          <a target="_blank" :href="interestUrl" class="interest-button">
            Interest Form
            <ChevronRight class="ml-2" :size="24" />
          </a>
          <!-- <a target="_blank" :href="interestUrl" class="interest-button">
            Interest Form
            <ChevronRight class="ml-2" :size="24" />
          </a> -->
        </div>
      </div>
        <div class="image-container">
          <img 
            :src="rickiRossImage" 
            alt="Ricki teaching at Trading Bootcamp" 
            class="bootcamp-image"
          />
        </div>
        </div>
      </div>
    </div>

    <!-- <div class="content-section">
      <h2 class="text-3xl font-bold mb-8 text-center">Things You'll Learn</h2>
      <div class="features-grid">
        <FeatureCard
          v-for="feature in features"
          :key="feature.title"
          v-bind="feature"
        />
      </div>
    </div> -->

    <div class="bg-gray-50 py-16">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Random Testimonial</h2>
        <RandomTestimonial />
      </div>
    </div>


  </Layout>
</template>

<script setup>
import { ChevronRight, BookOpen, TrendingUp, LineChart } from 'lucide-vue-next'
import Layout from './layout.vue'
import FeatureCard from './FeatureCard.vue'
import rickiRossImage from '../assets/ricki_ross_bootcamp.jpg'
import RandomTestimonial from './RandomTestimonial.vue'
import { links } from '../data/links.js'

const registerUrl = links.register
const interestUrl = links.interest

const features = [
  {
    title: 'Market Fundamentals',
    description: 'Learn the basics of market mechanics, order books, and price discovery through hands-on trading simulations.',
    icon: BookOpen
  },
  {
    title: 'Risk Management',
    description: 'Master position sizing, risk assessment, and portfolio management strategies.',
    icon: TrendingUp
  },
  {
    title: 'Quantitative Analysis',
    description: 'Understand how to use data and statistics to make informed trading decisions.',
    icon: LineChart
  }
]

</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-40px);
  }
}

.hero-section {
  @apply py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden;
}

.hero-container {
  @apply max-w-6xl mx-auto relative z-10;
}

.hero-grid {
  @apply grid md:grid-cols-2 gap-8 items-center;
}

.hero-content {
  @apply flex flex-col;
}

.hero-title {
  @apply text-2xl sm:text-4xl font-bold text-gray-900 mb-8 pb-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent;
}

.hero-text {
  @apply text-lg text-gray-600 mb-8;
}

.register-button {
  @apply inline-flex bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1;
}

.interest-button {
  @apply inline-flex bg-gradient-to-r from-blue-400/80 to-blue-400/80 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1;
}

.content-section {
  @apply max-w-6xl mx-auto px-4 py-16;
}

.features-grid {
  @apply grid md:grid-cols-3 gap-8;
}

.venue-container {
  @apply max-w-6xl mx-auto px-4 py-12;
}

.venue-text {
  @apply text-lg text-gray-600 mb-4;
}

.venue-image {
  @apply w-full h-auto rounded-lg;
}

.market-symbol {
  font-size: 2rem;
  animation: float 8s ease-in-out infinite;
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.random-position {
  left: v-bind('Math.random() * 100 + "%"');
  top: v-bind('Math.random() * 100 + "%"');
}

.image-container {
  @apply w-full;
}

.bootcamp-image {
  @apply w-full h-auto rounded-lg shadow-lg;
}
</style>