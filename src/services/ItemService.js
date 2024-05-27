import apiClient from "../helper/apiClient";

const ItemService={
    getAllCategoryAndItem,
    getItemForCategory
}

function getAllCategoryAndItem() {
    return apiClient.get('/Items/GetItemandCategory')
                    .then(res=>res)
                    .catch(err=>err);
}
function getItemForCategory(id){
    return apiClient.get('/Items/GetItemForCategory?id='+id)
                    .then(res=>res)
                    .catch(err=>err);
}

export default  ItemService;