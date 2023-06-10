import {Homepage} from './containers/homepage/index'
import {InscriptionPage} from './containers/inscriptionspage/index'
import {ConnexionPage} from './containers/connexionpage/index'
import {ContactPage} from './containers/contactpage/index'
import {ForgotPassword} from './containers/forgotPassword/forgot_password'
import {Dashboard} from './containers/dashboard/index'
import {ResetPassword} from './containers/resetpassword/index'
// import {AuthLayout} from './layouts/AuthLayout'
// import {GuestLayout} from './layouts/GuestLayout'
import './App.css';
import React from 'react';
// import { faRoute } from '@fortawesome/free-solid-svg-icons';
import { Routes,Route} from 'react-router-dom'

function App() {
  
  return (
  <>
    <Routes>
      <Route path='' element={<Homepage />}></Route>
      <Route path='/contact' element={<ContactPage />}></Route>
      {/* <Route element={<AuthLayout />}> */}
          <Route path='/inscription' element={<InscriptionPage />}></Route>
          <Route path='/connexion' element={<ConnexionPage />}></Route>
          <Route path='/forgot-password' element={<ForgotPassword />}></Route>
      {/* </Route> */}
      {/* <Route  element={<GuestLayout />}> */}
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/password-reset/:token' element={<ResetPassword />}></Route>

      {/* </Route> */}

      
    </Routes>
  </>
  )
}

export default App;
