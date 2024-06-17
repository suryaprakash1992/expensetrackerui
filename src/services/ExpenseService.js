import apiClient from "../helper/apiClient"

const ExpenseService={
    addExpenses,
    updateExpense,
    deleteExpense,
    getPastDayExpenses
}

function addExpenses(model){
    return apiClient.post('DailyExpenses/AddDailyExpenese',model)
                    .then(res=>res)
                    .catch(err=>err);
}
function getPastDayExpenses(){
    return apiClient.get('DailyExpenses/GetPastDayExpense')
                    .then(res=>res)
                    .catch(err=>err);
}
function updateExpense(){

}
function deleteExpense(){

}

export default ExpenseService;