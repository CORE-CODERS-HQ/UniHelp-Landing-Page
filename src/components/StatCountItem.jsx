// import { useState, useEffect } from "react";

// export default function StatCountItem({ number, label, letterf, letterb }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let counter = setInterval(() => {
//       setCount((prev) => {
//         if (prev < number) {
//           return prev + 1;
//         } else {
//           clearInterval(counter);
//           return prev;
//         }
//       });
//     }, 30);

//     return () => clearInterval(counter);
//   }, [number]);

//   return (
//     <div className="text-center">
//       <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
//         {letterf}
//         {count}
//         {letterb}
//       </div>
//       <div className="text-gray-600">{label}</div>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";

export default function StatCountItem({
  number,
  label,
  letterf,
  letterb,
  large,
  letterm,
}) {
  const [count, setCount] = useState(large == true ? 100000 : 0);
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  // Observe element visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCount(large == true ? 1000 : 0); // reset counter each time it enters
          setStart(true); // trigger animation
        } else {
          setStart(false); // stop if it leaves
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let timer;

    function tick() {
      setCount((prev) => {
        if (prev < number && !large) {
          return prev + 1;
        } else if (large && prev < 1000000) {
          return prev + 1000;
        } else {
          return prev; 
        }
      });

      
      let delay = large ? 1 : 47;

      timer = setTimeout(tick, delay);
    }

    tick();

    return () => clearTimeout(timer);
  }, [number, start, large]);

  return (
    <div className="text-center" ref={ref}>
      <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
        {letterf}
        {count >= 1_000_000
          ? (count / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M"
          : count >= 1_000
          ? (count / 1_000).toFixed(1).replace(/\.0$/, "") + "K"
          : count.toLocaleString()}
        {letterb}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}
