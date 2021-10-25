import React, { useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";

import {
  ContenedorFormulario,
  Formulario,
  Input,
  ContenedorBoton,
  Boton,
  ContenedorTexto,
  Titulo,
  Parrafo,
  InputTextArea,
} from "./ElementosDeFormulario";

const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

const validators = (input) => {
  let errors = {};
  if (!input.username) {
    errors.username = "Your name is required";
  } else if (input.username.length < 3) {
    errors.username = "Can not be less than 3 characters";
  }
  if (!input.email) {
    errors.email = "Your email is required";
  } else if (!expresionRegular.test(input.email)) {
    errors.email = "Invalid e-mail address. Ej: ejemplo@algo.es";
  }
  if (!input.asunto) {
    errors.asunto = "The subject is required";
  } else if (input.asunto.length < 10) {
    errors.asunto = "Can not be less than 10 characters";
  }
  if (!input.cuerpo) {
    errors.cuerpo = "A messagge is required";
  } else if (input.cuerpo.length > 256) {
    errors.cuerpo = "Cannot exceed 256 characters";
  }
  return errors;
};

const Contacto = () => {
  const history = useHistory();

  const [state, setState] = useState({
    username: "",
    email: "",
    asunto: "",
    cuerpo: "",
  });

  const [fails, setFails] = useState({
    username: "Your name is required",
    email: "Your email is required",
    asunto: "The subject is required",
    cuerpo: "A messagge is required",
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
  const mostrarMensaje1 = () => {
    Swal.fire({
      title: "Send this message?",
      confirmButtonColor: "#64C132",
      cancelButtonColor: "#ec1d24",
      cancelButtonText: `No`,
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Your message has been sent successfully",
          showConfirmButton: false,
          timer: 1300,
        });
        setTimeout(() => {
          history.push(`/home`);
        }, 1350);
      }
    });
  };
  const mostrarMensaje2 = () => {
    Swal.fire({
      title: "Exit from the form?",
      confirmButtonColor: "#64C132",
      cancelButtonColor: "#ec1d24",
      showCancelButton: true,
      cancelButtonText: `No`,
      confirmButtonText: "Yes",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          position: "top",
          icon: "error",
          title: "Your message was canceled",
          showConfirmButton: false,
          timer: 1300,
        });
        setTimeout(() => {
          history.push(`/home`);
        }, 1350);
      }
    });
  };
  return (
    <>
      <ContenedorFormulario>
        <ContenedorTexto>
          <Titulo>Conctact us</Titulo>
          <p>Write us and we will contact you as soon as possible.</p>
        </ContenedorTexto>
        <Formulario onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            placeholder="Your name..."
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
            placeholder="Your email..."
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
            placeholder="The subject..."
            value={state.asunto}
            onChange={handleChange}
          />
          {fails.asunto ? (
            <Parrafo rojo> {fails.asunto}</Parrafo>
          ) : (
            <Parrafo>👌ok </Parrafo>
          )}
          <InputTextArea
            type="textarea"
            name="cuerpo"
            placeholder="Your message..."
            value={state.cuerpo}
            onChange={handleChange}
            rows="5"
          />
          {fails.cuerpo ? (
            <Parrafo rojo> {fails.cuerpo}</Parrafo>
          ) : (
            <Parrafo>👌ok </Parrafo>
          )}

          <ContenedorBoton>
            <Boton
              as="button"
              type="submit"
              onClick={() => mostrarMensaje1()}
              disabled={
                fails.username || fails.email || fails.asunto || fails.cuerpo
                  ? true
                  : false
              }
            >
              Send
            </Boton>
            <Boton
              as="button"
              type="submit"
              onClick={() => mostrarMensaje2()}
              rojo
            >
              Cancel
            </Boton>
          </ContenedorBoton>
        </Formulario>
      </ContenedorFormulario>
    </>
  );
};

export default Contacto;
