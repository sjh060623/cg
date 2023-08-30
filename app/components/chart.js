export default function Chart() {
  return (
    <>
      <div className="flex flex-col items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8">
        <h2 className="text-xl font-bold">이런점이 좋았어요</h2>
        <div className="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
          <div className="relative flex flex-col items-center flex-grow pb-5 group">
            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
              34명
            </span>
            <div className="relative flex justify-center w-full h-96 rounded-xl bg-indigo-400"></div>
            <h4 className="absolute text-white -translate-y-7 bottom-0 text-lg ">
              선생님이 열정적이에요
            </h4>
          </div>
          <div className="relative flex flex-col items-center flex-grow pb-5 group">
            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
              26명
            </span>
            <div className="relative flex justify-center w-full h-72 rounded-xl bg-indigo-400"></div>
            <h4 className="absolute text-white -translate-y-7 bottom-0 text-lg ">
              수업이 체계적이에요
            </h4>
          </div>
          <div className="relative flex flex-col items-center flex-grow pb-5 group">
            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
              23명
            </span>
            <div className="relative flex justify-center w-full h-64 rounded-xl bg-indigo-400"></div>
            <h4 className="absolute text-white -translate-y-7 bottom-0 text-lg ">
              학생과 소통을 잘해요
            </h4>
          </div>
          <div className="relative flex flex-col items-center flex-grow pb-5 group">
            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
              22명
            </span>
            <div className="relative flex justify-center w-full h-60 rounded-xl bg-indigo-400"></div>
            <h4 className="absolute text-white -translate-y-7 bottom-0 text-lg ">
              맞춤 지도를 잘해줘요
            </h4>
          </div>
          <div className="relative flex flex-col items-center flex-grow pb-5 group">
            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
              19명
            </span>
            <div className="relative flex justify-center w-full h-52 rounded-xl bg-indigo-400"></div>
            <h4 className="absolute text-white -translate-y-7 bottom-0 text-lg ">
              학생 관리가 철저해요
            </h4>
          </div>
          <div className="relative flex flex-col items-center flex-grow pb-5 group">
            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
              9명
            </span>
            <div className="relative flex justify-center w-full h-44 rounded-xl bg-indigo-400"></div>
            <h4 className="absolute text-white -translate-y-7 bottom-0 text-lg ">
              상담이 자세해요
            </h4>
          </div>
          <div className="relative flex flex-col items-center flex-grow pb-5 group">
            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
              9명
            </span>
            <div className="relative flex justify-center w-full h-44 rounded-xl bg-indigo-400"></div>
            <h4 className="absolute text-white -translate-y-7 bottom-0 text-lg ">
              시설이 깔끔해요
            </h4>
          </div>
          <div className="relative flex flex-col items-center flex-grow pb-5 group">
            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
              9명
            </span>
            <div className="relative flex justify-center w-full h-44 rounded-xl bg-indigo-400"></div>
            <h4 className="absolute text-white -translate-y-7 bottom-0 text-sm ">
              면학 분위기가 좋아요
            </h4>
          </div>
          <div className="relative flex flex-col items-center flex-grow pb-5 group">
            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
              4명
            </span>
            <div className="relative flex justify-center w-full h-36 rounded-xl bg-indigo-400"></div>
            <h4 className="absolute text-white -translate-y-7 bottom-0 text-xs ">
              가격이 합리적이에요
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
