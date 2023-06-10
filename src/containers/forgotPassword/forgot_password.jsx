// import React from 'react'
import ImageConnexion from '../../images/Forget-Password.jpg'
import {  Link } from 'react-router-dom'
import { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import styled from "styled-components";
import BackgroundImg from "../../assets/pictures/agendaPurple1.png";
import api from "../../api/axios"
import '../../css/style.css'



const TopContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  background-image: url(${BackgroundImg});
  position: relative;
`;
const BackgroundFilter = styled.div`
width: 100%;
height: 100%;
background-color: rgba(5, 5, 5, 0.5);
display: flex;
flex-direction: column;
align-items: center;

`;

const Space = styled.div`
   margin :80px 0px 15% 0px;

`;
export function ForgotPassword() {
  const [email,setEmail] = useState('');
  const [errors,setErrors] =useState([]);
  const [status,setStatus] =useState(null);
  const {crsf} = useAuthContext();

 


  const handleSubmit = async (event) =>{
    event.preventDefault();
    await crsf();
    setErrors([]);
    setStatus(null);
    try{
      const response= await api.post('/forgot-password',{email})
      setStatus(response.data.status)
    }catch(e){
      if(e.response.status === 422){
            setErrors(e.response.data.errors)}
    }

    
    // register({name,email,password,password_confirmation})
    // await crsf();

    // try{
    //     await api.post("/register", {name,email, password,password_confirmation});
    //     setName("")
    //     setEmail("");
    //     setPassword("")
    //     setPasswordConfirmation("")
    //     navigate("/dashboard")
    // }catch(e){
    //     console.log(e);
    //       if(e.response.status === 422){
    //     setErrors(e.response.data.errors)
    //   }
    // }
}
  return (
    <TopContainer>
      <BackgroundFilter>
        <Space>
  
      <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src={ImageConnexion} alt="forget" /></figure>
                       <Link to="/inscription"> <span href="#" className="signup-image-link">Creer un compte</span></Link>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Mot de passe oublié</h2>
                        <form onSubmit={handleSubmit} className="register-form" id="login-form">
                            <div className="form-group">
                              {status && <div className='bg-green-700 m-2 p-2 rounded text-white'>{status}</div>}
                            <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                              <input type="email"  value={email}   onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="Votre Email"/>
                              {errors.email && 
                              <span className='text-red-400 text-sm m-2 p-2'>{errors.email[0]}</span>
                            }
                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" placeholder="Mot de passe"/>
                              <span className='text-red-400 text-sm m-2 p-2'>error</span>

                            </div> */}
                            {/* <div className="form-group"> */}
                                {/* <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" /> */}
                               {/* <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remmber me</label> */}
                               {/* <Link to="/forgot-password" className='mb-2 inline-block text-base  hover:text-primary hover:underline'>j'oubliée mot de passe</Link> */}
                            {/* </div> */}
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Confirmer"/>
                            </div>
                        </form>
                        
                        {/* <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
   
    </Space>
    </BackgroundFilter>
    </TopContainer>
  )
}

  