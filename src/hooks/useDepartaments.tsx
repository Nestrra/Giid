import { useEffect, useState } from "react"
import { getDepartaments } from "../api/departaments"
import { Departament} from "../interfaces/appInterface"

export const useDepartaments = () => {

    const [departemants, setdepartemants] = useState<Departament[]>()
    const [loading, setloading] = useState(false)


    useEffect(() => {
        setDepartaments()
    }, [])
    

    const setDepartaments = async ()=>{
        setloading(true)
        try {
            const resp = await getDepartaments();
            
            setdepartemants(resp.data)
            setloading(false)
        } catch (error) {
            setloading(false)
        }
       }

  return {

    departemants,
    loading


  }
}
