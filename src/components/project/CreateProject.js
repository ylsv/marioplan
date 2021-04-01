import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createProject} from '../../store/actions/projectActions'

export default function CreateProject() {
  const dispatch = useDispatch()

  const initialFormState = {
    title: '',
    content: '',
  }
  const [form, setForm] = useState(initialFormState)

  function handleChange(e) {
    setForm({...form, [e.target.id]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(createProject({type: 'CREATE_PROJECT', form}))
    setForm(initialFormState)
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              onChange={handleChange}
              value={form.title}
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={handleChange}
              value={form.content}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}
