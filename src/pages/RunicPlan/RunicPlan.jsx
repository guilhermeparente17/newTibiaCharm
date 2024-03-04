import React from "react";
import Button from "../../components/Button/Button";
import { RunicBanner, RunicContainer, RunicSpan } from "./RunicPlan.Elements";
import { Link } from "react-router-dom";
import { useStore } from "../../zustand/store";

const RunicPlan = () => {
  const { setTab } = useStore();
  return (
    <RunicContainer>
      <RunicBanner>
        <RunicSpan>
          Bem vindo ao Plano Rúnico, com este sistema você consegue se organizar
          e planejar estratégias para estar adquirindo suas futuras runas no
          Tibia.
        </RunicSpan>
        <br />
        <br />
        <RunicSpan>
          Adicione uma Runa, selecione quais criaturas deseja enfrentar para
          conseguila e consulte esta tisticas, total de charm points, tempo e
          sugestões.
        </RunicSpan>
        <br />
        <br />
        <RunicSpan>Aproveite!</RunicSpan>
        <br />
      </RunicBanner>

      <Link onClick={() => {
        setTab(1)
      }} to="/runic-plan-register">
        <Button>Comece agora</Button>
      </Link>
    </RunicContainer>
  );
};

export default RunicPlan;
