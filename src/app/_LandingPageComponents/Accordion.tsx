"use client";

import { Instrument_Sans } from "next/font/google";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-instrument-sans",
});

import React, { useEffect, useRef, useState } from "react";

import "./Accordion.css";

function Accordion(props: { title: string; content: string }) {
  const [active, setActive] = useState(false);
  const content = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    console.log("Height for ", props.title, ": ", height);
  }, [height]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current?.scrollHeight}px`);
  }

  return (
    <div className={`accordion__section ${instrumentSans.className}`}>
      <div className={`accordion ${active ? "active" : ""}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}</p>
        <span style={{ marginLeft: "20px" }}>{active ? "-" : "+"}</span>
      </div>
      <div ref={content} style={{ maxHeight: `${height}` }} className="accordion__content">
        <div className="accordion__text" dangerouslySetInnerHTML={{ __html: props.content }} />
      </div>
    </div>
  );
}

export default Accordion;
