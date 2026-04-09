import { useReducer, useCallback } from 'react'

const initialOrder = {
  type: null,
  base: null,
  fruit: null,
  cream: null,
  iceCream: null,
  sauce: null,
  decoration: null,
  delivery: null,
  currentStep: 0,
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value }
    case 'GO_TO_STEP':
      return { ...state, currentStep: action.step }
    case 'NEXT_STEP':
      return { ...state, currentStep: state.currentStep + 1 }
    case 'PREV_STEP':
      return { ...state, currentStep: Math.max(0, state.currentStep - 1) }
    case 'RESET':
      return { ...initialOrder }
    default:
      return state
  }
}

export function useWaffleOrder() {
  const [order, dispatch] = useReducer(reducer, initialOrder)

  const setField = useCallback((field, value) => {
    dispatch({ type: 'SET_FIELD', field, value })
  }, [])

  const nextStep = useCallback(() => {
    dispatch({ type: 'NEXT_STEP' })
  }, [])

  const prevStep = useCallback(() => {
    dispatch({ type: 'PREV_STEP' })
  }, [])

  const goToStep = useCallback((step) => {
    dispatch({ type: 'GO_TO_STEP', step })
  }, [])

  const reset = useCallback(() => {
    dispatch({ type: 'RESET' })
  }, [])

  return { order, setField, nextStep, prevStep, goToStep, reset }
}
