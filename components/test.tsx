import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"

export default function CardPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Klik di luar card → sembunyikan card
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsVisible(false)
      }
    }

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isVisible])

  // 🔥 GSAP animasi muncul & hilang
  useEffect(() => {
    if (isVisible && cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.8, y: -20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power2.out" }
      )
    } else if (!isVisible && cardRef.current) {
      gsap.to(cardRef.current, {
        opacity: 0,
        scale: 0.8,
        y: -20,
        duration: 0.3,
        ease: "power2.in"
      })
    }
  }, [isVisible])

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <button
        onClick={() => setIsVisible(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Tampilkan Card
      </button>

      {isVisible && (
        <div
          ref={cardRef}
          className="absolute top-20 w-64 p-4 bg-white border border-gray-200 shadow-lg rounded-lg"
        >
          <h2 className="font-semibold text-gray-800">Ini adalah card</h2>
          <p className="text-sm text-gray-600 mt-1">Klik di luar card untuk menutup.</p>
        </div>
      )}
    </div>
  )
}