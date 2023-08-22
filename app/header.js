import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="text-white body-font bg-white dark:bg-stone-900">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white dark:text-white mb-4 md:mb-0">
          <Image
            src={require("../public/logoa.png")}
            width="95"
            height="86"
            className="opacity-100 dark:opacity-0 "
            style={{ position: "absolute" }}
          />
          <Image
            src={require("../public/logob.png")}
            width="95"
            height="86"
            className="opacity-0 dark:opacity-100"
          />
          <Link className="ml-4 text-xl text-black dark:text-white" href="/">
            청강학원
          </Link>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            className="mr-5 text-gray-500 hover:text-indigo-500 dark:hover:text-white"
            href="/"
          >
            Home
          </Link>
          <Link
            className="mr-5 text-gray-500 hover:text-indigo-500 dark:hover:text-white"
            href="/course"
          >
            Course
          </Link>
          <Link
            className="mr-5 text-gray-500 hover:text-indigo-500 dark:hover:text-white"
            href="/about"
          >
            About
          </Link>
          <Link
            className="mr-5 text-gray-500 hover:text-indigo-500 dark:hover:text-white"
            href="/chat"
          >
            Chat
          </Link>
          <Link
            className="mr-5 text-gray-500 hover:text-indigo-500 dark:hover:text-white"
            href="/update"
          >
            Update
          </Link>
        </nav>
      </div>
    </header>
  );
}
