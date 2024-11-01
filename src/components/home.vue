<!-- Home.vue -->
<template>
  <Layout>
    <!-- Hero Section -->
    <div class="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      <!-- Add animated background elements -->
      <div class="absolute inset-0 z-0">
        <div v-for="n in 100" :key="n" 
             class="market-symbol absolute animate-float opacity-5"
             :style="{
               left: `${Math.random() * 100}%`,
               top: `${Math.random() * 100}%`,
             }">
          {{ ['$', '€', '¥', '£', '₿', '📈', '📊'][Math.floor(Math.random() * 7)] }}
        </div>
      </div>

      <div class="max-w-6xl mx-auto relative z-10">
        <h1 class="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Trading Bootcamp
        </h1>
        <p class="text-lg text-gray-600 mb-8">
          Trading Bootcamp teaches the fundamentals of quantitative trading: markets, order books, auctions, risk and sizing, adverse selection, arbitrage, and how quant trading firms make money.
          <br />
          <br />
          The philosophy of this bootcamp is that the best way to learn to trade is by trading. We’ll use a fake economy and exchange, run through many sessions of trading games designed to teach progressively more complex concepts, and auction off prizes at the end using our internal currency.
        </p>
        <p class="text-lg text-gray-600 mb-8">
          The course is taught by <a href="https://rickiheicklen.com/index.html" class="text-blue-600 hover:text-blue-800">Ricki Heicklen</a>, a ex-quant of Jane Street.
        </p>
        <button class="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Register Now
          <ChevronRight class="ml-2" :size="24" />
        </button>
      </div>
    </div>

    <!-- Content Sections -->
    <div class="max-w-6xl mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold mb-8 text-center">Things You'll Learn</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <FeatureCard
          v-for="feature in features"
          :key="feature.title"
          v-bind="feature"
        />
      </div>
    </div>

    <!-- Venue Section -->
    <div class="bg-white">
      <div class="max-w-6xl mx-auto px-4 py-12">
        <h2 class="text-2xl font-bold mb-6">Venue</h2>
        <p class="text-lg text-gray-600 mb-4">
          The bootcamp will be held at <a href="https://www.lighthaven.space/" class="text-blue-600 hover:text-blue-800">Lighthaven</a>, a campus equipped with everything
          we'll need for learning and trading.
        </p>
      <img src="@/assets/lighthaven.jpg" alt="Lighthaven Venue" class="w-full h-auto rounded-lg shadow-md" />
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ChevronRight, BookOpen, TrendingUp, LineChart } from 'lucide-vue-next'
import Layout from './Layout.vue'
import FeatureCard from './FeatureCard.vue'

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

.market-symbol {
  font-size: 2rem;
  animation: float 8s ease-in-out infinite;
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}
</style>