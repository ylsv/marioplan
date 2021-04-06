import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {signIn} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'

export default function SignIn() {
  const dispatch = useDispatch()
  const authError = useSelector(state => state.auth.authError)
  const initialFormState = {email: '', password: ''}
  const [form, setForm] = useState(initialFormState)
  const auth = useSelector(state => state.firebase.auth)
  if (auth.uid) return <Redirect to="/" />

  function handleChange(e) {
    setForm({...form, [e.target.id]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(signIn(form))
    setForm(initialFormState)
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Log In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              value={form.email}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
