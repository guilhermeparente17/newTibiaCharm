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

export const HeaderCreatures = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const WrapSearch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const WrapFilters = styled.div`
    margin-bottom: 30px;
    width: 90%;
    height: fit-content;
    background-color: #2D3053;
    border: 3px solid #A60452;
    border-radius: 15px;
    padding: 0px 20px;
`;

export const FilterTitle = styled.h3`
    color: #fff;
`;
export const WrapOptions = styled.div`
    margin-bottom: 20px;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
`;