import { Link } from "react-router-dom"
import { Container } from "./style"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from "react"
import * as yup from 'yup'
import { Authcontext } from "../../context/AuthContext"


const FormRegister = () => {

    const schema = yup.object({
        name: yup.string().required('Nome é obrigatorio'),
        email: yup.string().email('Deve ser um email').required('O email é obrigatorio!'),
        password: yup.string().min(8, "Min 8 Caracteres").matches(/(\W)|_/,'Tem que conter 1 núm, 1 letra e um caracter especial!').required('Obrigatório'),
        confirmPassword: yup.string().oneOf([yup.ref('password')]),
    })

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    })
    
    const { registerUser } = useContext(Authcontext)
    
    return(
        <Container>
            <div className="cabecalho">
                <img src="./Logo.png" alt="" />
                <Link to='/login' className="voltar">Voltar</Link>
            </div>
            
            <div className="container-form">
                <form onSubmit={handleSubmit(registerUser)}>
                    <h1>Crie sua conta</h1>
                    <small>Rapido e grátis, vamos nessa</small>
                    <div className="inputs">

                        <label>Nome</label>
                        <input type="name"  placeholder="Digite aqui seu nome" {...register('name') } />
                        <p>{errors.name?.message}</p>
                        <label>E-mail</label>
                        <input type="email" placeholder="Digite aqui seu e-mail" {...register('email') }/>
                        <p>{errors.email?.message}</p>
                        <label>Senha</label>
                        <input type="password" placeholder="Digite aqui sua senha" {...register('password') } />
                        <p>{errors.password?.message}</p>
                        <label>Confirmar Senha</label>
                        <input type="password" placeholder="Digite novamente sua senha" {...register('confirmPassword') } />
                        <p>{errors.confirmPassword?.message}</p>
                        <label>Bio</label>
                        <input type="text"  placeholder="Fale sobre você" {...register('bio') } />
                        <label>Contato</label>
                        <input type="number" placeholder="Opção de contato" {...register('contact') }/>
                        <label>Selecionar Módulo</label>
                        <select name="course_module" id="course_module" {...register('course_module') } >
                            <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
                            <option value="Segundo módulo (Frontend Avançado)">Segundo Módulo</option>
                            <option value="Terceiro módulo (Introdução ao Backend)">Quarto Módulo</option>
                            <option value="Quarto módulo (Backend Avançado)">Quinto Módulo</option>
                        </select>
                    </div>
                    <button type="submit" className="cadastrar">Cadastrar</button>
                    
                </form>
            </div>
        </Container>
    )
}

export default FormRegister