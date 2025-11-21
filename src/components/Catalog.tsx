import { motion } from 'framer-motion'
import FloatingLines from './FloatingLines'

const Catalog = () => {
  const products = [
    {
      image: '/src/assets/images/EchoRunner.png',
      title: 'Echo Runner',
      description: 'presenta un diseño dinámico y aerodinámico, ideal para quienes buscan un calzado deportivo con un toque de modernidad y colores frescos.'
    },
    {
      image: '/src/assets/images/NeonFuture.jpg',
      title: 'Neon Future',
      description: 'es una zapatilla futurista con luces LED integradas, diseñada para destacar en el entorno urbano nocturno.'
    },
    {
      image: '/src/assets/images/PulseWave.png',
      title: 'Pulse Wave',
      description: 'irradia energía con su diseño contemporáneo y suela texturizada. Es una zapatilla pensada para quienes buscan destacar con un estilo dinámico y urbano, perfecta para complementar cualquier atuendo juvenil y moderno.'
    },
    {
      image: '/src/assets/images/TrailBlazer.png',
      title: 'Trail Blazer',
      description: 'es una zapatilla de trail running robusta y duradera, diseñada para enfrentarse a los terrenos más exigentes de la montaña.'
    },
    {
      image: '/src/assets/images/UrbanStride.jpg',
      title: 'Urban Stride',
      description: 'combina comodidad y estilo urbano con una silueta elegante y materiales contemporáneos. Perfecta para el día a día en la ciudad.'
    },
    {
      image: '/src/assets/images/VaporWave.jpg',
      title: 'Vapor Wave',
      description: 'es una zapatilla ultra-moderna con un diseño futurista y colores vibrantes que evocan el estilo vaporwave. Es ideal para un look urbano y audaz'
    }
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
    <section id="catalog" className="py-24 bg-black relative overflow-hidden">
      {/* Floating Lines Background */}
      <div className="absolute inset-0 opacity-30">
        <FloatingLines
          linesGradient={['#3b82f6', '#8b5cf6', '#ec4899']}
          enabledWaves={['middle', 'bottom']}
          lineCount={[8, 6]}
          lineDistance={[4, 5]}
          animationSpeed={0.8}
          interactive={true}
          bendRadius={6.0}
          bendStrength={-0.4}
          mouseDamping={0.08}
          parallax={true}
          parallaxStrength={0.15}
          mixBlendMode="screen"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 rounded-full text-sm font-semibold mb-4 border border-blue-500/20">
            Catálogo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestra{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Colección
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Descubre nuestra colección exclusiva diseñada para los que no se conforman
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-400">
                  {product.description}
                </p>
              </div>

              {/* Hover Effect Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Catalog