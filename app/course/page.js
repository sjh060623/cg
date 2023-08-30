import Link from "next/link";
import Card from "../components/card";

export default function Course() {
  return (
    <>
      <section className="bg-[#272d39] sticky ">
        <div className="py-8  lg:py-16 ">
          <div className=" text-center">
            <h1 className=" text-7xl tracking-tight font-extrabold lg:text-6xl text-white text-primary-600 dark:text-primary-500 translate-y-40 mb-44">
              All Course
            </h1>
            <p className="mb-4 text-xl tracking-tight font-bold md:text-2xl text-white">
              모든강의 보기
            </p>
            <p className="mb-4 text-lg font-light text-gray-400">
              수학의 바이블 강의를 볼 수 있습니다.{" "}
            </p>
          </div>
        </div>
      </section>
      <div className="flex flex-wrap mt-20 justify-center">
        <Link href="/mathh">
          <Card
            img={require("public/bibles.jpeg")}
            num="76강"
            title="수학의 바이블 수(상)"
          />
        </Link>
        <Link href="/mathl">
          <Card
            img={require("public/bibleh.jpeg")}
            num="57강"
            title="수학의 바이블 수(하)"
          />
        </Link>
        <Link href="/mathone">
          <Card
            img={require("public/bible1.jpeg")}
            num="42강"
            title="수학의 바이블 수1 - 미완"
          />
        </Link>
        <Link href="/mathtwo">
          <Card
            img={require("public/bible2.jpeg")}
            num="47강"
            title="수학의 바이블 수2"
          />
        </Link>
        <Link href="/mathht">
          <Card
            img={require("public/bibleht.jpeg")}
            num="0강"
            title="수학의 바이블 확률과 통계 - 예정"
          />
        </Link>
        <Link href="/mathgi">
          <Card
            img={require("public/biblegi.jpeg")}
            num="0강"
            title="수학의 바이블 기하 - 예정"
          />
        </Link>
        <Link href="/mathmi">
          <Card
            img={require("public/biblemi.jpeg")}
            num="0강"
            title="수학의 바이블 미적분 - 예정"
          />
        </Link>
      </div>
    </>
  );
}
//git commit -m "v.0"
//git push -u origin main
