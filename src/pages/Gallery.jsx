import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, Camera, Crown, Expand, Camera as Instagram, MapPin, X } from 'lucide-react'
import './Gallery.css'

const categories=['All','Ambience','Food','Buffet','Celebrations','Customer Moments']
const images=[
 {src:'/images/food/buffet-1.png',category:'Buffet',title:'हमारा रॉयल अनलिमिटेड बुफे',size:'tall'},
 {src:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=82',category:'Ambience',title:'शाही और आरामदायक माहौल',size:'wide'},
 {src:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=82',category:'Food',title:'हर बाइट में लज़ीज़ स्वाद',size:'standard'},
 {src:'https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=900&q=82',category:'Buffet',title:'ढेरों स्वाद, एक ही जगह',size:'tall'},
 {src:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=82',category:'Food',title:'ताज़ा और स्वादिष्ट व्यंजन',size:'standard'},
 {src:'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=82',category:'Ambience',title:'यादगार शामों का ठिकाना',size:'wide'},
 {src:'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=82',category:'Celebrations',title:'अपनों के संग सेलिब्रेशन',size:'tall'},
 {src:'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=82',category:'Customer Moments',title:'खुशियों से भरे पल',size:'standard'},
 {src:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=82',category:'Food',title:'प्रीमियम फूड प्रेज़ेंटेशन',size:'wide'},
 {src:'https://images.unsplash.com/photo-1529543544277-750e0f4e30d7?auto=format&fit=crop&w=800&q=82',category:'Customer Moments',title:'परिवार के साथ खूबसूरत यादें',size:'standard'},
 {src:'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=82',category:'Buffet',title:'50+ स्वादिष्ट विकल्प',size:'tall'},
 {src:'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=900&q=82',category:'Celebrations',title:'हर अवसर बने खास',size:'wide'},
]

export default function Gallery(){
 const [active,setActive]=useState('All'),[selected,setSelected]=useState(null)
 const filtered=active==='All'?images:images.filter(image=>image.category===active)
 return <div className="gallery-page">
  <header className="gallery-nav"><a href="/" className="gallery-brand"><img src="/images/logo/rangilo-rajwado-logo.png" alt="Rangilo Rajwado"/><span>Rangilo Rajwado<small>UNLIMITED RESTAURANT</small></span></a><a href="/" className="gallery-back"><ArrowLeft/> होम पर वापस</a></header>
  <main>
   <section className="gallery-hero"><div className="gallery-hero-bg"/><div className="gallery-hero-pattern"/><motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8}}><Camera/><span>तस्वीरों में हमारी कहानी</span><h1>शाही अनुभव की<br/><em>एक खूबसूरत झलक</em></h1><p>स्वादिष्ट खाना, शानदार माहौल और अपनों के साथ बिताए यादगार पल।</p></motion.div></section>
   <section className="gallery-content"><div className="gallery-container"><motion.div className="filter-bar" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>{categories.map(category=><button className={active===category?'active':''} onClick={()=>setActive(category)} key={category}>{category}</button>)}</motion.div>
    <motion.div layout className="masonry-grid"><AnimatePresence mode="popLayout">{filtered.map((image,index)=><motion.button layout initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.94}} transition={{duration:.4,delay:index*.025}} className={`masonry-item ${image.size}`} onClick={()=>setSelected(image)} key={image.src}><img src={image.src} alt={image.title} loading="lazy" decoding="async"/><span className="gallery-shade"/><div><small>{image.category}</small><strong>{image.title}</strong></div><i><Expand/></i></motion.button>)}</AnimatePresence></motion.div>
    <div className="gallery-note"><Crown/><p><strong>हर तस्वीर के पीछे एक कहानी है।</strong><br/>अगली खूबसूरत याद आपकी हो सकती है।</p><Crown/></div>
   </div></section>
   <section className="gallery-cta"><motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><Instagram/><span>हमारे साथ जुड़ें</span><h2>और भी लज़ीज़ झलकियाँ<br/>Instagram पर देखें</h2><div><a href="https://www.instagram.com/rangilo_rajwado/?hl=en" target="_blank" rel="noreferrer"><Instagram/> Follow @rangilo_rajwado</a><a href="https://l1nk.dev/jcpl6o2" target="_blank" rel="noreferrer"><MapPin/> हमसे मिलने आएँ</a></div></motion.div></section>
  </main>
  <footer className="gallery-footer">© 2026 Rangilo Rajwado Restaurant <span>Sinchayi Colony, Vedhaynath Colony, Sirohi, Rajasthan 307001</span></footer>
  <AnimatePresence>{selected&&<motion.div className="gallery-modal" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSelected(null)}><button aria-label="फोटो बंद करें"><X/></button><motion.figure initial={{opacity:0,scale:.82}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.88}} transition={{type:'spring',damping:25}} onClick={e=>e.stopPropagation()}><img src={selected.src} alt={selected.title}/><figcaption><small>{selected.category}</small><strong>{selected.title}</strong></figcaption></motion.figure></motion.div>}</AnimatePresence>
 </div>
}
