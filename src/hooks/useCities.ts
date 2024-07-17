


import { useEffect, useState } from "react"
import { getCities } from "../api/departaments"
import { Cities} from "../interfaces/appInterface"

export const useCities = () => {

  
    const [cities, setcities] = useState<Cities[]>()
    const [loading, setloading] = useState(false)


    useEffect(() => {
        setCities()
    }, [])
    

    const setCities = async ()=>{
        setloading(true)
        try {
            const resp = await getCities();           
            setcities(resp.data)
            setloading(false)
        } catch (error) {
            setloading(false)
        }
       }





  return {

    cities,
    loading,
    
  }
}
