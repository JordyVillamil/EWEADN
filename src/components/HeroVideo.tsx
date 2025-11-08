import { motion } from 'framer-motion'
import { ArrowDown, Play, Pause } from 'lucide-react'
import { useState, useRef } from 'react'

const HeroVideo = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video de Fondo */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover scale-105"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      {/* Overlay con Gradiente */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Grid Pattern Overlay (opcional para efecto moderno) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Contenido Principal */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
      >
        {/* Badge/Tag */}
        <motion.div
          variants={fadeInUp}
          className="mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
        >
        </motion.div>

        {/* Título Principal */}
        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight max-w-5xl"
        >
          EWEADN {' '}
          <span className="relative">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Define tu movimiento
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
        >
          No nacimos para encajar. Nacimos para destacar          
          <span className="text-white font-semibold"> Innovación, Rebelión, Identidad </span>
          Vimos una ciudad llena de reglas y decidimos romperlas.
        </motion.p>

        {/* Botones de Acción */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Comprar</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
          >
            ver catalogo
          </motion.button>
        </motion.div>

        {/* Estadísticas rápidas */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {[
            { value: '100%', label: 'Moderno' },
            { value: '10/10', label: 'Atrevido' },
            { value: 'Top1', label: 'Calidad' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Control de Video */}
        <motion.button
          onClick={toggleVideo}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-24 right-8 p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-colors"
          title={isPlaying ? 'Pausar video' : 'Reproducir video'}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white" fill="white" />
          )}
        </motion.button>

        {/* Indicador de Scroll */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/70 uppercase tracking-wider">Scroll</span>
          <ArrowDown className="w-6 h-6 text-white/70" />
        </motion.div>
      </motion.div>

      {/* Efecto de brillo animado en las esquinas */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  )
}

export default HeroVideo