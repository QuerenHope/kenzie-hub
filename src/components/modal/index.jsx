import { useContext } from "react"
import { useForm } from "react-hook-form"
import { techContext } from "../../context/TechContext"
import { Container } from "./style"

const Modal = ({fecharModal}) => {

    const {register, handleSubmit} = useForm()
    const { addTech } = useContext(techContext)

    return(
        <Container>
            <div className="modal_container">
                <div className="cadastrar">
                    <h4>Cadastrar Tecnologia</h4>
                    <button onClick={fecharModal}>X</button>
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit(addTech)} >
                        <label htmlFor="">Nome</label>
                        <input type="text" name="" id="" {...register('title') } />
                        <label htmlFor="">Selecionar status</label>
                        <select name="Selecionar status" id="" {...register('status') }>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <button type="submit">Cadastrar Tecnologia</button>
                    </form>

                </div>
            </div>
        </Container>
    )
}

export default Modal