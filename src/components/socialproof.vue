<template>
  <Layout>
    <div class="max-w-6xl mx-auto px-4 py-12">
      <h2 class="text-4xl font-bold text-gray-900 mb-8 text-center">Highlights from Various Blogs</h2> 
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Blog Post Section 1 -->
        <div class="mb-8 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 class="text-2xl font-semibold mb-6">A Jane Street Alum Teaches Trading | <a href="https://moontowermeta.com/a-jane-street-alum-teaches-trading/" class="text-blue-600 hover:text-blue-800 hover:underline" target="_blank" rel="noopener noreferrer">moontowermeta.com</a></h3>
          <div class="space-y-6">
            <blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-700 bg-blue-50 p-4 rounded-r-lg">
              "I find that the best way to learn trading is by doing it. On day one, the first class that I have people participating in my trading bootcamp go through is a class where you walk in the door and immediately you start trading."
            </blockquote>
            <blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-700 bg-blue-50 p-4 rounded-r-lg">
              "keeping things as simple as possible early on is really valuable... getting people to the point where they understand the first order things actually takes a lot more time than you might expect it to."
            </blockquote>
            <blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-700 bg-blue-50 p-4 rounded-r-lg">
              "Right now, the state of the world is if you want to learn how to be a good trader, basically your only option is to go to a good trading firm. It is very hard to find good materials for learning how to trade, learning how to have the kind of intuitions and heuristics about a market that a trader ought to develop, in any context outside of a firm."
            </blockquote>
            <a href="https://moontowermeta.com/a-jane-street-alum-teaches-trading/" 
               class="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
               target="_blank"
               rel="noopener noreferrer">
              Read the full article <span class="ml-1">→</span>
            </a>
          </div>
        </div>

        <!-- Blog Post Section 2 -->
        <div class="mb-8 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 class="text-2xl font-semibold mb-6">My Experience at the Manifest Trading Bootcamp | <a href="https://arizerner.com/posts/manifesting-a-trading-career/" class="text-blue-600 hover:text-blue-800 hover:underline" target="_blank" rel="noopener noreferrer">arizerner.com</a></h3>
          <div class="space-y-6">
            <blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-700 bg-blue-50 p-4 rounded-r-lg">
              "The bootcamp was a two-day intensive program designed to teach the fundamentals of quantitative trading and provide a glimpse into the experience of being a professional trader. Using a play currency, we went through various hands-on exercises to solidify concepts taught in energetically-delivered lectures."
            </blockquote>
            <blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-700 bg-blue-50 p-4 rounded-r-lg">
              "To get comfortable with the mechanics of order books, we played a game called Tighten Or Trade. We established an order book, written by hand on a whiteboard, for a contract that would settle to the total number of siblings of people in the room."
            </blockquote>
            <blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-700 bg-blue-50 p-4 rounded-r-lg">
              "To summarize, here are the key lessons I learned:
              - Beware Adverse Selection: Have a story for why your trade makes sense in a competitive environment.
              - Stay Vigilant: Inattentive trading is dangerous, not trading is always safe.
              - Focus Quickly: Learn to make snap judgements of where further effort will be most valuable.
              - Spot Arbitrage: Inconsistencies between prices mean free money if you find them.
              - Start Simple: A working strategy beats a perfect plan that's not ready."
            </blockquote>
            <a href="https://ari-goldman.com/blog/manifest-trading-bootcamp" 
               class="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
               target="_blank"
               rel="noopener noreferrer">
              Read the full article <span class="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>

      <h2 class="text-4xl font-bold text-gray-900 mb-8 text-center mt-16">Selected Student Feedback</h2>
      
      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <blockquote 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300" 
        >
          <p class="text-gray-700 text-base leading-relaxed">{{ testimonial.quote }}</p>
          <footer v-if="testimonial.author" class="mt-4 text-gray-500 font-medium">
            — {{ testimonial.author }}
          </footer>
        </blockquote>
      </div>
    </div>
  </Layout> 
</template>


<script setup>
import Layout from './layout.vue'
const testimonials = [
    { quote: "Amazing content, loved how fast paced it was. I learned an insane amount… I would pay to take any class you are excited to teach.", author: "Case" },
    { quote: "Fantastically dense and effective communication, very well planned examples, lots of good jokes. I like every time you let us fall into a trap, [REDACTED] was everyone's favorite class I'm sure." },
    { quote: "Listening to Ricki talk makes me feel like my brain is kicking into higher gear, she has an incredible effect on the audience.", author: "Chris" },
    { quote: "You can definitely make a religion out of this.", author: "Andrey" },
    { quote: "The way Ricki teaches the trading bootcamp is extremely engaging and information dense on material you won't find outside of big trading firms. It is a phenomenal experience that you will not find elsewhere.", author: "Niko" },
    { quote: "Ruthlessly efficient learning, with feedback in real-time. Prepare for information density that'll rewire your brain.", author: "Niko again" },
    { quote: "I want more Ricki. Blog posts? Podcasts? Videos? I'll take anything.", author: "Even more Niko, the guy gives great quotes" },
    { quote: "If you can figure out a way to make money from this then go for it." },
    { quote: "Ricki is a fun, effective instructor. Talks at a million miles an hour, takes all questions and new constraints in stride and does something reasonable in response… the Electronic Trading Competition was glorious, relentless chaos.", author: "William" },
    { quote: "Ricki has a lot of good qualities and none of them are subtle.", author: "Avital" },
    { quote: "When you're learning all the ways you can be abused in markets, you want to have a teacher as fun, engaging, and smart as Ricki.", author: "Rai" },
    { quote: "Felt too chaotic." }
];
</script>