import { Link } from "react-router-dom"
import { Container } from "./style"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'


import * as yup from 'yup'
import { useContext } from "react"
import { Authcontext } from "../../context/AuthContext"

const FormLogin = () => {

    const schema = yup.object({
        email: yup.string().email('Deve ser um email').required('O email é obrigatorio!'),
        password: yup.string().required('A senha é obrigatória')

    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const { loginUser } = useContext(Authcontext)
   
    return(


        <Container>
            <img src="./Logo.png" alt="" />
            <div className="container-form">
                <form onSubmit={handleSubmit(loginUser)}>
                    <h1>Login</h1>
                    <div className="inputs">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" placeholder="e-mail" {...register('email')} />
                        <p>{errors.email?.message}</p>
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" placeholder="senha" {...register('password')}/>      
                        <p>{errors.password?.message}</p>        
                    </div>
                    <button type="submit" className="entrar">Entrar</button>
                    <small>Ainda não possui uma conta?</small>
                    <Link to='/register' className="cadastro">Cadastrar</Link>
                </form>
            </div>
        </Container>
    )
}

export default FormLogin