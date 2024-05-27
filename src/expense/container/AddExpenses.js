import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Select from 'react-select';
import * as Yup from "yup";
import CategoryService from '../../services/CategoryService';
import ExpenseService from '../../services/ExpenseService';
import ItemService from '../../services/ItemService';

// import ToastMessage from '../../shared/ToastMsg';
const initialValue = {
    categoryId: '',
    itemId: '',
    amount: '',
    account: '',
    OwnerName: '',
    expenseDate: ''
}

const schema = Yup.object({
    categoryId: Yup.string().required('Please Enter Category Id'),
    itemId: Yup.string().required('Please Enter Item Id'),
    amount: Yup.number().required('Please Enter amount'),
    account: Yup.string().required('Please Enter Bank Account Name'),
    OwnerName: Yup.string().required('Please Enter Owner Name'),
    expenseDate: Yup.date().required('Please Enter Expense Date'),

});
export default function AddExpenses() {
    // const [showToast, setShowToast] = useState(false);
    const [categdata, setCategData] = useState([]);
    const handleSubmit = (values) => {
        console.log(values);
        ExpenseService.addExpenses(values).then(res => {
            // setShowToast(true);
            console.log(res);
            // setTimeout(() => {
            //     setShowToast(false);
            //   }, 3000); 
        });
    }

    const [categItemData, setCategItemData] = useState([]);
    useEffect(() => {
        CategoryService.getAllCategory().then(res => {

            const categSelectOptions = res.data.map(item => ({
                value: item.id,
                label: item.category
            }));
            setCategData(categSelectOptions);
        });

    }, ['']);
    return (
        <div>
            <h1>AddExpenses</h1>
            {/* <div className="container mt-3">
                
                {showToast && <ToastMessage message="This is a toast message!" />}
            </div> */}
            <Formik initialValues={initialValue} validationSchema={schema} onSubmit={handleSubmit}>
                {({ setFieldValue }) => {
                    return (
                        <Form>

                            <div className="mb-3">
                                <Select
                                    id="categoryId"
                                    name="categoryId"
                                    placeholder="Choose Category..."
                                    options={categdata}
                                    onChange={(selectedCategOption) => {
                                        setFieldValue("categoryId", selectedCategOption ? selectedCategOption.value : "");
                                        ItemService.getItemForCategory(selectedCategOption.value).then(res => {
                                            if (res.status == 200) {

                                                const itemSelectOptions = res.data.map(item => ({
                                                    value: item.itemId,
                                                    label: item.itemName
                                                }));
                                                setCategItemData(itemSelectOptions);
                                            }

                                        });
                                    }}

                                />
                            </div>
                            <div className="mb-3">
                                <Select
                                    id="itemId"
                                    name="itemId"
                                    placeholder="Choose Item..."
                                    options={categItemData}
                                    onChange={(selectedItemOption) => {
                                        setFieldValue("itemId", selectedItemOption ? selectedItemOption.value : "");
                                        // CategoryService.getItemBasedCategory(selectedItemOption.value).then(res => {
                                        //     if (res.status == 200) {
                                        //         setCategItemData(res.data);
                                        //     }

                                        // });
                                    }}

                                />
                            </div>



                            <div className="mb-3">

                                <Field type="text" placeholder="Amount in ₹" name="amount" className="form-control" />
                                <ErrorMessage component="label" className='text-danger' name='amount'></ErrorMessage>
                            </div>
                            <div className="mb-3">

                                <Field type="text" placeholder="Bank Account" name="account" className="form-control" />
                                <ErrorMessage component="label" className='text-danger' name='account'></ErrorMessage>
                            </div>
                            <div className="mb-3">

                                <Field type="text" placeholder="Spend by" name="OwnerName" className="form-control" />
                                <ErrorMessage component="label" className='text-danger' name='OwnerName'></ErrorMessage>
                            </div>
                            <div className="mb-3">

                                <Field type="date" placeholder="Date of Expense" name="expenseDate" className="form-control" />
                                <ErrorMessage component="label" className='text-danger' name='expenseDate'></ErrorMessage>
                            </div>
                            <div className="mb-3">

                                <Field type="text" placeholder="Any Notes" name="notes" className="form-control" />

                            </div>
                            <div className="mb-3">
                                <input type="submit" value="Save" className="btn btn-primary" />
                            </div>

                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}
