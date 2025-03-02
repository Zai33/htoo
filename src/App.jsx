import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "ldrs/cardio";
import { cardio, dotSpinner } from "ldrs";

cardio.register();

export default function App() {
  const [doorLocked, setDoorLocked] = useState(false);
  const [motionDetected, setMotionDetected] = useState(false);
  const [lightsOn, setLightsOn] = useState(false);
  const [gasLeak, setGasLeak] = useState(false);
  const [temperature, setTemperature] = useState(25);
  const [garageOpen, setGarageOpen] = useState(false);
  const [running, setRunning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [log, setLog] = useState("");

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        const motion = Math.random() > 0.5;
        setIsLoading(true);
        setMotionDetected(motion);
        setLightsOn(motion);
        setGarageOpen(motion);
        // setLog(
        //   (prevLog) =>
        //     prevLog +
        //     (motion
        //       ? `\nMotion detected\nLights ON\nGarage OPEN`
        //       : `\nNo motion\nLights OFF\nGarage CLOSED`)
        // );

        // setLog(
        //   motion
        //     ? `Motion detected\nLights ON\nGarage OPEN`
        //     : `No motion\nLights OFF\nGarage CLOSED`
        // );

        setTemperature((prev) => {
          const newTemp = prev + (Math.random() * 2 - 1);
          const newLog = motion
            ? `Security: ON\nMotion Detected\nLights ON\nGarage OPEN\nTemperature: ${newTemp.toFixed(
                1
              )}°C`
            : `Security: ON\nMotion NotDetected\nLights OFF\nGarage CLOSED\nTemperature: ${newTemp.toFixed(
                1
              )}°C`;

          setLog(newLog);
          return newTemp;
        });
      }, 5000);

      return () => clearInterval(interval);
    } else {
      setMotionDetected(false);
      setGarageOpen(false);
      setLightsOn(false);
      setIsLoading(false);
    }
  }, [running]);

  return (
    <div className="min-h-screen  text-white flex flex-col items-center p-8 font-sans">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 mb-8">
        🏠 Smart Home System
      </h1>

      <div className="w-full h-[400px] max-w-4xl p-4 mb-4 bg-gray-500 text-white rounded-xl relative">
        <div className="pr-4 text-2xl font-semibold overflow-y-auto h-full scrollbar">
          {" "}
          {log.split("\n").map((line, index) => (
            <p key={index} className="text-white leading-relaxed">
              {line.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={
                    word === "ON" ||
                    word === "OPEN" ||
                    word === "Detected" ||
                    word === "LOCKED"
                      ? "text-green-400"
                      : word === "OFF" ||
                        word === "CLOSED" ||
                        word === "NotDetected" ||
                        word === "UNLOCKED"
                      ? "text-red-400"
                      : ""
                  }
                >
                  {word}
                  {i !== line.split(" ").length - 1 && " "}{" "}
                </span>
              ))}
            </p>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className=" px-8 py-4 rounded-lg shadow-md bg-red-500 hover:bg-red-700 absolute bottom-4 right-8"
          onClick={() => setLog("")}
        >
          Clear
        </motion.button>
      </div>

      {/* Control Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-7 mt-32 w-full max-w-4xl">
        {/* Lock Door Button */}
        <motion.button
          className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-br from-pink-200 to-indigo-400 hover:shadow-lg transition-shadow duration-300"
          onClick={() => {
            setDoorLocked(true);
            setLog("\nDoor: LOCKED");
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🔒 Lock Door
        </motion.button>

        {/* Unlock Door Button */}
        <motion.button
          className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-br from-pink-200 to-indigo-400 hover:shadow-lg transition-shadow duration-300"
          onClick={() => {
            setDoorLocked(false);
            setLog("\nDoor: UNLOCKED");
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🔓 Unlock Door
        </motion.button>

        {/* Gas ON Button */}
        <motion.button
          className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-br from-pink-200 to-indigo-400 hover:shadow-lg transition-shadow duration-300"
          onClick={() => {
            setGasLeak(true);
            setLog("\nGas ON");
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ⛽ Gas ON
        </motion.button>

        {/* Gas OFF Button */}
        <motion.button
          className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-br from-pink-200 to-indigo-400 hover:shadow-lg transition-shadow duration-300"
          onClick={() => {
            setGasLeak(false);
            setLog("\nGas OFF");
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🛑 Gas OFF
        </motion.button>

        {/* Start Automation Button */}
        <motion.button
          className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-br from-pink-200 to-indigo-400 hover:shadow-lg transition-shadow duration-300"
          onClick={() => {
            setRunning(true);
            setLog("\nAutomation Starting... \nSecurity: ON");
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isLoading ? (
            <div className="flex gap-3 items-center justify-center">
              <div>▶ Start Automation</div>

              <l-cardio size="30" stroke="4" speed="2" color="white"></l-cardio>
            </div>
          ) : (
            "  ▶ Start Automation"
          )}
        </motion.button>

        {/* Stop Automation Button */}
        <motion.button
          className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-br from-pink-200 to-indigo-400 hover:shadow-lg transition-shadow duration-300"
          onClick={() => {
            setRunning(false);
            setLog("\nSecurity: OFF\nAutomation Stop!");
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ⏹ Stop Automation
        </motion.button>
      </div>
    </div>
  );
}
