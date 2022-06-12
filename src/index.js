import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { DataContextProvider } from './context/data-context';
import { ModalContectProvider } from './context/modal-context';
import { ProgrammeContextProvider } from './context/programme-context';
import { SelectedContextProvider } from './context/selected-context';
import { UserContextProvider } from './context/user-context';
import { SidebarContextProvider } from './pages/sidebar-context'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalContectProvider>
        <UserContextProvider>
          <DataContextProvider>
            <ProgrammeContextProvider>
              <SelectedContextProvider>
                <SidebarContextProvider>
                  <App />
                </SidebarContextProvider>
              </SelectedContextProvider>
            </ProgrammeContextProvider>
          </DataContextProvider>
        </UserContextProvider>
      </ModalContectProvider >
    </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById('root')
);


