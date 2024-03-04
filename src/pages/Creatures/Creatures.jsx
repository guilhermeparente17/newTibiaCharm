import React from "react";
import {
  CreatureContainer,
  CreaturesList,
  HeaderCreatures,
} from "./Creatures.Elements";
import Search from "../../components/Search/Search";
import CreaturesData from "../../data/Creatures";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { useStore } from "../../zustand/store";

const Creatures = () => {
  const { setTab, setAddRune, createdRune } = useStore();

  return (
    <CreatureContainer>
      <HeaderCreatures>
        <Search />
        <Button
          onClick={() => {
            setTab(3);
            setAddRune(createdRune);
          }}
        >
          Adicionar runa
        </Button>
      </HeaderCreatures>

      <CreaturesList>
        {CreaturesData.map((creature, index) => {
          return <Card creature={creature} key={index} />;
        })}
      </CreaturesList>
    </CreatureContainer>
  );
};

export default Creatures;
