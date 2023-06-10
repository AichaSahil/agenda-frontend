import {React,createContext,useContext,useState} from 'react';
import api from "../api/axios"
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [errors,setErrors] = useState([]);
    const navigate = useNavigate();




    const crsf = () => api.get('/sanctum/csrf-cookie')

    const getUser = async () => {
        const {data} = await api.get('/api/user');
        setUser(data);
        

    }
    const login = async({...data}) => {
        await api.get('/sanctum/csrf-cookie');
        try {
            await api.post("/login", data);
            await getUser();
            navigate("/dashboard")
            // console.log(data.message)
        }catch (e) {
          //  console.log(e);
          if(e.response.status === 422){
            setErrors(e.response.data.errors)
          }
        }

    }
    const register = async({...data}) => {
        await crsf();
        try {
            await api.post("/register", data);
            await getUser();
            navigate("/dashboard")
            // console.log(data.message)
        }catch (e) {
          //  console.log(e);
          if(e.response.status === 422){
            setErrors(e.response.data.errors)
          }
        }

    }
    const logout =() =>{
            api.post('/logout').then(()=>{
                setUser(null)
                navigate('/')
            })
    }
    return <AuthContext.Provider value={{ user , errors, getUser,login,register ,logout, crsf }}>
        {children}
    </AuthContext.Provider>
}

export  function useAuthContext(){
    return useContext(AuthContext)
}