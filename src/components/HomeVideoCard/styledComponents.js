import styled from 'styled-components'

export const ListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  transition: transform 0.2s;

  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }

  &:hover {
    transform: scale(1.02);
  }
`

export const ThumbNailImage = styled.img`
  width: 100%;
  border-radius: 8px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`

export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 8px;
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 20px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
  flex-grow: 1;
`

export const Title = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => props.color};
  margin: 0;
  font-weight: bold;
`

export const ChannelName = styled.p`
  font-family: Roboto;
  font-size: 13px;
  color: ${props => props.color};
  margin: 0;
  opacity: 0.8;
`

export const ViewsAndDate = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => props.color};
  margin: 0;
  opacity: 0.6;
`

export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
  background-color: ${props => props.color || '#000'};
`
