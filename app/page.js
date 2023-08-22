import Wel from "./components/welcome.js";
import "app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link.js";

export default function App() {
  return (
    <div className="text-white text-9xl bg-white dark:bg-stone-900">
      <div style={{ fontFamily: "font" }}>
        <h1 className="text-center text-black dark:text-white text-6xl ">청강학원</h1>
      </div>
      <Wel />
      <Analytics />
      <div>
        <h1 className="title-font text-center text-xs font-medium">
          수학강의 보러가기
        </h1>
        <button className="flex mx-auto mt-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          <Link href="http://sjh0623.iptime.org:21733/login/">Click</Link>
        </button>
      </div>
      <div style={{ height: 0, paddingBottom: 100 }} />
    </div>
  );
}
