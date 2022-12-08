import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Inter', sans-serif;
    
    color: #F8F9FA;

    hr{
        width: 100%;
        height: 0.1rem;
        border-color: rgba(255, 255, 255, 0.31) ;
    }

    .container {
        width: 60%;
    }
    .cabecalho{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 2rem;
        margin: 3rem 0 1rem 0;

        img{
            width: 8rem;
        }
        

        button{
            width: 5rem;
            height: 3rem;
            background-color: #343B41;
            color: #F8F9FA;
            font-size: 12px;
            letter-spacing: 1px;
            border: none;
            border-radius: 3px;
        }
    }

    .abertura{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 2rem;
        margin-top: 3rem;
        margin-bottom: 1rem;

        h2{
            font-size: 15px;
        }
        small{
            font-size: 11px;
            color: rgba(255, 255, 255, 0.31);
        }


    }

    .info{
        display: flex;
        width: 100%;
       margin-top: 3rem;
       flex-direction: column;
       gap: 2rem;

       h2{
        font-size: 15px;
        
       }
       p{
        font-size: 12px;
       }
    }

    @media (max-width: 426px) {

        
        .abertura{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;

            gap: 1rem;

            h2{
                font-size: 15px;
                
            }
            small{
                font-size: 10px;
                color: rgba(255, 255, 255, 0.31);
            }
        }
    }

`