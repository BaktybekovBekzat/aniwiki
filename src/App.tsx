import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Characters, Medias } from './pages'

const App: FC = () => {
    return (
        <Routes>
            <Route path='/characters' element={<Characters />} />
            <Route path='/medias' element={<Medias />} />
        </Routes>
    )
}

export default App
