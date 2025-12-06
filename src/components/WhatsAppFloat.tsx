import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppFloat() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [hasUnread, setHasUnread] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (): void => {
    setHasUnread(false);
    window.open(
      "https://wa.me/6282304524230?text=Halo%20saya%20tertarik%20dengan%20Menara%20Limboto",
      "_blank",
    );
  };

  return (
    <>
      {/* Popup Chat */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-28 right-6 z-40 max-w-xs"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-4 relative">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-start gap-3">
                <img
                  src="/logo.png"
                  alt="CS"
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <p className="font-bold text-gray-800 mb-1">
                    Customer Service
                  </p>

                  <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3">
                    <p className="text-sm text-gray-700">
                      👋 Halo! Ada yang bisa saya bantu?
                    </p>
                    <p className="text-sm text-gray-700 mt-2">
                      Tanya seputar harga, lokasi, atau jadwal survey 😊
                    </p>
                  </div>

                  <p className="text-xs text-gray-400 mt-1">Baru saja</p>
                </div>
              </div>

              <button
                onClick={handleClick}
                className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl font-semibold transition-colors"
              >
                Balas via WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-colors group"
      >
        <MessageCircle className="w-7 h-7" />

        {/* Unread Badge */}
        {hasUnread && (
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
            1
          </span>
        )}

        {/* Ripple Effect */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
      </motion.button>
    </>
  );
}
