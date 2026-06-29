import { Link } from 'react-router-dom'

export default function Button({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
}) {
  const base =
    'inline-flex items-center justify-center font-display font-semibold rounded-lg transition-all duration-200 cursor-pointer'

  const variants = {
    primary: 'bg-primary text-white hover:opacity-90 active:scale-[0.98]',
    accent:  'bg-accent text-white hover:opacity-90 active:scale-[0.98]',
    ghost:   'border border-muted text-text hover:border-primary hover:text-primary active:scale-[0.98]',
  }

  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-base px-7 py-3.5',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href?.startsWith('/')) {
    return <Link to={href} className={classes}>{children}</Link>
  }
  if (href) {
    return <a href={href} className={classes}>{children}</a>
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
