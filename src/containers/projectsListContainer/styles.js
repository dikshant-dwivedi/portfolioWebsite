import styled from "styled-components/macro"

export const Container = styled.div`
  padding: 15px;
  width: 100%;
  height: 100%;
  max-width: 1000px;
  margin: auto;
  overflow: scroll;
  overflow-x: hidden;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(${({ n }) => Math.ceil(n / 3)}, 450px);
  gap: 25px 25px;
  grid-auto-flow: row;

  ::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.txt};
  }

  @media screen and (min-width: 1300px) {
    max-width: 1400px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 1050px) {
    max-width: 800px;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
`
