import Image from "next/image";

export default function Rule() {

  return (
    <div>
      <section class="text-gray-600 dark:bg-stone-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
              이용규칙
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-400">
              강의 재생 사이트에서는 파일 다운로드 및 공유를 금지합니다.
            </p>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-400">
              또한 계정 생성 시 아이디는 본인 이름 [한글&영어] 으로
              생성해주세요.
            </p>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-400">
              계정은 공유 사용 불가합니다.
            </p>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-400">
              위 규칙을 위반할 시 계정삭제 조치하도록 하겠습니다.
            </p>
          </div>
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Image style={{borderRadius: 20}} src={require("public/rl.png")} />
            <div style={{ width: 200 }} />
            <Image style={{borderRadius: 20}} src={require("public/rle.png")} />
          </div>
        </div>
      </section>
    </div>
  );
}
