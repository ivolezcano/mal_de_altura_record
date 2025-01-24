'use client'
import styles from '@/app/styles/Calendly.module.css'
import React, { useEffect } from "react";

const EmbedCalendly= ({ url }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <div
      className={`calendly-inline-widget ${styles.calendlyreal}`}
      data-url={url}
    ></div>
  );
};

export default EmbedCalendly