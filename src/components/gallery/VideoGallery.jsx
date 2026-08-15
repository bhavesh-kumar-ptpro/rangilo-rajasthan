export default function VideoGallery({ videos = [] }) { return <div>{videos.map((video) => <video key={video.src} src={video.src} controls preload="metadata" />)}</div> }
