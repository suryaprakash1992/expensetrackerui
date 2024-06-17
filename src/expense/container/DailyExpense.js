import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import ExpenseService from '../../services/ExpenseService';

export default function DailyExpense() {

    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState([
        { ExpenseCategory: "", ExpenseItem: "", ExpenseAmount: 0, SpentOnBank: "", SpentBy: "", SpentOn: "" },
    ]);
    const [colDefs, setColDefs] = useState([
        { field: "ExpenseCategory" },
        { field: "ExpenseItem" },
        { field: "ExpenseAmount" },
        { field: "SpentOnBank" },
        { field: "SpentBy" },
        { field: "SpentOn" }
    ]);
    useEffect(() => {
        ExpenseService.getPastDayExpenses().then(res => {
            const dailyExpenseData = res.data.map(item => ({
                ExpenseCategory: item.expenseCategory,
                ExpenseItem: item.expenseItem,
                ExpenseAmount: item.expenseAmount,
                SpentOnBank: item.spentOnBank,
                SpentBy: item.spentBy,
                SpentOn: item.spentOn
            }));
            setRowData(dailyExpenseData);
        })
    }, ['']);

    // Column Definitions: Defines the columns to be displayed.


    // ...


    return (
        <div>
            <div
                className="ag-theme-quartz" // applying the grid theme
                style={{ height: 500 }} // the grid will fill the size of the parent container
            >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                />
            </div>

        </div>
    )
}
