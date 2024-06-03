import CategoryService from '../../services/CategoryService';
import Select from 'react-select';
import * as Yup from "yup";
import React, { useEffect, useState } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import ItemService from '../../services/ItemService';

const initialValue = {
  categoryId: '',
  itemId: '',
}

const schema = Yup.object({
  categoryId: Yup.string().required('Please Select Category'),
  itemId: Yup.string().required('Please Enter ItemName'),
});

export default function AddItems() {
  const [categdata, setCategData] = useState([]);
  const handleSubmit = (values) => {
    console.log(values);
    ItemService.addNewItemtoCateg(values).then(res => {
      alert("Item Saved");
      console.log(res);
    })

  }
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
      AddItems
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
                />
              </div>
              <div className="mb-3">
                <Field type="text" placeholder="ItemName" name="itemId" className="form-control" />
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
