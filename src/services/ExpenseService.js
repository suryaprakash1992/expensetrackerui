import apiClient from "../helper/apiClient"

const ExpenseService={
    addExpenses,
    updateExpense,
    deleteExpense
}

function addExpenses(model){
    return apiClient.post('DailyExpenses/AddDailyExpenese',model)
                    .then(res=>res)
                    .catch(err=>err);
}
function updateExpense(){

}
function deleteExpense(){

}

export default ExpenseService;