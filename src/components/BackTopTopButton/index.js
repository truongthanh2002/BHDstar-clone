import React from "react";
import { useEffect, useState } from "react";
import "./style.css";

function BackTopTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <div id="toTop" style={{ display: "block" }} onClick={scrollUp}>
          Lên Đầu Trang
        </div>
      )}
    </div>
  );
}

export default BackTopTopButton;
