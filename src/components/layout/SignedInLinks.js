import {NavLink} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

export default function SignedInLinks({profile}) {
  const dispatch = useDispatch()
  const logOut = () => dispatch(signOut())

  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <a onClick={logOut}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {profile.initials}
        </NavLink>
      </li>
    </ul>
  )
}
