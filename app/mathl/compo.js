"use client";

import "node_modules/video-react/dist/video-react.css";
import { useState, useRef } from "react";
import ReactPlayer from "react-player/youtube";
import styled from "styled-components";

export default function Compo({ title, time, link }) {
  const { playing, setPlaying, playlist } = link; // 상위 컴포넌트에 playing, setPlaying true로 정의
  const playerRef = useRef(null); // ReactPlayer의 ref 속성에 삽입해 메소드 제어 (변경된 재생 시간에 따른 실제 영상 재생 위치)
  const [played, setPlayed] = useState(0); // 현재 재생 시간 (0부터 0.999999, 퍼센트로 표기된 총 재생 시간 대비 현재 시간 값)
  const [duration, setDuration] = useState(0); // 총 재생 시간
  const [ready, setReady] = useState(false); // onReady에서 영상이 로드된 상태값을 받아 사용
  const [curr, setCurr] = useState(link);
  const [nowPlay, setNowPlay] = useState(true);

  const onEnded = () => {
    setCurr(link);
    setPlaying(true);
  };

  // formatTime 함수 '분:초' 형태로 리턴
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  const [open, setOpen] = useState(false);
  const onToggle = (event) => {
    event.preventDefault();
    setOpen(!open);
  };

  const handlePlayBtn = () => {
    if (nowPlay === false) {
      setNowPlay(true);
    } else {
      setNowPlay(false);
    }
  };

  return (
    <>
      <details
        onContextMenu={(e) => {
          e.preventDefault();
        }}
        open={open}
        onToggle={onToggle}
      >
        {open ? (
          <>
            <summary>
              {title} {"　|　"} {time}
            </summary>
            <ul className="w-full h-96">
              <li>
                <MusicPlayerWrap>
                  <div className="w-full h-80 absolute z-50" />
                  <ReactPlayer
                    url={curr} // 링크 배열로 삽입 가능(종료 시 onEnded없이도 자동으로 다음 인덱스의 링크 재생)
                    ref={playerRef} // 실제 영상 재생 위치 조절
                    className="player"
                    playing={nowPlay} // 재생 상태, true - 재생중 / false - 일시 중지
                    controls={false} // 유튜브 재생바 노출 여부
                    width="100%"
                    pip={true}
                    height="320"
                    onEnded={onEnded} // 현재 영상 종료 시
                    onReady={() => setReady(true)} // 영상이 로드되어 준비된 상태
                    onDuration={setDuration} // 총 재생 시간
                    onProgress={({ played }) => setPlayed(played)} // 현재 재생 시간
                  />
                </MusicPlayerWrap>
                <div className="flex flex-row w-full">
                  <button onClick={handlePlayBtn}>
                    {nowPlay ? "▶️" : "⏯️"}
                  </button>
                  <ProgressBar>
                    <time dateTime="P1S">{formatTime(played * duration)}</time>
                    <input
                      type="range"
                      min="0"
                      max="0.999999"
                      step="any"
                      value={played}
                      disabled={!ready}
                      style={{ "--progress": `${played * 100}%` }}
                      onChange={(e) => {
                        setPlayed(parseFloat(e.target.value)); // 재생 포인트 위치 실시간 변경
                        playerRef.current.seekTo(parseFloat(e.target.value)); // 실제 영상 재생 위치 실시간 변경
                      }}
                    />
                    <time dateTime="P1S">{formatTime(duration)}</time>
                  </ProgressBar>
                </div>
              </li>
            </ul>
          </>
        ) : (
          <summary>
            {title} {"　|　"} {time}
          </summary>
        )}
      </details>
    </>
  );
}

/*

                <div className="w-full h-full">
                  <div className="w-full h-80 absolute z-50 " />
                  <ReactPlayer
                    url={link}
                    controls={false}
                    width="100%"
                    height="320px"
                    playing={true}
                    loop={true}
                  />
                </div>

                */

const MusicPlayerWrap = styled.div`
  position: relative;
  border-radius: 10px;
  width: full;
  height: 320px;
  z-index: 2;
  .player {
    position: absolute;
    top: 0%;
    left: 0px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
  }
`;

const ProgressBar = styled.div`
  bottom: 0px;
  width: 100%;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: var(--font-sm);
  color: #000;
  &:disabled {
    display: none;
  }
  input {
    width: 100%;
    height: 3px;
    border-radius: 10px;
    background: linear-gradient(
      to right,
      #fff var(--progress),
      rgba(250, 250, 250, 0.5) 0
    );

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 10px;
      height: 10px;
      background: #fff;
      border-radius: 50%;
    }
  }
`;
