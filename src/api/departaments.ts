

import axios from "axios"



export const getDepartaments = async () => {
    return await axios.get(`http://localhost:3000/api/departments`)
} 

export const getCities = async () => {
    return await axios.get(`http://localhost:3000/api/cities`)
} 