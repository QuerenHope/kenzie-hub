import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../services/api"
import { toast } from "react-toastify"


export const Authcontext = createContext()

const AuthProvider = ({children}) => {

  const [user,setUser] = useState(null)
  const [isLogin, setIsLogin] = useState(true)
  

  const navigate = useNavigate()
    

    useEffect(() => {
        async function loadUser() {
          const token = localStorage.getItem('useToken');
    
          if (token) {
            try {
              api.defaults.headers.authorization = `Bearer ${token}`;
              const { data } = await api.get('/profile');
              setUser(data);
            } catch (error) {
              console.error(error);
              localStorage.clear()
            }
          }
          setIsLogin(false);
        }
    
        loadUser();
      }, []);

    const loginUser = (data) => {

        api.post('/sessions',data)
        .then(response => {
            setUser(response.data.user)
            localStorage.setItem('useToken', response.data.token)
            localStorage.setItem('user', JSON.stringify(response.data.user) )
            toast.success('Logado com sucesso')
            navigate('/dashboard')})        
            .catch((error) => toast.error('Dados incorretos') )

   }

   const registerUser = (data) => {

     api.post('/users', data )
         .then((response) => {
             toast.success('Cadastrado com sucesso!')
             navigate('/login')
         })
         .catch((error) => { 
             toast.error('Error');
             console.log(error)
         })
    } 

    return (
       <Authcontext.Provider value={{user, loginUser, registerUser,isLogin}}>
            {children}
       </Authcontext.Provider>
    )
}

export default AuthProvider