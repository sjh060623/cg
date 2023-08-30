import Link from "next/link";

export default function Last() {
  return (
    <section className="text-gray-300 body-font">
      <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
        <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-100">
            청강학원
          </h1>
          <p className="leading-relaxed text-base">
            대전 서구 관저로14번길 40 (비젼9빌딩) 7층
          </p>
          <Link
            href="https://m.place.naver.com/place/36297202/location?type=list&subtab=location&selected_place_id=36297202"
            className="text-indigo-500 inline-flex items-center mt-4"
          >
            지도보기
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
        <div className="flex flex-col md:w-1/2 md:pl-12">
          <h2 className="title-font font-semibold text-gray-100 tracking-wider text-sm mb-3">
            TELL.
          </h2>
          <nav className=" list-none -mb-1">
            <li className="">
              <p className="text-gray-200">042-542-3131</p>
            </li>
          </nav>
        </div>
      </div>
    </section>
  );
}
