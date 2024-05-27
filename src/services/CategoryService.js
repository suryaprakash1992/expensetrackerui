import apiClient from "../helper/apiClient";

const CategoryService={
    getAllCategory
}

function getAllCategory() {
    return apiClient.get('Category/GetCategories')
                    .then(res=>res)
                    .catch(err=>err);
}


export default  CategoryService;