import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <div>
      <footer className="body-font bg-[#1a1e2b]">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-white"
          >
            <Image
              src={require("../public/logob.png")}
              width="35"
              height="35"
            />

            <span className="ml-3 mr-3 text-xl">청강학원</span>
          </Link>
          <p className="text-sm text-white text-whitesm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © {date} Chunggang —
            <Link
              href="https://twitter.com/knyttneve"
              className=" ml-1 text-white"
              rel="noopener noreferrer"
              target="_blank"
            >
              By Son
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ">
            <Link
              href="https://www.youtube.com/@user-gz8xb3ou5r"
              target="_blank"
              style={{ marginLeft: 20 }}
            >
              <Image
                src={require("../public/you.png")}
                width="30"
                height="30"
              />
            </Link>
            <Link
              href="https://m.place.naver.com/place/36297202/review/ugc?type=list"
              style={{ marginLeft: 20 }}
              target="_blank"
            >
              <Image
                src={require("../public/info.png")}
                width="30"
                height="30"
              />
            </Link>
            <Link
              href="https://m.blog.naver.com/PostList.naver?blogId=chung_gang"
              style={{ marginLeft: 20 }}
              target="_blank"
            >
              <Image
                src={require("../public/naver.png")}
                width="32"
                height="32"
              />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
