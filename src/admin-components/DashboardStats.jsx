export default function DashboardStats({ stats = [] }) { return <section>{stats.map(({ label, value }) => <article key={label}><b>{value}</b><span>{label}</span></article>)}</section> }
