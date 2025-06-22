import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="collabinator.io" />

    <section class="text-gray-400 body-font bg-gray-900 h-screen">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="text-xs text-yellow-400 tracking-widest font-medium title-font mb-1">ABOUT OUR APPS AND SERVICES</h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">The Collabinator Project</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Open source for collaboration and innovation</p>
        </div>
        <div class="flex flex-wrap">
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
            <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">clivrt App</h2>
            <p class="leading-relaxed text-base mb-4">👥 💻 a CLI app that provides real-time video chat. (clivrt = CLI Video Real Time)</p>
            <a class="text-yellow-400 inline-flex items-center" href="https://github.com/collabinator/clivrt">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
            <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">Signaling Service</h2>
            <p class="leading-relaxed text-base mb-4">☁️ Backend service that provides WebRTC signaling and text chat for connecting clients together</p>
            <a class="text-yellow-400 inline-flex items-center" href="https://github.com/collabinator/clivrt-signaling-svc">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
            <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">mdbub</h2>
            <p class="leading-relaxed text-base mb-4">A mindmap tool for your terminal..</p>
            <a class="text-yellow-400 inline-flex items-center" href="https://github.com/collabinator/mdbubbles">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

  </Layout>
)

export default IndexPage
