import { useEffect,useState } from 'react'
import { getRestaurant } from '../services/restaurantService'
export default function useRestaurantData(){const[data,setData]=useState(null);useEffect(()=>{getRestaurant().then(setData)},[]);return data}
