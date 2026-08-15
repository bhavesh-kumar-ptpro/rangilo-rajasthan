export default function Button({ as: Tag = 'button', className = '', children, ...props }) { return <Tag className={`royal-btn ${className}`} {...props}>{children}</Tag> }
