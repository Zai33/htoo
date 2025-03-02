import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


 /////////////////////////////////////////////////////////
// // import { useState, useEffect } from "react";
// // import { motion } from "framer-motion";

// // export default function App() {
// //   const [doorLocked, setDoorLocked] = useState(false);
// //   const [motionDetected, setMotionDetected] = useState(false);
// //   const [lightsOn, setLightsOn] = useState(false);
// //   const [gasLeak, setGasLeak] = useState(false);
// //   const [temperature, setTemperature] = useState(25);
// //   const [garageOpen, setGarageOpen] = useState(false);
// //   const [running, setRunning] = useState(false);

// //   useEffect(() => {
// //     if (running) {
// //       const interval = setInterval(() => {
// //         setMotionDetected(Math.random() > 0.5);
// //         setTemperature((prev) => prev + (Math.random() * 2 - 1));
// //         setGarageOpen(Math.random() > 0.5);
// //         setLightsOn(Math.random() > 0.5);
// //       }, 5000);
// //       return () => clearInterval(interval);
// //     }
// //   }, [running]);

// //   return (
// //     <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center p-8 font-sans">
// //       <h1 className="text-4xl font-bold text-gray-800 mb-8">
// //         🏠 Smart Home System
// //       </h1>

// //       {/* Status Cards */}
// //       <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {/* Security Card */}
// //         <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
// //           <h3 className="text-lg font-semibold text-gray-800">🔐 Security</h3>
// //           <p className={`text-2xl font-bold ${doorLocked ? "text-blue-500" : "text-gray-500"}`}>
// //             {doorLocked ? "Locked" : "Unlocked"}
// //           </p>
// //         </div>

// //         {/* Motion Card */}
// //         <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
// //           <h3 className="text-lg font-semibold text-gray-800">🚶 Motion</h3>
// //           <p className={`text-2xl font-bold ${motionDetected ? "text-yellow-500" : "text-gray-500"}`}>
// //             {motionDetected ? "Detected" : "No Motion"}
// //           </p>
// //         </div>

// //         {/* Lights Card */}
// //         <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
// //           <h3 className="text-lg font-semibold text-gray-800">💡 Lights</h3>
// //           <p className={`text-2xl font-bold ${lightsOn ? "text-yellow-500" : "text-gray-500"}`}>
// //             {lightsOn ? "ON" : "OFF"}
// //           </p>
// //         </div>

// //         {/* Garage Card */}
// //         <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
// //           <h3 className="text-lg font-semibold text-gray-800">🚘 Garage</h3>
// //           <p className={`text-2xl font-bold ${garageOpen ? "text-green-500" : "text-gray-500"}`}>
// //             {garageOpen ? "OPEN" : "CLOSED"}
// //           </p>
// //         </div>

// //         {/* Gas Card */}
// //         <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
// //           <h3 className="text-lg font-semibold text-gray-800">🔥 Gas</h3>
// //           <p className={`text-2xl font-bold ${gasLeak ? "text-red-500" : "text-gray-500"}`}>
// //             {gasLeak ? "ON" : "OFF"}
// //           </p>
// //         </div>

// //         {/* Temperature Card */}
// //         <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
// //           <h3 className="text-lg font-semibold text-gray-800">🌡 Temperature</h3>
// //           <p className="text-2xl font-bold text-purple-500">
// //             {temperature.toFixed(1)}°C
// //           </p>
// //         </div>
// //       </div>

// //       {/* Control Buttons */}
// //       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 w-full max-w-4xl">
// //         {/* Lock Door Button */}
// //         <motion.button
// //           className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 hover:shadow-lg transition-shadow duration-300"
// //           onClick={() => setDoorLocked(true)}
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //         >
// //           🔒 Lock Door
// //         </motion.button>

// //         {/* Unlock Door Button */}
// //         <motion.button
// //           className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 hover:shadow-lg transition-shadow duration-300"
// //           onClick={() => setDoorLocked(false)}
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //         >
// //           🔓 Unlock Door
// //         </motion.button>

// //         {/* Gas ON Button */}
// //         <motion.button
// //           className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 hover:shadow-lg transition-shadow duration-300"
// //           onClick={() => setGasLeak(true)}
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //         >
// //           ⛽ Gas ON
// //         </motion.button>

// //         {/* Gas OFF Button */}
// //         <motion.button
// //           className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 hover:shadow-lg transition-shadow duration-300"
// //           onClick={() => setGasLeak(false)}
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //         >
// //           🛑 Gas OFF
// //         </motion.button>

// //         {/* Start Automation Button */}
// //         <motion.button
// //           className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 hover:shadow-lg transition-shadow duration-300"
// //           onClick={() => setRunning(true)}
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //         >
// //           ▶ Start Automation
// //         </motion.button>

// //         {/* Stop Automation Button */}
// //         <motion.button
// //           className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 hover:shadow-lg transition-shadow duration-300"
// //           onClick={() => setRunning(false)}
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //         >
// //           ⏹ Stop Automation
// //         </motion.button>
// //       </div>
// //     </div>
// //   );
// // }