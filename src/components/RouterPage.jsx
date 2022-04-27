import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Flores from './Flores'
import About from './About'
import Contacto from './Contacto'
import Form from './Form'

export default function RouterPage() {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Flores />} />
                <Route path='/about' exact element={<About />} />
                <Route path='/contacto' exact element={<Contacto />} />
                <Route path='/form' exact element={<Form />} />
            </Routes>
        </Router>
    )
}
