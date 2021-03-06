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

const Titulo = styled.h1`
margin: 0;
text-align: center;
padding-bottom: .5em;
border-bottom: 2px solid #ec1d24;
font-weight: 500;
font-style: italic;
font-size: 2em;
text-transform: uppercase;
letter-spacing: .1em;
`;
const Parrafo = styled.p`
color: ${(props) => props.rojo ? '#ec1d24' :'#64C132'};
font-size: 1.0em;
@media(max-width: 60rem){ /* 950px */
    font-size: 0.8em;
}
`;

const ContenedorFormulario = styled.div`
background: #fff;
width: 40%;
max-width: 50rem; /*1110px*/
max-height: 80rem;  /* 80px */
overflow-y: auto;
box-shadow: 0px 1.25rem 2.5rem rgba(0,0,0,.1);
border-radius: 0.625rem; /* 10px */
margin: 4em auto;
padding: 2em;
display: flex;
flex-direction: column;
justify-content: space-between;
position: relative;
z-index: 100;

@media(max-width: 60rem){ /* 950px */
    overflow-y:auto;
    width: 100%;
}
`;
const ContenedorTexto = styled.div`
    font-size: 1em; 
    border: none;
    outline: none;
 
    @media(max-width: 60rem){ /* 950px */
        font-size: 0.5rem; /* 24px */
    }
`;
const Formulario = styled.form`
 
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    input {
        width: 100%;
        text-align: center;
        padding:1em 0;
        &::placeholder {
            color: rgba(0,0,0,.2);
        }
    }
 
    @media(max-width: 60rem){ /* 950px */
        justify-content: start;
    }
`;
 
const Input = styled.input`
    font-size: 1.1em; /* 40px */
    border: none;
    outline: 0.05rem solid #85929E;
    padding: 0;
    border-radius: 5px;
    font-weight: 400;
    &:focus{
        outline: 0.1rem solid #2E4053;
    }
    &:hover{
        outline: 0.1rem solid #2E4053;
    }
    
    @media(max-width: 60rem){ /* 950px */
        font-size: 0.7rem; /* 24px */
    }
`;

const InputTextArea = styled.textarea`
    font-size: 1.1em; /* 40px */
    border: none;
    outline: 0.05rem solid #85929E;
    border-radius: 5px;
    padding: .5em;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    margin-top: 1em;
    max-width: 100%;
    min-width: 100%;
    @media(max-width: 60rem){ /* 950px */
        font-size: 0.7rem; /* 24px */
    }
`

 
const InputGrande = styled(Input)`
    font-size: 4.37rem; /* 70px */
    font-weight: bold;
`;
 
const ContenedorBoton = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 0;  /* 40px */
    margin-top: 3em;
`;
const Boton = styled(Link)`

    background: ${(props) => props.disabled ? 'gray' : props.rojo ? '#F22B32' : '#6FD538'};
    width: 7em;
    text-align: center;
    border: none;
    border-radius: .2em; /* 10px */
    color: #fff;
    height: 2.0rem; /* 60px */
    padding: 1em; /* 20px 30px */
    font-size: 1.3em; /* 20px */
    font-weight: 300;
    text-transform: uppercase;
    cursor: ${(props) => props.disabled ? 'no-drop' :'pointer'};
    pointer-events: ${(props) => props.disabled ? 'none' :'auto'};
    text-decoration: none;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    display: flex;
    justify-content: center;
    &:hover{
        background: ${(props) => props.disabled ? 'gray' : props.rojo ? '#ec1d24' : '#64C132'};
    }
    @media(max-width: 60rem){ /* 950px */
        padding: 0.7em;
        font-size: 1.0rem; /* 24px */
    }
`;

export {InputTextArea, ContenedorFiltros,ContenedorFormulario, Formulario,ContenedorTexto, Input, InputGrande, ContenedorBoton, Boton, Titulo, Parrafo};