import { useContext } from "react"
import { Authcontext } from "../../context/AuthContext"
import { Container } from "./style"
import { Navigate, useNavigate } from "react-router-dom"
import Lista from "../Lista"

const Home = () => {

    const navigate = useNavigate()

    function logout(){
        localStorage.clear()
        navigate('/login')
    }

    const {user, isLogin} = useContext(Authcontext)

    if(isLogin) {
       return <div>Carregando...</div>
    }
  
    return user ?
        <Container>
            <div className="container">
                <div className="cabecalho">
                    <img src="./Logo.png" alt="" />
                    <button onClick={logout}>Sair</button>
                </div>
                <hr />
                <div className="abertura">
                    <h2>{`Olá, ${user.name}`}</h2>
                        <small>{`${user.course_module}`}</small>
                </div>
                <hr />
                <Lista />
            </div>
            
        </Container>
        :
        <Navigate to="/login" replace />
    
}

export default Home