import { useEffect, useState } from 'react'
import { Flower } from 'lucide-react'

interface HeartParticle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<HeartParticle[]>([])

  useEffect(() => {
    // Generar corazones iniciales
    const initialHearts: HeartParticle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 15,
      duration: Math.random() * 3 + 3,
      delay: Math.random() * 2
    }))
    setHearts(initialHearts)

    // Agregar nuevos corazones periódicamente
    const interval = setInterval(() => {
      setHearts(prev => {
        const newHeart: HeartParticle = {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 15,
          duration: Math.random() * 3 + 3,
          delay: 0
        }
        
        // Mantener máximo 20 corazones
        const updated = [...prev, newHeart]
        return updated.length > 20 ? updated.slice(1) : updated
      })
    }, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-heart"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <Flower
            className="text-fucsia opacity-30"
            style={{
              width: `${heart.size}px`,
              height: `${heart.size}px`,
              fill: 'currentColor'
            }}
          />
        </div>
      ))}
    </div>
  )
}
