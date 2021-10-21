import React from 'react'
import styled from 'styled-components'
import Footer from './index'
import Icon from './icons'
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

export function FooterContainer() {
    return (
        <>
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Logo><Link to='home'><img className="Image" href="#" src={logo} alt="Logo" /></Link></Footer.Logo>
                </Footer.Column>

                <Footer.Column>
                <Footer.Title>Nosotros</Footer.Title>
                    <Footer.Link href={"/about"}>About</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                <Footer.Title>Contacto</Footer.Title>
                    <Footer.Link href={"/contacto"}>Contacto</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="https://www.facebook.com/gonzalo.hitachi" target="_blank"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            
            </Footer.Wrapper>
            
        </Footer>
        <Ultimo>
            <Parrafo>Copyright ©2021 Todos los derechos reservados. | Desarrollado  Informaticos FIUNJU</Parrafo>
        </Ultimo>
        </>
    )
}
export const Ultimo = styled.div`
  padding: 18px 14px;
  background: radial-gradient(circle, rgba(26, 23, 23) 0%, rgba(26, 23, 23) 100%);
  
  @media (max-width: 1000px) {
    padding: 14px 6px;
  }
`;
export const Parrafo = styled.p`
  font-size: 14px;
  text-align: center;
  color: #fff;
  margin-bottom: 6px;
  font-weight: bold;
`;