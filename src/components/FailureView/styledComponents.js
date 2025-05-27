import styled from 'styled-components'

export const FailedView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  background: none;
  min-height: 100vh;
  text-align: center;
`

export const FailedImage = styled.img`
  width: 200px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const FailedHeading = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 26px;
  font-weight: 600;
  color: ${props => props.headingColor || '#1e293b'};
  margin-bottom: 10px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
`

export const FailedNote = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: ${props => props.noteColor || '#475569'};
  margin-bottom: 20px;
  max-width: 500px;
  line-height: 1.5;
`

export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 6px;
  color: #ffffff;
  padding: 10px 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease;

  &:hover {
    background-color: #4338ca;
  }

  &:active {
    transform: scale(0.97);
    background-color: #3730a3;
  }

  &:focus {
    outline: 3px solid rgba(79, 70, 229, 0.5);
    outline-offset: 2px;
  }
`
