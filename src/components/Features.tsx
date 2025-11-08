import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const Features = () => {
  const features = [
    {
      icon: 'fxemoji:running', // Innovación
      title: 'Innovación Radical',
      description: 'No solo usamos tecnología; la inventamos.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'fluent-emoji-flat:running-shoe', // Diseño
      title: 'Diseño Hibrido',
      description: 'Entendemos que el juego no termina en la cancha. Nuestras siluetas nacen del rendimiento atlético más exigente y se forjan en la cultura urbana.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'emojione:running-shoe', // Comodidad
      title: 'Comodidad 24/7',
      description: 'Creemos que el alto rendimiento no debe sacrificar el confort. Diseñamos cada calzado con una ergonomía obsesiva y materiales ultra ligeros.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: 'fluent-emoji:running-shoe', // Durabilidad
      title: 'Durabilidad Extrema',
      description: 'Usamos compuestos de caucho patentados y tejidos balísticos que resisten la abrasión del asfalto y el rigor de tu entrenamiento.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'streamline-cyber-color:sneakers', // Sostenibilidad
      title: 'Sostenibilidad Consciente',
      description: 'El futuro del deporte depende del futuro del planeta.',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: 'unjs:bundle-runner', // Movimiento/Victoria
      title: 'El Símbolo del Movimiento',
      description: 'Llevar nuestra marca es una declaración de intenciones.',
      gradient: 'from-teal-500 to-cyan-500'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 rounded-full text-sm font-semibold mb-4 border border-blue-500/20">
            Características
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Historia{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              De la Marca
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Creamos para los inconformes, los soñadores, los que convierten el asfalto en su escenario. Lo que empezó como un acto de rebelión, hoy es el uniforme de los que definen su propio movimiento.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative p-8 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
            >
              {/* Icon with Gradient Background */}
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon icon={feature.icon} className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 mb-6">Stack Tecnológico</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Iconify'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-400 text-sm hover:bg-white/10 hover:text-white transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features