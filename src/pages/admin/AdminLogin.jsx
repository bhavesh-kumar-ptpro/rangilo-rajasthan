import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, LockKeyhole, ShieldCheck, UserRound } from 'lucide-react'
import { loginAdmin } from '../../utils/adminAuth'
import './AdminLogin.css'

export default function AdminLogin(){
 const navigate=useNavigate(),[show,setShow]=useState(false),[error,setError]=useState(''),[busy,setBusy]=useState(false)
 const submit=(event)=>{event.preventDefault();setBusy(true);setError('');const form=new FormData(event.currentTarget);setTimeout(()=>{if(loginAdmin(form.get('username'),form.get('password')))navigate('/admin',{replace:true});else{setError('Username या password सही नहीं है।');setBusy(false)}},450)}
 return <main className="admin-login"><div className="login-pattern"/><section className="login-brand-panel"><div><img src="/images/logo/rangilo-rajwado-logo.png" alt="Rangilo Rajwado"/><span>RESTAURANT MANAGEMENT</span><h1>हर स्वाद के पीछे,<br/><em>बेहतरीन प्रबंधन।</em></h1><p>Menu, gallery, feedback और customer communication—सब कुछ एक सुरक्षित जगह से मैनेज करें।</p><div className="secure-note"><ShieldCheck/><span><b>Secure Admin Access</b><small>Authorised personnel only</small></span></div></div></section><section className="login-form-panel"><form onSubmit={submit}><div className="login-mark"><LockKeyhole/></div><span>RANGILO RAJWADO</span><h2>Admin Login</h2><p>Dashboard जारी रखने के लिए credentials दर्ज करें।</p><label>Username<div><UserRound/><input name="username" autoComplete="username" required placeholder="Enter username"/></div></label><label>Password<div><LockKeyhole/><input name="password" autoComplete="current-password" required type={show?'text':'password'} placeholder="Enter password"/><button type="button" onClick={()=>setShow(!show)} aria-label="Show password">{show?<EyeOff/>:<Eye/>}</button></div></label>{error&&<div className="login-error">{error}</div>}<button className="login-submit" disabled={busy}>{busy?<i/>:'Login to Dashboard'}</button><small className="temporary-note">Temporary administrator access</small></form></section></main>
}
