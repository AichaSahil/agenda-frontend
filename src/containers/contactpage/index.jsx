// import React from 'react'
import {  Link } from 'react-router-dom'
import '../../css/style.css'
import styled from "styled-components";
import BackgroundImg from "../../assets/pictures/agendaPurple1.png";
import api from "../../api/axios"
import { useState } from 'react';
// import {useAuthContext} from '../../context/AuthContext'
import ImageContact from '../../images/contact3.png'
// import SweetAlert from 'react-bootstrap-sweetalert'
import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

// import swal from 'sweetalert';
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

export function ContactPage() {
  const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [success,setSucceful] = useState(false)
    // const navigate = useNavigate();

  
    // const styleTextArea = {
    //   height: 150px;
    //   padding: 12px 20px;
    //   box-sizing: border-box;
    //   border: 2px solid #ccc;
    //   border-radius: 4px;
    //   background-color: #f8f8f8;
    //   font-size: 16px;
    //   resize: none;
    // }

    // const crsf = () => api.get('/sanctum/csrf-cookie')

    const HandleContact = async (event) =>{
        event.preventDefault();
        
       
        // await crsf();

        try{
            await api.post("/api/contact", {name,email ,message});
            setName("")
            setEmail("");
            setMessage("")
            setSucceful(true)
            // navigate("/")

       
            
        }catch(e){
            console.log(e);
            

          //     if(e.response.status === 422){
          //   setErrors(e.response.data.errors)
          // }
        }
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
      {success ?<div className="alert-container"> <Alert severity="success">Vous envoyez votre message ,Merci !</Alert></div>:""}

                      <h2 className="form-title">Contactez nous</h2>
                      <form onSubmit={HandleContact} className="register-form" id="register-form">
                          <div className="form-group">
                              <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                              <input type="text"  value={name}  onChange={(e) => setName(e.target.value) }  name="name" id="name" placeholder="Votre nom"/>
                             {/* {errors.name && 
                              <span className='text-red-400 text-sm m-2 p-2'>{errors.name[0]}</span>
                            } */}

                          </div>
                          <div className="form-group">
                              <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                              <input type="email" value={email}   onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="Votre Email"/>
                              {/* {errors.email && 
                              <span className='text-red-400 text-sm m-2 p-2'>{errors.email[0]}</span>
                            } */}

                          </div>
                          <div className="form-group">
                              <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                              <textarea type="textarea"  value={message}  onChange={(e) =>setMessage(e.target.value) } name="pass" id="pass" placeholder="Votre message"/>
                              {/* {errors.password && 
                              <span className='text-red-400 text-sm m-2 p-2'>{errors.password[0]}</span>
                            } */}

                          </div>
                          {/* <div className="form-group">
                              <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                              <input type="password"   value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}  name="re_pass" id="re_pass" placeholder="Confirmer Votre Mot de passe"/>
                              {errors.password_confirmation && 
                              <span className='text-red-400 text-sm m-2 p-2'>{errors.password_confirmation[0]}</span>
                            }

                          </div> */}
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
                      <figure><img src={ImageContact} alt="contact" /></figure>
                      <Link to="/"><span className="signup-image-link">Return to home page</span></Link>
                  </div>
              </div>
          </div>
      </section>
      {/* {HandleContact ? <SweetAlert
              success
              title="Woot!"
              onConfirm={this.hideAlert}
            >
              I did it!
            </SweetAlert> : ''} */}

      </Space>
      </BackgroundFilter>
      </TopContainer>
    );
}

