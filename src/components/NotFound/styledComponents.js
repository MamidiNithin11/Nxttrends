import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor || '#f9fafb'};
  min-height: 92vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  padding: 20px;

  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const NotFoundVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
`

export const NotFoundVideosImage = styled.img`
  width: 200px;
  margin-bottom: 20px;
  user-select: none;

  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const NotFoundVideosHeading = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 26px;
  font-weight: 600;
  color: ${props => props.headingColor || '#1e293b'};
  margin-bottom: 12px;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06);
`

export const NotFoundVideosNote = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: ${props => props.noteColor || '#475569'};
  max-width: 500px;
  line-height: 1.6;
`
