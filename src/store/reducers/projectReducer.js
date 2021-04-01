const initState = {
  projects: [
    {id: 1, title: 'Project 1', content: 'Content 1', date: '11-06-18'},
    {id: 2, title: 'Project 2', content: 'Content 2', date: '11-06-18'},
    {id: 3, title: 'Project 3', content: 'Content 3', date: '11-06-18'},
  ],
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created', action.project.form)
  }
  return state
}

export default projectReducer
