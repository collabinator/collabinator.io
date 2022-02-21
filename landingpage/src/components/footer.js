import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => (
    <footer class="text-gray-400 bg-gray-900 body-font">

        {/* MAYBE FOR FUTURE USE
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap md:text-left text-center order-first">
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav class="list-none mb-10">
                        <li>
                            <a class="text-gray-400 hover:text-white">First Link</a>
                        </li>
                        <li>
                            <a class="text-gray-400 hover:text-white">Second Link</a>
                        </li>
                        <li>
                            <a class="text-gray-400 hover:text-white">Third Link</a>
                        </li>
                        <li>
                            <a class="text-gray-400 hover:text-white">Fourth Link</a>
                        </li>
                    </nav>
                </div>
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav class="list-none mb-10">
                        <li>
                            <a class="text-gray-400 hover:text-white">First Link</a>
                        </li>
                        <li>
                            <a class="text-gray-400 hover:text-white">Second Link</a>
                        </li>
                        <li>
                            <a class="text-gray-400 hover:text-white">Third Link</a>
                        </li>
                        <li>
                            <a class="text-gray-400 hover:text-white">Fourth Link</a>
                        </li>
                    </nav>
                </div>
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav class="list-none mb-10">
                        <li>
                            <a class="text-gray-400 hover:text-white">First Link</a>
                        </li>
                        <li>
                            <a class="text-gray-400 hover:text-white">Second Link</a>
                        </li>
                        <li>
                            <a class="text-gray-400 hover:text-white">Third Link</a>
                        </li>
                        <li>
                            <a class="text-gray-400 hover:text-white">Fourth Link</a>
                        </li>
                    </nav>
                </div>
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">SUBSCRIBE</h2>
                    <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                        <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                            <label for="footer-field" class="leading-7 text-sm text-gray-400">Stay up to date with our news</label>
                            <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Subscribe</button>
                    </div>
                    <p class="text-gray-500 text-sm mt-2 md:text-left text-center">Your email address is safe with us
                    </p>
                </div>
            </div>
        </div> */}

        <div class="bg-gray-800 bg-opacity-50">
            <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <StaticImage
                        src="../images/collabinator-icon.png"
                        width={200}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="Collabinator icon"
                        class="hover:animate-spin w-10 h-10 text-white p-2 bg-yellow-500"
                        viewBox="0 0 24 24" />
                    <span class="ml-3 text-xl">The Collabinator Project</span>
                </a>
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a href="https://github.com/collabinator" class="github" target="_blank" rel="noopener noreferrer">
                    <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded-full mt-4 md:mt-0">
                        <p class="px-2">Open GitHub</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"></path>
                        </svg>
                    </button>
                </a>
                </span>
            </div>
        </div>
    </footer>
)

Footer.propTypes = {}
Footer.defaultProps = {}
export default Footer


