import { useEffect,useState } from 'react'
import { getMedia } from '../services/mediaService'
export default function useMedia(){const[data,setData]=useState([]);useEffect(()=>{getMedia().then(setData)},[]);return data}
