import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import FloatingLines from './FloatingLines'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: 'mdi:email',
      title: 'Email',
      value: 'contacto@eweadn.com',
      link: 'mailto:contacto@eweadn.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'mdi:phone',
      title: 'Teléfono',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'mdi:map-marker',
      title: 'Ubicación',
      value: 'Ciudad, País',
      link: '#',
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  const socialLinks = [
    {
      icon: 'mdi:instagram',
      label: 'Instagram',
      link: '#',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      icon: 'mdi:facebook',
      label: 'Facebook',
      link: '#',
      gradient: 'from-blue-600 to-blue-400'
    },
    {
      icon: 'mdi:twitter',
      label: 'Twitter',
      link: '#',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      icon: 'mdi:linkedin',
      label: 'LinkedIn',
      link: '#',
      gradient: 'from-blue-700 to-blue-500'
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
    // ...existing code...
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Floating Lines Background */}
      <div className="absolute inset-0 opacity-10">
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
// ...existing code...

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
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Conecta{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Con Nosotros
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-4 p-6 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon icon={info.icon} className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400">{info.title}</h4>
                    <p className="text-lg font-medium text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">Síguenos en redes</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`group flex flex-col items-center justify-center p-6 bg-gradient-to-br ${social.gradient} rounded-xl transition-all duration-300`}
                  >
                    <Icon icon={social.icon} className="w-8 h-8 text-white mb-2" />
                    <span className="text-sm font-medium text-white">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Map or Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm p-8"
            >
              <h3 className="text-xl font-bold text-white mb-4">Horario de Atención</h3>
              <div className="space-y-3 text-gray-400">
                <p className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="text-white">Cerrado</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact