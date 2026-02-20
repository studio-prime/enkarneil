"use client";

import { useEffect, useState } from "react";

const COOKIE_NAME = "cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${COOKIE_NAME}=`));
    if (!stored) setVisible(true);
  }, []);

  const accept = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    document.cookie = `${COOKIE_NAME}=accepted;expires=${date.toUTCString()};path=/;SameSite=Lax`;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 p-4 md:p-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-lg border border-[#e0e0e0] bg-white p-4 shadow-lg md:flex-row md:items-center md:justify-between md:p-6">
        <p className="font-sans text-sm font-light text-[#3a3a3a]">
          This website uses cookies to improve your experience.{" "}
          <a href="/about" className="underline underline-offset-4">
            Learn more
          </a>
        </p>
        <button
          onClick={accept}
          className="shrink-0 border border-[#1a1a1a] px-6 py-2 font-sans text-[12px] font-light uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
