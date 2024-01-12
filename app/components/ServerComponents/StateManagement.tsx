
export const setNavState = (navState:any) => ({
    type: 'SET_NAV_STATE',
    payload: navState,
  });
  
  
  const initialState = {
    navState: {
      selectedListDetails: null,
      parent: null,
      children: [],
    },
  };
  
  export const rootReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case 'SET_NAV_STATE':
        return {
          ...state,
          navState: action.payload,
        };
      default:
        return state;
    }
  };
  