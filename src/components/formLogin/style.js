import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    margin-top: 5rem;
    color: #F8F9FA;

    .cabecalho{
        display: flex;
        justify-content: space-around;
        width: 45rem;
        align-items: center;
        img{
            width: 10rem;
            height: 2rem;
        }
        button{
            width: 5rem;
            height: 4rem;
            background-color: #343B41;
            color: #F8F9FA;
            font-size: 12px;
            letter-spacing: 1px;
            border: none;
            border-radius: 4px;
        }
    }

    img{
        width: 14rem;
    }


    #input img {
        cursor: pointer;
        width: 18px;
    }

    .container-form{
        background-color: #212529 ;
        width: 32rem;
        height: 45.3rem;
        border-radius: 3px;

        h1{
            font-size: 18px;
            margin: 4rem 0 1rem 0;
            font-weight: 500;
        }
        h1::selection {
            background-color: #FF577F;
            color: #212529;
        }

        .inputs{
            display: flex;
            width: 100%;
            flex-direction: column;
            gap: 1.2rem;
            padding: 0 2rem ;
            font-size: 10px;
            letter-spacing: 1px;

            p{
                color: #EB554D ;
                font-size: 8px;
            }
            

            input {
                height: 3.5rem;
                background-color: #343B41;
                border: none;
                font-size: 12px;
                padding: 0 1.5rem;
                border-radius: 4px;
                color: #F8F9FA;
                border: 1px solid #F8F9FA;
            }

        }

    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;


        select{
            height: 3.5rem;
                background-color: #343B41;
                border: none;
                font-size: 12px;
                padding: 0 1.5rem;
                border-radius: 4px;
                color: #F8F9FA;
                border: 1px solid #F8F9FA;
        }

        .entrar {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 85%;
            height: 4rem;
            background-color: #FF577F;
            color: #F8F9FA;
            font-size: 13px;
            letter-spacing: 1px;
            text-decoration:none;
            border: none;
            margin-top: 2rem;
            border-radius: 4px;
            
        }

        small{
            font-size: 12px;
        }

        .cadastro{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 85%;
            height: 4rem;
            text-decoration:none;
            background-color: #343B41;
            color: #F8F9FA;
            font-size: 13px;
            letter-spacing: 1px;
            border: none;
            border-radius: 4px;
        }
        

        
    }

    @media (max-width: 320px) {

        margin-top: 3rem; 

        .container-form{   
            width: 30rem;
            height: 44rem;
        }

    }
        


`