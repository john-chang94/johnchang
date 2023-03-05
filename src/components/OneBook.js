import MobileDetect from "mobile-detect";
import { useEffect } from "react";

export const OneBook = () => {
  const openDev = () => {
    window.location.replace("exp://192.168.1.101:19000/--/DashboardScreen");
  };

  const openScheme = () => {
    window.location.replace("myapp://ProDetails?proId=1NdudyrUJmGOjDWyxUsz");
  };

  const openStore = () => {
    window.location.replace(
      "https://play.google.com/store/apps/details?id=com.onebook.dev"
    );
  };

  useEffect(() => {
    const md = new MobileDetect(window.navigator.userAgent);

    console.log(md.os());
  }, []);

  return (
    <div className="h-100 flex flex-center flex-col">
      <h2>Hello from OneBook!</h2>
      <button onClick={openDev}>OPEN WITH DEV</button>
      <button onClick={openScheme}>OPEN WITH SCHEME</button>
      <button onClick={openStore}>OPEN PLAY STORE</button>
    </div>
  );
};
