import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate,  } from 'react-router-dom';
import Login from './views/login';
import Collaborateurs from './views/collaborateurs';
import Randomcollab from './views/randomcollab';
import AddCollab from './views/addCollab';
import UpdateUser from './views/updateUser';
import UpdateSelectUser from './views/updateSelectUser';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProtectedRoute from './components/protectedRoute';
import ProtectedAdminRoute from './components/protectedAdminRoute';


function App() {

  

  return (
    <BrowserRouter>
      <div className="App" >
        <div>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/collaborateurs"
              element={ 
                <ProtectedRoute>
                  <Collaborateurs />
                </ProtectedRoute>
              }
            />
            <Route path="/randomCollab"
              element={ 
                <ProtectedRoute>
                  <Randomcollab />
                </ProtectedRoute>
              }
            />
            <Route path="/addCollab"
              element={ 
                <ProtectedAdminRoute>
                  <AddCollab />
                </ProtectedAdminRoute>
              }
            />
            <Route path="/updateUser"
              element={ 
                <ProtectedRoute>
                  <UpdateUser />
                </ProtectedRoute>
              }
            />
            <Route path="/updateSelectUser/:id"
              element={ 
                <ProtectedAdminRoute>
                  <UpdateSelectUser />
                </ProtectedAdminRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
