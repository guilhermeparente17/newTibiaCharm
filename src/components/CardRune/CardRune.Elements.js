import styled from "styled-components";

export const RunaContainer = styled.div`
    width: 120px;
    height: 120px;
    border: 3px solid #A60452;
    border-radius: 20px;
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.selectRune ? '#1C1D30' : '#2D3053'};
    /* #2D3053; */
    transition: 0.2s ease-in-out;

    &:hover {
        transition: 0.2s ease-in-out;
        cursor: pointer;
        background-color: #1C1D30;
    }
`;

export const RunaImg = styled.img`
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
`;

export const RunaSpan = styled.span`
    color: #fff;
    font-weight: bold;
    text-align: center;
`;