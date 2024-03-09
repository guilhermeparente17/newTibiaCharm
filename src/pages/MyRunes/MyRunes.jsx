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
  Title,
  WrapData,
  MyRunesContainer,
  RuneAccordion,
  RuneAccordionImg,
  RuneAccordionName,
  Runes,
  Wrap,
  PointsTotal,
  MRList,
  MRItem,
  IconClose,
} from "./MyRunes.Elements";
import { useStore } from "../../zustand/store";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const MyRunes = () => {
  const { 
    myRunes, 
    setAddPointsInRune, 
    setStatusCreature, 
    totalCharmPoints, 
    setRemoveCreatureMyRunes, 
    setRemoveRune 
  } = useStore();
  const [charmPoints, setCharmPoints] = useState(0);
  const [openStates, setOpenStates] = useState(
    Array(myRunes?.length).fill(false)
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
        <WrapData>
          <Title>Meus Dados</Title>
          <MRData>
            <MRList>
              <MRItem>Total de pontos: {totalCharmPoints}</MRItem>
            </MRList>
          </MRData>
        </WrapData>

        <WrapData>
          <Title>Minhas Runas</Title>
          <MRRunes>Suas runas</MRRunes>
        </WrapData>
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
                  <PointsTotal>{runa?.points}/{runa?.totalPoints}</PointsTotal>
                  <IoIosArrowDown
                    onClick={() => toggleAccordion(index)}
                    size={25}
                    color="#fff"
                    style={{ marginRight: "10px", cursor: "pointer" }}
                  />
                  <IconClose position='relative' onClick={() => {
                    setRemoveRune(runa);
                  }}>
                    <IoClose size="25" color="red" />
                  </IconClose>
                </Wrap>
              </RuneAccordion>

              <ListCreatures isOpen={openStates[index]}>
                {openStates[index] &&
                  myRunes[index]?.creatures?.map((creature, index) => {
                    return (
                      <CardCreature key={index}>
                        <CreatureImg src={creature?.image_url} />
                        <CreatureName>{creature?.name}</CreatureName>
                        <button disabled={creature.status === 'completed' ? true : false} onClick={() => {
                          setAddPointsInRune({ name: runa?.name, value: creature.charmPoints });
                          setCharmPoints(charmPoints + creature.charmPoints);
                          setStatusCreature(creature?.name)
                        }}>Concluído</button>

                        <IconClose position='absolute' onClick={() => setRemoveCreatureMyRunes({ creature: creature, runa: runa })}>
                          <IoClose size="25" color="red" />
                        </IconClose>
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
