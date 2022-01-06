import styled from "styled-components/macro"
import Tilt from "react-parallax-tilt"

export const Tags = styled.div`
  grid-area: tags;
  padding: 5px;
  //text-align: left;
`

export const Tag = styled.div`
  display: inline-block;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.cardTagColor};
  margin: 5px 10px;
  white-space: nowrap;
  background: #0089e0;
  padding: 5px 10px 5px 12px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
  transition: background 0.3s ease-in-out;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: -9px;
    z-index: -1;
    transform: rotate(45deg);
    top: 4px;
    width: 17.4px;
    height: 17.4px;
  }

  :after {
    content: "";
    position: absolute;
    top: 10px;
    left: 0;
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: ${({ theme }) => theme.cardTagColor};
    box-shadow: -2px -2px 3px #004977;
  }
`

export const Card = styled(Tilt)`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 180px 160px 90px;
  grid-template-areas: "image" "body" "tags";

  border-radius: 18px;
  background-image: url("${({ theme }) => theme.cardBgSvg}");
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;

  transition: background-color ease-in-out 0.3s;

  :active {
    transform: scale(0.9);
  }

  :nth-of-type(4n + 1) {
    background-color: ${({ theme }) => theme.cardBg1};
    ${Tags} {
      ${Tag} {
        background: ${({ theme }) => theme.cardTagBg1};
        :before {
          background: ${({ theme }) => theme.cardTagBg1};
        }
      }
    }
  }

  :nth-of-type(4n + 2) {
    background-color: ${({ theme }) => theme.cardBg2};
    ${Tags} {
      ${Tag} {
        background: ${({ theme }) => theme.cardTagBg2};
        :before {
          background: ${({ theme }) => theme.cardTagBg2};
        }
      }
    }
  }

  :nth-of-type(4n + 3) {
    background-color: ${({ theme }) => theme.cardBg3};
    ${Tags} {
      ${Tag} {
        background: ${({ theme }) => theme.cardTagBg3};
        :before {
          background: ${({ theme }) => theme.cardTagBg3};
        }
      }
    }
  }

  :nth-of-type(4n + 4) {
    background-color: ${({ theme }) => theme.cardBg4};
    ${Tags} {
      ${Tag} {
        background: ${({ theme }) => theme.cardTagBg4};
        :before {
          background: ${({ theme }) => theme.cardTagBg4};
        }
      }
    }
  }
`

export const Title = styled.h2`
  margin: 0;
  transition: font-size 0.1s cubic-bezier(0.03, 0.98, 0.52, 0.99);
`

export const Description = styled.p`
  padding: 0px;
  margin: 0px;
  margin-top: 5px;
  font-size: 0.9rem;
  font-weight: 300;
  overflow: hidden;
  transition: font-weight 0.2s cubic-bezier(0.03, 0.98, 0.52, 0.99);
`

export const Body = styled.div`
  grid-area: body;
  padding: 10px;
  cursor: pointer;

  :hover {
    ${Description} {
      font-weight: 400;
    }

    ${Title} {
      font-size: 1.6rem;
    }
  }
`

export const Image = styled.div`
  grid-area: image;
  background: url("${({ url }) => url}");
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
  background-position: center;
`
