<template>
    <Layout>
        <div class="max-w-6xl mx-auto px-4 py-12">
            <h1 class="text-4xl font-bold text-gray-900 mb-8">FAQ</h1>
            <ul class="space-y-6">
                <li class="bg-white p-6 rounded-lg shadow-md">
                    <strong class="text-lg font-semibold">What level of coding knowledge/language do you need to know in order to benefit from the course?</strong>
                    <p class="text-gray-700">Pretty minimal, the first two days involve zero coding and the third and fourth have more but we intentionally put you on pairs/teams that are balanced so that even if someone doesn’t have programming skills they can still contribute and learn. I think people with some programming knowledge will benefit a little bit more from the course but not very much.</p>
                </li>
                <li class="bg-white p-6 rounded-lg shadow-md">
                    <strong class="text-lg font-semibold">What level of math background is required?</strong>
                    <p class="text-gray-700">There’s basically no content prerequisites, in that the bootcamp won’t use calculus or linear algebra or anything. That being said, it's pretty helpful to be a person comfortable thinking in mathematical frameworks - in particular the concept of expected value/probability. A lot of trading is about fast heuristic reasoning instead of having precise or sophisticated mathematical models, but those heuristics are still shaped by mathematics intuitions. If you’re “not a math person” it’s likely going to be a bad fit, but if you’re “into math but haven’t taken high level classes yet” that’s 100% fine and common</p>
                </li>
                <li class="bg-white p-6 rounded-lg shadow-md">
                    <strong class="text-lg font-semibold">Is housing provided?</strong>
                    <p class="text-gray-700">It’s not included in the cost, but you can <a target="_blank" href="https://www.havenbookings.space/events/eternal-september" class="text-blue-600 hover:text-blue-800 underline">book rooms at Lighthaven here</a> if desired. People might also try to coordinate housing via the Discord server.</p>
                </li>
                <li class="bg-white p-6 rounded-lg shadow-md">
                    <strong class="text-lg font-semibold">What are the demographics of attendees?</strong>
                    <p class="text-gray-700">A range: most are between jobs, a handful with experience in software engineering, some with experience in finance but not in trading specifically, some currently in college or recent graduates.</p>
                </li>
                <li class="bg-white p-6 rounded-lg shadow-md">
                    <strong class="text-lg font-semibold">Is there any certification?</strong>
                    <p class="text-gray-700">Nope. For what it’s worth, I think most firms view those things as bullshit anyway, and the ones that do care about it aren’t that good. The quality firms basically only care about raw intelligence and ability to solve problems on the fly.</p>
                </li>
            </ul>
        </div>
    </Layout>
</template>
  
<script setup>
import Layout from './Layout.vue'
</script>