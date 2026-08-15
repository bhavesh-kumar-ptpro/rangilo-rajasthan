import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { Bell, CheckCircle2, ChevronRight, CircleGauge, Eye, Flame, Image, LogOut, MapPin, Menu, MessageSquare, Pencil, Plus, Search, Settings, Star, Trash2, UtensilsCrossed, Video, X } from 'lucide-react'
import { logoutAdmin } from '../../utils/adminAuth'
import './AdminDashboard.css'
import './AdminPremium.css'
import './AdminResponsiveFixes.css'

const items=[['dashboard','Dashboard',CircleGauge],['menu','Manage Menu',UtensilsCrossed],['gallery','Manage Gallery',Image],['videos','Feedback Videos',Video],['testimonials','Testimonials',Star],['messages','Customer Messages',MessageSquare],['offers','Offers',Flame],['contact','Contact Information',MapPin],['settings','Settings',Settings]]
const meta={dashboard:['Dashboard','रेस्टोरेंट की पूरी गतिविधि एक नज़र में'],menu:['Manage Menu','व्यंजन, categories और availability मैनेज करें'],gallery:['Manage Gallery','Food और ambience तस्वीरें मैनेज करें'],videos:['Feedback Videos','Customer videos और Instagram reels मैनेज करें'],testimonials:['Testimonials','Verified guest प्रतिक्रियाएँ मैनेज करें'],messages:['Customer Messages','वेबसाइट से आए संदेश देखें'],offers:['Offers','Buffet offers बनाएँ और प्रकाशित करें'],contact:['Contact Information','पता, Maps और social details अपडेट करें'],settings:['Settings','Website और admin preferences मैनेज करें']}
const seed={
 menu:[{id:1,title:'Royal Unlimited Buffet',category:'Buffet',details:'50+ delicious food items',status:'Active'},{id:2,title:'Dal Baati Churma',category:'Main Course',details:'Authentic Rajasthani speciality',status:'Active'}],
 gallery:[{id:1,title:'Royal Buffet Spread',category:'Buffet',details:'/images/food/buffet-1.png',status:'Published'}],
 videos:[{id:1,title:'Instagram Customer Reel',category:'Instagram Reel',details:'Add public reel URL',status:'Draft'}],
 testimonials:[{id:1,title:'Instagram Guest Feedback',category:'5 Stars',details:'Original screenshot feedback',status:'Published'}],
 messages:[{id:1,title:'Table enquiry',category:'Website',details:'Family table availability enquiry',status:'Unread'}],
 offers:[{id:1,title:'Royal Unlimited Buffet',category:'Restaurant Offer',details:'50+ delicious dishes',status:'Active'}],
 contact:[{id:1,title:'Restaurant Address',category:'Location',details:'Sinchayi Colony, Vedhaynath Colony, Sirohi, Rajasthan 307001',status:'Published'}],
 settings:[{id:1,title:'Primary Language',category:'Website',details:'Hindi',status:'Active'}],
}
const storageKey='rr-admin-records'

export default function AdminDashboard(){
 const location=useLocation(),navigate=useNavigate(),[drawer,setDrawer]=useState(false),[query,setQuery]=useState(''),[modal,setModal]=useState(null),[toast,setToast]=useState(null)
 const [records,setRecords]=useState(()=>{try{return JSON.parse(localStorage.getItem(storageKey))||seed}catch{return seed}})
 const active=location.pathname.split('/')[2]||'dashboard',current=meta[active]||meta.dashboard
 useEffect(()=>localStorage.setItem(storageKey,JSON.stringify(records)),[records])
 useEffect(()=>{if(!toast)return;const timer=setTimeout(()=>setToast(null),2400);return()=>clearTimeout(timer)},[toast])
 const go=id=>{navigate(id==='dashboard'?'/admin':`/admin/${id}`);setDrawer(false);setQuery('')}
 const save=record=>{const editing=Boolean(record.id);setRecords(prev=>{const list=prev[active]||[];const exists=list.some(item=>item.id===record.id);return{...prev,[active]:exists?list.map(item=>item.id===record.id?record:item):[...list,{...record,id:Date.now()}]}});setModal(null);setToast(editing?'Record updated successfully':'Record created successfully')}
 const remove=record=>{setRecords(prev=>({...prev,[active]:(prev[active]||[]).filter(item=>item.id!==record.id)}));setModal(null);setToast('Record deleted successfully')}
 const logout=()=>{logoutAdmin();navigate('/admin/login',{replace:true})}
 return <div className="admin-shell">
  <aside className={`admin-sidebar ${drawer?'open':''}`}><div className="admin-logo"><img src="/images/logo/rangilo-rajwado-logo.png" alt="Rangilo Rajwado"/><div><b>Rangilo Rajwado</b><span>ADMIN CONSOLE</span></div><button onClick={()=>setDrawer(false)}><X/></button></div><nav>{items.map(([id,label,Icon])=><button className={active===id?'active':''} onClick={()=>go(id)} key={id}><Icon/><span>{label}</span>{id==='messages'&&(records.messages?.filter(x=>x.status==='Unread').length>0)&&<small>{records.messages.filter(x=>x.status==='Unread').length}</small>}<ChevronRight/></button>)}</nav><div className="admin-sidebar-foot"><div><span>RR</span><p><b>Restaurant Admin</b><small>Administrator</small></p></div><button onClick={logout} title="Logout"><LogOut/></button></div></aside>
  {drawer&&<button className="admin-backdrop" onClick={()=>setDrawer(false)} aria-label="Close menu"/>}
  <section className="admin-main"><header className="admin-topbar"><button className="admin-menu" onClick={()=>setDrawer(true)}><Menu/></button><div><span>RANGILO RAJWADO</span><h1>{current[0]}</h1></div><div className="admin-tools"><label><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search records..."/></label><button><Bell/><i/></button><a href="/" target="_blank">View Website</a></div></header><div className="admin-content"><div className="admin-intro"><div><h2>{current[0]}</h2><p>{current[1]}</p></div>{active!=='dashboard'&&<button className="admin-primary" onClick={()=>setModal({mode:'add',record:blankRecord(active)})}><Plus/>{actionLabel(active)}</button>}</div>{active==='dashboard'?<DashboardHome onOpen={go} records={records}/>:<DataTable type={active} records={records[active]||[]} query={query} onAction={(mode,record)=>setModal({mode,record})}/>}</div></section>
  <AnimatePresence>{modal&&<RecordModal key={`${modal.mode}-${modal.record.id||'new'}`} type={active} modal={modal} onClose={()=>setModal(null)} onSave={save} onDelete={remove}/>}</AnimatePresence>
  <AnimatePresence>{toast&&<motion.div className="admin-toast fixed bottom-5 right-5 z-[120] flex items-center gap-3 rounded-lg border border-emerald-200 bg-white px-4 py-3 text-sm text-emerald-800 shadow-2xl" initial={{opacity:0,y:20,scale:.95}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:10,scale:.96}}><CheckCircle2/><span>{toast}</span></motion.div>}</AnimatePresence>
 </div>
}

function DashboardHome({onOpen,records}){const stats=useMemo(()=>[[UtensilsCrossed,records.menu?.length||0,'Menu Items','menu'],[Image,records.gallery?.length||0,'Gallery Media','gallery'],[MessageSquare,records.messages?.filter(x=>x.status==='Unread').length||0,'New Messages','messages'],[Star,records.testimonials?.length||0,'Guest Reviews','testimonials']],[records]);return <><div className="admin-stats">{stats.map(([Icon,value,label,id])=><button onClick={()=>onOpen(id)} key={label}><span><Icon/></span><div><b>{String(value).padStart(2,'0')}</b><small>{label}</small></div><ChevronRight/></button>)}</div><div className="admin-dashboard-grid"><section className="admin-card quick-card"><div className="card-head"><h3>Quick Actions</h3><span>मैनेजमेंट शॉर्टकट</span></div><div>{items.slice(1,7).map(([id,label,Icon])=><button onClick={()=>onOpen(id)} key={id}><Icon/><span>{label}</span><ChevronRight/></button>)}</div></section><section className="admin-card activity-card"><div className="card-head"><h3>System Overview</h3><span>LOCAL DATA STATUS</span></div><div className="empty-activity"><CircleGauge/><b>Admin system active है</b><p>सभी बदलाव सुरक्षित रूप से browser storage में save हो रहे हैं।</p></div></section><section className="admin-card restaurant-card"><div className="restaurant-photo"/><div><span>RESTAURANT PROFILE</span><h3>Rangilo Rajwado</h3><p><MapPin/> Sinchayi Colony, Vedhaynath Colony,<br/>Sirohi, Rajasthan 307001</p><strong><UtensilsCrossed/> Royal Unlimited Buffet</strong></div></section></div></>}

function DataTable({type,records,query,onAction}){
 const[filter,setFilter]=useState('All')
 const statuses=['All',...new Set(records.map(item=>item.status).filter(Boolean))]
 const filtered=records.filter(item=>Object.values(item).join(' ').toLowerCase().includes(query.toLowerCase())&&(filter==='All'||item.status===filter))
 return <section className="data-panel"><div className="table-toolbar"><div><b>Restaurant Records</b><span>{filtered.length} of {records.length} entries</span></div><div><label>Status<select value={filter} onChange={event=>setFilter(event.target.value)}>{statuses.map(status=><option key={status}>{status}</option>)}</select></label><button onClick={()=>setFilter('All')}>Reset Filter</button></div></div>{filtered.length?<div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>Title / Name</th><th>Category</th><th>Details</th><th>Status</th><th>Actions</th></tr></thead><tbody>{filtered.map(record=><motion.tr initial={{opacity:0,y:5}} animate={{opacity:1,y:0}} key={record.id}><td><b>{record.title}</b><small>ID #{record.id}</small></td><td><span className="category-pill">{record.category}</span></td><td><p>{record.details}</p></td><td><span className={`status ${record.status?.toLowerCase()}`}>{record.status}</span></td><td><div className="row-actions"><button title="View" onClick={()=>onAction('view',record)}><Eye/></button><button title="Edit" onClick={()=>onAction('edit',record)}><Pencil/></button><button className="danger" title="Delete" onClick={()=>onAction('delete',record)}><Trash2/></button></div></td></motion.tr>)}</tbody></table></div>:<div className="table-empty"><Search/><h3>No records found</h3><p>{query||filter!=='All'?'Search या filter बदलकर देखें।':`${actionLabel(type)} से शुरुआत करें।`}</p></div>}</section>
}

function RecordModal({type,modal,onClose,onSave,onDelete}){
 const view=modal.mode==='view',deleting=modal.mode==='delete'
 const{register,handleSubmit,formState:{errors,isSubmitting}}=useForm({defaultValues:modal.record})
 register('id')
 useEffect(()=>{const close=event=>event.key==='Escape'&&onClose();document.addEventListener('keydown',close);const previous=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.removeEventListener('keydown',close);document.body.style.overflow=previous}},[onClose])
 return createPortal(<motion.div className="record-modal-backdrop fixed inset-0 z-[100] grid place-items-center bg-[#200506]/85 p-3 backdrop-blur-md sm:p-5" role="presentation" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.18}} onMouseDown={event=>event.target===event.currentTarget&&onClose()}>
  <motion.section role="dialog" aria-modal="true" aria-labelledby="record-modal-title" className={`record-modal w-full max-w-[620px] overflow-hidden bg-white shadow-2xl ${deleting?'delete-modal':''}`} initial={{opacity:0,scale:.94,y:18}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:.96,y:12}} transition={{type:'spring',stiffness:360,damping:30}}>
   <header><div><span>{modal.mode.toUpperCase()} RECORD</span><h2 id="record-modal-title">{deleting?'Delete this record?':view?'Record Details':modal.mode==='edit'?'Edit Record':actionLabel(type)}</h2></div><button onClick={onClose} aria-label="Close modal"><X/></button></header>
   {deleting?<div className="delete-confirm"><span><Trash2/></span><p><b>{modal.record.title}</b> स्थायी रूप से delete हो जाएगा। यह action वापस नहीं किया जा सकता।</p><div><button onClick={onClose}>Cancel</button><button onClick={()=>onDelete(modal.record)}>Delete Record</button></div></div>:<form onSubmit={handleSubmit(onSave)} noValidate><label>Title / Name<input {...register('title',{required:'Title is required',minLength:{value:2,message:'Enter at least 2 characters'}})} readOnly={view} autoFocus={!view}/>{errors.title&&<small className="field-error">{errors.title.message}</small>}</label><div className="modal-fields"><label>Category<input {...register('category',{required:'Category is required'})} readOnly={view}/>{errors.category&&<small className="field-error">{errors.category.message}</small>}</label><label>Status<select {...register('status')} disabled={view}><option>Active</option><option>Published</option><option>Draft</option><option>Unread</option><option>Archived</option></select></label></div><label>Details<textarea {...register('details',{required:'Details are required'})} readOnly={view} rows="5"/>{errors.details&&<small className="field-error">{errors.details.message}</small>}</label><footer><button type="button" onClick={onClose}>{view?'Close':'Cancel'}</button>{!view&&<button className="admin-primary" type="submit" disabled={isSubmitting}>{modal.mode==='edit'?'Save Changes':'Create Record'}</button>}</footer></form>}
  </motion.section>
 </motion.div>,document.body)
}
function blankRecord(type){return{id:null,title:'',category:type==='menu'?'Food Item':type==='gallery'?'Gallery Media':'General',details:'',status:'Active'}}
function actionLabel(type){return({menu:'Add Menu Item',gallery:'Upload Media',videos:'Add Video',testimonials:'Add Testimonial',messages:'Add Message',offers:'Create Offer',contact:'Add Information',settings:'Add Setting'}[type]||'Add New')}
