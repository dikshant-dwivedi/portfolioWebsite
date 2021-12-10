import styled from "styled-components/macro"
import { motion } from "framer-motion"

export const Circle = styled.div`
  background-color: ${({ theme }) => theme.timelineItemBg};
  border: 3px solid ${({ theme }) => theme.timelineItemTxt};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: absolute;
  top: calc(50% - 10px);
  right: -10px;
  z-index: 10;

  @media screen and (max-width: 700px) {
    right: auto;
    left: calc(15px - 10px);
  }

  transition: background-color ease-in-out 0.3s;
`

export const ItemContent = styled(motion.div)`
  background-color: ${({ theme }) => theme.timelineItemBg};
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  max-width: 70%;
  min-width: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 15px;
  text-align: right;
  position: relative;
  transition: background-color ease-in-out 0.3s;

  ::after {
    content: "";
    background-color: ${({ theme }) => theme.timelineItemBg};
    transition: background-color ease-in-out 0.3s;
    box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.2);
    width: 15px;
    height: 15px;
    transform: rotate(45deg);
    position: absolute;
    right: -7.5px;
    top: calc(50% - 7.5px);

    :hover {
      box-shadow: 2px -2px 2px rgba(0, 0, 0, 0.4);
    }
  }

  :hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }

  @media screen and (max-width: 900px) {
    max-width: 90%;
  }

  @media screen and (max-width: 700px) {
    align-items: flex-start;
    width: 95%;
    text-align: left;

    ::after {
      right: auto;
      left: -7.5px;
      box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);

      :hover {
        box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.4);
      }
    }
  }
`

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  //background-color: yellow;
  padding-right: 30px;
  margin: 10px 0;
  width: 50%;
  position: relative;

  :first-child {
    margin-top: 30px;
  }

  :last-child {
    margin-bottom: 30px;
  }

  :nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-right: 0px;
    padding-left: 30px;
  }

  :nth-child(odd) ${ItemContent} {
    align-items: flex-start;
    text-align: left;
  }

  :nth-child(odd) ${ItemContent}::after {
    right: auto;
    left: -7.5px;
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);

    :hover {
      box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.4);
    }
  }

  :nth-child(odd) ${Circle} {
    right: auto;
    left: -10px;
  }

  @media screen and (max-width: 700px) {
    width: 100%;

    align-self: flex-end;
    justify-content: flex-start;
    padding-right: 0px;
    padding-left: 45px;

    :nth-child(odd) {
      padding-left: 45px;
    }

    :nth-child(odd) ${Circle} {
      left: calc(15px - 10px);
    }
  }
`

export const Tag = styled.span`
  background-color: ${(props) =>
    props.color === 0 ? props.theme.timelineTagEd : props.theme.timelineTagWk};
  padding: 4px 8px;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.timelineItemBg};
  transition: background-color ease-in-out 0.3s;
  transition: color ease-in-out 0.3s;
`
export const TimeDuration = styled.span``
export const Title = styled.h3``
export const DescriptionList = styled.ul`
  text-align: left;
`
export const ListItem = styled.li``
export const Description = styled.p``
export const Link = styled.a`
  color: ${({ theme }) => theme.timelineItemTxt};
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`
