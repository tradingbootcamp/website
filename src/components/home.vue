<!-- Home.vue -->
<template>
  <Layout>
    <!-- Hero Section -->
    <div class="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Trading Bootcamp
        </h1>
        <p class="text-lg text-gray-600 mb-8">
          Trading Bootcamp teaches the fundamentals of quantitative trading: markets, order books, auctions, risk and sizing, adverse selection, arbitrage, and how quant trading firms make money.
          <br />
          <br />
          The philosophy of this bootcamp is that the best way to learn to trade is by trading. We’ll use a fake economy and exchange, run through many sessions of trading games designed to teach progressively more complex concepts, and auction off prizes at the end using our internal currency.
        </p>
        <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center">
          Get Started
          <ChevronRight class="ml-2" :size="20" />
        </button>
      </div>
    </div>

    <!-- Content Sections -->
    <div class="max-w-6xl mx-auto px-4 py-12">
      <h2 class="text-2xl font-bold mb-6">Things You'll Learn</h2>
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
          The Trading Bootcamp will be held at the Downtown Conference Center, located at 123 Main St, Cityville. 
          Join us in a state-of-the-art facility designed for interactive learning and networking.
        </p>
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