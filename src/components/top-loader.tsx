"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "@/app/globals.css";

NProgress.configure({ showSpinner: false });

export default function TopLoader() {
  const pathname = usePathname();
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (prevPath.current !== pathname) {
      NProgress.start();
      prevPath.current = pathname;
      setTimeout(() => {
        NProgress.done();
      }, 300);
    }
  }, [pathname]);

  return null;
}
