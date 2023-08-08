import Image from "next/image";

export default function Footer() {

const date = new Date().getFullYear();

  return (
    <div>
      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">청강학원</span>
          </a>
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © {date} Chunggang —
            <a
              href="https://twitter.com/knyttneve"
              class="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              By Son
            </a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ">
          <a href="https://www.youtube.com/@user-gz8xb3ou5r" target="_blank" style={{marginLeft: 20}}>
          <Image src={require("../public/you.png")} width="35" height="35"/>
          </a>
          <a href="https://m.place.naver.com/place/36297202/review/ugc?type=list" style={{marginLeft: 20}}target="_blank">
          <Image src={require("../public/info.png")} width="32" height="32"/>
          </a>
          <a href="https://m.blog.naver.com/PostList.naver?blogId=chung_gang" style={{marginLeft: 20}}target="_blank">
          <Image src={require("../public/naver.png")} width="32" height="32"/>
          </a>


          
          </span>
        
        </div>
      </footer>
    </div>
  );
}
