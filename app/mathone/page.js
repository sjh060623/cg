import Link from "next/link";
import Compo from "./compo";
import Image from "next/image";

export default function Mathone() {
  return (
    <section window class=" p-3 sm:-5 translate-y-20 ">
      <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
        <h1 className=" text-3xl font-bold -translate-y-6">Course</h1>
        <h1 className=" text-gray-400 text-xl font-bold -translate-y-6">
          수학의 바이블 수1
        </h1>
        <div class="bg-white  relative shadow-2xl sm:rounded-lg overflow-hidden rounded-xl">
          <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <div class="flex items-center space-x-3 w-full md:w-auto"></div>
            </div>
          </div>
          <div class="overflow-x-auto">
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    지수
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="1강 - 지수(1)"
                  time="46분"
                  link="https://youtu.be/B8ZDdS-7Rog"
                />
                <Compo
                  title="2강 - 지수(2)"
                  time="49분"
                  link="https://youtu.be/Q39vlyXr1dY"
                />
                <Compo
                  title="3강 - 지수(3)"
                  time="44분"
                  link="https://youtu.be/SB0DhsbVHA0"
                />
                <Compo
                  title="4강 - 지수 기본다지기"
                  time="41분"
                  link="https://youtu.be/lnRD56Gdx6E"
                />
                <Compo
                  title="5강 - 지수 실력다지기"
                  time="49분"
                  link="https://youtu.be/oDQ4BcHbqec"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    로그
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="6강 - 로그(1)"
                  time="58분"
                  link="https://youtu.be/Wj0yvQ7NR8I"
                />
                <Compo
                  title="7강 - 로그(2)"
                  time="30분"
                  link="https://youtu.be/e2ReRVSCt5Y"
                />
                <Compo
                  title="8강 - 상용로그(1)"
                  time="48분"
                  link="https://youtu.be/NDGE94y-Tog"
                />
                <Compo
                  title="9강 - 상용로그(2)"
                  time="34분"
                  link="https://youtu.be/8b2moISHez8"
                />
                <Compo
                  title="10강 - 상용로그(3)"
                  time="45분"
                  link="https://youtu.be/6JKiDp1he2U"
                />
                <Compo
                  title="11강 - 로그 기본다지기"
                  time="37분"
                  link="https://youtu.be/P9wf_wi6aKo"
                />
                <Compo
                  title="12강 - 로그 실력다지기(1)"
                  time="46분"
                  link="https://youtu.be/tIw8tCq-FLs"
                />
                <Compo
                  title="13강 - 로그 실력다지기(2)"
                  time="51분"
                  link="https://youtu.be/Hd17azGrxDU"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    지수함수
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="14강 - 지수함수(1)"
                  time="50분"
                  link="https://youtu.be/TKQaf0E63ZU"
                />
                <Compo
                  title="15강 - 지수함수(2)"
                  time="44분"
                  link="https://youtu.be/3mtKE-HUPs4"
                />
                <Compo
                  title="16강 - 지수함수(3)"
                  time="61분"
                  link="https://youtu.be/DfM91enmnBQ"
                />
                <Compo
                  title="17강 - 지수함수(4)"
                  time="46분"
                  link="https://youtu.be/X7ANA4JOvko"
                />
                <Compo
                  title="18강 - 지수함수(5)"
                  time="55분"
                  link="https://youtu.be/GlbQqXverNk"
                />
                <Compo
                  title="19강 - 지수함수(6)+기본다지기"
                  time="41분"
                  link="https://youtu.be/YBycRKdOQa4"
                />
                <Compo
                  title="20강 - 지수함수 실력다지기(1)"
                  time="49분"
                  link="https://youtu.be/hN-WNP8OgC0"
                />
                <Compo
                  title="21강 - 지수함수 실력다지기(2)"
                  time="67분"
                  link="https://youtu.be/yl-4kJy_m5Q"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    로그함수
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="22강 - 로그함수(1)"
                  time="52분"
                  link="https://youtu.be/YK4_L6lCdUY"
                />
                <Compo
                  title="23강 - 로그함수(2)"
                  time="47분"
                  link="https://youtu.be/jCYaXZlmRWw"
                />
                <Compo
                  title="24강 - 로그함수(3)"
                  time="49분"
                  link="https://youtu.be/8YGt7XPjl_M"
                />
                <Compo
                  title="25강 - 로그함수(4)"
                  time="53분"
                  link="https://youtu.be/1kPIFbqbPHU"
                />
                <Compo
                  title="26강 - 로그함수(5)"
                  time="26분"
                  link="https://youtu.be/5v5dtFtf3aM"
                />
                <Compo
                  title="27강 - 로그함수 기본다지기"
                  time="28분"
                  link="https://youtu.be/VPtUnbKQAx0"
                />
                <Compo
                  title="28강 - 로그함수 실력다지기(1)"
                  time="56분"
                  link="https://youtu.be/GDwgdgfcaYE"
                />
                <Compo
                  title="29강 - 로그함수 실력다지기(2)"
                  time="62분"
                  link="https://youtu.be/gBksIexvr5Q"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    로그 방정식 / 부등식
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="30강 - 로그 방정식(1)"
                  time="49분"
                  link="https://youtu.be/OLUtL_oZfA0"
                />
                <Compo
                  title="31강 - 로그 방정식&부등식(2)"
                  time="59분"
                  link="https://youtu.be/uJ1vtHujZtk"
                />
                <Compo
                  title="32강 - 로그 방정식&부등식(3)"
                  time="44분"
                  link="https://youtu.be/xA7UeimFV3o"
                />
                <Compo
                  title="33강 - 로그 방정식&부등식(4)"
                  time="59분"
                  link="https://youtu.be/VEo8QJqkcUw"
                />
                <Compo
                  title="34강 - 로그 방정식&부등식 기본다지기"
                  time="27분"
                  link="https://youtu.be/bjgLeVdZafk"
                />
                <Compo
                  title="35강 - 로그 방정식 기본다지기+실력다지기"
                  time="62분"
                  link="https://youtu.be/8IETEWNcEIA"
                />
                <Compo
                  title="36강 - 로그 방정식 실력다지기"
                  time="48분"
                  link="https://youtu.be/0-oONie13Ak"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    삼각함수
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="37강 - 삼각함수(1)"
                  time="57분"
                  link="https://youtu.be/k61ApN0R0mE"
                />
                <Compo
                  title="38강 - 삼각함수(2)"
                  time="50분"
                  link="https://youtu.be/J-PrbvoU0jE"
                />
                <Compo
                  title="39강 - 삼각함수(3)"
                  time="60분"
                  link="https://youtu.be/A4xWEvLwx-w"
                />
                <Compo
                  title="40강 - 삼각함수(4)"
                  time="45분"
                  link="https://youtu.be/4doSHF0E3HQ"
                />
                <Compo
                  title="41강 - 삼각함수 기본다지기"
                  time="33분"
                  link="https://youtu.be/Oaodx6KV0xQ"
                />
                <Compo
                  title="42강 - 삼각함수 실력다지기"
                  time="48분"
                  link="https://youtu.be/RwIm-jzK_Wo"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    삼각함수 그래프 / 활용
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="43강 - 삼각함수 그래프(1)"
                  time="60분"
                  link="https://youtu.be/u-8vhFtn_js"
                />
                <Compo
                  title="44강 - 삼각함수 그래프(2)"
                  time="47분"
                  link="https://youtu.be/d9x2uZFe9ac"
                />
                <Compo
                  title="45강 - 삼각함수 그래프(3)"
                  time="51분"
                  link="https://youtu.be/E4J1oNoEASM"
                />
                <Compo
                  title="46강 - 삼각함수 그래프(4)"
                  time="61분"
                  link="https://youtu.be/YyLoodB3Yz4"
                />
                <Compo
                  title="47강 - 삼각함수 그래프 기본다지기"
                  time="35분"
                  link="https://youtu.be/FPEWTTjC4aY"
                />
                <Compo
                  title="48강 - 삼각함수 그래프 실력다지기"
                  time="67분"
                  link="https://youtu.be/bAdPIwZrnMU"
                />
                <Compo
                  title="49강 - 삼각함수 활용 (1)"
                  time="47분"
                  link="https://youtu.be/GjnW_5mx8Ps"
                />
                <Compo
                  title="50강 - 삼각함수 활용 (2)"
                  time="61분"
                  link="https://youtu.be/7vAIFGJk_9E"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    사인법칙 코사인법칙
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="51강 - 사인법칙 코사인법칙"
                  time="57분"
                  link="https://youtu.be/S4U5XdYQWmg"
                />
                <Compo
                  title="52강 사인법칙 코사인법칙 기본다지기"
                  time="48분"
                  link="https://youtu.be/o54CxZxzo90"
                />
                <Compo
                  title="53강 사인법칙 코사인법칙 실력다지기(1)"
                  time="41분"
                  link="https://youtu.be/PnNyoDMPt-w"
                />
                <Compo
                  title="54강 사인법칙 코사인법칙 실력다지기(2)"
                  time="52분"
                  link="https://youtu.be/0l01RJYVhd0"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    등차수열
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="55강 - 등차수열(1)"
                  time="31분"
                  link="https://youtu.be/sHEJ1ODdJe0"
                />
                <Compo
                  title="56강 - 등차수열(2)"
                  time="44분"
                  link="https://youtu.be/NXWv6mjOXck"
                />
                <Compo
                  title="57강 - 등차수열(3)"
                  time="49분"
                  link="https://youtu.be/MtN-DRp6E-Y"
                />
                <Compo
                  title="58강 - 등차수열 기본다지기"
                  time="35분"
                  link="https://youtu.be/RLBWDHFnAOA"
                />
                <Compo
                  title="59강 - 등차수열 실력다지기(1)"
                  time="48분"
                  link="https://youtu.be/cM2w-Wg1J1E"
                />
                <Compo
                  title="60강 - 등차수열 실력다지기(2)"
                  time="55분"
                  link="https://youtu.be/5SUz8pLzDbY"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    등비수열
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="61강 - 등비수열(1)"
                  time="45분"
                  link="https://youtu.be/FdUbC4-KbjU"
                />
                <Compo
                  title="62강 - 등비수열(2)"
                  time="45분"
                  link="https://youtu.be/B4U6b4g-9h8"
                />
                <Compo
                  title="63강 - 등비수열(3)"
                  time="45분"
                  link="https://youtu.be/ZKSpMMJTPgo"
                />
                <Compo
                  title="64강 - 등비수열 기본다지기+실력다지기(1)"
                  time="45분"
                  link="https://youtu.be/O1fAJtKi-hI"
                />
                <Compo
                  title="65강 - 등비수열 실력다지기(2)"
                  time="45분"
                  link="https://youtu.be/i9MfgPIek2g"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    여러가지 수열
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="66강 - 여러가지 수열(1)"
                  time="45분"
                  link="https://youtu.be/PvBemi2BURU"
                />
                <Compo
                  title="67강 - 여러가지 수열(2)"
                  time="45분"
                  link="https://youtu.be/BkdNShFw1k0"
                />
                <Compo
                  title="68강 - 여러가지 수열(3)"
                  time="45분"
                  link="https://youtu.be/9sdePiu52eI"
                />
                <Compo
                  title="69강 - 여러가지 수열(4)"
                  time="45분"
                  link="https://youtu.be/Ds0FG0liLKg"
                />
                <Compo
                  title="70강 - 여러가지 수열 기본다지기"
                  time="45분"
                  link="https://youtu.be/XuzjT0XHayo"
                />
                <Compo
                  title="71강 - 여러가지 수열 실력다지기(1)"
                  time="45분"
                  link="https://youtu.be/SeJpRdWP_Ns"
                />
                <Compo
                  title="72강 - 여러가지 수열 실력다지기(2)"
                  time="45분"
                  link="https://youtu.be/C0kUnbdNAv0"
                />
              </tbody>
            </table>
            {/** */}
            {/** */}
            <table class="w-full text-sm text-left text-gray-400">
              <thead class="text-xl uppercase text-center bg-white text-black">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    수열의 귀납적 정의
                  </th>
                </tr>
              </thead>
              <tbody>
                <Compo
                  title="73강 - 수열의 귀납적 정의(1)"
                  time="45분"
                  link="https://youtu.be/ExBirEfxOi4"
                />
                <Compo
                  title="74강 - 수열의 귀납적 정의(2)"
                  time="45분"
                  link="https://youtu.be/HfLazw2f0mY"
                />
                <Compo
                  title="75강 - 수열의 귀납적 정의(3)"
                  time="45분"
                  link="https://youtu.be/RTfAHeJreJg"
                />
                <Compo
                  title="76강 - 수학적 귀납법(4)"
                  time="45분"
                  link="https://youtu.be/VV_HX5OmuFU"
                />
                <Compo
                  title="77강 - 수학적 귀납법 기본다지기"
                  time="45분"
                  link="https://youtu.be/bB0dOAkzRp4"
                />
                <Compo
                  title="78강 - 수학적 귀납법 실력다지기"
                  time="45분"
                  link="https://youtu.be/hsOWvzqqMAM"
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

///////////////////////////////////
