import Link from "next/link";
import Compo from "./compo";
import Image from "next/image";

export default function Mathtwo() {
  return (
    <section window class=" p-3 sm:-5 translate-y-20 ">
      <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
        <h1 className=" text-3xl font-bold -translate-y-6">Course</h1>
        <h1 className=" text-gray-400 text-xl font-bold -translate-y-6">
          수학의 바이블 수2
        </h1>
        <div class="bg-white  relative shadow-2xl sm:rounded-lg overflow-hidden rounded-xl">
          <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <div class="flex items-center space-x-3 w-full md:w-auto">
                {/*
              <h1 className="text-white text-3xl">수학의 바이블 수2</h1>
                           <Link className="flex text-white" href="http://sjh0623.iptime.org:14131/api/public/dl/gOrk0dXc/%EC%B2%AD%EA%B0%95/%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3%E1%86%AF%20%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%20II.pdf" download="수학의 바이블 수II">
                    <h1>{"　"}교제 다운로드{"　"}</h1>
                    <Image width={20} height={20} src={require("public/download.png")} />
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
                  <th scope="col" class="px-4 py-3">
                    함수의 극한
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="1강 - 함수의 극한(1)"
                  time="55분"
                  link="https://youtu.be/qUr5P7nGS68"
                />
                <Compo
                  title="2강 - 함수의 극한(2)"
                  time="52분"
                  link="https://youtu.be/xYAfrNYYlx0"
                />
                <Compo
                  title="3강 - 함수의 극한(3)"
                  time="43분"
                  link="https://youtu.be/jqWdlLLQgUc"
                />
                <Compo
                  title="4강 - 함수의 극한(4)"
                  time="49분"
                  link="https://youtu.be/F1SSCbf6Z_A"
                />
                <Compo
                  title="5강 - 함수의 극한 기본다지기"
                  time="52분"
                  link="https://youtu.be/NxURBBd8Jfw"
                />
                <Compo
                  title="6강 - 함수의 극한 실력다지기"
                  time="60분"
                  link="https://youtu.be/KAO1oAemjHk"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    함수의 연속
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="7강 - 함수의 연속(1)"
                  time="60분"
                  link="https://youtu.be/OqlFZbS6_jU"
                />
                <Compo
                  title="8강 - 함수의 연속(2)"
                  time="47분"
                  link="https://youtu.be/z21uLLV_xTo"
                />
                <Compo
                  title="9강 - 함수의 연속(3)"
                  time="50분"
                  link="https://youtu.be/6BCY2xld5nY"
                />
                <Compo
                  title="10강 - 합수의 연속 기본다지기"
                  time="55분"
                  link="https://youtu.be/DyCFAHsX8vg"
                />
                <Compo
                  title="11강 - 함수의 연속 실력다지기"
                  time="57분"
                  link="https://youtu.be/SlTvvJBmolE"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    미분계수와 도함수
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="12강 - 미분계수와 도함수(1)"
                  time="54분"
                  link="https://youtu.be/WYJ_WmBf4F0"
                />
                <Compo
                  title="13강 - 미분계수와 도함수(2)"
                  time="51분"
                  link="https://youtu.be/LVicqZvoa28"
                />
                <Compo
                  title="14강 - 미분계수와 도함수(3)"
                  time="50분"
                  link="https://youtu.be/aDO8HIcAZio"
                />
                <Compo
                  title="15강 - 미분계수와 도함수(4)"
                  time="49분"
                  link="https://youtu.be/XSTPfTj5So0"
                />
                <Compo
                  title="16강 - 미분계수와 도함수(5)"
                  time="36분"
                  link="https://youtu.be/ZeoCf3T5K94"
                />
                <Compo
                  title="17강 - 미분계수와 도함수 기본다지기"
                  time="29분"
                  link="https://youtu.be/7QIu0GKz2ck"
                />
                <Compo
                  title="18강 - 미분계수와 도함수 실력다지기"
                  time="57분"
                  link="https://youtu.be/oNs-zEGt49c"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    접선의 방정식
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="19강 - 접선의 방정식(1)"
                  time="49분"
                  link="https://youtu.be/vSINv1JBQcs"
                />
                <Compo
                  title="20강 - 접선의 방정식(2)"
                  time="53분"
                  link="https://youtu.be/4er_ULqHnCw"
                />
                <Compo
                  title="21강 - 접선의 방정식(3)"
                  time="36분"
                  link="https://youtu.be/mfSK93jawoU"
                />
                <Compo
                  title="22강 - 접선의 방정식 기본+실력 다지기"
                  time="90분"
                  link="https://youtu.be/IRZio4SaW3I"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    함수의 극대와 극소
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="23강 - 함수의 극대와 극소 (1)"
                  time="54분"
                  link="https://youtu.be/0mv4kRmdmzc"
                />
                <Compo
                  title="24강 - 함수의 극대와 극소 (2)"
                  time="51분"
                  link="https://youtu.be/Pu9Tp7jPz3s"
                />
                <Compo
                  title="25강 - 함수의 극대와 극소 (3)"
                  time="49분"
                  link="https://youtu.be/k45pM9gXv9I"
                />
                <Compo
                  title="26강 - 함수의 극대와 극소 기본 다지기"
                  time="41분"
                  link="https://youtu.be/WemBqLhbrAY"
                />
                <Compo
                  title="27강 - 함수의 극대와 극소 실력 다지기"
                  time="45분"
                  link="https://youtu.be/sKyFsPzWH1A"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    도함수 활용
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="28강 - 도함수 활용 (1)"
                  time="55분"
                  link="https://youtu.be/EaJWL0NBhrA"
                />
                <Compo
                  title="29강 - 도함수 활용 (2)"
                  time="58분"
                  link="https://youtu.be/EBoRjpWyKIM"
                />
                <Compo
                  title="30강 - 도함수 활용 (3)"
                  time="50분"
                  link="https://youtu.be/NfTp0C1GJT8"
                />
                <Compo
                  title="31강 - 도함수 활용 기본다지기"
                  time="45분"
                  link="https://youtu.be/haHn7rdDzHM"
                />
                <Compo
                  title="32강 - 도함수 활용 실력다지기"
                  time="49분"
                  link="https://youtu.be/utIJd1ECeco"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    부정적분 / 정적분
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="33강 - 부정적분(1)"
                  time="57분"
                  link="https://youtu.be/fkawqlEFFEM"
                />
                <Compo
                  title="34강 - 부정적분 기본다지기"
                  time="37분"
                  link="https://youtu.be/ZSS-a9BCd_k"
                />
                <Compo
                  title="35강 - 부정적분 실력다지기"
                  time="42분"
                  link="https://youtu.be/XhMOGWW1CiY"
                />
                <Compo
                  title="36강 - 정적분(1)"
                  time="58분"
                  link="https://youtu.be/OFrAsLLZmJQ"
                />
                <Compo
                  title="37강 - 정적분(2)"
                  time="51분"
                  link="https://youtu.be/TdJUAu1u1Xk"
                />
                <Compo
                  title="38강 - 정적분(3)"
                  time="43분"
                  link="https://youtu.be/zHqhge-MF-s"
                />
                <Compo
                  title="39강 - 정적분 실력다지기"
                  time="61분"
                  link="https://youtu.be/Q1ZUQVbfV7s"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    정적분과 함수 / 정적분 활용
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="40강 - 정적분과 함수(1)"
                  time="46분"
                  link="https://youtu.be/kr_AxjVnd80"
                />
                <Compo
                  title="41강 - 정적분과 함수(2)"
                  time="58분"
                  link="https://youtu.be/N2FR8DpAo1I"
                />
                <Compo
                  title="42강 - 정적분과 함수 기본다지기"
                  time="46분"
                  link="https://youtu.be/8fpz54MIr3s"
                />
                <Compo
                  title="43강 - 정적분과 함수 실력다지기"
                  time="43분"
                  link="https://youtu.be/NNqlTJxPf7A"
                />
                <Compo
                  title="44강 - 정적분 활용(1)"
                  time="54분"
                  link="https://youtu.be/tJ1SWqSqv0M"
                />
                <Compo
                  title="45강 - 정적분 활용(2)"
                  time="56분"
                  link="https://youtu.be/-YWGT7d3snY"
                />
                <Compo
                  title="46강 - 정적분 활용(3)"
                  time="56분"
                  link="https://youtu.be/J-NB9LP_nXI"
                />
                <Compo
                  title="47강 - 정적분 활용 실력다지기"
                  time="83분"
                  link="https://youtu.be/jS2lkT8PocE"
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
