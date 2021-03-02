import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 60vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 580px) {
    width: 90vw;
  }

`

export const Card = styled.div`
  height: 80vh;
  flex: 0.5;
  font-family: 'Mulish', 'sans-serif';
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: red;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  margin: 10px;
  position: relative;
  transition: flex 0.5s ease-in-out;

  h3 {
    font-size: 24px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
    opacity: 0;
  }

  &.active {
    flex: 5;

    h3 {
      transition: opacity 0.3s ease-in 0.5s;
      opacity: 1;
    }
  }

  @media(max-width: 580px) {
    &:nth-of-type(4),
    &:nth-of-type(5) {
      display: none;
    }
  }

`
