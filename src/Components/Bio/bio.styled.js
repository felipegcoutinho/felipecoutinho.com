import styled from "styled-components";
import {device} from "../../Assets/device";

export const Container = styled.section`
  grid-area: 2 / 1 / 10 / 17;

  @media ${device.laptop_1024px} {
    grid-area: 2 / 3 / 10 / 15;
  }
`;

export const Content = styled.div`
  color: var(--text-main);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.mobileS_320px} {
    font-size: 1.1rem;
    padding: 20px;
  }

  @media ${device.mobileL_425px} {
    font-size: 1.2rem;
  }

  @media ${device.tablet_768px} {
    font-size: 1.3rem;
    padding: 0 120px;
  }

  @media ${device.laptop_1024px} {
    font-size: 1.4rem;
    min-height: 85vh;
  }
`;

export const Name = styled.h1`
  margin-bottom: 20px;

  @media ${device.mobileS_320px} {
    font-size: 1.8rem;
  }

  @media ${device.laptop_1024px} {
    font-size: 4rem;
  }
`;

export const Job = styled.p`
  margin-bottom: 20px;
  color: tomato;
  font-weight: bold;
`;
