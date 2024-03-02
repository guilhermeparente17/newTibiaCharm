import React from "react";
import {
  ButtonWrap,
  HomeContainer,
  HomeContent,
  HomeImg,
  HomeMain,
  HomeText,
  SpanStyle,
  SpanStyleBold,
} from "./Home.Elements";
import Header from "../../components/Header/Header";
import Runas from "../../assets/runas.png";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <HomeContainer>
      <HomeContent>
        <Header />

        <HomeMain>
          <HomeImg src={Runas} />
          <HomeText>
            <SpanStyle>
              Seja bem vindo ao Tibia <SpanStyleBold>Charm</SpanStyleBold>, com
              nosso <SpanStyleBold>Plano Rúnico</SpanStyleBold> você será capaz
              de se organizar e planejar estratégias para adquirir suas futuras{" "}
              <SpanStyleBold>Runas</SpanStyleBold>.
            </SpanStyle>
            <br />
            <br />
            <SpanStyle>
              Temos uma lista com todas as criaturas do jogo e sempre
              atualizando.
            </SpanStyle>
            <br />
            <br />
            <SpanStyle>
              Temos uma página explicando oque são as{" "}
              <SpanStyleBold>Runas</SpanStyleBold> no mundo do Tibia e para que
              elas servem.
            </SpanStyle>
            <br />
            <br />

            <ButtonWrap>
              <Button>Saiba mais</Button>
            </ButtonWrap>
          </HomeText>
        </HomeMain>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
