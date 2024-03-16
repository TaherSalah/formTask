
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import FormComponent from "./FormComponent";
import {useSelector} from 'react-redux';

export default function TableData() {
    const [visible, setVisible] = useState(false);
    const [userList, setUserList] = useState([]);
    const newUser=[];


    const user = useSelector(
        (state)=>state.user.value,
    );
    useEffect(() => {
        // ProductService.getProductsMini().then(data => setProducts(data));
        setUserList(user);
    }, []);

    return (
        <>
            <div className="card flex justify-content-center ">
                <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                    <FormComponent setVisible={setVisible} />
                </Dialog>
            </div>
            <div className="card mt-5">

                <DataTable tableStyle={{ minWidth: '50rem' }}>
                    <Column field="id" header="id"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="email" header="email"></Column>
                    <Column field="birthday" header="birthday"></Column>
                    <Column field="gender" header="gender"></Column>

                </DataTable>
            </div>

        </>

    );
}
