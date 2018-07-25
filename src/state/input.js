const state = {
  value: "",
}

export const getValue = () => state.value

export const setValue = value => {
  state.value = value
}
