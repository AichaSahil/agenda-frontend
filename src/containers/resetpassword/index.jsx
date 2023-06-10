import React from 'react';
import {  Link } from 'react-router-dom'
import '../../css/style.css'
import styled from "styled-components";
import BackgroundImg from "../../assets/pictures/agendaPurple1.png";
import api from "../../api/axios"
import { useState,useEffect } from 'react';
import {useAuthContext} from '../../context/AuthContext'
// import ImageRegister from '../../images/signup-image.jpg'
import ImageConnexion from '../../images/Forget-Password.jpg'

import { useParams,useSearchParams } from 'react-router-dom';



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
   margin :80px 0px 0px 0px;

`
export const ResetPassword = () => {
    const [email,setEmail] = useState('');
    const [errors,setErrors] =useState([]);
    const [status,setStatus] =useState(null)
    const [password,setPassword] = useState('');
    const [password_confirmation,setPasswordConfirmation] =useState(null);
    const [searchParams] = useSearchParams()

    const {token} = useParams();
    const {crsf} = useAuthContext();
    
    useEffect(() => {
        setEmail(searchParams.get("email"))
        console.log(email);
    },[])

  const handleSubmit = async (event) =>{
    event.preventDefault();
    await crsf();
    setErrors([]);
    setStatus(null);
    try{
      const response= await api.post('/reset-password',{
        email, 
        token, 
        password,
        password_confirmation 
    })
      setStatus(response.data.status)
    }catch(e){
      if(e.response.status === 422){
            setErrors(e.response.data.errors)}
    }}
    return (
        <div>
            <TopContainer>
        <BackgroundFilter>
            <Space>
      <section className="signup">
          <div className="container">
              <div className="signup-content">
                  <div className="signup-form">
                      <h2 className="form-title">Creé nouveau mode de passe</h2>
                      {status && (
                            <div className='bg-green-700 m-2 p-2 ruounded text-white'>
                                {status}
                                <div className='m-2 p-2'>
                                    Go to <Link to='/connexion'>Connexion</Link>
                                </div>
                            </div> 
                          )}
                      <form onSubmit={handleSubmit} className="register-form" id="register-form">
                           {/* <div className="form-group">
                              <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                              <input type="email" value={email}   onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="Votre Email"/>
                              {errors.email && 
                              <span className='text-red-400 text-sm m-2 p-2'>{errors.email[0]}</span>
                            }

                          </div> */}
                         
                          

                          <div className="form-group">
                              <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                              <input type="password"  value={password}  onChange={(e) =>setPassword(e.target.value) } name="pass" id="pass" placeholder="Mot de passe"/>
                              {errors.password && 
                              <span className='text-red-400 text-sm m-2 p-2'>{errors.password[0]}</span>
                            }

                          </div>
                          <div className="form-group">
                              <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                              <input type="password"   value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}  name="re_pass" id="re_pass" placeholder="Confirmer Votre Mot de passe"/>
                              {errors.password_confirmation && 
                              <span className='text-red-400 text-sm m-2 p-2'>{errors.password_confirmation[0]}</span>
                            }

                          </div>
                          {/* <div className="form-group">
                              <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                              <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                          </div> */}
                          <div className="form-group form-button">
                              <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                          </div>
                      </form>
                  </div>
                  <div className="signup-image">
                      <figure><img src={ImageConnexion} alt="confirmer" /></figure>
                      {/* <Link to="/connexion">
                        <span className="signup-image-link">J ai déja un compte</span>
                        </Link> */}
                  </div>
              </div>
          </div>
      </section>
      </Space>
      </BackgroundFilter>
      </TopContainer>
        </div>
    );
}

 
