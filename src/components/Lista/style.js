import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;

    .tech{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 2rem 0 2rem 0;

        button{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 3rem;
            background-color: #212529;
            border: none;
            border-radius: 4px;
            
        }

    }
    .listTech{
        display: flex;
        flex-direction: column;

        ul{
            padding: 1rem;
            background-color: #212529;
            border-radius: 4px;
        }

         li {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            height: 4rem;
            margin: 1.5rem;
            padding: 2rem;
            font-size: 10px;
            background-color: black;
            border-radius: 4px;

            h2{
                font-size: 12px;
            }
            .infoo{

                display: flex;
                align-items: center;
                span{
                    color: #868E96;
                    text-align: right;
                }
                button{
                    display: flex;
                    background-color: black;
                    border: none;
                    width: 1rem;
                    margin-left: 1rem;
                }

                svg{
                    color: white;
                    background-color: none;
                    width: 2rem;
                }

            }
        }
    }

    @media (max-width: 426px) {

       .listTech{
        ul{
            padding: 0;
            li{
                padding: 0.5rem; 
                font-size: 9px;
                   h2{
                      font-size: 10px;
                    }
                
            }
        }
       }


}
`
