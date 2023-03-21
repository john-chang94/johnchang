import { useEffect } from "react";
import MobileDetect from "mobile-detect";

export const OpenDev = () => {
  useEffect(() => {
    const md = new MobileDetect(window.navigator.userAgent);

    console.log(md.os());
  }, []);

  return <div>Open dev</div>;
};
