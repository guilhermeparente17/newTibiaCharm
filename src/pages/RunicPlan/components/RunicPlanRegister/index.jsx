import React from 'react'
import { RunicRegisterContainer } from './elements'
import Tab1 from '../Tab1'
import Tab2 from '../Tab2'
import Tab3 from '../Tab3'
import { useStore } from '../../../../zustand/store'

const RunicPlanRegister = () => {
  const {tab} = useStore();
  return (
    <RunicRegisterContainer>
        {
          tab === 1 && <Tab1 />
        }
        {
          tab === 2 && <Tab2 />
        }
        {
          tab === 3 && <Tab3 />
        }
    </RunicRegisterContainer>
  )
}

export default RunicPlanRegister