import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const getTokenFromCookie = () => {
  return !!Cookies.get("token");
};

export const useAuth = () => {
  const [isLogin, setIsLogin] = useState(() => {
    return getTokenFromCookie();
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleCookieChange = () => {
      const newToken = getTokenFromCookie();
      if (newToken !== isLogin) {
        setLoading(true);
        setIsLogin(newToken);
      }
      setLoading(false)
    };

    const observer = new MutationObserver(handleCookieChange);
    observer.observe(document, { subtree: true, childList: true });

    return () => {
      observer.disconnect();
    };
  }, [isLogin]);

  return {
    isLogin,
    setIsLogin,
    loading
  };
};
