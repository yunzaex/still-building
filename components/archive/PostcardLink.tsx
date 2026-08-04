"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

type PostcardLinkProps = {
  href: string;
  className: string;
  style: React.CSSProperties;
  label: string;
  children: React.ReactNode;
};

export default function PostcardLink({
  href,
  className,
  style,
  label,
  children,
}: PostcardLinkProps) {
  const router = useRouter();
  const [isPressed, setIsPressed] = useState(false);
  const pointerType = useRef("");

  return (
    <Link
      href={href}
      className={`${className}${isPressed ? " is-pressed" : ""}`}
      style={style}
      aria-label={label}
      onPointerDown={(event) => {
        pointerType.current = event.pointerType;
        setIsPressed(true);
      }}
      onPointerCancel={() => setIsPressed(false)}
      onClick={(event) => {
        const isModifiedClick =
          event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;

        if (isModifiedClick || pointerType.current === "mouse") {
          setIsPressed(false);
          return;
        }

        event.preventDefault();
        window.setTimeout(() => router.push(href), 140);
      }}
    >
      {children}
    </Link>
  );
}
