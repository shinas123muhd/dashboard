import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DashboardPage from './Pages/DashboardPage';

function MyRoutes() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={< DashboardPage />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default MyRoutes