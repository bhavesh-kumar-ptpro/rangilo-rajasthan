import { createContext,useContext,useMemo,useState } from 'react'
const AdminContext=createContext(null)
export function AdminProvider({children}){const[admin,setAdmin]=useState(null);const value=useMemo(()=>({admin,setAdmin}),[admin]);return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>}
// oxlint-disable-next-line react/only-export-components
export const useAdmin=()=>useContext(AdminContext)
