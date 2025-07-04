import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
`

export const NavigationLgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 92%;
  position: fixed;
  top: 60px;
  background-color: ${props => props.bgColor};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  transition: background-color 0.3s; /* Smooth transition for background color */

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  list-style-type: none;
  padding: 0;
  margin-top: 0;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const NavLinkContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
  transition: background-color 0.3s; /* Smooth transition for background color */

  &:hover {
    background-color: rgba(0, 0, 0, 0.1); /* Light background on hover */
  }
`

export const NavText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  margin-left: 15px;
  color: ${props => props.color};
  transition: color 0.3s; /* Smooth transition for text color */

  ${NavLinkContainer}:hover & {
    color: #4f46e5; /* Change color on hover */
  }
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`

export const ContactHeading = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => props.color};
  margin: 0; /* Remove default margin */
`

export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
`

export const ContactImage = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  margin-right: 10px;
  transition: transform 0.3s; /* Smooth scaling effect */

  &:hover {
    transform: scale(1.1); /* Scale up on hover */
  }
`

export const ContactNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
  margin: 0; /* Remove default margin */
`

export const NavigationSmallContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  padding: 10px;
  background-color: ${props => props.bgColor};
  position: fixed;
  bottom: 0;
  align-items: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1); /* Shadow for depth */

  @media screen and (min-width: 768px) {
    display: none;
  }
`
