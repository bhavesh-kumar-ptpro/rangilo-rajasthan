import { useEffect,useState } from 'react'
import { getMessages } from '../services/messageService'
export default function useMessages(){const[data,setData]=useState([]);useEffect(()=>{getMessages().then(setData)},[]);return data}
