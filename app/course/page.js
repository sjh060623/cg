"use client"

import Anim from "../components/anim";

export default function Course() {
  return (
    <div className="text-white text-9xl flex w-full h-full flex-col overflow-hidden">
      <div
        style={{
          
          width: "100%",
          height: "8%",
          backgroundColor: "white",
          position: "absolute",
        }}
      />

      <iframe
        width="100%"
        height="600"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        scrolling="no"
        src="http://sjh0623.iptime.org:15532"
      ></iframe>
      <div
        style={{
          width: 50,
          height: 0,
          paddingTop: 1200,
          overflow: "hidden",
          backgroundColor: "rgba(0,0,0,0)", //푸터 바 만들거니까 거기에 대충 길이 맞춰
          position: "absolute",
          right: 0,
        }}
      />
    </div>
  );
}

 