import { Container } from "./style"
import { RiDeleteBin5Line } from 'react-icons/ri'
import { GrFormAdd } from 'react-icons/gr'
import { useContext, useState } from "react"
import { Authcontext } from "../../context/AuthContext"
import Modal from "../modal"

import { techContext } from "../../context/TechContext"
import { useEffect } from "react"
import api from "../../services/api"



const Lista = () => {

    const [techs, setTechs] = useState([])
    const { user } = useContext(Authcontext)
    const { abrirModal,fecharModal,openModal, delet } = useContext(techContext)

    useEffect(()=>{
        api.get(`/users/${user.id}`)
        .then((response) => {
            setTechs(response.data.techs)
            })
        .catch((error) => {
            console.log(error) 
            })
    },[techs])
    

    return(
        <Container>
        <div className="tech">
            <h4>Tecnologias</h4>
            <button onClick={abrirModal} ><GrFormAdd /></button>    
        </div>
        {
            openModal ? <Modal fecharModal={fecharModal}/> 
            : 
            <div className="listTech">
                <ul>
                    {
                        techs?.map((tech) => 
                        <li key={tech.id}>
                            <h2>{tech.title}</h2>
                            <div className="infoo">
                                <span>{tech.status}</span>
                                <button onClick={()=>delet(tech.id)}><RiDeleteBin5Line color="white" /></button>
                            </div>
                        </li> )
                    }
                    
                </ul>
            </div>
        }
        

        </Container>
       
  
    )
}

export default Lista