export default function MobileMenu({ open, children }) { return open ? <aside className="mobile-menu">{children}</aside> : null }
