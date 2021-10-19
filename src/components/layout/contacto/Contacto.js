import React, {useState} from 'react';

import {ContenedorFormulario, Formulario, Input, ContenedorBoton, Boton, ContenedorTexto} from './ElementosDeFormulario';


const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

const validators= (input) => {
    let errors = {}
    if(!input.email){
        errors.email = "Se requiere un email"
    } else if(!expresionRegular.test(input.email)){
        errors.email = "Correo ingresado no valido"
    }
    if(!input.asunto){
        errors.asunto = "Debe completar el asunto"
    } else if(input.asunto.length < 10){
        errors.asunto = "No puede tener menos de 10 caracteres"
    }
    if(!input.cuerpo){
        errors.cuerpo = "Rellena con un mensaje"
    } else if(input.cuerpo.length > 256){
        errors.cuerpo = "No puede superar los 256 caracteres"
    }
    return errors;
}




const Contacto = () => {

    const [state, setState] = useState({
        email: '',
        asunto: '',
        cuerpo: ''
    })
   
    const [fails, setFails] = useState({
        email: "Debes ingresar un correo valido",
        asunto: "Debes ingresar un asunto",
        cuerpo: "Debe ingresar un mensaje"
    })
    
    const handleSubmit = async (e) => {
      e.preventDefault();
    } 
    const handleChange = (e)=>{
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        
        setFails(
            validators({
                ...state, 
                [e.target.name]: e.target.value
            })
        )

    }
    return (
        <>
        
        <ContenedorFormulario>
        <ContenedorTexto>
            <h1>Formulario de Contacto</h1>
          <p>Escríbenos y en breve los pondremos en contacto contigo</p>
        </ContenedorTexto>
        <Formulario onSubmit={handleSubmit}>
              
              <Input 
                 type="email"
                 name="email"
                 placeholder="Correo electronico"
                 value={state.email}
                 onChange={handleChange}
                
              />
              {fails.email ? <p style={{color: 'red'}}> {fails.email}</p> : <p>Todo ok </p>}
              <Input 
                 type="text"
                 name="asunto"
                 placeholder="Asunto"
                 value={state.asunto}     
                 onChange={handleChange}          
              />
              {fails.asunto ? <p style={{color: 'red'}}> {fails.asunto}</p> : <p>Todo ok </p>}
              <Input 
                 type="textarea"
                 name="cuerpo"
                 placeholder="Mensaje"
                 value={state.cuerpo}    
                 onChange={handleChange}
                 cols="30" rows="10"            
              />
               {fails.cuerpo ? <p style={{color: 'red'}}> {fails.cuerpo}</p> : <p>Todo ok </p>}
            
              <ContenedorBoton>
                  <Boton  type="submit" to='/home' disabled={ fails.email || fails.asunto || fails.cuerpo ? true : false  }>Enviar</Boton>
                  <Boton  type="submit" rojo  to='/home' >Cancelar</Boton>
              </ContenedorBoton>
              
           </Formulario>
        
        </ContenedorFormulario>
           
        </>
    );
}
 
export default Contacto;