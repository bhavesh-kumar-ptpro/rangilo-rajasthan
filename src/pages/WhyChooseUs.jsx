import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Armchair, BadgeIndianRupee, Crown, Heart, MapPin, Sparkles, Users, UtensilsCrossed } from 'lucide-react'
import { Link } from 'react-router-dom'
import './WhyChooseUs.css'

const benefits=[
 [UtensilsCrossed,'Unlimited Buffet','मनपसंद स्वाद का आनंद लीजिए—बिना किसी सीमा के।'],
 [BadgeIndianRupee,'किफ़ायती कीमत','एक सरल कीमत में भरपूर स्वाद और पूरा अनुभव।'],
 [Sparkles,'व्यंजनों की विशाल वैरायटी','हर पसंद के लिए 50+ स्वादिष्ट विकल्प।'],
 [Users,'परिवार के लिए खास','हर उम्र के मेहमान के लिए स्वागत भरा माहौल।'],
 [Armchair,'आरामदायक बैठक','सुकून से बैठिए, बातें कीजिए और भोजन का आनंद लीजिए।'],
 [Crown,'खूबसूरत शाही माहौल','राजस्थानी विरासत से प्रेरित एक प्रीमियम परिवेश।'],
 [Users,'ग्रुप्स के लिए परफेक्ट','परिवार, दोस्तों और सेलिब्रेशन के लिए भरपूर जगह।'],
 [Heart,'ऑथेंटिक स्वाद','परंपरा, गुणवत्ता और दिल से तैयार हर व्यंजन।'],
]
const compare=[['Limited Food','Unlimited Buffet'],['Multiple Bills','One Simple Price'],['Less Variety','Many Delicious Options'],['Quick Meal','Complete Dining Experience']]
const reveal={initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.2},transition:{duration:.65,ease:[.22,1,.36,1]}}

export default function WhyChooseUsPage(){
 return <div className="why-page">
  <header className="why-nav"><Link to="/" className="why-brand"><img src="/images/logo/rangilo-rajwado-logo.png" alt="Rangilo Rajwado"/><span>Rangilo Rajwado<small>UNLIMITED RESTAURANT</small></span></Link><Link to="/" className="back-home"><ArrowLeft/>होम पर वापस</Link></header>
  <main>
   <section className="why-hero"><div className="why-hero-bg"/><div className="why-hero-pattern"/><motion.div initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{duration:.9}}><span>हमारी पहचान</span><h1>सिर्फ भोजन नहीं,<br/><em>अनलिमिटेड खुशियाँ</em></h1><p>रंगीलो राजवाड़ो में आप सिर्फ खाने नहीं आते। आप आते हैं स्वाद, वैरायटी, आराम और एक अनलिमिटेड दावत की खुशी का अनुभव करने।</p><div><i/><Crown/><i/></div></motion.div><a href="#benefits" className="why-scroll">हमारी खासियत जानें <ArrowRight/></a></section>

   <section className="happiness"><motion.div {...reveal} className="story-number">01</motion.div><div className="why-container story-grid"><motion.div {...reveal}><span className="why-kicker">Unlimited Happiness</span><h2>हर प्लेट में स्वाद,<br/><em>हर पल में खुशी</em></h2></motion.div><motion.div {...reveal} className="story-copy"><p>यहाँ भोजन की कोई सीमा नहीं—और खुशियों की भी नहीं। हमारी मेज़ पर हर सर्विंग आपको एक नया स्वाद खोजने, अपनों के साथ समय बिताने और पल भर के लिए हर चिंता भूल जाने का मौका देती है।</p><blockquote>“एक ऐसी दावत जहाँ हर मेहमान परिवार है और हर स्वाद एक याद बन जाता है।”</blockquote></motion.div></div></section>

   <section id="benefits" className="benefits-section"><div className="why-container"><motion.div {...reveal} className="why-heading"><span>क्यों चुनें रंगीलो राजवाड़ो</span><h2>एक अनुभव। <em>आठ खास वजहें।</em></h2><p>हर छोटी-बड़ी चीज़ आपके आराम, स्वाद और यादगार समय के लिए तैयार की गई है।</p></motion.div><div className="benefits-grid">{benefits.map(([Icon,title,text],i)=><motion.article {...reveal} transition={{...reveal.transition,delay:(i%4)*.07}} whileHover={{y:-8}} key={title}><small>0{i+1}</small><div><Icon/></div><h3>{title}</h3><p>{text}</p><span className="benefit-line"/></motion.article>)}</div></div></section>

   <section className="comparison-section"><div className="why-container"><motion.div {...reveal} className="why-heading light"><span>एक बेहतर चुनाव</span><h2>Regular Dining <em>से कहीं आगे</em></h2><p>देखिए कैसे रंगीलो राजवाड़ो एक साधारण भोजन को संपूर्ण शाही अनुभव में बदल देता है।</p></motion.div><motion.div {...reveal} className="comparison-card"><div className="compare-head"><span>Regular Dining</span><i>VS</i><span><Crown/> Rangilo Rajwado</span></div>{compare.map(([regular,royal],i)=><motion.div className="compare-row" initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.12}} key={regular}><span>{regular}</span><div><i/><ArrowRight/><i/></div><strong>{royal}</strong></motion.div>)}</motion.div></div></section>

   <section className="why-cta"><motion.div {...reveal}><Crown/><span>अब आपकी बारी है</span><h2>अनलिमिटेड स्वाद का<br/>शाही अनुभव लीजिए</h2><p>50+ स्वादिष्ट व्यंजन • एक सरल कीमत • अनगिनत खुशियाँ</p><div><Link to="/" className="why-primary">बुफे एक्सप्लोर करें <ArrowRight/></Link><a href="https://l1nk.dev/jcpl6o2" target="_blank" rel="noreferrer" className="why-outline"><MapPin/> लोकेशन देखें</a></div></motion.div></section>
  </main>
  <footer className="why-footer"><img src="/images/logo/rangilo-rajwado-logo.png" alt=""/><p>Rangilo Rajwado Restaurant</p><span>Sinchayi Colony, Vedhaynath Colony, Sirohi, Rajasthan 307001</span></footer>
 </div>
}
