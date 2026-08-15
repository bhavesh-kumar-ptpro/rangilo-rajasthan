export default function MenuForm({ onSubmit }) { return <form onSubmit={onSubmit}><input name="name" required/><input name="category" required/><button type="submit">Save</button></form> }
