import styled from "styled-components";

export const CardContainer = styled.div`
    width: 210px;
    height: fit-content;
    background-color: #2D3053;
    border: 3px solid #A60452;
    border-radius: 40px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    transition: 0.2s ease-in-out;

    cursor: pointer;
    &:hover {
        transition: 0.2s ease-in-out;
        background-color: #1C1D30;
    }
`;

export const CardImage = styled.img`
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
    margin-top: 20px;
`;
export const CardTitle = styled.h3`
    color: #fff;
`;

export const CardStatus = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 20px;
`;
export const CardSpan = styled.span`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
`;