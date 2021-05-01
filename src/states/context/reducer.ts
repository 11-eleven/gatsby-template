export interface State {
  language: "fr" | "en"
}

export enum Actions {
  setLanguage = "SET_LANGUAGE"
}

interface Action {
  type: Actions
  payload: Partial<State>
}

export const initialState = {
  language: "fr"
}

const reducer = (state: State, action: Action): State => {
  const { type, payload } = action

  switch (type) {

    case Actions.setLanguage:
      // console.log("SET_LANGUAGE", payload)

      return {
        ...state,
        language: payload.language,
      }
    
    default:
      throw new Error(`No case for type ${type} found in reducer.`)
  }
}

export default reducer
