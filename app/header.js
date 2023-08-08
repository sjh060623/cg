import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
<header className="text-white body-font bg-white">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <Image src={require("../public/logoa.png")} width="95" height="86"/>
      <span className="ml-4 text-xl text-black">청강학원</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 text-gray-500 hover:text-indigo-500" href="/">Home</Link>
      <Link className="mr-5 text-gray-500 hover:text-indigo-500" href="/course">Course</Link>
      <Link className="mr-5 text-gray-500 hover:text-indigo-500" href="/about">About</Link>

    </nav>
    <button className="inline-flex items-center hover:bg-indigo-500 bg-gray-500 text-white -gray-200 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">모드
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
  );
}
