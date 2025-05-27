import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  scroll-behavior: smooth;
  transition: background-color 0.3s ease-in-out;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 200px;
  display: ${props => props.display};
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`

export const BannerLeftPart = styled.div`
  width: 50%;
  animation: fadeIn 1s ease-in;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const BannerImage = styled.img`
  width: 80px;
  height: 30px;
  object-fit: contain;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1));
`

export const BannerButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #000000;
  color: #000000;
  background: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transform: scale(1.03);
  }
`

export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #000000;
  line-height: 1.4;
  text-shadow: 0.5px 0.5px rgba(0, 0, 0, 0.05);
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`

export const BannerCloseButton = styled.button`
  border: none;
  background: none;
  height: 25px;
  width: 25px;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: rotate(90deg);
  }
`

export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #909090;
  border-radius: 5px;
  margin: 20px;
  width: 60%;
  height: 40px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.2s ease-in-out;
  &:focus-within {
    box-shadow: 0 0 0 2px #606060;
  }
  @media screen and (min-width: 576px) {
    width: 40%;
  }
`

export const SearchIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #909090;
  width: 70px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #606060;
  }
`

export const SearchInput = styled.input`
  background: none;
  width: 100%;
  outline: none;
  padding: 5px 10px;
  border: none;
  color: ${props => props.color};
  font-family: Roboto;
  font-size: 14px;
  &::placeholder {
    color: #cccccc;
    font-style: italic;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  animation: pulse 2s infinite;
  @keyframes pulse {
    0%,
    100% {
      opacity: 0.9;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.05);
    }
  }
`
