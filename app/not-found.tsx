"use client"
import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent || window.navigator.vendor || (window as any).opera;
      const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
      const isMac = /Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent);
      
      if (isIOS || isMac) {
        window.location.replace("https://apps.apple.com/us/app/wiqi-application/id6746743906");
      } else {
        window.location.replace("https://play.google.com/store/apps/details?id=com.wiqi.app");
      }
    }
  }, []);

  return null;
}
