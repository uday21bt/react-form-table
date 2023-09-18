import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Root from './routes/root/root.route';
import SharedLayout from './routes/shared-layout/shared-layout';
import ViewData from './routes/view-data/view-data.route';
import Success from './routes/success/success.route';

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<SharedLayout />}>
                <Route index element={<Root />} />

                <Route path='view-data' element={<ViewData />} />

                <Route path='success' element={<Success />} />

                <Route path='*' element={<>Error</>} />
            </Route>
        </Routes>
    );
}
