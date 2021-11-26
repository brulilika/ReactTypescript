import React from 'react';
import GlobalStyles from './styles/GlobalStyles'
import {ThemeProvider} from 'styled-components'
import {dark} from './styles/themes/dark'
import Layout from './components/layout';
import Dashboard from './pages/dashboard';
import List from './pages/list';
const App: React.FC = () => {
    
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Layout>
                <List/>
            </Layout>
        </ThemeProvider>
    );
}

export default App;