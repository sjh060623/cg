import Image from "next/image";
import Compo from "./compo";
import Link from "next/link";

export default function Mathl() {
  return (
    <section window class=" p-3 sm:-5 translate-y-20 ">
    <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
      <h1 className=" text-3xl font-bold -translate-y-6">Course</h1>
      <h1 className=" text-gray-400 text-xl font-bold -translate-y-6">
      수학의 바이블 수(하)
      </h1>
      <div class="bg-white  relative shadow-2xl sm:rounded-lg overflow-hidden rounded-xl">
        <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
            <div class="flex items-center space-x-3 w-full md:w-auto">
               {/*
              <h1 className="text-white text-3xl">수학의 바이블 수(하)</h1>
              <Link className="flex text-white" href="http://sjh0623.iptime.org:14131/api/public/dl/s6CfwUq6/%EC%B2%AD%EA%B0%95/%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3%E1%86%AF%20(%E1%84%92%E1%85%A1).pdf" download="수학의 바이블 (하)">

                <h1>
                  {"　"}교제 다운로드{"　"}
                </h1>
                <Image
                  width={20}
                  height={20}
                  src={require("public/download.png")}
                />
              </Link>
              
  */}
            </div>
          </div>
        </div>
        <div class="overflow-x-auto">
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
            <thead class="text-xl uppercase text-center bg-white text-black">
              <tr>
                <th scope="col" class="px-4 py-3 ">
                  집합과 명제
                </th>
              </tr>
            </thead>
            <tbody>
              <Compo
                title="1강 - 집합(1)"
                time="50분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/HUwqFXJk/%EC%88%98(%ED%95%98)/1.%20%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%92%E1%85%A1%E1%86%B8%E1%84%80%E1%85%AA%20%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A6/1%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%91%ED%95%A9(1).mp4"
              />
              <Compo
                title="2강 - 집합(2)"
                time="42분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/RRt0VAk3/%EC%88%98(%ED%95%98)/1.%20%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%92%E1%85%A1%E1%86%B8%E1%84%80%E1%85%AA%20%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A6/2%E1%84%80%E1%85%A1%E1%86%BC%20%20-%20%EC%A7%91%ED%95%A9(2).mp4"
              />
              <Compo
                title="3강 - 집합(3)"
                time="42분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/3RMaSMLn/%EC%88%98(%ED%95%98)/1.%20%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%92%E1%85%A1%E1%86%B8%E1%84%80%E1%85%AA%20%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A6/3%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%91%ED%95%A9(3).mp4"
              />
              <Compo
                title="4강 - 집합(4)"
                time="47분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/32sS91lQ/%EC%88%98(%ED%95%98)/1.%20%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%92%E1%85%A1%E1%86%B8%E1%84%80%E1%85%AA%20%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A6/4%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%91%ED%95%A9(4).mp4"
              />
              <Compo
                title="5강 - 집합(5)"
                time="40분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/a6u75WOj/%EC%88%98(%ED%95%98)/1.%20%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%92%E1%85%A1%E1%86%B8%E1%84%80%E1%85%AA%20%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A6/5%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%91%ED%95%A9(5).mp4"
              />
              <Compo
                title="6강 - 집합(6)"
                time="33분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/g4htXWoi/%EC%88%98(%ED%95%98)/1.%20%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%92%E1%85%A1%E1%86%B8%E1%84%80%E1%85%AA%20%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A6/6%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%91%ED%95%A9(6).mp4"
              />
              <Compo
                title="7강 - 집합(7)"
                time="37분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/VEoVEzN4/%EC%88%98(%ED%95%98)/1.%20%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%92%E1%85%A1%E1%86%B8%E1%84%80%E1%85%AA%20%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A6/7%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A7%91%ED%95%A9(7).mp4"
              />
              <Compo
                title="8강 - 명제(1)"
                time="41분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/neeg-aHP/%EC%88%98(%ED%95%98)/1.%20%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%92%E1%85%A1%E1%86%B8%E1%84%80%E1%85%AA%20%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A6/8%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%AA%85%EC%A0%9C(1).mp4"
              />
              <Compo
                title="9강 - 명제(2)"
                time="42분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/T0mAAz4n/%EC%88%98(%ED%95%98)/1.%20%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%92%E1%85%A1%E1%86%B8%E1%84%80%E1%85%AA%20%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A6/9%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%AA%85%EC%A0%9C(2).mp4"
              />
              <Compo
                title="10강 - 명제(3)"
                time="44분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/e2lqxJGz/%EC%88%98(%ED%95%98)/1.%20%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%92%E1%85%A1%E1%86%B8%E1%84%80%E1%85%AA%20%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A6/10%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%AA%85%EC%A0%9C(3).mp4"
              />
              <Compo
                title="11강 - 명제(4)"
                time="45분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/yqeB4Rb8/%EC%88%98(%ED%95%98)/1.%20%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%92%E1%85%A1%E1%86%B8%E1%84%80%E1%85%AA%20%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A6/11%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%AA%85%EC%A0%9C(4).mp4"
              />
              <Compo
                title="12강 - 명제(5)"
                time="37분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/jfS3887q/%EC%88%98(%ED%95%98)/1.%20%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%92%E1%85%A1%E1%86%B8%E1%84%80%E1%85%AA%20%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A6/12%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%AA%85%EC%A0%9C(5).mp4"
              />
              <Compo
                title="13강 - 명제(6)/절대부등식(1)"
                time="48분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/8LMPJypV/%EC%88%98(%ED%95%98)/1.%20%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%92%E1%85%A1%E1%86%B8%E1%84%80%E1%85%AA%20%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A6/13%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%AA%85%EC%A0%9C(6)%20%7C%20%EC%A0%88%EB%8C%80%EB%B6%80%EB%93%B1%EC%8B%9D(1).mp4"
              />
              <Compo
                title="14강 - 절대부등식(2)"
                time="42분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/fz2yJ_Ky/%EC%88%98(%ED%95%98)/1.%20%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%92%E1%85%A1%E1%86%B8%E1%84%80%E1%85%AA%20%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A6/14%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A0%88%EB%8C%80%EB%B6%80%EB%93%B1%EC%8B%9D(2).mp4"
              />
              <Compo
                title="15강 - 절대부등식(3)"
                time="37분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/6pphhTAO/%EC%88%98(%ED%95%98)/1.%20%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%92%E1%85%A1%E1%86%B8%E1%84%80%E1%85%AA%20%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A6/15%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A0%88%EB%8C%80%EB%B6%80%EB%93%B1%EC%8B%9D(3).mp4"
              />
              <Compo
                title="16강 - 절대부등식(4)"
                time="58분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/qtxflOop/%EC%88%98(%ED%95%98)/1.%20%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%92%E1%85%A1%E1%86%B8%E1%84%80%E1%85%AA%20%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A6/16%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A0%88%EB%8C%80%EB%B6%80%EB%93%B1%EC%8B%9D(4).mp4"
              />
            </tbody>
          </table>
          {/** */}
          {/** */}
          <table class="w-full text-sm text-left text-gray-400">
          <thead class="text-xl uppercase text-center bg-white text-black">
              <tr>
                <th scope="col" class="px-4 py-3">
                  함수
                </th>
              </tr>
            </thead>
            <tbody>
              <Compo
                title="1강 - 함수(1)"
                time="49분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/Wbb1wFQ2/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/1%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98(1).mp4"
              />
              <Compo
                title="2강 - 함수(2)"
                time="40분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/2Q38zCTW/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/2%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98(2).mp4"
              />
              <Compo
                title="3강 - 함수(3)"
                time="47분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/VmFE53Xy/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/3%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98(3).mp4"
              />
              <Compo
                title="4강 - 함수(4)"
                time="43분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/ya92we3D/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/4%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98(4).mp4"
              />
              <Compo
                title="5강 - 함수(5)"
                time="47분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/0LKCdWk0/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/5%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98(5).mp4"
              />
              <Compo
                title="6강 - 함수(6)"
                time="38분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/klmeLfYf/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/6%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98(6).mp4"
              />
              <Compo
                title="7강 - 함수(7)"
                time="41분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/eRgFnsiT/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/7%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98(7).mp4"
              />
              <Compo
                title="8강 - 함수(8)"
                time="42분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/N6dUd5HN/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/8%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98(8).mp4"
              />
              <Compo
                title="9강 - 함수(9)"
                time="47분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/5qA6nTQl/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/9%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98(9).mp4"
              />
              <Compo
                title="10강 - 함수(10)"
                time="40분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/KKM_XNgB/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/10%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98(10).mp4"
              />
              <Compo
                title="11강 - 함수(11)"
                time="46분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/gqCxMGNH/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/11%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98(11).mp4"
              />
              <Compo
                title="12강 - 유리식과 유리함수(1)"
                time="42분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/iuKSVZZz/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/12%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9C%A0%EB%A6%AC%EC%8B%9D%EA%B3%BC%20%EC%9C%A0%EB%A6%AC%ED%95%A8%EC%88%98(1).mp4"
              />
              <Compo
                title="13강 - 유리식과 유리함수(2)"
                time="41분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/1ueGAju7/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/13%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9C%A0%EB%A6%AC%EC%8B%9D%EA%B3%BC%20%EC%9C%A0%EB%A6%AC%ED%95%A8%EC%88%98(2).mp4"
              />
              <Compo
                title="14강 - 유리식과 유리함수(3)"
                time="41분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/-DwOM51r/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/14%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9C%A0%EB%A6%AC%EC%8B%9D%EA%B3%BC%20%EC%9C%A0%EB%A6%AC%ED%95%A8%EC%88%98(3).mp4"
              />
              <Compo
                title="15강 - 유리식과 유리함수(4)"
                time="45분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/WbpQDB1M/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/15%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9C%A0%EB%A6%AC%EC%8B%9D%EA%B3%BC%20%EC%9C%A0%EB%A6%AC%ED%95%A8%EC%88%98(4).mp4"
              />
              <Compo
                title="16강 - 유리식과 유리함수(5)"
                time="37분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/79qX6OJY/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/16%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9C%A0%EB%A6%AC%EC%8B%9D%EA%B3%BC%20%EC%9C%A0%EB%A6%AC%ED%95%A8%EC%88%98(5).mp4"
              />
              <Compo
                title="17강 - 유리식과 유리함수(6)"
                time="48분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/2a1wMQ5_/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/17%EA%B0%95%20-%20%EC%9C%A0%EB%A6%AC%EC%8B%9D%EA%B3%BC%20%EC%9C%A0%EB%A6%AC%ED%95%A8%EC%88%98(6).mp4"
              />
              <Compo
                title="18강 - 유리식과 유리함수(7)"
                time="42분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/piNl5kFx/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/18%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9C%A0%EB%A6%AC%EC%8B%9D%EA%B3%BC%20%EC%9C%A0%EB%A6%AC%ED%95%A8%EC%88%98(7).mp4"
              />
              <Compo
                title="19강 - 유리식과 유리함수(8)/무리식과 무리함수(1)"
                time="47분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/HadmjXEW/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/19%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%9C%A0%EB%A6%AC%EC%8B%9D%EA%B3%BC%20%EC%9C%A0%EB%A6%AC%ED%95%A8%EC%88%98(8)%20%7C%20%EB%AC%B4%EB%A6%AC%EC%8B%9D%EA%B3%BC%20%EB%AC%B4%EB%A6%AC%ED%95%A8%EC%88%98(1).mp4"
              />
              <Compo
                title="20강 - 무리식과 무리함수(2)"
                time="40분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/EE3uiOAN/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/20%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%AC%B4%EB%A6%AC%EC%8B%9D%EA%B3%BC%20%EB%AC%B4%EB%A6%AC%ED%95%A8%EC%88%98(2).mp4"
              />
              <Compo
                title="21강 - 무리식과 무리함수(3)"
                time="48분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/XWtl8w6Y/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/21%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%AC%B4%EB%A6%AC%EC%8B%9D%EA%B3%BC%20%EB%AC%B4%EB%A6%AC%ED%95%A8%EC%88%98(3).mp4"
              />
              <Compo
                title="22강 - 무리식과 무리함수(4)"
                time="49분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/6DNCYJFE/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/22%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%AC%B4%EB%A6%AC%EC%8B%9D%EA%B3%BC%20%EB%AC%B4%EB%A6%AC%ED%95%A8%EC%88%98(4).mp4"
              />
              <Compo
                title="23강 - 무리식과 무리함수(5)"
                time="49분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/nrFF8oYH/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/23%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%AC%B4%EB%A6%AC%EC%8B%9D%EA%B3%BC%20%EB%AC%B4%EB%A6%AC%ED%95%A8%EC%88%98(5).mp4"
              />
              <Compo
                title="24강 - 무리식과 무리함수(6)"
                time="36분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/4xyM3BGt/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/24%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%AC%B4%EB%A6%AC%EC%8B%9D%EA%B3%BC%20%EB%AC%B4%EB%A6%AC%ED%95%A8%EC%88%98(6).mp4"
              />
              <Compo
                title="25강 - 무리식과 무리함수(7)"
                time="52분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/-5sk4oJt/%EC%88%98(%ED%95%98)/2.%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE/25%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%AC%B4%EB%A6%AC%EC%8B%9D%EA%B3%BC%20%EB%AC%B4%EB%A6%AC%ED%95%A8%EC%88%98(7).mp4"
              />
            </tbody>
          </table>
          {/** */}
          {/** */}
          <table class="w-full text-sm text-left text-gray-400">
          <thead class="text-xl uppercase text-center bg-white text-black">
              <tr>
                <th scope="col" class="px-4 py-3">
                  경우의 수
                </th>
              </tr>
            </thead>
            <tbody>
              <Compo
                title="1강 - 경우의 수(1)"
                time="41분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/-nYYgMgq/%EC%88%98(%ED%95%98)/3.%20%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%AE%E1%84%8B%E1%85%B4%20%E1%84%89%E1%85%AE/1%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EA%B2%BD%EC%9A%B0%EC%9D%98%20%EC%88%98(1).mp4"
              />
              <Compo
                title="2강 - 경우의 수(2)"
                time="52분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/PHTbunWa/%EC%88%98(%ED%95%98)/3.%20%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%AE%E1%84%8B%E1%85%B4%20%E1%84%89%E1%85%AE/2%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EA%B2%BD%EC%9A%B0%EC%9D%98%20%EC%88%98(2).mp4"
              />
              <Compo
                title="3강 - 경우의 수(3)"
                time="50분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/9z329CvF/%EC%88%98(%ED%95%98)/3.%20%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%AE%E1%84%8B%E1%85%B4%20%E1%84%89%E1%85%AE/3%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EA%B2%BD%EC%9A%B0%EC%9D%98%20%EC%88%98(3).mp4"
              />
              <Compo
                title="4강 - 경우의 수(4)"
                time="48분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/5S3ivz1J/%EC%88%98(%ED%95%98)/3.%20%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%AE%E1%84%8B%E1%85%B4%20%E1%84%89%E1%85%AE/4%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EA%B2%BD%EC%9A%B0%EC%9D%98%20%EC%88%98(4).mp4"
              />
              <Compo
                title="5강 - 경우의 수(5)"
                time="44분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/SCPaQKIw/%EC%88%98(%ED%95%98)/3.%20%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%AE%E1%84%8B%E1%85%B4%20%E1%84%89%E1%85%AE/5%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EA%B2%BD%EC%9A%B0%EC%9D%98%20%EC%88%98(5).mp4"
              />
              <Compo
                title="6강 - 순열(1)"
                time="55분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/w9cbdjP3/%EC%88%98(%ED%95%98)/3.%20%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%AE%E1%84%8B%E1%85%B4%20%E1%84%89%E1%85%AE/6%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%88%9C%EC%97%B4(1).mp4"
              />
              <Compo
                title="7강 - 순열(2)"
                time="51분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/ZkqsfEy-/%EC%88%98(%ED%95%98)/3.%20%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%AE%E1%84%8B%E1%85%B4%20%E1%84%89%E1%85%AE/7%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%88%9C%EC%97%B4(2).mp4"
              />
              <Compo
                title="8강 - 순열(3)"
                time="45분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/1l-_Rmjy/%EC%88%98(%ED%95%98)/3.%20%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%AE%E1%84%8B%E1%85%B4%20%E1%84%89%E1%85%AE/8%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%88%9C%EC%97%B4(3).mp4"
              />
              <Compo
                title="9강 - 순열(4)"
                time="44분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/7Q2-TOCb/%EC%88%98(%ED%95%98)/3.%20%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%AE%E1%84%8B%E1%85%B4%20%E1%84%89%E1%85%AE/9%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%88%9C%EC%97%B4(4).mp4"
              />
              <Compo
                title="10강 - 순열(5)"
                time="43분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/uMWxpFii/%EC%88%98(%ED%95%98)/3.%20%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%AE%E1%84%8B%E1%85%B4%20%E1%84%89%E1%85%AE/10%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%88%9C%EC%97%B4(5).mp4"
              />
              <Compo
                title="11강 - 조합(1)"
                time="49분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/Ju4heEDW/%EC%88%98(%ED%95%98)/3.%20%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%AE%E1%84%8B%E1%85%B4%20%E1%84%89%E1%85%AE/11%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A1%B0%ED%95%A9(1).mp4"
              />
              <Compo
                title="12강 - 조합(2)"
                time="54분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/RACvLb1c/%EC%88%98(%ED%95%98)/3.%20%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%AE%E1%84%8B%E1%85%B4%20%E1%84%89%E1%85%AE/12%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A1%B0%ED%95%A9(2).mp4"
              />
              <Compo
                title="13강 - 조합(3)"
                time="34분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/I5dJrXnu/%EC%88%98(%ED%95%98)/3.%20%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%AE%E1%84%8B%E1%85%B4%20%E1%84%89%E1%85%AE/13%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A1%B0%ED%95%A9(3).mp4"
              />
              <Compo
                title="14강 - 조합(4)"
                time="48분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/wlOHVfvL/%EC%88%98(%ED%95%98)/3.%20%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%AE%E1%84%8B%E1%85%B4%20%E1%84%89%E1%85%AE/14%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A1%B0%ED%95%A9(4).mp4"
              />
              <Compo
                title="15강 - 조합(5)"
                time="51분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/x0IIIgec/%EC%88%98(%ED%95%98)/3.%20%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%AE%E1%84%8B%E1%85%B4%20%E1%84%89%E1%85%AE/15%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A1%B0%ED%95%A9(5).mp4"
              />
              <Compo
                title="16강 - 조합(6)"
                time="41분"
                link="http://sjh0623.iptime.org:14131/api/public/dl/kva6Y_Ts/%EC%88%98(%ED%95%98)/3.%20%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%AE%E1%84%8B%E1%85%B4%20%E1%84%89%E1%85%AE/16%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A1%B0%ED%95%A9(6).mp4"
              />
            </tbody>
          </table>
          {/** */}
        </div>
      </div>
    </div>
  </section>
  );
}





///////////////////////////////

   