import styled from 'styled-components'

export const VideoPlayer = styled.div`
  padding: 20px;
  background-color: #f9f9f9; /* Light background for better contrast */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
`

export const PlayVideoTitle = styled.p`
  font-family: Roboto;
  font-size: 25px;
  color: ${props => props.color};
  transition: color 0.3s ease; /* Smooth color transition */

  &:hover {
    color: #007bff; /* Change color on hover */
  }
`

export const PlayVideoStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px; /* Space above the status container */
`

export const PlayVideoStatus = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => props.color};
  opacity: 0.7; /* Slightly faded for a subtle effect */
`

export const PlayVideoDot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
  background-color: ${props => props.color || '#000'}; /* Default color */
`

export const PlaySocialButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const SocialButton = styled.button`
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: ${props => props.color};
  cursor: pointer; /* Pointer cursor on hover */
  transition: transform 0.2s; /* Smooth scaling effect */

  &:hover {
    transform: scale(1.1); /* Scale up on hover */
  }
`

export const ButtonText = styled.span`
  margin-left: 5px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const HrLine = styled.hr`
  border: 1px solid #909090;
  margin: 20px 0; /* Space above and below the line */
`

export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`

export const ChannelImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 20px;
  transition: transform 0.3s; /* Smooth scaling effect */

  &:hover {
    transform: scale(1.1); /* Scale up on hover */
  }
`

export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => props.color};
  margin: 0px;
  font-weight: bold; /* Bold for emphasis */
`

export const ChannelSubscribers = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => props.color};
  opacity: 0.7; /* Slightly faded for a subtle effect */
`

export const ChannelDescription = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => props.color};
  margin-top: 5px; /* Space above the description */
`

export const BtnContainer = styled.div`
  display: flex;
  background: none;
  margin-top: 10px; /* Space above the button container */
`
