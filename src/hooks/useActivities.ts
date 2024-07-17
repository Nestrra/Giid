


import { useEffect, useState } from "react"
import { Activity} from "../interfaces/appInterface"
import { getActivities } from "../api/activities"

export const useActivities = () => {

  
    const [activiteies, setactiviteies] = useState<Activity[]>()
    const [loading, setloading] = useState(true)


    useEffect(() => {
        setCities()
    }, [])
    

    const setCities = async ()=>{
        setloading(true)
        try {
            const resp = await getActivities();   
            setTimeout(() => {
                setactiviteies(resp.data)
                setloading(false)
            }, 800);        
           
        } catch (error) {
            setloading(false)
        }
       }

  return {

    activiteies,
    loading,
    
  }
}
