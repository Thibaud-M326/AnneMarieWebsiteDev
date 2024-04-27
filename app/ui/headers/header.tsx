'use client'

import { useScreenSize } from "@/app/lib/screenSize";
import MobileHeader from "@/app/ui/headers/mobileHeader"
import DesktopHeader from "@/app/ui/headers/desktopHeader"

export default function Header() {
  const screenSize = useScreenSize();

  console.log(screenSize);

  if (screenSize.screenSize == 'xs') {
    return <MobileHeader />
  } else {
    return <DesktopHeader />
  }

}