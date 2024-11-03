<template>
    <Layout>
        <div class="max-w-6xl mx-auto px-4 py-12">
            <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Schedule</h1>
            <p class="text-lg text-gray-600 mb-8">
                The next bootcamp runs over an extended weekend, Wednesday evening November 6th to Sunday night November 10th. You can view the schedule <a target="_blank" href="https://docs.google.com/spreadsheets/d/1VenNKSoZSAvVWJMee17tZ-vuCBqIUwHVPfDjI46iSxU/edit?gid=343028241#gid=343028241" class="text-blue-600 hover:text-blue-800">here</a>.
            </p>
            <!-- Added embedded Google Sheet -->
            <div class="w-full aspect-[16/9]">
                <iframe 
                    src="https://docs.google.com/spreadsheets/d/1VenNKSoZSAvVWJMee17tZ-vuCBqIUwHVPfDjI46iSxU/edit?gid=343028241#gid=343028241"
                    class="w-full h-full border-0"
                ></iframe>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import Layout from './Layout.vue'
</script>