import React, { useReducer } from 'react'

enum EnumAction {
  CHANGE = 'CHANGE',
}

interface Action {
  type: EnumAction
}

interface State {
  count: number
  textState: boolean
}


const reducer = ( state: State, action: Action ) => {
  switch (action.type) {
    case EnumAction.CHANGE:
      return {count: state.count + 1, textState: !state.textState}
    default: return state
  }
}

const UseReducerHook: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, textState: false})
  
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({type: EnumAction.CHANGE})}>Increase</button>
      {state.textState && <h1>Some text</h1>}
    </div>
  )
}

export default UseReducerHook