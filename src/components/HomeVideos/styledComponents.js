import styled from 'styled-components'

export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  padding: 20px; /* Added padding for better spacing */
  min-height: 100vh; /* Full height for centering */
`

export const NoVideosImage = styled.img`
  width: 200px;
  transition: transform 0.3s; /* Smooth scaling effect */

  @media screen and (min-width: 768px) {
    width: 450px;
  }

  &:hover {
    transform: scale(1.05); /* Scale up on hover */
  }
`

export const NoVideosHeading = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  color: ${props => props.headingColor};
  margin: 20px 0; /* Space above and below the heading */
  text-align: center; /* Center the heading */
`

export const NoVideosNote = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => props.noteColor};
  text-align: center; /* Center the note */
  margin-bottom: 20px; /* Space below the note */
`

export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 3px;
  color: #ffffff;
  padding: 10px 15px; /* Simplified padding */
  font-family: Roboto;
  font-size: 15px;
  cursor: pointer; /* Pointer cursor on hover */
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
