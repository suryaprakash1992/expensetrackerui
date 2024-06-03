import React from 'react'
import {Route,Routes,NavLink} from 'react-router-dom'
import AddExpenses from '../container/AddExpenses'
import AddItems from '../container/AddItems'

export default function ExpenseLayout() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Add Expenses </NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/AddItem">Add Items </NavLink>
                    </li>
                </ul>
            </nav>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<AddExpenses/>}></Route>
                    <Route path='/AddItem' element ={<AddItems/>}></Route>
                </Routes>
            </div>

        </div>
    )
}
