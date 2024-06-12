import Image from "next/image";
import Compo from "./compo";

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
                  link="https://youtu.be/6ALk8786dOk"
                />
                <Compo
                  title="2강 - 집합(2)"
                  time="42분"
                  link="https://youtu.be/uUe4LVsKFFg"
                />
                <Compo
                  title="3강 - 집합(3)"
                  time="42분"
                  link="https://youtu.be/cChjnpxx0s8"
                />
                <Compo
                  title="4강 - 집합(4)"
                  time="47분"
                  link="https://youtu.be/EdAm-XwymTw"
                />
                <Compo
                  title="5강 - 집합(5)"
                  time="40분"
                  link="https://youtu.be/-mT95ga6WC4"
                />
                <Compo
                  title="6강 - 집합(6)"
                  time="33분"
                  link="https://youtu.be/om0lmwvtcF4"
                />
                <Compo
                  title="7강 - 집합(7)"
                  time="37분"
                  link="https://youtu.be/K7mVt1Fls6Y"
                />
                <Compo
                  title="8강 - 명제(1)"
                  time="41분"
                  link="https://youtu.be/U4fU4b1J7_k"
                />
                <Compo
                  title="9강 - 명제(2)"
                  time="42분"
                  link="https://youtu.be/49_INy20oa8"
                />
                <Compo
                  title="10강 - 명제(3)"
                  time="44분"
                  link="https://youtu.be/kIcuUBUM5R0"
                />
                <Compo
                  title="11강 - 명제(4)"
                  time="45분"
                  link="https://youtu.be/uY5zqrlmEfY"
                />
                <Compo
                  title="12강 - 명제(5)"
                  time="37분"
                  link="https://youtu.be/lSYvrkN0ks0"
                />
                <Compo
                  title="13강 - 명제(6)/절대부등식(1)"
                  time="48분"
                  link="https://youtu.be/58isM9FcQEI"
                />
                <Compo
                  title="14강 - 절대부등식(2)"
                  time="42분"
                  link="https://youtu.be/5YcpHLDnELE"
                />
                <Compo
                  title="15강 - 절대부등식(3)"
                  time="37분"
                  link="https://youtu.be/LwxJcjHrXUU"
                />
                <Compo
                  title="16강 - 절대부등식(4)"
                  time="58분"
                  link="https://youtu.be/7eJmc6giKVY"
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
                  link="https://youtu.be/LCvNrYAEfpY"
                />
                <Compo
                  title="2강 - 함수(2)"
                  time="40분"
                  link="https://youtu.be/3gH7B2jOppo"
                />
                <Compo
                  title="3강 - 함수(3)"
                  time="47분"
                  link="https://youtu.be/RMzHkARscbg"
                />
                <Compo
                  title="4강 - 함수(4)"
                  time="43분"
                  link="https://youtu.be/qg4KXhO9n5I"
                />
                <Compo
                  title="5강 - 함수(5)"
                  time="47분"
                  link="https://youtu.be/uVopcvK2Fw4"
                />
                <Compo
                  title="6강 - 함수(6)"
                  time="38분"
                  link="https://youtu.be/5l2mNVgXqAQ"
                />
                <Compo
                  title="7강 - 함수(7)"
                  time="41분"
                  link="https://youtu.be/kbJoLHa38uA"
                />
                <Compo
                  title="8강 - 함수(8)"
                  time="42분"
                  link="https://youtu.be/J-SuT35Fj4M"
                />
                <Compo
                  title="9강 - 함수(9)"
                  time="47분"
                  link="https://youtu.be/FDd58NKyW7c"
                />
                <Compo
                  title="10강 - 함수(10)"
                  time="40분"
                  link="https://youtu.be/_rrwOtN8hoE"
                />
                <Compo
                  title="11강 - 함수(11)"
                  time="46분"
                  link="https://youtu.be/RXqX1vOuYnM"
                />
                <Compo
                  title="12강 - 유리식과 유리함수(1)"
                  time="42분"
                  link="https://youtu.be/J8xAH5Q9Bvc"
                />
                <Compo
                  title="13강 - 유리식과 유리함수(2)"
                  time="41분"
                  link="https://youtu.be/__GId-gvgw4"
                />
                <Compo
                  title="14강 - 유리식과 유리함수(3)"
                  time="41분"
                  link="https://youtu.be/4L9wp97F7z4"
                />
                <Compo
                  title="15강 - 유리식과 유리함수(4)"
                  time="45분"
                  link="https://youtu.be/sY39_iDbg7M"
                />
                <Compo
                  title="16강 - 유리식과 유리함수(5)"
                  time="37분"
                  link="https://youtu.be/PfYvdUuejt0"
                />
                <Compo
                  title="17강 - 유리식과 유리함수(6)"
                  time="48분"
                  link="https://youtu.be/GVyinLCsw60"
                />
                <Compo
                  title="18강 - 유리식과 유리함수(7)"
                  time="42분"
                  link="https://youtu.be/sM_rvkQyydw"
                />
                <Compo
                  title="19강 - 유리식과 유리함수(8)/무리식과 무리함수(1)"
                  time="47분"
                  link="https://youtu.be/sPZp_2myfDY"
                />
                <Compo
                  title="20강 - 무리식과 무리함수(2)"
                  time="40분"
                  link="https://youtu.be/mwTsLhl3ymA"
                />
                <Compo
                  title="21강 - 무리식과 무리함수(3)"
                  time="48분"
                  link="https://youtu.be/FubmTEi9VCY"
                />
                <Compo
                  title="22강 - 무리식과 무리함수(4)"
                  time="49분"
                  link="https://youtu.be/4RrigLp7Z5I"
                />
                <Compo
                  title="23강 - 무리식과 무리함수(5)"
                  time="49분"
                  link="https://youtu.be/JGOb76wXw34"
                />
                <Compo
                  title="24강 - 무리식과 무리함수(6)"
                  time="36분"
                  link="https://youtu.be/tBB3FAtv0fw"
                />
                <Compo
                  title="25강 - 무리식과 무리함수(7)"
                  time="52분"
                  link="https://youtu.be/g7jAz_4Wwio"
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
                  link="https://youtu.be/X8WLjQ1Sut8"
                />
                <Compo
                  title="2강 - 경우의 수(2)"
                  time="52분"
                  link="https://youtu.be/kDBlD4f8BV4"
                />
                <Compo
                  title="3강 - 경우의 수(3)"
                  time="50분"
                  link="https://youtu.be/YvjZUxN_e9Q"
                />
                <Compo
                  title="4강 - 경우의 수(4)"
                  time="48분"
                  link="https://youtu.be/g4SUth1Xr-s"
                />
                <Compo
                  title="5강 - 경우의 수(5)"
                  time="44분"
                  link="https://youtu.be/gSy56g3SoNs"
                />
                <Compo
                  title="6강 - 순열(1)"
                  time="55분"
                  link="https://youtu.be/x4YXK-fceUs"
                />
                <Compo
                  title="7강 - 순열(2)"
                  time="51분"
                  link="https://youtu.be/qe2oCSIZB0w"
                />
                <Compo
                  title="8강 - 순열(3)"
                  time="45분"
                  link="https://youtu.be/ITDe1QCpT3Y"
                />
                <Compo
                  title="9강 - 순열(4)"
                  time="44분"
                  link="https://youtu.be/G8s3BCrnJ3A"
                />
                <Compo
                  title="10강 - 순열(5)"
                  time="43분"
                  link="https://youtu.be/WWDJvvPF490"
                />
                <Compo
                  title="11강 - 조합(1)"
                  time="49분"
                  link="https://youtu.be/9gLEWHW4Jis"
                />
                <Compo
                  title="12강 - 조합(2)"
                  time="54분"
                  link="https://youtu.be/l9VINtYvMpI"
                />
                <Compo
                  title="13강 - 조합(3)"
                  time="34분"
                  link="https://youtu.be/gGNOokU5wIk"
                />
                <Compo
                  title="14강 - 조합(4)"
                  time="48분"
                  link="https://youtu.be/aUDNh6chIaU"
                />
                <Compo
                  title="15강 - 조합(5)"
                  time="51분"
                  link="https://youtu.be/NwtAjwqFwCI"
                />
                <Compo
                  title="16강 - 조합(6)"
                  time="41분"
                  link="https://youtu.be/8N9AKVJ48aw"
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
