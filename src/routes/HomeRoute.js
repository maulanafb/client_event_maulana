import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Dashboard';

export function HomeRoute() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    );
}