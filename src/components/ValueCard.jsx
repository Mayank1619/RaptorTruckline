export default function ValueCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-light-gray dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-8 hover:bg-white dark:hover:bg-dark-card dark:hover:shadow-glow transition-all duration-300 group">
      {Icon && <Icon className="w-12 h-12 text-accent-red mb-4 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />}
      <h3 className="text-xl font-bold text-charcoal dark:text-white mb-3">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
    </div>
  )
}
