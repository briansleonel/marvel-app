import React, { useState } from "react";

import {
  ContenedorFormulario,
  Formulario,
  Input,
  ContenedorBoton,
  Boton,
  ContenedorTexto,
  Titulo,
  Parrafo
} from "./ElementosDeFormulario";

const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

const validators = (input) => {
  let errors = {};
  if (!input.username) {
    errors.username = "Se requiere un nombre";
  } else if (input.username.length < 3) {
    errors.username = "No puede tener menos de 3 caracteres";
  }
  if (!input.email) {
    errors.email = "Se requiere un email";
  } else if (!expresionRegular.test(input.email)) {
    errors.email = "Correo ingresado no valido";
  }
  if (!input.asunto) {
    errors.asunto = "Debe completar el asunto";
  } else if (input.asunto.length < 10) {
    errors.asunto = "No puede tener menos de 10 caracteres";
  }
  if (!input.cuerpo) {
    errors.cuerpo = "Rellena con un mensaje";
  } else if (input.cuerpo.length > 256) {
    errors.cuerpo = "No puede superar los 256 caracteres";
  }
  return errors;
};

const Contacto = () => {
  const [state, setState] = useState({
    username: "",  
    email: "",
    asunto: "",
    cuerpo: "",
  });

  const [fails, setFails] = useState({
    username: "Debes ingresar un nombre",
    email: "Debes ingresar un correo valido",
    asunto: "Debes ingresar un asunto",
    cuerpo: "Debe ingresar un mensaje",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

    setFails(
      validators({
        ...state,
        [e.target.name]: e.target.value,
      })
    );
  };
  return (
    <>
      <ContenedorFormulario>
        <ContenedorTexto>
          <Titulo>
            Formulario de Contacto
          </Titulo>
          <p>Escríbenos y en breve nos pondremos en contacto contigo</p>
        </ContenedorTexto>
        <Formulario onSubmit={handleSubmit}>
        <Input
            type="text"
            name="username"
            placeholder="Tu nombre..."
            value={state.username}
            onChange={handleChange}
          />
          {fails.username ? (
            <Parrafo rojo> {fails.username}</Parrafo>
          ) : (
            <Parrafo>👌ok </Parrafo>
          )}
          <Input
            type="email"
            name="email"
            placeholder="Tu correo electrónico..."
            value={state.email}
            onChange={handleChange}
          />
          {fails.email ? (
            <Parrafo rojo> {fails.email}</Parrafo>
          ) : (
            <Parrafo>👌ok </Parrafo>
          )}
          <Input
            type="text"
            name="asunto"
            placeholder="El asunto del mensaje..."
            value={state.asunto}
            onChange={handleChange}
          />
          {fails.asunto ? (
            <Parrafo rojo> {fails.asunto}</Parrafo>
          ) : (
            <Parrafo>👌ok </Parrafo>
          )}
          <Input
            type="textarea"
            name="cuerpo"
            placeholder="Tu mensaje..."
            value={state.cuerpo}
            onChange={handleChange}
            cols="30"
            rows="10"
          />
          {fails.cuerpo ? (
            <Parrafo rojo> {fails.cuerpo}</Parrafo>
          ) : (
            <Parrafo>👌ok </Parrafo>
          )}

          <ContenedorBoton>
            <Boton
              type="submit"
              to="/home"
              disabled={
                fails.username || fails.email || fails.asunto || fails.cuerpo ? true : false
              }
            >
              Enviar
            </Boton>
            <Boton type="submit" rojo to="/home">
              Cancelar
            </Boton>
          </ContenedorBoton>
        </Formulario>
      </ContenedorFormulario>
    </>
  );
};

export default Contacto;
