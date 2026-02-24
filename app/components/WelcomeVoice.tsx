// "use client";

// import { useEffect, useRef } from "react";

// export default function WelcomeVoice() {
//   const hasSpoken = useRef(false);

//   useEffect(() => {
//     const speak = () => {
//       if (hasSpoken.current) return;

//       const voices = window.speechSynthesis.getVoices();

//       const femaleVoice =
//         voices.find((voice) =>
//           voice.name.toLowerCase().includes("zira")
//         ) ||
//         voices.find((voice) =>
//           voice.name.toLowerCase().includes("female")
//         ) ||
//         voices.find((voice) =>
//           voice.name.toLowerCase().includes("google uk english female")
//         ) ||
//         voices[0];

//       const utterance = new SpeechSynthesisUtterance(
//         "Welcome to RSH GROUP. Empowering minds, and shaping the future of education."
//       );

//       utterance.voice = femaleVoice;

//       // 👇 Make it slow & elegant
//       utterance.rate = 0.75;   // slower
//       utterance.pitch = 0.95;  // softer tone
//       utterance.volume = 1;

//       window.speechSynthesis.speak(utterance);

//       hasSpoken.current = true;
//     };

//     window.addEventListener("click", speak);

//     return () => {
//       window.removeEventListener("click", speak);
//     };
//   }, []);

//   return null;
// }
