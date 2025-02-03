<template>
    <Layout>
        <div class="max-w-[1420px] px-4 sm:px-8 lg:px-12 py-12 mx-auto">
            <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Sample Schedule</h1>
            <p class="text-lg text-gray-600 mb-8">
                Here's our current best guess at the schedule for the <a target="_blank" href="https://bit.ly/qtb-february-2025-reg" class="text-blue-600 hover:text-blue-800">February 12-17 SF bootcamp</a>. Everything, as always, subject to changes at the last minute. You can also open the schedule <a target="_blank" :href="links.scheduleEmbed" class="text-blue-600 hover:text-blue-800">here</a>.
            </p>
            <!-- Added embedded Google Sheet -->
            <div class="w-full h-[870px]">
                <iframe 
                    :src="links.scheduleEmbed"
                    class="w-full h-full border-0"
                ></iframe>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import Layout from './layout.vue'
import { links } from '../data/links.js'
</script>