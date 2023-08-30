import Image from "next/image";

export default function Review() {
  return (
    <>
      <h1 className="text-white text-7xl mb-10">Review</h1>

      <div
        href="#"
        class="flex flex-col items-center  border  rounded-lg shadow md:flex-row md:max-w-xl  border-gray-700 bg-gray-800 mb-10"
      >
        <Image
          width="100%"
          height="100%"
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={require("public/im1.jpeg")}
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
            재미있어하고 성적이 잘 올라요.
          </h5>
          <p class="mb-3 font-normal text-gray-400">
            금요일 성취도 평가 후, 부족한점을 보강으로 관리를 잘 해주세요.
          </p>
        </div>
      </div>
      <div
        href="#"
        class="flex flex-col items-center  border  rounded-lg shadow md:flex-row md:max-w-xl  border-gray-700 bg-gray-800 mb-10"
      >
        <Image
          width="100%"
          height="100%"
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={require("public/im2.jpeg")}
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">
            시설이 좋고 수업이 재미있다.
          </h5>
          <p class="mb-3 font-normal text-gray-400">
            학원 시설이 좋고, 교실도 쾌적하고 넓다.
          </p>
        </div>
      </div>
      <div
        href="#"
        class="flex flex-col items-center  border  rounded-lg shadow md:flex-row md:max-w-xl  border-gray-700 bg-gray-800 mb-10"
      >
        <Image
          width="100%"
          height="100%"
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={require("public/build.png")}
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
            보강을 잘 하고, 문제를 많이푼다.
          </h5>
          <p class="mb-3 font-normal text-gray-400">
            보강은 빡세게... 테스트도 꼼꼼히 합니다.
          </p>
        </div>
      </div>
    </>
  );
}
