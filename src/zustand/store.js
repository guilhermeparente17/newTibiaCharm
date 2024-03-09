import { create } from 'zustand'

export const useStore = create((set) => ({
  tab: 1,
  myRunes: [],
  count: 0,
  totalCharmPoints: 0,
  createdRune: {
    name: '',
    creatures: [],
    points: 0,
    totalPoints: 0,
    status: 'progress'
  },
  setAddNameCreatedRune: (payload) => set((state) => ({
    ...state,
    createdRune: {
      ...state.createdRune,
      name: payload.name, totalPoints: payload.totalPoints
    }
  })),
  setResetCreatedPlan: () => set((state) => {
    return {...state, createdRune: {
      name: '',
      creatures: [],
      points: 0,
      totalPoints: 0,
      status: 'progress'
    }};
  }),
  setStatusCreature: (payload) =>
  set((state) => {
    // Percorre todas as runas no myRunes
    const updatedMyRunes = state.myRunes.map((rune) => {
      // Procura a criatura na runa atual
      const updatedCreatures = rune.creatures.map((creature) => {
        // Se a criatura for encontrada e seu nome coincidir com o payload, atualiza o status
        if (creature.name === payload) {
          return { ...creature, status: 'completed' };
        }
        return creature;
      });
      // Retorna a runa atualizada com as criaturas atualizadas
      return { ...rune, creatures: updatedCreatures };
    });

    // Retorna o estado atualizado com myRunes
    return { ...state, myRunes: updatedMyRunes };
  }),
  setRemoveCreatureCreateRune: ({ status, name }) =>
  set((state) => {
    const updatedCreatures = state.createdRune.creatures.filter(
      (creature) => creature.name !== name
    );

    if (status) {
      return {
        ...state,
        createdRune: {
          ...state.createdRune,
          creatures: updatedCreatures,
        },
      };
    }

    return state;
  }),
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
  setAddPointsInRune: ({ name, value }) =>
    set((state) => {
      const updatedRunes = state.myRunes.map((rune) => {
        if (rune.name === name) {
          return {
            ...rune,
            points: rune.points + value,
          };
        }
        return rune;
      });

      return { ...state, myRunes: updatedRunes, totalCharmPoints: state.totalCharmPoints + value };
    }),

  setAddRune: (payload) => set((state) => ({
    ...state,
    myRunes: [
      ...state.myRunes,
      payload
    ]
  })),
  setRemoveCreatureMyRunes: ({ creature, runa }) => set((state) => {
    // Encontre a runa específica pelo nome
    const updatedMyRunes = state.myRunes.map(rune => {
      if (rune.name === runa.name) {
        // Remova a criatura do array de criaturas dessa runa
        const updatedCreatures = rune.creatures.filter(c => c !== creature);
        return {
          ...rune,
          creatures: updatedCreatures
        };
      }
      return rune;
    });
  
    return { ...state, myRunes: updatedMyRunes };
  }),
  setRemoveRune: (runa) => set((state) => {
    const updatedMyRunes = state.myRunes.filter(rune => rune.name !== runa.name);
  
    return { ...state, myRunes: updatedMyRunes };
  }),
  setTab: (payload) => set(() => ({ tab: payload })),
}))