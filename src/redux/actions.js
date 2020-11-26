import { INCREMENT, DECREMENT, CHANGE_THEME, DISABLE_BTN, ENABLE_BTN } from './types';

export function increment() {
    return {
        type: INCREMENT,
    }
}

export function decrement() {
    return {
        type: DECREMENT,
    }
}

export function enablebtn() {
  return {
      type: ENABLE_BTN
  }
}

export function disablebtn() {
    return {
        type: DISABLE_BTN
    }
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme,
    }
}

export function asyncIncrement() {
  return function(dispatch) {
      dispatch(disablebtn());
      setTimeout(() => {
        dispatch(increment())
        dispatch(enablebtn())
      }, 2000)
      
  }
}
