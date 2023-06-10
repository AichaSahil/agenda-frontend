// import React from 'react';
import {  Link } from 'react-router-dom'
import '../../css/style.css'
import styled from "styled-components";
import BackgroundImg from "../../assets/pictures/agendaPurple1.png";
// import api from "../../api/axios"
import { useState } from 'react';
import {useAuthContext} from '../../context/AuthContext'
import ImageRegister from '../../images/signup-image.jpg'
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import {
//     MDBBtn,
//     MDBContainer,
//     MDBCard,
//     MDBCardBody,
//     MDBInput,
//     MDBCheckbox
//   }
//   from 'mdb-react-ui-kit';
  import './index.css'


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

export function InscriptionPage() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [password_confirmation,setPasswordConfirmation] = useState('');
    // const [errors,setErrors] = useState([]);
    // const navigate = useNavigate();
    const {register,errors} = useAuthContext();

    // const crsf = () => api.get('/sanctum/csrf-cookie')

    const HandleRegister = async (event) =>{
        event.preventDefault();
        
        register({name,email,password,password_confirmation})
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
      
      // Sign up form 
      
      <TopContainer>
        <BackgroundFilter>
            <Space>
      <section className="signup">
          <div className="container">
              <div className="signup-content">
                  <div className="signup-form">
                      <h2 className="form-title">Inscription</h2>
                      <form onSubmit={HandleRegister} className="register-form" id="register-form">
                          <div className="form-group">
                              <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                              <input type="text"  value={name}  onChange={(e) => setName(e.target.value) }  name="name" id="name" placeholder="Votre nom"/>
                             {errors.name && 
                              <span className='text-red-400 text-sm m-2 p-2'>{errors.name[0]}</span>
                            }

                          </div>
                          <div className="form-group">
                              <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                              <input type="email" value={email}   onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="Votre Email"/>
                              {errors.email && 
                              <span className='text-red-400 text-sm m-2 p-2'>{errors.email[0]}</span>
                            }

                          </div>
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
                      <figure><img src={ImageRegister} alt="sing up image" /></figure>
                      <Link to="/connexion"><span className="signup-image-link">J ai déja un compte</span></Link>
                  </div>
              </div>
          </div>
      </section>
      </Space>
      </BackgroundFilter>
      </TopContainer>
    );
}


