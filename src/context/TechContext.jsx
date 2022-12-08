import { createContext, useContext } from "react";
import api from "../services/api"

import { useState } from "react";
import { Authcontext } from "./AuthContext";
import { toast } from "react-toastify"

export const techContext = createContext()


const TechProvider = ({children}) => {

    
    const [openModal, setOpenModal] = useState(false)



    function abrirModal(){

        setOpenModal(true)
    }
    function fecharModal(){
  
        setOpenModal(false)
    }

    
    async function addTech(data) {

        const token = localStorage.getItem('useToken');

        if (token) {
            try {
              api.defaults.headers.authorization = `Bearer ${token}`;
              const response = await api.post('/users/techs',data);
              toast.success('Cadastrado com sucesso')
            } catch (error) {
              console.error(error)
              toast.error('Ops, algo deu errado');
            }
            setOpenModal(false)
          }
        }
    
    
    function delet(techs) {
            
        api.delete(`/users/techs/${techs}`)
        
       }


    return(
        <techContext.Provider value={{addTech,abrirModal,fecharModal,openModal,delet}}>
            {children}
        </techContext.Provider>
    )
}

export default TechProvider