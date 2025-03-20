import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ScrollNavigator({ upPath, downPath }) {
  const navigate = useNavigate();
  const location = useLocation();
  const lastScrollTime = useRef(0);

  useEffect(() => {
    const handleScroll = (event) => {
      const now = Date.now();
      if (now - lastScrollTime.current < 1000) return; // Prevent rapid navigation

      const deltaY = event.deltaY || (event.touches?.[0]?.clientY || 0);

      if (deltaY > 50 && downPath && location.pathname !== downPath) {
        navigate(downPath);
        lastScrollTime.current = now;
      } else if (deltaY < -50 && upPath && location.pathname !== upPath) {
        navigate(upPath);
        lastScrollTime.current = now;
      }
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchmove", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [navigate, upPath, downPath, location.pathname]);

  return null;
}

export default ScrollNavigator;
