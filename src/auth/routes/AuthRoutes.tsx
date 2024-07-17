import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { ResetPassword } from "../pages/ResetPassword"







export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='login' element={<Login />} />
            <Route path='reset_password' element={<ResetPassword />} />
            <Route path='/*' element={<Navigate to={'/auth/login'} />} />
        </Routes>
    )
}
