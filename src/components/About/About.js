import React from 'react';
import './about.css';
import perfil1 from '../../assets/img/perfil1.jpg'
import perfil2 from '../../assets/img/perfil2.jpg'
const About = () => {
    console.log('hola about');
    return (
        <>
        <div className="contenedor">
            <div class="container">
  <div className="card">
    <div className="card-header">
      <img src={perfil1} alt="rover" />
    </div>
    <div className="card-body">
      <span className="tag tag-teal">Brian Leonel González</span>
      <h4>
        Desarrollador de Aplicaciones
      </h4>
      <p>
        <b>Carrera: </b> Analista Programador Universitario
      </p>
      <p>
        <b>Edad: </b> 22
      </p>
      <p>
        <b>Correo: </b> gonzalezbrianleonel76@gmail.com
      </p>
      <p>
        <b>Hobby: </b> Programar en mis tiempos libres
      </p>
    </div>
    <ul className="social-icons">
      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
      <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
      <li><a href="#"><i className="fab fa-facebook"></i></a></li>
    </ul>
  </div>
  <div className="card">
    <div className="card-header">
      <img src={perfil2} alt="ballons" />
    </div>
    <div className="card-body">
      <span className="tag tag-purple">Matias Gonzalo Donaire</span>
      <h4>
      Desarrollador de Aplicaciones
      </h4>
      <p>
        <b>Carrera: </b> Ingenieria Informática
      </p>
      <p>
        <b>Edad: </b> 34
      </p>
      <p>
        <b>Correo: </b> matias.donaire.86@gmail.com
      </p>
      <p>
        <b>Hobby: </b> Programar en mis tiempos libres
      </p>
    </div>
    <ul className="social-icons">
      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
      <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
      <li><a href="#"><i className="fab fa-facebook"></i></a></li>
    </ul>
  </div>
  </div>
  </div>
        </>
    );
}
 
export default About;