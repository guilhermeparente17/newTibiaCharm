import styled from "styled-components";

export const ButtonContainer = styled.button`
    width: 180px;
    height: 40px;
    padding: 10px;
    border-radius: 20px;
    background-color: #A60452;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: 0;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        opacity: 0.7;
        transition: 0.2s ease-in-out;
    }
`;