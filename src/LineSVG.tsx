import { useEffect, useRef } from "react";

export function LineSVG() {
  const refLine = useRef<SVGPathElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!refLine || !refLine.current) {
        return;
      }

      const path = refLine.current;

      const scrollPercentage =
        document.documentElement.scrollTop /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);

      path.style.strokeDasharray = `${1 - scrollPercentage} 1px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [refLine]);

  return (
    <svg
      viewBox="0 0 1220 1687"
      fill="none"
      className="hidden md:block absolute left-10 right-10 select-none pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 1686.5L2 1607C2 1589.33 16.3269 1575 34 1575L1186 1575C1203.67 1575 1218 1560.67 1218 1543L1218 795.001C1218 777.327 1203.67 763.001 1186 763.001L34.021 763.001C16.3397 763.001 2.00945 748.661 2.02104 730.98L2.50015 -0.000122048"
        stroke="#3887FD"
        strokeOpacity="0.15"
        strokeWidth="3"
      ></path>
      <path
        ref={refLine}
        d="M2 1686.5L2 1607C2 1589.33 16.3269 1575 34 1575L1186 1575C1203.67 1575 1218 1560.67 1218 1543L1218 795.001C1218 777.327 1203.67 763.001 1186 763.001L34.021 763.001C16.3397 763.001 2.00945 748.661 2.02104 730.98L2.50015 -0.000122048"
        stroke="#3b82f6"
        strokeOpacity="1"
        strokeLinecap="round"
        strokeWidth="3"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="1px 1px"
      ></path>
    </svg>
  );
}
