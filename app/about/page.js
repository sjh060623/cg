import Image from "next/image";
export default function About() {
  return (
    <>
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p class="leading-relaxed text-9xl">청강학원</p>
      <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
      <h2 class="text-gray-500">학생들을 생각합니다</h2>
      <p class="text-gray-500">"스스로" 를 중시합니다</p>
    </div>
  </div>
</section>

      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3215.6506655253115!2d127.32411957605073!3d36.29652527239504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35654d307916514b%3A0x9bfecbd25c5555c9!2z67mE7KCEOeu5jOuUqQ!5e0!3m2!1sen!2sus!4v1691416029680!5m2!1sen!2sus"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              청강학원
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600"></p>
            <div className="relative mb-4">
              <Image
                style={{ borderRadius: 10 }}
                src={require("public/build.png")}
              />
            </div>
            <p className="text-xs text-gray-500 mt-3"></p>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/3">
              <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  청강학원
                </h2>
                <h1 class="title-font sm:text-2xl text-xl font-bold text-gray-900 mb-3" style={{fontFamily:"cursive"}}>
                  스스로의 道
                </h1>
                <p class="leading-relaxed mb-3">
                  길을 모으면 물으면 될 것이고, 길을 잃으면 해매면 그만이다. 이
                  세상에 완벽한 지도는 없다. 있다 하더라도 남의 것이다. 중요한
                  것은 나만의 목적지가 어디인지 늘 잊지 않는 마음이다.
                </p>
                <p class="leading-relaxed mb-3">
                  당신만의 목적지를 정하셨나요? 느리게 가더라도, 가끔은 쉬었다가
                  가더라도, 실수를 하더라도 선택한 그 길을 차근차근, 천천히,
                  꾸준히, 끝까지 포기하지 않고 걸어간다면 자신만의 목적지에
                  도착할 수 있습니다.
                </p>

                <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"></div>
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  청강학원
                </h2>
                <h1 class="title-font sm:text-2xl text-xl font-bold text-gray-900 mb-3" style={{fontFamily:"cursive"}}>
                  스스로의 力
                </h1>
                <p class="leading-relaxed mb-3">
                  안전지대에서 나오는 것을, 고정관념에서 벗어나는 것을
                  두려워하지 마라. 진부하고 흔한 아이디어를 뒤집어 보는 것을
                  두려워하지 마라. 당신을 제한하는 것은 당신 자신의
                  상상력뿐이라는 사실을 기억하라.
                </p>
                <p class="leading-relaxed mb-3">
                  자신의 능력을 스스로 한정짓는 것만큼 어리석은 일은 없습니다.
                  흙에 씨앗을 심고 물을 주면 나중에 작은 씨앗 하나가 큰 나무가
                  됩니다. 자신이 어떤 나무가 될지 아무도 모릅니다. 스스로를
                  가꾸어야 할 씨앗임을 잊지 말고 본인의 잠재력을 믿으세요.
                </p>
                <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"></div>
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  청강학원
                </h2>
                <h1 class="title-font sm:text-2xl text-xl font-bold text-gray-900 mb-3" style={{fontFamily:"cursive"}}>
                  스스로의 覺
                </h1>
                <p class="leading-relaxed mb-3">
                  병아리가 알 속에서 나오려면 먼저 스스로 알을 깨기 위해 부리로
                  알을 쪼아야 한다. 그러면 알을 품던 어미닭이 소리를 알아듣고
                  동시에 밖에서 알을 쪼아 안팎에서 서로 쪼아낸다. 여기서
                  병아리는 깨달음을 향해 앞으로 나아가는 수행자이고, 어미닭은
                  수행자에게 깨우침의 방법을 일러주는 스승이다.
                </p>
                <p class="leading-relaxed mb-3">
                  새끼와 어미가 동시에 알을 쪼지만, 그렇다고 어미가 새끼를
                  나오게 하는 것은 아니다. 어미는 다만 알을 깨고 나오는 데 작은
                  도움만 줄 뿐, 열국 알을 깨고 나오는 것은 새끼 자신이다
                </p>
                <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
