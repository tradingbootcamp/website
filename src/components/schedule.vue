<template>
    <Layout>
        <div class="max-w-6xl mx-auto px-4 py-12">
            <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Sample Schedule</h1>
            <p class="text-lg text-gray-600 mb-8">
                The most recent bootcamp ran over Veteran's Day. You can view a rough representation of what occurred below, or by clicking <a target="_blank" href="https://docs.google.com/spreadsheets/d/1VenNKSoZSAvVWJMee17tZ-vuCBqIUwHVPfDjI46iSxU/edit?gid=343028241#gid=343028241" class="text-blue-600 hover:text-blue-800">here</a>.
            </p>
            <!-- Added embedded Google Sheet -->
            <div class="w-full h-[820px]">
                <iframe 
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSUpeAUhWp4uMFUeHYo9LHVIYxHdAGj9BYVhITVC5KxlUG2Hi90dwnBaS9MH2aufIXf0rP6stYjbZtr/pubhtml?gid=343028241&widget=true&single=true&headers=false&chrome=false"
                    class="w-full h-full border-0"
                ></iframe>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import Layout from './layout.vue'
</script>