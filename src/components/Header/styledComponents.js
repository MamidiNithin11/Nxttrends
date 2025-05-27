import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarHeader = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 60px;
  width: 100%;
  background-color: ${props => props.bgColor};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: background-color 0.3s ease-in-out;

  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`

export const HeaderLogo = styled.img`
  width: 80px;
  height: 30px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 40px;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`

export const ThemeButton = styled.button`
  background: none;
  border: none;
  margin-right: 10px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: rotate(15deg);
  }
`

export const LogoutButton = styled.button`
  border: 1px solid;
  font-family: 'Roboto';
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border-color: ${props => props.color};
  margin-left: 6px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.color};
    color: ${props => props.bgColor};
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LogoutIconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 20px;
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) {
    height: 200px;
    width: 400px;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  padding: 8px 12px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(128, 128, 128, 0.1);
  }

  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px 20px;
  }
`

export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  padding: 8px 12px;
  border: 1px solid #3b82f6;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1d4ed8;
    border-color: #1d4ed8;
  }

  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px 20px;
  }
`

export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 10px;
  color: black;
  text-align: center;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`

export const LogoLink = styled(Link)`
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`
