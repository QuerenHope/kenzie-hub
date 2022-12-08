import styled from "styled-components";

export const Container = styled.div`
    
    display: flex;
    align-items: center;
    z-index: 1;
    margin: 10%;
   
    
    .modal_container{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background: #343B41;
        border-radius: 6px;
        width: 39rem;
        
       

        .cadastrar{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin: 1.5rem;
            font-size: 14px;
            
            
            
            width: 34rem;

            button{
                background-color: #343B41;
                border: none;
                color: #F8F9FA;
                font-size: 10px;
            }
        }
        .form{
            display: flex;
            flex-direction: column;
            width: 100%;
            background-color: #212529;

            label{
                font-size: 12px;
                color: #F8F9FA;
            }
            

            form{
                display: flex;
                flex-direction: column;
                padding: 2rem 3rem;
                gap: 1rem;



                input{
                    background-color: #343B41;
                    color: #F8F9FA;
                    border: none;
                    height: 3rem;
                    border-radius: 4px;
                }

                select{
                    background-color: #343B41;
                    border: none;
                    height: 3rem;
                    color: white;
                    border-radius: 4px;
                    font-size: 11px;

                }
                button{
                    background-color: #FF577F ;
                    border: none;
                    height: 4rem;
                    margin-top: 2rem;
                    border-radius: 4px;
                    color: white;
                }
            }

        }
    }
    @media (max-width: 426px) {

        margin: 0;
        
        .modal_container{
            width: 21rem;

            .cadastrar{
                width: 100%;
                padding: 0 1rem;
            }
        }
}

    
`