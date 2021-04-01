import {useState} from 'react'

export default function SignUp() {
  const initialFormState = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  const [form, setForm] = useState(initialFormState)

  function handleChange(e) {
    setForm({...form, [e.target.id]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    setForm(initialFormState)
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
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
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              onChange={handleChange}
              value={form.firstName}
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              onChange={handleChange}
              value={form.lastName}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}
