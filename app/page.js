import "app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link.js";
import Image from "next/image.js";
import Lottie from "react-lottie-player";
import Study from "./components/study";
import Review from "./components/review";
import Chart from "./components/chart";
import Last from "./components/last";

export default function App() {
  return (
    <section class="bg-[#1a1e2b] translate-y-44">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white">404</h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-200 md:text-4xl">Something's missing.</p>
            <p class="mb-4 text-lg font-light text-gray-500 ">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            <Link href="/" class="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4">Back to Homepage</Link>
        </div>   
    </div>
</section>
  )
  }