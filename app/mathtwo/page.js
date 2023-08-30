import Link from "next/link";
import Compo from "./compo";
import Image from "next/image";

export default function Mathtwo() {
  return (
    <section class="translate-y-40 p-3 sm:p-5 mb-44">
      <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div class="bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <div class="flex items-center space-x-3 w-full md:w-auto">
                <h1 className="text-white text-3xl">수학의 바이블 수2</h1>
                <Link className="flex text-white" href="http://sjh0623.iptime.org:14131/api/public/dl/gOrk0dXc/%EC%B2%AD%EA%B0%95/%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3%E1%86%AF%20%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%20II.pdf" download="수학의 바이블 수II">
                <h1>{"　"}교제 다운로드{"　"}</h1>
                <Image width={20} height={20} src={require("public/download.png")} />
              </Link>
              </div>
            </div>
          </div>
          <div class="overflow-x-auto">
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xs uppercase  bg-gray-700 text-gray-400">
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
                  link="http://sjh0623.iptime.org:14131/api/public/dl/_YXE3llf/%E1%84%89%E1%85%AE2/1%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98%EC%9D%98%20%EA%B7%B9%ED%95%9C(1).mp4"
                />
                <Compo
                  title="2강 - 함수의 극한(2)"
                  time="52분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/I-45Exs9/%E1%84%89%E1%85%AE2/2%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98%EC%9D%98%20%EA%B7%B9%ED%95%9C(2).mp4"
                />
                <Compo
                  title="3강 - 함수의 극한(3)"
                  time="43분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/Lz7JFkZf/%E1%84%89%E1%85%AE2/3%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98%EC%9D%98%20%EA%B7%B9%ED%95%9C(3).mp4"
                />
                <Compo
                  title="4강 - 함수의 극한(4)"
                  time="49분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/ydb_JJVN/%E1%84%89%E1%85%AE2/4%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98%EC%9D%98%20%EA%B7%B9%ED%95%9C(4).mp4"
                />
                <Compo
                  title="5강 - 함수의 극한 기본다지기"
                  time="52분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/7MMVABeQ/%E1%84%89%E1%85%AE2/5%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98%EC%9D%98%20%EA%B7%B9%ED%95%9C%20%EA%B8%B0%EB%B3%B8%EB%8B%A4%EC%A7%80%EA%B8%B0.mp4"
                />
                <Compo
                  title="6강 - 함수의 극한 실력다지기"
                  time="60분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/EzDTFx3h/%E1%84%89%E1%85%AE2/6%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98%EC%9D%98%20%EA%B7%B9%ED%95%9C%20%EC%8B%A4%EB%A0%A5%EB%8B%A4%EC%A7%80%EA%B8%B0.mp4"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xs uppercase  bg-gray-700 text-gray-400">
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
                  link="http://sjh0623.iptime.org:14131/api/public/dl/t3u_FeFD/%E1%84%89%E1%85%AE2/7%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98%EC%9D%98%20%EC%97%B0%EC%86%8D(1).mp4"
                />
                <Compo
                  title="8강 - 함수의 연속(2)"
                  time="47분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/DJh6G2XX/%E1%84%89%E1%85%AE2/8%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98%EC%9D%98%20%EC%97%B0%EC%86%8D(2).mp4"
                />
                <Compo
                  title="9강 - 함수의 연속(3)"
                  time="50분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/MdTlFSGi/%E1%84%89%E1%85%AE2/9%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98%EC%9D%98%20%EC%97%B0%EC%86%8D(3).mp4"
                />
                <Compo
                  title="10강 - 합수의 연속 기본다지기"
                  time="55분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/r8jn7wX6/%E1%84%89%E1%85%AE2/10%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98%EC%9D%98%20%EC%97%B0%EC%86%8D%20%EA%B8%B0%EB%B3%B8%EB%8B%A4%EC%A7%80%EA%B8%B0.mp4"
                />
                <Compo
                  title="11강 - 함수의 연속 실력다지기"
                  time="57분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/dPTONr0k/%E1%84%89%E1%85%AE2/11%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98%EC%9D%98%20%EC%97%B0%EC%86%8D%20%EC%8B%A4%EB%A0%A5%EB%8B%A4%EC%A7%80%EA%B8%B0.mp4"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xs uppercase  bg-gray-700 text-gray-400">
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
                  link="http://sjh0623.iptime.org:14131/api/public/dl/z-GNXkNg/%E1%84%89%E1%85%AE2/12%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%AF%B8%EB%B6%84%EA%B3%84%EC%88%98%EC%99%80%20%EB%8F%84%ED%95%A8%EC%88%98(1).mp4"
                />
                <Compo
                  title="13강 - 미분계수와 도함수(2)"
                  time="51분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/WEL-6ZkB/%E1%84%89%E1%85%AE2/13%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%AF%B8%EB%B6%84%EA%B3%84%EC%88%98%EC%99%80%20%EB%8F%84%ED%95%A8%EC%88%98(2).mp4"
                />
                <Compo
                  title="14강 - 미분계수와 도함수(3)"
                  time="50분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/Jyc7b50g/%E1%84%89%E1%85%AE2/14%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%AF%B8%EB%B6%84%EA%B3%84%EC%88%98%EC%99%80%20%EB%8F%84%ED%95%A8%EC%88%98(3).mp4"
                />
                <Compo
                  title="15강 - 미분계수와 도함수(4)"
                  time="49분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/mvJo4JmF/%E1%84%89%E1%85%AE2/15%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%AF%B8%EB%B6%84%EA%B3%84%EC%88%98%EC%99%80%20%EB%8F%84%ED%95%A8%EC%88%98(4).mp4"
                />
                <Compo
                  title="16강 - 미분계수와 도함수(5)"
                  time="36분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/tRogeaTJ/%E1%84%89%E1%85%AE2/16%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%AF%B8%EB%B6%84%EA%B3%84%EC%88%98%EC%99%80%20%EB%8F%84%ED%95%A8%EC%88%98(5).mp4"
                />
                <Compo
                  title="17강 - 미분계수와 도함수 기본다지기"
                  time="29분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/iYBwAM5O/%E1%84%89%E1%85%AE2/17%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%AF%B8%EB%B6%84%EA%B3%84%EC%88%98%EC%99%80%20%EB%8F%84%ED%95%A8%EC%88%98%20%EA%B8%B0%EB%B3%B8%EB%8B%A4%EC%A7%80%EA%B8%B0.mp4"
                />
                <Compo
                  title="18강 - 미분계수와 도함수 실력다지기"
                  time="57분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/ImyCYbLJ/%E1%84%89%E1%85%AE2/18%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%AF%B8%EB%B6%84%EA%B3%84%EC%88%98%EC%99%80%20%EB%8F%84%ED%95%A8%EC%88%98%20%EC%8B%A4%EB%A0%A5%EB%8B%A4%EC%A7%80%EA%B8%B0.mp4"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xs uppercase  bg-gray-700 text-gray-400">
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
                  link="http://sjh0623.iptime.org:14131/api/public/dl/_DQRlF6Q/%E1%84%89%E1%85%AE2/19%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A0%91%EC%84%A0%EC%9D%98%20%EB%B0%A9%EC%A0%95%EC%8B%9D(1).mp4"
                />
                <Compo
                  title="20강 - 접선의 방정식(2)"
                  time="53분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/fUFEFwZB/%E1%84%89%E1%85%AE2/20%E1%84%80%E1%85%A1%E1%86%BC%20%20-%20%EC%A0%91%EC%84%A0%EC%9D%98%20%EB%B0%A9%EC%A0%95%EC%8B%9D(2).mp4"
                />
                <Compo
                  title="21강 - 접선의 방정식(3)"
                  time="36분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/uPlgt8Yr/%E1%84%89%E1%85%AE2/21%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A0%91%EC%84%A0%EC%9D%98%20%EB%B0%A9%EC%A0%95%EC%8B%9D(3).mp4"
                />
                <Compo
                  title="22강 - 접선의 방정식 기본+실력 다지기"
                  time="90분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/wv9f62K-/%E1%84%89%E1%85%AE2/22%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A0%91%EC%84%A0%EC%9D%98%20%EB%B0%A9%EC%A0%95%EC%8B%9D%20%EA%B8%B0%EB%B3%B8%2B%EC%8B%A4%EB%A0%A5%EB%8B%A4%EC%A7%80%EA%B8%B0.mp4"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xs uppercase  bg-gray-700 text-gray-400">
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
                  link="http://sjh0623.iptime.org:14131/api/public/dl/a292sPWn/%E1%84%89%E1%85%AE2/23%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98%EC%9D%98%20%EA%B7%B9%EB%8C%80%EC%99%80%20%EA%B7%B9%EC%86%8C(1).mp4"
                />
                <Compo
                  title="24강 - 함수의 극대와 극소 (2)"
                  time="51분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/e8U7Lbdu/%E1%84%89%E1%85%AE2/24%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98%EC%9D%98%20%EA%B7%B9%EB%8C%80%EC%99%80%20%EA%B7%B9%EC%86%8C(2).mp4"
                />
                <Compo
                  title="25강 - 함수의 극대와 극소 (3)"
                  time="49분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/wUQrqIY7/%E1%84%89%E1%85%AE2/25%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98%EC%9D%98%20%EA%B7%B9%EB%8C%80%EC%99%80%20%EA%B7%B9%EC%86%8C(3).mp4"
                />
                <Compo
                  title="26강 - 함수의 극대와 극소 기본 다지기"
                  time="41분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/_jlZr_Ne/%E1%84%89%E1%85%AE2/26%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98%EC%9D%98%20%EA%B7%B9%EB%8C%80%EC%99%80%20%EA%B7%B9%EC%86%8C%20%EA%B8%B0%EB%B3%B8%EB%8B%A4%EC%A7%80%EA%B8%B0.mp4"
                />
                <Compo
                  title="27강 - 함수의 극대와 극소 실력 다지기"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/XRktZlk_/%E1%84%89%E1%85%AE2/27%E1%84%80%E1%85%A1%E1%86%BC%20-%20%ED%95%A8%EC%88%98%EC%9D%98%20%EA%B7%B9%EB%8C%80%EC%99%80%20%EA%B7%B9%EC%86%8C%20%EC%8B%A4%EB%A0%A5%EB%8B%A4%EC%A7%80%EA%B8%B0.mp4"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xs uppercase  bg-gray-700 text-gray-400">
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
                  link="http://sjh0623.iptime.org:14131/api/public/dl/jYr3SKWi/%E1%84%89%E1%85%AE2/28%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%8F%84%ED%95%A8%EC%88%98%20%ED%99%9C%EC%9A%A9(1).mp4"
                />
                <Compo
                  title="29강 - 도함수 활용 (2)"
                  time="58분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/qU6N0nq3/%E1%84%89%E1%85%AE2/29%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%8F%84%ED%95%A8%EC%88%98%20%ED%99%9C%EC%9A%A9(2).mp4"
                />
                <Compo
                  title="30강 - 도함수 활용 (3)"
                  time="50분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/GVsFJpiH/%E1%84%89%E1%85%AE2/30%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%8F%84%ED%95%A8%EC%88%98%20%ED%99%9C%EC%9A%A9(3).mp4"
                />
                <Compo
                  title="31강 - 도함수 활용 기본다지기"
                  time="45분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/agCCNJ-M/%E1%84%89%E1%85%AE2/31%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%8F%84%ED%95%A8%EC%88%98%20%ED%99%9C%EC%9A%A9%20%EA%B8%B0%EB%B3%B8%EB%8B%A4%EC%A7%80%EA%B8%B0.mp4"
                />
                <Compo
                  title="32강 - 도함수 활용 실력다지기"
                  time="49분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/DX_BYf8Z/%E1%84%89%E1%85%AE2/32%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%8F%84%ED%95%A8%EC%88%98%20%ED%99%9C%EC%9A%A9%20%EC%8B%A4%EB%A0%A5%EB%8B%A4%EC%A7%80%EA%B8%B0.mp4"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xs uppercase  bg-gray-700 text-gray-400">
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
                  link="http://sjh0623.iptime.org:14131/api/public/dl/A0wxRym7/%E1%84%89%E1%85%AE2/33%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%B6%80%EC%A0%95%EC%A0%81%EB%B6%84(1).mp4"
                />
                <Compo
                  title="34강 - 부정적분 기본다지기"
                  time="37분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/dJynrtJm/%E1%84%89%E1%85%AE2/34%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%B6%80%EC%A0%95%EC%A0%81%EB%B6%84%20%EA%B8%B0%EB%B3%B8%EB%8B%A4%EC%A7%80%EA%B8%B0.mp4"
                />
                <Compo
                  title="35강 - 부정적분 실력다지기"
                  time="42분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/e9ngMFjR/%E1%84%89%E1%85%AE2/35%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EB%B6%80%EC%A0%95%EC%A0%81%EB%B6%84%20%EC%8B%A4%EB%A0%A5%EB%8B%A4%EC%A7%80%EA%B8%B0.mp4"
                />
                <Compo
                  title="36강 - 정적분(1)"
                  time="58분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/djKi042M/%E1%84%89%E1%85%AE2/36%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A0%95%EC%A0%81%EB%B6%84(1).mp4"
                />
                <Compo
                  title="37강 - 정적분(2)"
                  time="51분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/JVuHMQQm/%E1%84%89%E1%85%AE2/37%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A0%95%EC%A0%81%EB%B6%84(2).mp4"
                />
                <Compo
                  title="38강 - 정적분(3)"
                  time="43분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/ypxjtZbS/%E1%84%89%E1%85%AE2/38%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A0%95%EC%A0%81%EB%B6%84(3).mp4"
                />
                <Compo
                  title="39강 - 정적분 실력다지기"
                  time="61분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/qP7Iyl4G/%E1%84%89%E1%85%AE2/39%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A0%95%EC%A0%81%EB%B6%84%20%EC%8B%A4%EB%A0%A5%EB%8B%A4%EC%A7%80%EA%B8%B0.mp4"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xs uppercase  bg-gray-700 text-gray-400">
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
                  link="http://sjh0623.iptime.org:14131/api/public/dl/vgyVLTRK/%E1%84%89%E1%85%AE2/40%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A0%95%EC%A0%81%EB%B6%84%EA%B3%BC%20%ED%95%A8%EC%88%98(1).mp4"
                />
                <Compo
                  title="41강 - 정적분과 함수(2)"
                  time="58분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/rdFGd5tf/%E1%84%89%E1%85%AE2/41%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A0%95%EC%A0%81%EB%B6%84%EA%B3%BC%20%ED%95%A8%EC%88%98(2).mp4"
                />
                <Compo
                  title="42강 - 정적분과 함수 기본다지기"
                  time="46분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/onkFHvzS/%E1%84%89%E1%85%AE2/42%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A0%95%EC%A0%81%EB%B6%84%EA%B3%BC%20%ED%95%A8%EC%88%98%20%EA%B8%B0%EB%B3%B8%EB%8B%A4%EC%A7%80%EA%B8%B0.mp4"
                />
                <Compo
                  title="43강 - 정적분과 함수 실력다지기"
                  time="43분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/ZgvhDhw_/%E1%84%89%E1%85%AE2/43%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A0%95%EC%A0%81%EB%B6%84%EA%B3%BC%20%ED%95%A8%EC%88%98%20%EC%8B%A4%EB%A0%A5%EB%8B%A4%EC%A7%80%EA%B8%B0.mp4"
                />
                <Compo
                  title="44강 - 정적분 활용(1)"
                  time="54분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/0XFU9lKK/%E1%84%89%E1%85%AE2/44%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A0%95%EC%A0%81%EB%B6%84%20%ED%99%9C%EC%9A%A9(1).mp4"
                />
                <Compo
                  title="45강 - 정적분 활용(2)"
                  time="56분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/xkaRmaSi/%E1%84%89%E1%85%AE2/45%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A0%95%EC%A0%81%EB%B6%84%20%ED%99%9C%EC%9A%A9(2).mp4"
                />
                <Compo
                  title="46강 - 정적분 활용(3)"
                  time="56분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/4cwzPK6g/%E1%84%89%E1%85%AE2/46%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A0%95%EC%A0%81%EB%B6%84%20%ED%99%9C%EC%9A%A9(3).mp4"
                />
                <Compo
                  title="47강 - 정적분 활용 실력다지기"
                  time="83분"
                  link="http://sjh0623.iptime.org:14131/api/public/dl/FhylhEem/%E1%84%89%E1%85%AE2/47%E1%84%80%E1%85%A1%E1%86%BC%20-%20%EC%A0%95%EC%A0%81%EB%B6%84%20%ED%99%9C%EC%9A%A9%20%EC%8B%A4%EB%A0%A5%EB%8B%A4%EC%A7%80%EA%B8%B0.mp4"
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
