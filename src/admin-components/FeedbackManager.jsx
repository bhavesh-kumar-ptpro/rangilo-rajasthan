export default function FeedbackManager({ feedback = [] }) { return <div>{feedback.map((item) => <article key={item.id}>{item.message}</article>)}</div> }
