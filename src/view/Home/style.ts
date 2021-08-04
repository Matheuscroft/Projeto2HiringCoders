import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: auto;

    .logo {
        width: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .div-titulo {
        background: lightcoral;
        width: 80%;
        height: 10vh;
        margin-left: auto;
        margin-right: auto;
    }

    .titulo {
        
        text-align: center;
        font-family: cursive;
        padding-top: 3vh;

    }

    .produtos {
        height: 120vh;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        background: #e2e2;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        .product-content {
            display: grid;
            text-align: center;
            height: 350px;
            background: #fff;
            border-radius: 12px;
            padding: 10px;
            border: 1px solid gold;
            //margin-top: 20px;
            margin: 20px 20px;
            
        }

        .product-content img {
            height: 30vh;
        }

        .product-content span {
            width: 200px;
            text-align: justify;

        }

        .product-content h4 {
            color: lightcoral;
        }

        .product-content h5 {
            font-weight: bolder;
            color: lightcoral;
        }
    }

    .footer {
        height: 100px;
       // width: 100vw;
        background: lightcoral;
        text-align: center;
    }
    .text-footer{
        padding-top: 5vh;
    }

    .botao {
      cursor:pointer;
      border-radius: 10px;
      background: #e2e2;
      color: goldenrod;
      font-weight: bolder;
    }

    .botao:hover {
      background: lightcoral;
      color: gold;
    }
`