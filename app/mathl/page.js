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
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217031&authkey=!ANCcAL0gb57lGeo"
                />
                <Compo
                  title="2강 - 집합(2)"
                  time="42분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217025&authkey=!AFwliegOoYPlpwY"
                />
                <Compo
                  title="3강 - 집합(3)"
                  time="42분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217029&authkey=!APUDWVBS7dsKumM"
                />
                <Compo
                  title="4강 - 집합(4)"
                  time="47분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217028&authkey=!AIWih9c3-PImhJ8"
                />
                <Compo
                  title="5강 - 집합(5)"
                  time="40분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217030&authkey=!AK8r3cOA5l_K3Ew"
                />
                <Compo
                  title="6강 - 집합(6)"
                  time="33분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217027&authkey=!AOzddIAMFYH6rqY"
                />
                <Compo
                  title="7강 - 집합(7)"
                  time="37분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217032&authkey=!AON1lxrvCqcOBKY"
                />
                <Compo
                  title="8강 - 명제(1)"
                  time="41분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217035&authkey=!AJjJiBQLYFEFe3I"
                />
                <Compo
                  title="9강 - 명제(2)"
                  time="42분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217024&authkey=!AMsm50uFy02_pnM"
                />
                <Compo
                  title="10강 - 명제(3)"
                  time="44분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217022&authkey=!AHkJfoK7f6x8cz8"
                />
                <Compo
                  title="11강 - 명제(4)"
                  time="45분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217026&authkey=!ADY6-SJKggLsfTM"
                />
                <Compo
                  title="12강 - 명제(5)"
                  time="37분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217021&authkey=!ACogM_cGqEQgpmk"
                />
                <Compo
                  title="13강 - 명제(6)/절대부등식(1)"
                  time="48분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217076&authkey=!AFuc-zSo9dpUvQQ"
                />
                <Compo
                  title="14강 - 절대부등식(2)"
                  time="42분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217034&authkey=!ADDVHIa3dVyO-V8"
                />
                <Compo
                  title="15강 - 절대부등식(3)"
                  time="37분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217023&authkey=!ALesI5X8gBrveuE"
                />
                <Compo
                  title="16강 - 절대부등식(4)"
                  time="58분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217077&authkey=!AI34QtIt-LNSwmQ"
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
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217071&authkey=!AMrTsxKss_SF6r8"
                />
                <Compo
                  title="2강 - 함수(2)"
                  time="40분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217058&authkey=!AGQxvQ4FTUsZc_Y"
                />
                <Compo
                  title="3강 - 함수(3)"
                  time="47분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217061&authkey=!ACKUT3eheywxUC0"
                />
                <Compo
                  title="4강 - 함수(4)"
                  time="43분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217063&authkey=!ALOzius7U0G_ovk"
                />
                <Compo
                  title="5강 - 함수(5)"
                  time="47분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217064&authkey=!AMpoIgEJ2mU8hK0"
                />
                <Compo
                  title="6강 - 함수(6)"
                  time="38분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217070&authkey=!AA_ItR24JDG-Abo"
                />
                <Compo
                  title="7강 - 함수(7)"
                  time="41분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217073&authkey=!ALIz9Eih8zStGNg"
                />
                <Compo
                  title="8강 - 함수(8)"
                  time="42분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217067&authkey=!AASFRy3xTkf07aQ"
                />
                <Compo
                  title="9강 - 함수(9)"
                  time="47분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217065&authkey=!AMm1BrUmv_g_jqw"
                />
                <Compo
                  title="10강 - 함수(10)"
                  time="40분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217069&authkey=!AEC04HZn6hry7_o"
                />
                <Compo
                  title="11강 - 함수(11)"
                  time="46분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217052&authkey=!ADScuZiOhbi7c98"
                />
                <Compo
                  title="12강 - 유리식과 유리함수(1)"
                  time="42분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217059&authkey=!AGRMZsjBb2rfvSg"
                />
                <Compo
                  title="13강 - 유리식과 유리함수(2)"
                  time="41분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217062&authkey=!AHdGqVCJGn1I-oc"
                />
                <Compo
                  title="14강 - 유리식과 유리함수(3)"
                  time="41분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217072&authkey=!AFhj5VrKjrR31Kg"
                />
                <Compo
                  title="15강 - 유리식과 유리함수(4)"
                  time="45분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217057&authkey=!AMnc0oNhRUuTqbA"
                />
                <Compo
                  title="16강 - 유리식과 유리함수(5)"
                  time="37분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217055&authkey=!ANLP42KNOqKo3Os"
                />
                <Compo
                  title="17강 - 유리식과 유리함수(6)"
                  time="48분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217056&authkey=!ACTtTMt1p-7S5Kc"
                />
                <Compo
                  title="18강 - 유리식과 유리함수(7)"
                  time="42분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217066&authkey=!AFV0vNQzr-NKwZY"
                />
                <Compo
                  title="19강 - 유리식과 유리함수(8)/무리식과 무리함수(1)"
                  time="47분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217139&authkey=!ANHWK53JaMqwCIU"
                />
                <Compo
                  title="20강 - 무리식과 무리함수(2)"
                  time="40분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217075&authkey=!AKNrDAcoJh-UaRw"
                />
                <Compo
                  title="21강 - 무리식과 무리함수(3)"
                  time="48분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217054&authkey=!APOD73ZRq2AegZo"
                />
                <Compo
                  title="22강 - 무리식과 무리함수(4)"
                  time="49분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217053&authkey=!AAh9gy2D5WTS9Lk"
                />
                <Compo
                  title="23강 - 무리식과 무리함수(5)"
                  time="49분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217074&authkey=!AAJ-MEeiQyp4v3U"
                />
                <Compo
                  title="24강 - 무리식과 무리함수(6)"
                  time="36분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217068&authkey=!ADA_JZ3FzxA88TU"
                />
                <Compo
                  title="25강 - 무리식과 무리함수(7)"
                  time="52분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217060&authkey=!AJl_uRk_ODBmXUI"
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
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217050&authkey=!AA9xFDxzoh044uc"
                />
                <Compo
                  title="2강 - 경우의 수(2)"
                  time="52분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217038&authkey=!AOnRVCluqMzxWZo"
                />
                <Compo
                  title="3강 - 경우의 수(3)"
                  time="50분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217042&authkey=!ACXB6J1O4fMY_y4"
                />
                <Compo
                  title="4강 - 경우의 수(4)"
                  time="48분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217037&authkey=!ABObZty1zG0-nh4"
                />
                <Compo
                  title="5강 - 경우의 수(5)"
                  time="44분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217039&authkey=!APKcNJ-b_e4bMP4"
                />
                <Compo
                  title="6강 - 순열(1)"
                  time="55분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217045&authkey=!AN7zC1Xv899_crE"
                />
                <Compo
                  title="7강 - 순열(2)"
                  time="51분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217041&authkey=!AHfsgwpojOhcogM"
                />
                <Compo
                  title="8강 - 순열(3)"
                  time="45분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217044&authkey=!AGottP7asTUL14M"
                />
                <Compo
                  title="9강 - 순열(4)"
                  time="44분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217036&authkey=!ADCL45Z9w6zKxEc"
                />
                <Compo
                  title="10강 - 순열(5)"
                  time="43분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217046&authkey=!AJTf0yXBgWwCXIg"
                />
                <Compo
                  title="11강 - 조합(1)"
                  time="49분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217043&authkey=!AHbz3TsJ4kpGSDo"
                />
                <Compo
                  title="12강 - 조합(2)"
                  time="54분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217049&authkey=!AGQ8Q9d06wo9beg"
                />
                <Compo
                  title="13강 - 조합(3)"
                  time="34분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217051&authkey=!AA-QjV8MgNIDVDU"
                />
                <Compo
                  title="14강 - 조합(4)"
                  time="48분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217047&authkey=!AF5wtGHFa4TWAM4"
                />
                <Compo
                  title="15강 - 조합(5)"
                  time="51분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217048&authkey=!AER9GxxFdRKFfNU"
                />
                <Compo
                  title="16강 - 조합(6)"
                  time="41분"
                  link="https://onedrive.live.com/download?resid=92410439578FF532%217040&authkey=!AB22-GSJMW3HhCI"
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
