function reducer(action, state) {
  switch(action.type) {
    case 'hire':
      const { employee, person } = action
      return state.addEmployee(employee).updatePerson(person)
      
    default:
      return state
  }
}

export default (init_model, view, renderer) => {
  let state = init_model

  return action => {
    state = reducer(action, state)
    renderer(view(state))
  }
}
