import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { dotSpinner } from "ldrs";

dotSpinner.register();

export default function App() {
  const [doorLocked, setDoorLocked] = useState(false);
  const [motionDetected, setMotionDetected] = useState(false);
  const [lightsOn, setLightsOn] = useState(false);
  const [gasLeak, setGasLeak] = useState(false);
  const [temperature, setTemperature] = useState(25);
  const [garageOpen, setGarageOpen] = useState(false);
  const [running, setRunning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        const motion = Math.random() > 0.5;
        setIsLoading(true);
        setMotionDetected(motion);
        if (motion) {
          setLightsOn(true);
          setGarageOpen(true);
        } else {
          setLightsOn(false);
          setGarageOpen(false);
        }
        setTemperature((prev) => prev + (Math.random() * 2 - 1));
        // setMotionDetected(Math.random() > 0.5);
        // setGarageOpen(Math.random() > 0.5);
        // setLightsOn(Math.random() > 0.5);
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
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-green-950 text-white flex flex-col items-center p-8 font-sans">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 mb-8">
        🏠 Smart Home System
      </h1>

      {/* Status Cards */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Security Card */}
        <motion.div
          className={`bg-gradient-to-r ${
            doorLocked
              ? "from-red-500 to-pink-500"
              : "from-green-500 to-teal-500"
          } rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center space-x-4">
            <span className="text-3xl">🔐</span>
            <div>
              <p className="text-sm text-gray-200">Security</p>
              <p className="text-2xl font-semibold text-white">
                {doorLocked ? "Locked" : "Unlocked"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Motion Card */}
        <motion.div
          className={`bg-gradient-to-r ${
            motionDetected
              ? "from-yellow-500 to-orange-500"
              : "from-gray-500 to-gray-700"
          } rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center space-x-4">
            <span className="text-3xl">🚶</span>
            <div>
              <p className="text-sm text-gray-200">Motion</p>
              <p className="text-2xl font-semibold text-white">
                {motionDetected ? "Detected" : "No Motion"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Lights Card */}
        <motion.div
          className={`bg-gradient-to-r ${
            lightsOn
              ? "from-yellow-500 to-amber-500"
              : "from-gray-500 to-gray-700"
          } rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center space-x-4">
            <span className="text-3xl">💡</span>
            <div>
              <p className="text-sm text-gray-200">Lights</p>
              <p className="text-2xl font-semibold text-white">
                {lightsOn ? "ON" : "OFF"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Garage Card */}
        <motion.div
          className={`bg-gradient-to-r ${
            garageOpen
              ? "from-red-500 to-pink-500"
              : "from-green-500 to-teal-500"
          } rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center space-x-4">
            <span className="text-3xl">🚘</span>
            <div>
              <p className="text-sm text-gray-200">Garage</p>
              <p className="text-2xl font-semibold text-white">
                {garageOpen ? "OPEN" : "CLOSED"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Gas Card */}
        <motion.div
          className={`bg-gradient-to-r ${
            gasLeak ? "from-red-500 to-pink-500" : "from-green-500 to-teal-500"
          } rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center space-x-4">
            <span className="text-3xl">🔥</span>
            <div>
              <p className="text-sm text-gray-200">Gas</p>
              <p className="text-2xl font-semibold text-white">
                {gasLeak ? "ON" : "OFF"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Temperature Card */}
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center space-x-4">
            <span className="text-3xl">🌡</span>
            <div>
              <p className="text-sm text-gray-200">Temperature</p>
              <p className="text-2xl font-semibold text-white">
                {temperature.toFixed(1)}°C
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Control Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-7 mt-32 w-full max-w-4xl">
        {/* Lock Door Button */}
        <motion.button
          className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-br from-pink-200 to-indigo-400 hover:shadow-lg transition-shadow duration-300"
          onClick={() => setDoorLocked(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🔒 Lock Door
        </motion.button>

        {/* Unlock Door Button */}
        <motion.button
          className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-br from-pink-200 to-indigo-400 hover:shadow-lg transition-shadow duration-300"
          onClick={() => setDoorLocked(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🔓 Unlock Door
        </motion.button>

        {/* Gas ON Button */}
        <motion.button
          className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-br from-pink-200 to-indigo-400 hover:shadow-lg transition-shadow duration-300"
          onClick={() => setGasLeak(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ⛽ Gas ON
        </motion.button>

        {/* Gas OFF Button */}
        <motion.button
          className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-br from-pink-200 to-indigo-400 hover:shadow-lg transition-shadow duration-300"
          onClick={() => setGasLeak(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🛑 Gas OFF
        </motion.button>

        {/* Start Automation Button */}
        <motion.button
          className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-br from-pink-200 to-indigo-400 hover:shadow-lg transition-shadow duration-300"
          onClick={() => setRunning(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isLoading ? (
            <div className="flex gap-3 items-center justify-center">
              <div>▶ Start Automation</div>
              <l-dot-spinner
                size="25"
                speed="0.9"
                color="white"
              ></l-dot-spinner>
            </div>
          ) : (
            "  ▶ Start Automation"
          )}
        </motion.button>

        {/* Stop Automation Button */}
        <motion.button
          className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-br from-pink-200 to-indigo-400 hover:shadow-lg transition-shadow duration-300"
          onClick={() => setRunning(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ⏹ Stop Automation
        </motion.button>
      </div>
    </div>
  );
}
