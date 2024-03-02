import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    background-color: #2D3053;
    border-radius: 0px 0px 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderLogo = styled.h3`
    font-size: 26px;
    color: #fff;
    margin-left: 20px;
    cursor: pointer;
    &:hover {
        text-decoration: underline #A60452;
    }
`;

export const SpanStyle = styled.span`
    color: #A60452;
    font-weight: bold;
`;
export const HeaderMenu = styled.ul`
    margin-right: 40px;
    list-style: none;
    display: flex;
`;
export const HeaderItem = styled.li`
    margin-right: 40px;
    color: #fff;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;