import React from 'react';
import { Routes , Route } from 'react-router-dom';

import Layout from '../components/layout';
import Dashboard from '../pages/dashboard';
import List from '../pages/list';

const AppRoutes: React.FC = () => (
    <Layout>
        <Routes>
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/list/:type' element={<List/>}/>
        </Routes>
    </Layout>
);

export default AppRoutes;