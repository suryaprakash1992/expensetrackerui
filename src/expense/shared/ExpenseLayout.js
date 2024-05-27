import React from 'react'
import {Route,Routes,NavLink} from 'react-router-dom'
import AddExpenses from '../container/AddExpenses'

export default function ExpenseLayout() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Add Expenses </NavLink>
                    </li>
                </ul>
            </nav>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<AddExpenses/>}></Route>
                </Routes>
            </div>

        </div>
    )
}
