import "app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import Link from "next/link";
import MainpageCard from "./components/mainpageCard";

import Script from 'next/script';

<Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3852248362281327"
crossorigin="anonymous" />

export default function Home() {
  const date = new Date().getFullYear();
  const date2 = new Date().getDate();
  const date3 = new Date().getMonth();

  return (
    <div className=" h-full w-full grid place-items-center  bg-slate-100">
      {/*header*/}
      <header>
        <h1 className="-translate-x-24 text-3xl font-bold translate-y-6 xl:translate-x-1">
          투데이
        </h1>
        <h1 className="  -translate-x-24 text-xl font-bold translate-y-6 xl:translate-x-0.5">
          {date3 + 1}월 {date2}일
        </h1>
      </header>
      <div className=" xl:flex 2xl:flex-row xl:space-x-2">
      <Analytics />
       <MainpageCard rkddmltn="76 강" rkddmldlfma="수학의 바이블 수(상)" mathLink="/mathh" mathImage={require("public/bibles.jpeg")}/>
       <MainpageCard rkddmltn="57 강" rkddmldlfma="수학의 바이블 수(하)" mathLink="/mathl" mathImage={require("public/bibleh.jpeg")}/>
       <MainpageCard rkddmltn="42 강" rkddmldlfma="수학의 바이블 수1 - 미완" mathLink="/mathone" mathImage={require("public/bible1.jpeg")}/>
       <MainpageCard rkddmltn="47 강" rkddmldlfma="수학의 바이블 수2" mathLink="/mathtwo" mathImage={require("public/bible2.jpeg")}/>
       </div>
      <div className="h-screen w-full" />
    </div>
  );
}
