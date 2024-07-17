import axios from "axios"
import numeral from "numeral"


export const createActivity = async (values: any) => {

    console.log(values)

    return await axios.post(`http://localhost:3000/api/activities`,
        {
            title: values.title,
            price: numeral(values.price).value(),
            description: values.description,
            purpose:values.purpose ,
            duration:values.duration ,
            includes:values.includes ,
            itinerary:values.itinerary,
            recommendations: values.recommendations,
            status: true,
            images: ["https://imagen1", "https://imagen2"],
            departament: values.departament,
            city: values.city
        }
    )
} 

export const getActivities = async () => {
    return await axios.get(`http://localhost:3000/api/activities`)
} 