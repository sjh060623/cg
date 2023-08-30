"use client";

import Lottie from "react-lottie-player";
import Data from "public/stu.json";

export default function Study() {
  return (
    <>
      <h1 className="text-white text-7xl">청강학원</h1>

      <Lottie
        loop
        animationData={Data}
        play
        style={{ alignItems: "center", width: "30%", height: "30%" }}
      />
      <h1 className="text-white text-xl mb-40">
        『 영어 : 입시+어학원 』 『 수학 : 과외+학원 』 의 장점을 하나로!
      </h1>
    </>
  );
}
