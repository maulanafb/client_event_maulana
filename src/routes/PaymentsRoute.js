import { Route, Routes } from 'react-router-dom';


import Create from '../pages/Payments/create';
import Edit from '../pages/Payments/edit';
import Payments from '../pages/Payments';

export function PaymentsRoute() {
    return (
        <Routes>
            <Route path='/' element={<Payments />} />
            <Route path='/create' element={<Create />} />
            <Route path='/edit/:paymentId' element={<Edit />} />
        </Routes>
    );
}