import { useEffect } from "react";

export const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const listener = (event) => {
      // If the ref doesn't exist or we clicked INSIDE the ref, do nothing
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      // If we clicked OUTSIDE, run the callback (usually setShowDropdown(false))
      callback();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener); // Good for mobile!

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
