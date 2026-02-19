export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="group bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-8 hover:shadow-xl dark:hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
      {Icon && <Icon className="w-12 h-12 text-accent-red mb-4 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />}
      <h3 className="text-xl font-bold text-charcoal dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
      <div className="mt-4 flex items-center text-accent-red font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
        Learn more →
      </div>
    </div>
  )
}
