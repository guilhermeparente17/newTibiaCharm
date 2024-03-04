import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ContainerBanner = styled.div`
    width: 80%;
    height: fit-content;
    background-color: #2D3053;
    padding: 15px;
    border: 3px solid #A60452;
    border-radius: 40px;
    margin: 30px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const RunasContainer = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
`;

export const Span = styled.div`
font-size: 40px;
color: #fff;
    `;