import Link from "next/link";
import React from "react";

export default function MyLink({ href, children, className, style, ...props }) {
  return (
    <Link href={href} {...props}>
      <a
        style={style ? style : { textDecoration: "none" }}
        className={className}
      >
        {children}
      </a>
    </Link>
  );
}
