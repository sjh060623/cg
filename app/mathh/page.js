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
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216954&authkey=!ACpEKeX2S7P12FA"
                />
                <Compo
                  title="2강 - 다항식의 연산(2)"
                  time="46분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216956&authkey=!ALDBJ9d_HP88GJU"
                />
                <Compo
                  title="3강 - 다항식의 연산(3)"
                  time="50분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216951&authkey=!ADJF_t5J_D6P_0U"
                />
                <Compo
                  title="4강 - 다항식의 연산(4)"
                  time="42분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216955&authkey=!AO9PawuaqbawYvk"
                />
                <Compo
                  title="5강 - 다항식의 연산(5)"
                  time="46분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216947&authkey=!AG3YY3jIdjcphkc"
                />
                <Compo
                  title="6강 - 다항식의 연산(6)"
                  time="43분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216948&authkey=!AIFN8E51lOd7XfU"
                />
                <Compo
                  title="7강 - 다항식의 연산(7)"
                  time="28분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216957&authkey=!AM2mEj9hfCm7zwo"
                />
                <Compo
                  title="8강 - 나머지정리(1)"
                  time="46분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216952&authkey=!ANAlkcc-ccY0tlk"
                />
                <Compo
                  title="9강 - 나머지정리(2)"
                  time="46분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216959&authkey=!AMDAXcOBwRMu-LM"
                />
                <Compo
                  title="10강 - 나머지정리(3)"
                  time="39분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216953&authkey=!AECv3KDb9JV_a8s"
                />
                <Compo
                  title="11강 - 나머지정리(4)"
                  time="50분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216945&authkey=!AJFtyXHd9Z8aEjo"
                />
                <Compo
                  title="12강 - 나머지정리(5)"
                  time="57분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216941&authkey=!AFOiEjcXAxs79Ik"
                />
                <Compo
                  title="13강 - 인수분해(1)"
                  time="52분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216949&authkey=!AK1ytkrx2LFwf6U"
                />
                <Compo
                  title="14강 - 인수분해(2)"
                  time="49분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216944&authkey=!AJwEoBvJiy3OiOc"
                />
                <Compo
                  title="15강 - 인수분해(3)"
                  time="45분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216950&authkey=!AG-JaNSsoB6ALCQ"
                />
                <Compo
                  title="16강 - 인수분해(4)"
                  time="41분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216946&authkey=!AMrN-cNZl3blUgM"
                />
                <Compo
                  title="17강 - 인수분해(5)"
                  time="43분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216943&authkey=!AEnTXrxJawgpEgY"
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
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216915&authkey=!AO3dlyedmB_zi4k"
                />
                <Compo
                  title="2강 - 복소수(2)"
                  time="41분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216932&authkey=!AHFAVwFBjvYhnWM"
                />
                <Compo
                  title="3강 - 복소수(3)"
                  time="48분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216939&authkey=!AHvPPSzSiGZkru4"
                />
                <Compo
                  title="4강 - 복소수(4)"
                  time="45분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216930&authkey=!ALv2kpVQWW1jZSw"
                />
                <Compo
                  title="5강 - 복소수(5)/이차방정식(1)"
                  time="38분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217014&authkey=!ANMGJcuchTzEN0A
                  "
                />
                <Compo
                  title="6강 - 이차방정식(2)"
                  time="53분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216929&authkey=!AJ9m-EVyYQtZB1w"
                />
                <Compo
                  title="7강 - 이차방정식(3)"
                  time="52분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216924&authkey=!AA-z5vYy1Eisx8U"
                />
                <Compo
                  title="8강 - 이차방정식(4)"
                  time="48분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216911&authkey=!AC7f2Vw8VNBEifw"
                />
                <Compo
                  title="9강 - 이차방정식(5)"
                  time="44분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216936&authkey=!ACpPvlcLJZ_EFLw"
                />
                <Compo
                  title="10강 - 이차방정식(6)"
                  time="44분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216926&authkey=!AP99Z-ToQvkm3PM"
                />
                <Compo
                  title="11강 - 이차방정식(7)"
                  time="39분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216919&authkey=!ACkIJe0mx-tTKfo"
                />
                <Compo
                  title="12강 - 이차방정식과 이차함수(1)"
                  time="51분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216921&authkey=!ALkzfy1t8TAXz-U"
                />
                <Compo
                  title="13강 - 이차방정식과 이차함수(2)"
                  time="42분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216925&authkey=!AMj6Fi4KCcSt308"
                />
                <Compo
                  title="14강 - 이차방정식과 이차함수(3)"
                  time="50분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216928&authkey=!ANKUadDunnlQaDA"
                />
                <Compo
                  title="15강 - 이차방정식과 이차함수(4)"
                  time="38분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216934&authkey=!AJ393dhQHWmBlzw"
                />
                <Compo
                  title="16강 - 이차방정식과 이차함수(5)"
                  time="40분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216940&authkey=!AB5fGiXb0UDrmhg"
                />
                <Compo
                  title="17강 - 이차방정식과 이차함수(6)/삼차방정식과 사차방정식(1)"
                  time="40분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217015&authkey=!ALsRuXNm_5MX3lM"
                />
                <Compo
                  title="18강 - 삼차방정식과 사차방정식(2)"
                  time="33분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216909&authkey=!AOTKS0_AHXh2W3g"
                />
                <Compo
                  title="19강 - 삼차방정식과 사차방정식(3)"
                  time="44분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216920&authkey=!AJn4EU9TkuCDDtU"
                />
                <Compo
                  title="20강 - 삼차방정식과 사차방정식(4)"
                  time="35분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216914&authkey=!AJETQAPSc4jeuDY"
                />
                <Compo
                  title="21강 - 삼차방정식과 사차방정식(5)"
                  time="37분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216918&authkey=!AAYlLykgnrO_yzg"
                />
                <Compo
                  title="22강 - 삼차방정식과 사차방정식(6)"
                  time="44분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216931&authkey=!AAGqb-emAyHfPvw"
                />
                <Compo
                  title="23강 - 삼차방정식과 사차방정식(7)"
                  time="47분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216927&authkey=!ABRPahj599Vt_2o"
                />
                <Compo
                  title="24강 - 삼차방정식과 사차방정식(8)/연립방정식(1)"
                  time="45분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217016&authkey=!ADo4Cw67PQSETG4"
                />
                <Compo
                  title="25강 - 연립방정식 (2)"
                  time="39분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216910&authkey=!AEPz6dKv8yCLrWs"
                />
                <Compo
                  title="26강 - 연립방정식 (3)"
                  time="43분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216933&authkey=!AFSlQiyCPkAkv34"
                />
                <Compo
                  title="27강 - 연립방정식 (4)"
                  time="30분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216938&authkey=!AGnSHwOZxwh1SwU"
                />
                <Compo
                  title="28강 - 연립방정식 (5)"
                  time="36분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216937&authkey=!ABcLbxZIoOSM2VU"
                />
                <Compo
                  title="29강 - 여러 가지 부등식(1)"
                  time="47분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216935&authkey=!AGqF8DSjVL3XhH8"
                />
                <Compo
                  title="30강 - 여러 가지 부등식(2)"
                  time="42분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216912&authkey=!AEcLtR4Rn2liFlU"
                />
                <Compo
                  title="31강 - 여러 가지 부등식(3)"
                  time="38분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216935&authkey=!AGqF8DSjVL3XhH8"
                />
                <Compo
                  title="32강 - 여러 가지 부등식(4)"
                  time="43분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216942&authkey=!AEAzYfkB-MZC4G4"
                />
                <Compo
                  title="33강 - 여러 가지 부등식(5)"
                  time="41분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216923&authkey=!ANb5K-X8q5Jae0A"
                />
                <Compo
                  title="34강 - 여러 가지 부등식(6)"
                  time="45분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216913&authkey=!AJopquyHHdx_ULU"
                />
                <Compo
                  title="35강 - 여러 가지 부등식(7)"
                  time="38분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216917&authkey=!AAr5curXVuPmcGs"
                />
                <Compo
                  title="36강 - 여러 가지 부등식(8)"
                  time="30분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216922&authkey=!AN0N6S_AogS9LvI"
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
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216966&authkey=!AFH2D3x5krog9i8"
                />
                <Compo
                  title="2강 - 평면좌표(2)"
                  time="45분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216972&authkey=!AIx80A8-o4hIOgk"
                />
                <Compo
                  title="3강 - 평면좌표(3)"
                  time="40분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216979&authkey=!ABS5oKQ1worBEWg"
                />
                <Compo
                  title="4강 - 평면좌표(4)"
                  time="40분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216971&authkey=!AL_f-1NuHccusGQ"
                />
                <Compo
                  title="5강 - 직선의 방정식(1)"
                  time="42분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216980&authkey=!AFDvWVrs3ulvHck"
                />
                <Compo
                  title="6강 - 직선의 방정식(2)"
                  time="36분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216976&authkey=!AMm0wRfZoVZgUz4"
                />
                <Compo
                  title="7강 - 직선의 방정식(3)"
                  time="44분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216973&authkey=!ADGAMHphs2DU5ZI"
                />
                <Compo
                  title="8강 - 직선의 방정식(4)"
                  time="34분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216961&authkey=!ANOLrMb0csSgU3Y"
                />
                <Compo
                  title="9강 - 직선의 방정식(5)"
                  time="46분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216968&authkey=!AGwXsoaobUhe-m0"
                />
                <Compo
                  title="10강 - 직선의 방정식(6)"
                  time="37분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216965&authkey=!AN7Ix1CoobW19Fo"
                />
                <Compo
                  title="11강 - 직선의 방정식(7)"
                  time="44분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216962&authkey=!ALLr9-xV0y2pJJs"
                />
                <Compo
                  title="12강 - 원의 방정식(1)"
                  time="47분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216981&authkey=!ABt9Da2f9V2RVeQ"
                />
                <Compo
                  title="13강 - 원의 방정식(2)"
                  time="44분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216964&authkey=!AMymIPe063kPuqU"
                />
                <Compo
                  title="14강 - 원의 방정식(3)"
                  time="40분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216977&authkey=!AHJ1yN08HyG651E"
                />
                <Compo
                  title="15강 - 원의 방정식(4)"
                  time="38분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216978&authkey=!AJajRIwkDHcbTm8"
                />
                <Compo
                  title="16강 - 원의 방정식(5)"
                  time="47분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216963&authkey=!AA-R8WJs-YTYg88"
                />
                <Compo
                  title="17강 - 원의 방정식(6)"
                  time="44분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216970&authkey=!AIQZxSM2Hth7seE"
                />
                <Compo
                  title="18강 - 원의 방정식(7)"
                  time="32분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216969&authkey=!AGixBKDEvoV0ok4"
                />
                <Compo
                  title="19강 - 도형의 이동(1)"
                  time="39분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216967&authkey=!AJWAsqr-9fMrX9I"
                />
                <Compo
                  title="20강 - 도형의 이동(2)"
                  time="40분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216974&authkey=!ALfxWj7hDazgCjk"
                />
                
                <Compo
                  title="21강 - 도형의 이동(3)"
                  time="25분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216960&authkey=!AGyoUgcw9jDfdj0"
                />
                <Compo
                  title="22강 - 도형의 이동(4)"
                  time="51분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216975&authkey=!AMgR2vDRF7-g1AM"
                />
                <Compo
                  title="23강 - 도형의 이동(5)"
                  time="24분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%216958&authkey=!ACKgg1Bg4QaP1To"
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
