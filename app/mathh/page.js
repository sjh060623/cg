import Link from "next/link";
import Compo from "./compo";
import Image from "next/image";

export default function Mathh() {
  return (
    <section window class=" p-3 sm:-5 translate-y-20 ">
      <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
        <h1 className=" text-3xl font-bold -translate-y-6">Course</h1>
        <h1 className=" text-gray-400 text-xl font-bold -translate-y-6">
          수학의 바이블 수(상)
        </h1>
        <div class="bg-white  relative shadow-2xl sm:rounded-lg overflow-hidden rounded-xl">
          <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <div class="flex items-center space-x-3 w-full md:w-auto">
                {/*
                <h1 className="text-white text-3xl">수학의 바이블 수(상)</h1>
                <Link
                  className="flex text-black"
                  href="http://sjh0623.iptime.org:14131/api/public/dl/-N8o408O/%EC%B2%AD%EA%B0%95/%E1%84%89%E1%85%AE%E1%84%92%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%B4%20%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3%E1%86%AF%20(%E1%84%89%E1%85%A1%E1%86%BC).pdf"
                  download="수학의 바이블 (상)"
                >
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
                  <th scope="col" class="px-4 py-3">
                    다항식
                  </th>
                </tr>
              </thead>
              <tbody class="detail-body">
                <Compo
                  title="1강 - 다항식의 연산(1)"
                  time="45분"
                  link="https://youtu.be/7U4wlka-Aik"
                />
                <Compo
                  title="2강 - 다항식의 연산(2)"
                  time="46분"
                  link="https://youtu.be/GauXivvBt94"
                />
                <Compo
                  title="3강 - 다항식의 연산(3)"
                  time="50분"
                  link="https://youtu.be/Qg1CqFFaCwY"
                />
                <Compo
                  title="4강 - 다항식의 연산(4)"
                  time="42분"
                  link="https://youtu.be/yRijrO3eJ6A"
                />
                <Compo
                  title="5강 - 다항식의 연산(5)"
                  time="46분"
                  link="https://youtu.be/tXWr2AMYftk"
                />
                <Compo
                  title="6강 - 다항식의 연산(6)"
                  time="43분"
                  link="https://youtu.be/0eOIPDBYE6g"
                />
                <Compo
                  title="7강 - 다항식의 연산(7)"
                  time="28분"
                  link="https://youtu.be/lXQX1a30_A0"
                />
                <Compo
                  title="8강 - 나머지정리(1)"
                  time="46분"
                  link="https://youtu.be/A7w4OLFYGpY"
                />
                <Compo
                  title="9강 - 나머지정리(2)"
                  time="46분"
                  link="https://youtu.be/PI6Z8Ys_bA0"
                />
                <Compo
                  title="10강 - 나머지정리(3)"
                  time="39분"
                  link="https://youtu.be/SVFQwsTV85E"
                />
                <Compo
                  title="11강 - 나머지정리(4)"
                  time="50분"
                  link="https://youtu.be/Tc5ZkaCWa_A"
                />
                <Compo
                  title="12강 - 나머지정리(5)"
                  time="57분"
                  link="https://youtu.be/gkT9gHCu_S0"
                />
                <Compo
                  title="13강 - 인수분해(1)"
                  time="52분"
                  link="https://youtu.be/39NrtzqoD4c"
                />
                <Compo
                  title="14강 - 인수분해(2)"
                  time="49분"
                  link="https://youtu.be/pNFPCoS8X80"
                />
                <Compo
                  title="15강 - 인수분해(3)"
                  time="45분"
                  link="https://youtu.be/rLXlg7HjExY"
                />
                <Compo
                  title="16강 - 인수분해(4)"
                  time="41분"
                  link="https://youtu.be/kt0ue-8tuhI"
                />
                <Compo
                  title="17강 - 인수분해(5)"
                  time="43분"
                  link="https://youtu.be/XpoJihkMnnk"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    방정식과 부등식
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="1강 - 복소수(1)"
                  time="47분"
                  link="https://youtu.be/7d8J1coLjh8"
                />
                <Compo
                  title="2강 - 복소수(2)"
                  time="41분"
                  link="https://youtu.be/zv4zyHodiUo"
                />
                <Compo
                  title="3강 - 복소수(3)"
                  time="48분"
                  link="https://youtu.be/Hd35Wj9K3YY"
                />
                <Compo
                  title="4강 - 복소수(4)"
                  time="45분"
                  link="https://youtu.be/y9gaxdFvp7M"
                />
                <Compo
                  title="5강 - 복소수(5)/이차방정식(1)"
                  time="38분"
                  link="https://youtu.be/PvySw27r5Hs"
                />
                <Compo
                  title="6강 - 이차방정식(2)"
                  time="53분"
                  link="https://youtu.be/BOfhYtAvV6M"
                />
                <Compo
                  title="7강 - 이차방정식(3)"
                  time="52분"
                  link="https://youtu.be/XGx5c1SX4Hg"
                />
                <Compo
                  title="8강 - 이차방정식(4)"
                  time="48분"
                  link="https://youtu.be/0YKEYJ5AuEg"
                />
                <Compo
                  title="9강 - 이차방정식(5)"
                  time="44분"
                  link="https://youtu.be/WyY3_jrNvCY"
                />
                <Compo
                  title="10강 - 이차방정식(6)"
                  time="44분"
                  link="https://youtu.be/5c2ZKNdM43s"
                />
                <Compo
                  title="11강 - 이차방정식(7)"
                  time="39분"
                  link="https://youtu.be/bVhWr8tnpj4"
                />
                <Compo
                  title="12강 - 이차방정식과 이차함수(1)"
                  time="51분"
                  link="https://youtu.be/pNP9ySqp-UM"
                />
                <Compo
                  title="13강 - 이차방정식과 이차함수(2)"
                  time="42분"
                  link="https://youtu.be/J_43lzMRNZ4"
                />
                <Compo
                  title="14강 - 이차방정식과 이차함수(3)"
                  time="50분"
                  link="https://youtu.be/NpH-PdSiksc"
                />
                <Compo
                  title="15강 - 이차방정식과 이차함수(4)"
                  time="38분"
                  link="https://youtu.be/NpH-PdSiksc"
                />
                <Compo
                  title="16강 - 이차방정식과 이차함수(5)"
                  time="40분"
                  link="https://youtu.be/y_TAv6TLapQ"
                />
                <Compo
                  title="17강 - 이차방정식과 이차함수(6)/삼차방정식과 사차방정식(1)"
                  time="40분"
                  link="https://youtu.be/ppg5NoHwJ6M"
                />
                <Compo
                  title="18강 - 삼차방정식과 사차방정식(2)"
                  time="33분"
                  link="https://youtu.be/sjwFDp98-Nw"
                />
                <Compo
                  title="19강 - 삼차방정식과 사차방정식(3)"
                  time="44분"
                  link="https://youtu.be/iw2Uu-Cyoc8"
                />
                <Compo
                  title="20강 - 삼차방정식과 사차방정식(4)"
                  time="35분"
                  link="https://youtu.be/HicUCx3Je50"
                />
                <Compo
                  title="21강 - 삼차방정식과 사차방정식(5)"
                  time="37분"
                  link="https://youtu.be/AIWHKKaCJ4I"
                />
                <Compo
                  title="22강 - 삼차방정식과 사차방정식(6)"
                  time="44분"
                  link="https://youtu.be/PZubTv_1x2Q"
                />
                <Compo
                  title="23강 - 삼차방정식과 사차방정식(7)"
                  time="47분"
                  link="https://youtu.be/PeOk4wWy2s8"
                />
                <Compo
                  title="24강 - 삼차방정식과 사차방정식(8)/연립방정식(1)"
                  time="45분"
                  link="https://youtu.be/8mwBRS6-aYo"
                />
                <Compo
                  title="25강 - 연립방정식 (2)"
                  time="39분"
                  link="https://youtu.be/Oz8yhT7SFzc"
                />
                <Compo
                  title="26강 - 연립방정식 (3)"
                  time="43분"
                  link="https://youtu.be/ifKxVk58rvs"
                />
                <Compo
                  title="27강 - 연립방정식 (4)"
                  time="30분"
                  link="https://youtu.be/6-I7EsHCFU4"
                />
                <Compo
                  title="28강 - 연립방정식 (5)"
                  time="36분"
                  link="https://youtu.be/kbHCpth2yEc"
                />
                <Compo
                  title="29강 - 여러 가지 부등식(1)"
                  time="47분"
                  link="https://youtu.be/4a5cHiUr48g"
                />
                <Compo
                  title="30강 - 여러 가지 부등식(2)"
                  time="42분"
                  link="https://youtu.be/HM6te49sB9Q"
                />
                <Compo
                  title="31강 - 여러 가지 부등식(3)"
                  time="38분"
                  link="https://youtu.be/bpN5PbTXOpg"
                />
                <Compo
                  title="32강 - 여러 가지 부등식(4)"
                  time="43분"
                  link="https://youtu.be/ghzmtZezMeY"
                />
                <Compo
                  title="33강 - 여러 가지 부등식(5)"
                  time="41분"
                  link="https://youtu.be/vApqHK79Yag"
                />
                <Compo
                  title="34강 - 여러 가지 부등식(6)"
                  time="45분"
                  link="https://youtu.be/pvnlrUZYDYc"
                />
                <Compo
                  title="35강 - 여러 가지 부등식(7)"
                  time="38분"
                  link="https://youtu.be/Adndh_D_hqM"
                />
                <Compo
                  title="36강 - 여러 가지 부등식(8)"
                  time="30분"
                  link="https://youtu.be/nyzPpPZIoOI"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    도형의 방정식
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="1강 - 평면좌표(1)"
                  time="45분"
                  link="https://youtu.be/D4-sBSDrI1k"
                />
                <Compo
                  title="2강 - 평면좌표(2)"
                  time="45분"
                  link="https://youtu.be/-kbpV3Bfq-Q"
                />
                <Compo
                  title="3강 - 평면좌표(3)"
                  time="40분"
                  link="https://youtu.be/PaoAVk-0qNo"
                />
                <Compo
                  title="4강 - 평면좌표(4)"
                  time="40분"
                  link="https://youtu.be/5_fayLWKHic"
                />
                <Compo
                  title="5강 - 직선의 방정식(1)"
                  time="42분"
                  link="https://youtu.be/DX5KmfgqlJY"
                />
                <Compo
                  title="6강 - 직선의 방정식(2)"
                  time="36분"
                  link="https://youtu.be/V1h4_MGfaY8"
                />
                <Compo
                  title="7강 - 직선의 방정식(3)"
                  time="44분"
                  link="https://youtu.be/cxOzVgxgYI0"
                />
                <Compo
                  title="8강 - 직선의 방정식(4)"
                  time="34분"
                  link="https://youtu.be/LfM4gMHBvKA"
                />
                <Compo
                  title="9강 - 직선의 방정식(5)"
                  time="46분"
                  link="https://youtu.be/bqQWNvxtuNg"
                />
                <Compo
                  title="10강 - 직선의 방정식(6)"
                  time="37분"
                  link="https://youtu.be/yiKQzbKIVjs"
                />
                <Compo
                  title="11강 - 직선의 방정식(7)"
                  time="44분"
                  link="https://youtu.be/nOzpBId8TSU"
                />
                <Compo
                  title="12강 - 원의 방정식(1)"
                  time="47분"
                  link="https://youtu.be/WsYZKVXg3aw"
                />
                <Compo
                  title="13강 - 원의 방정식(2)"
                  time="44분"
                  link="https://youtu.be/Vig8md4y9Mk"
                />
                <Compo
                  title="14강 - 원의 방정식(3)"
                  time="40분"
                  link="https://youtu.be/dxc1dDL2YUY"
                />
                <Compo
                  title="15강 - 원의 방정식(4)"
                  time="38분"
                  link="https://youtu.be/ZVc-wUa47m0"
                />
                <Compo
                  title="16강 - 원의 방정식(5)"
                  time="47분"
                  link="https://youtu.be/jFP5_vXwhvE"
                />
                <Compo
                  title="17강 - 원의 방정식(6)"
                  time="44분"
                  link="https://youtu.be/ap41voOmyJ8"
                />
                <Compo
                  title="18강 - 원의 방정식(7)"
                  time="32분"
                  link="https://youtu.be/nXLXvpmJZUQ"
                />
                <Compo
                  title="19강 - 도형의 이동(1)"
                  time="39분"
                  link="https://youtu.be/0I97rcnnr3I"
                />
                <Compo
                  title="20강 - 도형의 이동(2)"
                  time="40분"
                  link="https://youtu.be/OWG4JXkmtBU"
                />

                <Compo
                  title="21강 - 도형의 이동(3)"
                  time="25분"
                  link="https://youtu.be/QQVzfb8c060"
                />
                <Compo
                  title="22강 - 도형의 이동(4)"
                  time="51분"
                  link="https://youtu.be/OcfwVLKEzgI"
                />
                <Compo
                  title="23강 - 도형의 이동(5)"
                  time="24분"
                  link="https://youtu.be/vkQldkGRHPY"
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
