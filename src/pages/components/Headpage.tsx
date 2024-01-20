import { motion as m } from 'framer-motion'

export default function Headpage() {
  return (
    <div>
      <section className="mt-32">
        <m.h1
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Nice to meet you !
        </m.h1>
        <m.p
          className="text-2xl font-medium"
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm <b>Martin</b>, Full Stack Web3 Developer
        </m.p>
      </section>
    </div>
  )
}
