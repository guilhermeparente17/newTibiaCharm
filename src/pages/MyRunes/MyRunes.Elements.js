import styled from "styled-components";

export const MyRunesContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-bottom: 20px;
`;

export const MRTitle = styled.h3`
    font-size: 20px;
    margin-left: 20px;
    text-transform: uppercase;
    color: #fff;
`;

export const MRStatistics = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 100px;
`;

export const MRData = styled.div`
    width: 500px;
    height: 200px;
    background-color: #2D3053;
    border-radius: 6px;
    border: 3px solid #A60452;
`;

export const MRRunes = styled.div`
    width: 500px;
    height: 200px;
    background-color: #2D3053;
    border-radius: 6px;
    border: 3px solid #A60452;
    margin-right: 20px;
`;
export const Runes = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 0px;
    overflow-y: auto;
`;

export const RuneAccordion = styled.div`
    width: 90%;
    height: fit-content;
    padding: 10px;
    background-color: #2D3053;
    border: 3px solid #A60452;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 20px 20px;
    position: block;
    z-index: 10;
`;
export const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const RuneAccordionImg = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
`;
export const RuneAccordionName = styled.span`
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
`;

export const ListCreatures = styled.div`
    width: 90%;
    height: fit-content;
    padding: 15px;
    background-color: ${props => props.isOpen ? '#2D3053' : 'transparent'};
    margin-top: -30px;
    position: block;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-radius: 0px 0px 20px 20px;
    gap: 20px;
`;

export const CardCreature = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    position: relative;
`;

export const CreatureImg = styled.img`
    margin-bottom: 20px;
`;

export const CreatureName = styled.span`
    color: #fff;
`;

export const PointsTotal = styled.span`
    margin-right: 30px;
    font-size: 25px;
    font-weight: bold;
    color: #fff;
`;

export const WrapData = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 20px;
`;
export const Title = styled.h3`
    color: #fff;
    font-weight: bold;
`;
export const MRList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`;
export const MRItem = styled.li`
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 15px;
`;

export const IconClose = styled.div`
    position: ${props => props.position ? props.position : 'block'}; 
    top: 0;
    right: 0;
    cursor: pointer;
`;
