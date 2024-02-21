import * as React from 'react';
import {CssVarsProvider} from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';


import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MyMessages from './components/MyMessages';

export default function Messages() {
    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline/>
            <Box sx={{display: 'flex', minHeight: '100dvh'}}>
                <Sidebar/>
                <Header/>
                <Box component="main" className="MainContent" sx={{
                    flex: 1,
                    '@media (max-width: 900px)': {
                        '.css-1kfa53u-JoySheet-root': {
                                paddingTop: '50px'
                        }
                    }
                }}>
                    <MyMessages/>
                </Box>
            </Box>
        </CssVarsProvider>
    );
}

