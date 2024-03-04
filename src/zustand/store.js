import { create } from 'zustand'

export const useStore = create((set) => ({
  tab: 1,
  myRunes: [],
  createdRune: {
    name: '',
    creatures: [],
  },
  setAddNameCreatedRune: (payload) => set((state) => ({
    ...state,
    createdRune: {
      ...state.createdRune,
      name: payload
    }
  })),
  setAddCreatureCreatedRune: (payload) => set((state) => {
    const creatureExists = state?.createdRune?.creatures?.some(creature => creature.id === payload.id);
  
    if (!creatureExists) {
      return {
        ...state,
        createdRune: {
          ...state.createdRune,
          creatures: [...state.createdRune.creatures, payload],
        }
      };
    }
  
    return state;
  }),

  setAddRune: (payload) => set((state) => ({
    ...state,
    myRunes: [
      ...state.myRunes,
      payload
    ]
  })),
  setTab: (payload) => set(() => ({ tab: payload })),
}))