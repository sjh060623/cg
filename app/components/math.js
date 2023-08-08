"use client"

import Lottie from "react-lottie-player";
import Data from "public/math.json"

export default function Math() {
    return (
        <Lottie 
            loop
            animationData={Data}
            play
            style={{ alignItems: "center", width: "50%", height: "50%"}}
        />
    )
}