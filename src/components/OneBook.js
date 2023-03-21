import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MobileDetect from "mobile-detect";

export const OneBook = () => {
  const [url, setUrl] = useState(
    "onebook://johnchang.me/proDetails?proId=1NdudyrUJmGOjDWyxUsz"
  );
  const mounted = useRef();

  const md = new MobileDetect(
    "Mozilla/5.0 (Linux; U; Android 4.0.3; en-in; SonyEricssonMT11i" +
      " Build/4.1.A.0.562) AppleWebKit/534.30 (KHTML, like Gecko)" +
      " Version/4.0 Mobile Safari/534.30"
  );

  console.log(md.os());

  const navigate = useNavigate();

  const setDev = () => {
    setUrl(
      "exp://192.168.1.101:19000/--/ProDetails?proId=1NdudyrUJmGOjDWyxUsz"
    );
  };

  const setScheme = () => {
    setUrl("onebook://johnchang.me/ProDetails?proId=1NdudyrUJmGOjDWyxUsz");
  };

  const setStore = () => {
    setUrl("https://play.google.com/store/apps/details?id=com.onebook.dev");
  };

  const openDev = () => {
    window.location.replace(
      "exp://192.168.1.101:19000/--/ProDetails?proId=1NdudyrUJmGOjDWyxUsz"
    );
  };

  const openScheme = () => {
    window.location.replace(
      "onebook://johnchang.me/ProDetails?proId=1NdudyrUJmGOjDWyxUsz"
    );
  };

  const openStore = () => {
    window.location.replace(
      "https://play.google.com/store/apps/details?id=com.onebook.dev"
    );
  };

  const goToScheme = () => {
    navigate("/ProDetails?proId=1NdudyrUJmGOjDWyxUsz");
  };

  const openUrl = () => {
    window.location.replace(url);
  };

  useEffect(() => {
    mounted.current = true;

    window.location.replace(
      "onebook://johnchang.me/ProDetails?proId=1NdudyrUJmGOjDWyxUsz"
    );

    console.log(mounted.current)
    // setTimeout(() => {
      // if (mounted.current === true) {
        window.location.replace(
          "https://onelink.to/onebook"
        );
      // }
    // }, 2000);

    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <div className="h-100 flex flex-center flex-col">
      <h4>OneBook deep link testing</h4>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        autoCorrect="none"
        autoCapitalize="none"
        className="input"
      />
      <div className="flex">
        <div className="flex flex-col my">
          <button className="btn" onClick={setDev}>
            SET DEV
          </button>
          <button className="btn" onClick={setScheme}>
            SET SCHEME
          </button>
          <button className="btn" onClick={setStore}>
            SET STORE
          </button>
          <button className="btn" onClick={openUrl}>
            OPEN URL
          </button>
        </div>
        <div className="flex flex-col my">
          <button className="btn" onClick={openDev}>
            OPEN DEV
          </button>
          <button className="btn" onClick={openScheme}>
            OPEN SCHEME
          </button>
          <button className="btn" onClick={openStore}>
            OPEN STORE
          </button>
        </div>
        <div className="flex flex-col my">
          <button className="btn" onClick={goToScheme}>
            GO TO SCHEME
          </button>
        </div>
      </div>
    </div>
  );
};
