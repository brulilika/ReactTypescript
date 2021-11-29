import React from 'react';
import { Routes , Route } from 'react-router-dom';

import Layout from '../components/layout';
import Dashboard from '../pages/dashboard';
import List from '../pages/list';

const AppRoutes: React.FC = () => (
    <Layout>
        <Routes>
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/list/income' element={<List match={{
                params: {
                    type: 'income'
                }
            }}/>}/>

            <Route path='/list/outcome' element={<List match={{
                params: {
                    type: 'outcome'
                }
            }}/>}/>
        </Routes>
    </Layout>
);

export default AppRoutes;