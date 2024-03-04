import React from "react";
import { RunaContainer, RunaImg, RunaSpan } from "./CardRune.Elements";
import { useStore } from "../../zustand/store";

const CardRune = ({ runa }) => {
  const runeImage = require(`../../assets/${runa.name}.gif`);
  const {setAddNameCreatedRune, setTab} = useStore();

  return (
    <RunaContainer onClick={() => {
      setAddNameCreatedRune(runa.name);
      setTab(2);
    }}>
      <RunaImg src={runeImage} />
      <RunaSpan>{runa.name}</RunaSpan>
    </RunaContainer>
  );
};

export default CardRune;
