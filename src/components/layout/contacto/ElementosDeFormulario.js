import { Link } from "react-router-dom";
import styled from "styled-components";

const ContenedorFiltros = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.87rem; /* 30px */
 
    @media(max-width: 60rem){ /* 950px */
        flex-direction: column;
 
        & > * {
            width: 100%;
            margin-bottom: 0.62rem; /* 10px */
        }
    }
`;
const ContenedorFormulario = styled.div`
background: #fff;
width: 90%;
max-width: 57rem; /*1110px*/
height: 90vh;
max-height: 50rem;  /* 80px */
overflow-y: auto;
box-shadow: 0px 1.25rem 2.5rem rgba(0,0,0,.05);
border-radius: 0.625rem; /* 10px */
margin: auto;
display: flex;
flex-direction: column;
justify-content: space-between;
position: relative;
z-index: 100;

@media(max-width: 60rem){ /* 950px */
    height: 95vh;
    max-height: none;
}
`;
const ContenedorTexto = styled.div`
    font-size: 1.0rem; 
    border: none;
    border-bottom: 2px solid #F6F1F0;
    outline: none;
 
    @media(max-width: 60rem){ /* 950px */
        font-size: 1.0rem; /* 24px */
    }
`;
const Formulario = styled.form`
    padding: 0 2.5rem; /* 40px */
 
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    input {
        width: 100%;
        text-align: center;
        padding: 2.5rem 0;
        font-family: 'Work Sans', sans-serif;
        &::placeholder {
            color: rgba(0,0,0,.2);
        }
    }
 
    @media(max-width: 60rem){ /* 950px */
        justify-content: start;
    }
`;
 
const Input = styled.input`
    font-size: 1.2rem; /* 40px */
    text-transform: uppercase;
    border: none;
    border-bottom: 2px solid #F6F1F0;
    outline: none;
 
    @media(max-width: 60rem){ /* 950px */
        font-size: 1.2rem; /* 24px */
    }
`;
 
const InputGrande = styled(Input)`
    font-size: 4.37rem; /* 70px */
    font-weight: bold;
`;
 
const ContenedorBoton = styled.div`
    display: flex;
    justify-content: center;
    margin: 0;  /* 40px */
`;
const Boton = styled(Link)`
   
    background: ${(props) => props.disabled ? 'gray' : props.rojo ? '#D30000' : '#006924'};
    width: 15.62rem
    margin-left: 1.25rem; /* 20px */
    border: none;
    border-radius: 0.625rem; /* 10px */
    color: #fff;
    font-family: 'Work Sans', sans-serif;
    height: 2.5rem; /* 60px */
    padding: 1.25rem 1.87rem; /* 20px 30px */
    font-size: 1.25rem; /* 20px */
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    
`;

export {ContenedorFiltros,ContenedorFormulario, Formulario,ContenedorTexto, Input, InputGrande, ContenedorBoton, Boton};