import React from 'react'
import { useStore } from '../../../../zustand/store';
import { Tab2Container } from '../Tab2/Tab2.Elements';
import Banner from '../../../../components/Banner/Banner';
import Button from '../../../../components/Button/Button';
import { Link } from 'react-router-dom';

const Tab3 = () => {
  const {myRunes} = useStore();
  console.log(myRunes);
  return (
    <Tab2Container>
      <Banner>Plano rúnico criado com sucesso!</Banner>

      <Link to="/my-runes"><Button>Visualizar plano</Button></Link>
    </Tab2Container>
  )
}

export default Tab3;