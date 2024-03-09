import React, { useState } from "react";
import {
  CreatureContainer,
  CreaturesList,
  FilterTitle,
  HeaderCreatures,
  WrapFilters,
  WrapOptions,
  WrapSearch,
} from "./Creatures.Elements";
import Search from "../../components/Search/Search";
import CreaturesData from "../../data/Creatures";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { useStore } from "../../zustand/store";
import { useLocation } from "react-router-dom";
import Select from "../../components/Select/Select";

const Creatures = () => {
  const { setTab, setAddRune, createdRune, setResetCreatedPlan, myRunes } = useStore();
  const location = useLocation();
  const [points, setPoints] = useState('');
  const [race, setRace] = useState('');
  console.log(myRunes);

  return (
    <CreatureContainer>
      <HeaderCreatures>
        <WrapSearch>
          <Search />
          {location.pathname !== '/creatures' && <Button
            onClick={() => {
              setTab(3);
              setAddRune(createdRune);
              setResetCreatedPlan()
            }}
          >
            Adicionar runa
          </Button>}
        </WrapSearch>

        <WrapFilters>
          <FilterTitle>Filtros:</FilterTitle>

          <WrapOptions>
            <Select setPoints={setPoints} points={points} title='Selecione um valor'>
              <option value="">Todos</option>
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="15">15</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </Select>

            <Select setPoints={setRace} points={race} title='Selecione uma raça'>
              <option value="">Todos</option>
              <option value="Humanos">Humanos</option>
              <option value="Dragoes">Dragoes</option>
              <option value="Criaturas Magicas">Criaturas Magicas</option>
              <option value="Repteis">Repteis</option>
              <option value="Fadas">Fadas</option>
              <option value="Licantropos">Licantropos</option>
              <option value="Demonios">Demonios</option>
              <option value="Constructos">Constructos</option>
              <option value="Gigantes">Gigantes</option>
              <option value="Mortos-Vivos">Mortos-Vivos</option>
              <option value="Mamiferos">Mamíferos</option>
              <option value="Vermes">Vermes</option>
              <option value="Humanoides">Humanoides</option>
            </Select>
          </WrapOptions>
        </WrapFilters>
      </HeaderCreatures>

      <CreaturesList>
      {
          points === '' && race === '' ? CreaturesData.map((creature, index) => {
            return <Card creature={creature} key={index} />;
          }) : CreaturesData.filter(item => {
            const matchPoints = points === '' || Number(item.charmPoints) === Number(points);
            const matchRace = race === '' || item.race === race;
            return matchPoints && matchRace;
          }).map((creature, index) => {
            return <Card creature={creature} key={index} />;
          })
        }
      </CreaturesList>
    </CreatureContainer>
  );
};

export default Creatures;
