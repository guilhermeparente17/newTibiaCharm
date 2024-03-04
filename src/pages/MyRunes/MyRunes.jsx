import React, { useState } from "react";
import {
  CardCreature,
  CreatureName,
  CreatureImg,
  ListCreatures,
  MRData,
  MRRunes,
  MRStatistics,
  MRTitle,
  MyRunesContainer,
  RuneAccordion,
  RuneAccordionImg,
  RuneAccordionName,
  Runes,
  Wrap,
  PointsTotal,
} from "./MyRunes.Elements";
import { useStore } from "../../zustand/store";
import { IoIosArrowDown } from "react-icons/io";

const MyRunes = () => {
  const { myRunes } = useStore();
  const [charmPoints, setCharmPoints] = useState(0);
  const [openStates, setOpenStates] = useState(
    Array(myRunes.length).fill(false)
  );

  const toggleAccordion = (index) => {
    const updatedStates = [...openStates];
    updatedStates[index] = !updatedStates[index];
    setOpenStates(updatedStates);
  };

  return (
    <MyRunesContainer>
      <MRTitle>Seu plano rúnico</MRTitle>

      <MRStatistics>
        <MRData>Dados</MRData>
        <MRRunes>Suas runas</MRRunes>
      </MRStatistics>

      <Runes>
        {myRunes?.map((runa, index) => {
          const runeImage = require(`../../assets/${runa?.name}.gif`);
          return (
            <React.Fragment key={index}>
              <RuneAccordion>
                <Wrap>
                  <RuneAccordionImg src={runeImage} />
                  <RuneAccordionName>{runa?.name}</RuneAccordionName>
                </Wrap>
                <Wrap>
                  <PointsTotal>{charmPoints}/800</PointsTotal>
                  <IoIosArrowDown
                    onClick={() => toggleAccordion(index)}
                    size={25}
                    color="#fff"
                    style={{ marginRight: "10px", cursor: "pointer" }}
                  />
                </Wrap>
              </RuneAccordion>

              <ListCreatures isOpen={openStates[index]}>
                {openStates[index] &&
                  myRunes[index]?.creatures?.map((creature, index) => {
                    return (
                      <CardCreature key={index}>
                        <CreatureImg src={creature?.image_url} />
                        <CreatureName>{creature?.name}</CreatureName>
                        <button onClick={() => setCharmPoints(charmPoints + creature.charmPoints)}>Concluído</button>
                      </CardCreature>
                    );
                  })}
              </ListCreatures>
            </React.Fragment>
          );
        })}
      </Runes>
    </MyRunesContainer>
  );
};

export default MyRunes;
