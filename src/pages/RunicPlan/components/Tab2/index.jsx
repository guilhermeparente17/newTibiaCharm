import React from 'react'
import Banner from '../../../../components/Banner/Banner';
import { Tab2Container } from './Tab2.Elements';
import { useStore } from '../../../../zustand/store';
import Creatures from '../../../Creatures/Creatures';

const Tab2 = () => {
  const {tab, createdRune} = useStore();

  console.log(createdRune, tab)

  return (
    <Tab2Container>
      <Banner>Quais criaturas deseja enfrentar para conseguir a runa ? </Banner>

      <Creatures />
    </Tab2Container>
  )
}

export default Tab2;