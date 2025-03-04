<!-- Home.vue -->
<template>
  <Layout>
    <div class="hero-section">
      <div class="hero-container">
        <div class="hero-grid">
          <div class="hero-content">
            <h1 class="hero-title">Quantitative Trading Bootcamp</h1>
            <p class="hero-text">
              Quantitative Trading Bootcamp teaches the fundamentals of
              quantitative trading: markets, order books, auctions, risk and
              sizing, adverse selection, arbitrage, and how quant trading firms
              make money.
              <br />
              <br />
              The philosophy of this bootcamp is that the best way to learn to
              trade is by trading. We'll use a fake economy and exchange, run
              through many sessions of trading games designed to teach
              progressively more complex concepts, and auction off prizes at the
              end using our internal currency.
            </p>
            <p class="hero-text">
              The course is taught by
              <a
                target="_blank"
                href="https://rickiheicklen.com/index.html"
                class="text-blue-600 hover:text-blue-800"
                >Ricki Heicklen</a
              >, a former quantitative trader at Jane Street, along with a team
              of 3-5 others.
            </p>
            <div class="flex flex-col items-start gap-4">
              <a target="_blank" :href="interestUrl" class="register-button">
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

    <div class="content-section">
      <h2 class="text-3xl font-bold mb-8 text-center">Things You'll Learn</h2>
      <div class="features-grid">
        <FeatureCard
          v-for="feature in features"
          :key="feature.title"
          v-bind="feature"
        />
      </div>
    </div>

    <div class="max-w-7xl py-12 px-4 sm:px-8 lg:px-12 mx-auto" id="faq">
      <h1 class="text-4xl font-bold text-gray-900 mb-8">FAQ</h1>
        <ul class="space-y-6">
            <li class="bg-white p-6 rounded-lg shadow-md">
                <strong class="text-lg font-semibold">Who should take Quantitative Trading Bootcamp?</strong>
                <p class="text-gray-700">People who are considering quant finance. You can use a few days to get an answer to questions like 'what <em>is</em> quant trading anyway,' 'do I like it,' and 'am I good at it' before applying to internships and devoting a summer to it. You will experience live trading and learn a little about the industry.
                <br />
                <br />
                People who want to learn to think like a trader, regardless of career motivation. You might be coming in with an idea of what it means to think like a mathematician, or a founder, or an engineer. Traders have skills like thinking in specific probabilities, prioritizing and triaging a firehose of noisy information, and evaluating opportunities. 
                <br />
                <br />
                People who are curious about it. Trading Camp is a fun, fast-paced introduction to a world that most people never see. If you want to know about why the market looks the way it does, what your quant friends do all day, or how to get really good at Figgie, we've got something for you.
                </p>
            </li>
            <li class="bg-white p-6 rounded-lg shadow-md">
                <strong class="text-lg font-semibold">What level of coding knowledge/language do you need to know in order to benefit from the course?</strong>
                <p class="text-gray-700">Having some programming experience is pretty important for getting value out of the second half of the bootcamp. The first two days involve zero coding and the third and fourth have more, but we intentionally put you on pairs/teams that are balanced so that even if someone doesn’t have as much programming skills they can still contribute and learn. Feel free to reach out (hello at trading dot camp) if you're unsure.</p>
            </li>
            <li class="bg-white p-6 rounded-lg shadow-md">
                <strong class="text-lg font-semibold">What level of math background is required?</strong>
                <p class="text-gray-700">There’s basically no content prerequisites, in that the bootcamp won’t rely on calculus or linear algebra. That being said, it's pretty helpful to be comfortable thinking in mathematical frameworks - in particular the concept of expected value/probability. A lot of trading is about fast heuristic reasoning instead of having precise or sophisticated mathematical models, but those heuristics are still shaped by mathematics intuitions. If you’re “not a math person” it’s likely going to be a bad fit, but if you’re “into math but haven’t taken high level classes yet” that’s 100% fine and common.</p>
            </li>
            <li class="bg-white p-6 rounded-lg shadow-md">
                <strong class="text-lg font-semibold">Is housing provided?</strong>
                <p class="text-gray-700">It’s not included in the cost, but we'll give you good options on-site at the venue or nearby (depending on the workshop you attend). People might also try to coordinate housing via the <a target="_blank" href="https://bit.ly/qtb-discord" class="text-blue-600 hover:text-blue-800">Discord server</a>.</p>
            </li>
            <li class="bg-white p-6 rounded-lg shadow-md">
                <strong class="text-lg font-semibold">What are the demographics of attendees?</strong>
                <p class="text-gray-700">A range: most are between jobs, a handful with experience in software engineering, some with experience in finance but not in trading specifically, some currently in college or recent graduates.</p>
            </li>
            <li class="bg-white p-6 rounded-lg shadow-md">
                <strong class="text-lg font-semibold">Can I volunteer in exchange for a discounted ticket?</strong>
                <p class="text-gray-700">On rare occasions, we do occasionally price discriminate, but usually not for free. Examples of past volunteering: helping out day-of, recruiting some number of full-paying participants, providing a few hours of marketing consulting, or connecting us to a company that decides to <a target="_blank" href="https://bit.ly/qtb-corporate-partnerships" class="text-blue-600 hover:text-blue-800">sponsor us/have us run a private bootcamp</a>.</p>
            </li>
            <li class="bg-white p-6 rounded-lg shadow-md">
                <strong class="text-lg font-semibold">Will this help me get a job?</strong>
                <p class="text-gray-700">Probably not. Our median value-add is giving participants a fluent intuition for market dynamics, not getting them a job. You'll probably meet some traders/finance folks, and we might have a few sponsors looking to hire, but we definitely do not optimize the camp around getting you hired. There's no certification, we're not prepping you for interviews, etc. The bootcamp could, however, be helpful for giving you a taste of what being a quant trader is like, so that you can make a more informed decision about whether it's a career you want to go into.</p>
            </li>
            <li class="bg-white p-6 rounded-lg shadow-md">
                <strong class="text-lg font-semibold">Is there any certification?</strong>
                <p class="text-gray-700">Nope. For what it’s worth, I think most firms view those things as bullshit anyway, and the ones that do care about it aren’t that good. The quality firms basically only care about raw intelligence and ability to solve problems on the fly.</p>
            </li>
            <li class="bg-white p-6 rounded-lg shadow-md">
                <strong class="text-lg font-semibold">Do you offer refunds?</strong>
                <p class="text-gray-700">You can get refunded for half the amount you paid for the bootcamp per day that you didn’t attend. So, if you paid $1500 for a 5-day bootcamp and decided a week beforehand not to attend, we’ll reimburse you for $750. If you decide one day into it that you don’t want to attend the rest of it, we’ll reimburse you for $600.</p>
            </li>
            <li class="bg-white p-6 rounded-lg shadow-md">
                <strong class="text-lg font-semibold">Do you run private bootcamps? Can my company/firm/org sponsor one of your public bootcamps?</strong>
                <p class="text-gray-700">Yes! Check out more information on corporate partnerships <a target="_blank" class="text-blue-600 hover:text-blue-800" href="https://bit.ly/qtb-corporate-partnerships">here</a>.</p>
            </li>
        </ul>
    </div>

    <div class="bg-gray-50 py-16">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Random Testimonial</h2>
        <RandomTestimonial />
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ChevronRight, BookOpen, TrendingUp, LineChart } from "lucide-vue-next";
import Layout from "./layout.vue";
import FeatureCard from "./FeatureCard.vue";
import rickiRossImage from "../assets/ricki_ross_bootcamp.jpg";
import RandomTestimonial from "./RandomTestimonial.vue";
import { links } from "../data/links.js";

const registerUrl = links.register;
const registerFeb = links.registerFeb;
const interestUrl = links.interest;

const features = [
  {
    title: "Market Fundamentals",
    description:
      "Learn the basics of market mechanics, order books, and price discovery through hands-on trading simulations.",
    icon: BookOpen,
  },
  {
    title: "Risk Management",
    description:
      "Master position sizing, risk assessment, and portfolio management strategies.",
    icon: TrendingUp,
  },
  {
    title: "Quantitative Analysis",
    description:
      "Understand how to use data and statistics to make informed trading decisions.",
    icon: LineChart,
  },
];
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-40px);
  }
}

.hero-section {
  @apply max-w-7xl py-12 px-4 sm:px-8 lg:px-12 mx-auto bg-gradient-to-br from-white to-blue-50 relative overflow-hidden;
}

.hero-container {
  @apply relative z-10;
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
