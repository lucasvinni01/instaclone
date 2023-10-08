import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import PostPage from './Pages/PostPage'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/post' element={<PostPage/>} />
            </Routes>
        </BrowserRouter>
    )
}