import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { NewActivity } from "../pages/NewActivity"
import { DashLayout } from "../layout/DashLayout"
import { Activities } from "../pages/Activities"
import { DetailActivity } from "../pages/DetailActivity"


export const HomeRoutes = () => {
    return (
        <Routes>
             <Route path='/' element={<DashLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/actividades' element={<Activities />} />                
                <Route path='/nueva-actividad' element={<NewActivity />} />
                <Route path='/detalle-actividad/:id' element={<DetailActivity />} />
                <Route path='/*' element={<Navigate to={'/'} />} />
            </Route>

        </Routes>
    )
}
