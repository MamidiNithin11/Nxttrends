import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  padding: 20px; /* Added padding for better spacing */

  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0;
  }
`

export const TrendingVideoTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px; /* Space below the title */
`

export const TitleIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%; /* Changed to 50% for a perfect circle */
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1); /* Light background for the icon */
  transition: background-color 0.3s; /* Smooth transition for background color */

  &:hover {
    background-color: rgba(0, 0, 0, 0.2); /* Darker background on hover */
  }

  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`

export const TrendingText = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
  transition: color 0.3s;

  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`

export const TrendingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
`
