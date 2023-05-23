import { Navigate, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Theory from './pages/Theory'
import Practice from './pages/Practice'
import Control from './pages/Control'
import Gloss from './pages/Gloss'
import Literature from './pages/Literature'

const AppRouter = () => {
    return (
        <Routes>
            <Route key='/main' path='/main' element={<Main/>} />
            <Route key='/theory' path='/theory' element={<Theory/>} />
            <Route key='/practice' path='/practice' element={<Practice />} />
            <Route key='/gloss' path='/gloss' element={<Gloss />} />
            <Route key='/literature' path='/literature' element={<Literature />} />
            <Route key='/control' path='/control' element={<Control />} />
            <Route key='/control/:id' path='/control/:id' element={<Control />} />
            <Route key='/control/itog' path='/control#quiz-itog' element={<Control />} />
            <Route
                path="*"
                element={<Navigate to="/theory" replace />}
            />
        </Routes>
    )
}

export default AppRouter