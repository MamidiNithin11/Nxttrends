import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`

export const TrendingListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  transition: transform 0.2s; 

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-left: 40px;
  }

  &:hover {
    transform: scale(1.02); 
  }
`

export const TrendingThumbNailImage = styled.img`
  width: 100%;
  border-radius: 8px; 

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`

export const TrendingVideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const TrendingProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 20px;

  @media screen and (min-width: 768px) {
    display: none; 
  }
`

export const TrendingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;

  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`

export const TrendingTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
  margin: 0; 
  transition: color 0.3s; 

  ${TrendingListItem}:hover & {
    color: #4f46e5; 
  }
`

export const TrendingChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.color};
  margin: 0; 
  opacity: 0.8; 
`

export const TrendingViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
  margin: 0; 
  opacity: 0.6; 
`

export const TrendingDot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
  background-color: ${props => props.color || '#000'}; 
`
