import styled from "styled-components/macro"

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: ${({ theme }) => theme.timelineItemTxt};
  transition: color ease-in-out 0.5s;

  background-image: url("/assets/svgs/Waiau.svg");
  box-shadow: inset 0 0 0 1000px ${({ theme }) => theme.contactFormImgBg};
  transition: box-shadow ease-in-out 0.3s;
  background-color: white;

  ::after {
    background-color: ${({ theme }) => theme.timelineItemTxt};
    content: "";
    width: 4px;
    height: 100%;
    position: absolute;
    left: calc(50% - 2px);
  }

  @media screen and (max-width: 700px) {
    ::after {
      left: calc(15px - 2px);
    }
  }
`
