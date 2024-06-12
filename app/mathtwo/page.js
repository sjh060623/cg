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
                  link=""
                />
                <Compo
                  title="2강 - 함수의 극한(2)"
                  time="52분"
                  link=""
                />
                <Compo
                  title="3강 - 함수의 극한(3)"
                  time="43분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217147&authkey=!AAh78koYx9uRkqw
"
                />
                <Compo
                  title="4강 - 함수의 극한(4)"
                  time="49분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217164&authkey=!AEfFMa8rfxl2dDQ
"
                />
                <Compo
                  title="5강 - 함수의 극한 기본다지기"
                  time="52분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217146&authkey=!AKXqD_4jmMxYPM8
                  "
                />
                <Compo
                  title="6강 - 함수의 극한 실력다지기"
                  time="60분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217159&authkey=!AHZUK_NaSlPCB_c
                  "
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
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217161&authkey=!AArkanHrwnmNU84
"
                />
                <Compo
                  title="8강 - 함수의 연속(2)"
                  time="47분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217156&authkey=!AG6OAg_UP2W_LmU
"
                />
                <Compo
                  title="9강 - 함수의 연속(3)"
                  time="50분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217162&authkey=!AHLyAYs8meLfV68
"
                />
                <Compo
                  title="10강 - 합수의 연속 기본다지기"
                  time="55분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217157&authkey=!ABqxMfYdpLA-1YU
                  "
                />
                <Compo
                  title="11강 - 함수의 연속 실력다지기"
                  time="57분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217170&authkey=!AIjGT0A3pTSnIgQ
                  "
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
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217150&authkey=!AIWxdsO6q_YlWtA
                  "
                />
                <Compo
                  title="13강 - 미분계수와 도함수(2)"
                  time="51분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217142&authkey=!AIafrlxHNwg8V1c
                  "
                />
                <Compo
                  title="14강 - 미분계수와 도함수(3)"
                  time="50분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217173&authkey=!ANJ7Kqn2B6MVKYk
                  "
                />
                <Compo
                  title="15강 - 미분계수와 도함수(4)"
                  time="49분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217153&authkey=!AE-y4w96C3YJrjA
                  "
                />
                <Compo
                  title="16강 - 미분계수와 도함수(5)"
                  time="36분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217165&authkey=!AB_cG3FHO7C7uXE
                  "
                />
                <Compo
                  title="17강 - 미분계수와 도함수 기본다지기"
                  time="29분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217175&authkey=!AEAbvjCJKEuK3HI
                  "
                />
                <Compo
                  title="18강 - 미분계수와 도함수 실력다지기"
                  time="57분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217148&authkey=!ACIZu_LUotD4-6Y
                  "
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
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217186&authkey=!AAmXMlFXorbP66g
"
                />
                <Compo
                  title="20강 - 접선의 방정식(2)"
                  time="53분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217144&authkey=!ADcRjwCSnYYrQXo
"
                />
                <Compo
                  title="21강 - 접선의 방정식(3)"
                  time="36분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217181&authkey=!AETWU8y4mbyf0MM
"
                />
                <Compo
                  title="22강 - 접선의 방정식 기본+실력 다지기"
                  time="90분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217185&authkey=!AHsC8_WF8gCdlrA
                  "
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
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217184&authkey=!ANwvcbRD4ODYr_A
                  "
                />
                <Compo
                  title="24강 - 함수의 극대와 극소 (2)"
                  time="51분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217176&authkey=!AMQxUyj9NXgsa4k
                  "
                />
                <Compo
                  title="25강 - 함수의 극대와 극소 (3)"
                  time="49분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217182&authkey=!AM0Ph2C8SS-9ApQ
                  "
                />
                <Compo
                  title="26강 - 함수의 극대와 극소 기본 다지기"
                  time="41분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217166&authkey=!AGTc56N_vjfS4qc
                  "
                />
                <Compo
                  title="27강 - 함수의 극대와 극소 실력 다지기"
                  time="45분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217183&authkey=!APWQK_okbzrPpyk
                  "
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
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217154&authkey=!ALdZcz99qTO892U
"
                />
                <Compo
                  title="29강 - 도함수 활용 (2)"
                  time="58분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217179&authkey=!AOKYYE1j8f-tEzs
"
                />
                <Compo
                  title="30강 - 도함수 활용 (3)"
                  time="50분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217151&authkey=!AK1kMKS45xEpf0o
"
                />
                <Compo
                  title="31강 - 도함수 활용 기본다지기"
                  time="45분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217158&authkey=!AEbeUDpOFqKGuKY
                  "
                />
                <Compo
                  title="32강 - 도함수 활용 실력다지기"
                  time="49분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217171&authkey=!ADsWhCXmp77ElO8
                  "
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
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217180&authkey=!AKePj8U85ocqoo4
"
                />
                <Compo
                  title="34강 - 부정적분 기본다지기"
                  time="37분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217174&authkey=!AMPIk10g6XyWcPI
"
                />
                <Compo
                  title="35강 - 부정적분 실력다지기"
                  time="42분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217141&authkey=!AGJEID-nwgnwWj8
"
                />
                <Compo
                  title="36강 - 정적분(1)"
                  time="58분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217145&authkey=!AB0igkdFmAXSfE8
"
                />
                <Compo
                  title="37강 - 정적분(2)"
                  time="51분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217167&authkey=!AHceo9jWtdk94mU
"
                />
                <Compo
                  title="38강 - 정적분(3)"
                  time="43분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217177&authkey=!AGetf0uVJ445pKk
"
                />
                <Compo
                  title="39강 - 정적분 실력다지기"
                  time="61분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217187&authkey=!AJ37oA-enfhWkfs
"
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
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217172&authkey=!ANXGR4UH0Qs3774
"
                />
                <Compo
                  title="41강 - 정적분과 함수(2)"
                  time="58분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217155&authkey=!AD-LKNpatjMYdVA
"
                />
                <Compo
                  title="42강 - 정적분과 함수 기본다지기"
                  time="46분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217149&authkey=!ABa1TZGXR6lVxnk
                  "
                />
                <Compo
                  title="43강 - 정적분과 함수 실력다지기"
                  time="43분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217178&authkey=!AL8nyoT0ajVo-1w
                  "
                />
                <Compo
                  title="44강 - 정적분 활용(1)"
                  time="54분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217160&authkey=!AB_P9XXpg-cr8_4
"
                />
                <Compo
                  title="45강 - 정적분 활용(2)"
                  time="56분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217169&authkey=!AN7FpY3wx7JeYj4
"
                />
                <Compo
                  title="46강 - 정적분 활용(3)"
                  time="56분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217163&authkey=!AGWSJ3Xmgz-SiE4
"
                />
                <Compo
                  title="47강 - 정적분 활용 실력다지기"
                  time="83분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217143&authkey=!AGd7gys1kCuUfWs"
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
