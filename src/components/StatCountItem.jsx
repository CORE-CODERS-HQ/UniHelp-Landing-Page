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

export default function StatCountItem({ number, label, letterf, letterb }) {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  // Observe element visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCount(0);     // reset counter each time it enters
          setStart(true);  // trigger animation
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

  // Run counter when start = true
  useEffect(() => {
    if (!start) return;

    let counter = setInterval(() => {
      setCount((prev) => {
        if (prev < number) {
          return prev + 1;
        } else {
          clearInterval(counter);
          return prev;
        }
      });
    }, 30);

    return () => clearInterval(counter);
  }, [number, start]);

  return (
    <div className="text-center" ref={ref}>
      <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
        {letterf}
        {count}
        {letterb}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}
