import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HomeContent = styled.div`
    width: 1200px;
    height: 100%;
    background-color: #181A2C;
    position: block;
    z-index: 999;
`;

export const HomeMain = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0px;
`;
export const HomeImg = styled.img`
    width: 313px;
    height: 310px;
    margin: 0px 80px;
`;
export const HomeText = styled.div`
    margin-right: 80px;
    width: 600px;
    height: 280px;
    background-color: #2D3053;
    border: 3px solid #A60452;
    padding: 15px;
    border-radius: 20px;
`;

export const SpanStyle = styled.span`
    color: #fff;
`;
export const SpanStyleBold = styled.span`
    color: #A60452;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const ButtonWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;
