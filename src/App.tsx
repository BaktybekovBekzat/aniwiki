import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Characters } from './pages'

const App: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Characters />} />
        </Routes>
    )
}

export default App
