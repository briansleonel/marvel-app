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
                    <Footer.Logo><Link to='/'><img className="Image" href="#" src={logo} alt="Logo" /></Link></Footer.Logo>
                </Footer.Column>

                <Footer.Column>
                <Footer.Title>About us</Footer.Title>
                    <Footer.Link href={"/about"}>Developers</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                <Footer.Title>Contact</Footer.Title>
                    <Footer.Link href={"/contacto"}>Contact us</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="https://www.facebook.com/gonzalo.hitachi" target="_blank" rel="noreferrer"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="https://www.instagram.com/gon_zalomatias/?hl=es" target="_blank" rel="noreferrer"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="https://www.youtube.com/channel/UC8zXh0l61yBmwPEZ_7jZVOw" target="_blank" rel="noreferrer"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="https://twitter.com/" target="_blank" rel="noreferrer"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
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