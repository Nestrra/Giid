import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "./auth/routes/AuthRoutes"
import { HomeRoutes } from "./dash/routes/HomeRoutes"


export const RouterApp = () => {


    
    return (

        <Routes>
            <Route path='/auth/*' element={<AuthRoutes />} />            
            <Route path='/*' element={<HomeRoutes />} />
        </Routes>

    )
}
