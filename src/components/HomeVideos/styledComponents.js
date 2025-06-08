import styled from 'styled-components'

export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  padding: 20px; 
  min-height: 100vh;
`

export const NoVideosImage = styled.img`
  width: 200px;
  transition: transform 0.3s;

  @media screen and (min-width: 768px) {
    width: 450px;
  }

  &:hover {
    transform: scale(1.05);
  }
`

export const NoVideosHeading = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  color: ${props => props.headingColor};
  margin: 20px 0; 
  text-align: center; 
`

export const NoVideosNote = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => props.noteColor};
  text-align: center;
  margin-bottom: 20px; 
`

export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 3px;
  color: #ffffff;
  padding: 10px 15px; 
  font-family: Roboto;
  font-size: 15px;
  cursor: pointer; 
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #3b3f9a;
    transform: scale(1.05);
  }
`

export const VideoCardList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 20px 0; /* Space above and below the list */

  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
