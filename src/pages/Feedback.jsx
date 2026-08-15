import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Camera as Instagram, Crown, Heart, MessageCircleHeart, Play, Quote, Star, Users, Video, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { feedbackData } from '../data/feedbackData'
import './Feedback.css'

const reveal={initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.2},transition:{duration:.65,ease:[.22,1,.36,1]}}
const emptyVideo=[{id:'video-slot-1',title:'Customer Feedback',type:'video'},{id:'reel-slot-1',title:'Instagram Reel',type:'reel'}]
const emptyTestimonials=[{id:'testimonial-slot-1',placeholder:true},{id:'testimonial-slot-2',placeholder:true},{id:'testimonial-slot-3',placeholder:true}]

function Stars(){return <div className="feedback-stars" aria-label="5 stars">{[1,2,3,4,5].map(n=><Star key={n}/>)}</div>}
export default function Feedback(){
 const [playing,setPlaying]=useState(null)
 const media=[...feedbackData.videos,...feedbackData.instagramReels]
 const visibleMedia=media.length?media:emptyVideo
 const testimonials=feedbackData.testimonials.length?feedbackData.testimonials:emptyTestimonials
 return <div className="feedback-page">
  <header className="feedback-nav"><Link to="/" className="feedback-brand"><img src="/images/logo/rangilo-rajwado-logo.png" alt="Rangilo Rajwado"/><span>Rangilo Rajwado<small>UNLIMITED RESTAURANT</small></span></Link><Link to="/" className="feedback-back"><ArrowLeft/> होम पर वापस</Link></header>
  <main>
   <section className="feedback-hero"><div className="feedback-hero-bg"/><div className="feedback-pattern"/><motion.div initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{duration:.85}}><Heart/><span>आपका भरोसा, हमारी पहचान</span><h1>हमारे मेहमान<br/><em>क्या कहते हैं</em></h1><p>हर मुस्कान, हर खूबसूरत याद और हर प्रतिक्रिया हमें पहले से बेहतर बनने की प्रेरणा देती है।</p><div className="trust-row"><div><Users/><b>परिवारों की पसंद</b></div><i/><div><Crown/><b>शाही मेहमाननवाज़ी</b></div><i/><div><Heart/><b>दिल से सेवा</b></div></div></motion.div></section>

   <section className="feedback-media"><div className="feedback-container"><motion.div {...reveal} className="feedback-heading"><span>देखिए और महसूस कीजिए</span><h2>असली पल। <em>दिल से प्रतिक्रियाएँ।</em></h2><p>हमारे मेहमानों के वीडियो और Instagram moments के माध्यम से रंगीलो राजवाड़ो का अनुभव देखिए।</p></motion.div><div className="video-grid">{visibleMedia.map((item,index)=><motion.button {...reveal} transition={{...reveal.transition,delay:index*.1}} whileHover={{y:-7}} key={item.id||item.url} className={`video-card ${!item.url?'is-empty':''}`} onClick={()=>item.url&&setPlaying(item)}><div className="video-poster">{item.poster?<img src={item.poster} alt={item.title} loading="lazy"/>:<><span className="media-ornament">◆</span>{item.type==='reel'?<Instagram/>:<Video/>}</>}<i className="play"><Play/></i><span className="video-shade"/></div><div className="video-info"><small>{item.type==='reel'?'INSTAGRAM REEL':'GUEST VIDEO'}</small><h3>{item.title}</h3>{item.url?<Stars/>:<p>वास्तविक वीडियो जल्द जोड़ा जाएगा</p>}</div></motion.button>)}</div><a className="instagram-link" href={feedbackData.instagramProfile} target="_blank" rel="noreferrer"><Instagram/> Instagram पर और moments देखें <ArrowRight/></a></div></section>

   <section className="testimonial-section"><div className="feedback-container"><motion.div {...reveal} className="feedback-heading light"><span>Guest Testimonials</span><h2>शब्द जो हमारे लिए <em>बहुत मायने रखते हैं</em></h2></motion.div><div className="testimonial-grid">{testimonials.map((item,index)=><motion.article {...reveal} transition={{...reveal.transition,delay:index*.08}} key={item.id}><Quote/>{item.placeholder?<><Stars/><p>यहाँ वास्तविक ग्राहक की प्रतिक्रिया दिखाई जाएगी।</p><div className="guest"><span><MessageCircleHeart/></span><div><b>आपके मेहमान</b><small>Verified Guest</small></div></div></>:<><Stars/><p>“{item.text}”</p><div className="guest">{item.photo?<img src={item.photo} alt={item.name} loading="lazy"/>:<span>{item.name?.[0]}</span>}<div><b>{item.name}</b><small>{item.label||'Verified Guest'}</small></div></div></>}</motion.article>)}</div>{!feedbackData.testimonials.length&&<p className="data-note">यह section वास्तविक guest feedback मिलने पर <code>feedbackData.js</code> से अपने-आप अपडेट होगा।</p>}</div></section>

   <section className="customer-moments"><div className="feedback-container"><motion.div {...reveal} className="moments-copy"><span>Customer Moments</span><h2>आपके खूबसूरत पल,<br/><em>हमारी यादों का हिस्सा</em></h2><p>अपनी Rangilo Rajwado तस्वीरें Instagram पर शेयर करें और हमें टैग करें।</p><a href={feedbackData.instagramProfile} target="_blank" rel="noreferrer"><Instagram/> @rangilo_rajwado</a></motion.div><div className="moment-grid">{feedbackData.customerPhotos.length?feedbackData.customerPhotos.map(photo=><img src={photo.src} alt={photo.alt} loading="lazy" key={photo.src}/>):[1,2,3].map(n=><div className="moment-placeholder" key={n}><CameraIcon/><span>Guest Photo</span></div>)}</div></div></section>

   <section className="feedback-cta"><motion.div {...reveal}><Heart/><span>अपना अनुभव साझा करें</span><h2>आपकी प्रतिक्रिया हमारे<br/>लिए बेहद खास है</h2><p>रंगीलो राजवाड़ो की अपनी यादें हमें Instagram पर टैग करके साझा कीजिए।</p><a href={feedbackData.instagramProfile} target="_blank" rel="noreferrer"><Instagram/> Instagram पर जुड़ें <ArrowRight/></a></motion.div></section>
  </main>
  <footer className="feedback-footer">© 2026 Rangilo Rajwado Restaurant <span>Sinchayi Colony, Vedhaynath Colony, Sirohi, Rajasthan 307001</span></footer>
  <AnimatePresence>{playing&&<motion.div className="video-modal" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setPlaying(null)}><button aria-label="वीडियो बंद करें"><X/></button><motion.div initial={{scale:.85}} animate={{scale:1}} onClick={e=>e.stopPropagation()}>{playing.type==='reel'?<iframe src={`${playing.url.replace(/\/$/,'')}/embed`} title={playing.title} allowFullScreen/>:<video src={playing.url} poster={playing.poster} controls autoPlay/>}</motion.div></motion.div>}</AnimatePresence>
 </div>
}

function CameraIcon(){return <Instagram/>}
