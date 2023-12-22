"use client";

import "node_modules/video-react/dist/video-react.css";
import { useState } from "react";
import { Player, ControlBar } from "video-react";

export default function Compo({ title, time, link }) {
  const [open, setOpen] = useState(false);
  const onToggle = (event) => {
    event.preventDefault();
    setOpen(!open);
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
            <ul>
              <li>
                <Player src={link} autoPlay={false}>
                  <ControlBar autoHide={true} className="my-class" />
                </Player>
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
