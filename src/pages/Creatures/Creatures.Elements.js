import styled from "styled-components";

export const CreatureContainer = styled.section`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const CreaturesList = styled.div`
    display: grid;
    grid-gap: 70px;
    grid-template-columns: repeat(4,1fr);
    overflow: auto;
    padding-bottom: 40px;
`;