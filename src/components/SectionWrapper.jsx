export default function SectionWrapper({ id, className = '', children }) {
  return (
    <section id={id} className={`py-20 px-6 sm:px-10 lg:px-12 ${className}`}> 
      {children}
    </section>
  )
}
