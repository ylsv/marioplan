import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

export default function SignedInLinks({profile}) {
  const dispatch = useDispatch()
  const curLang = useSelector(state => state.language.currentLanguage)
  const logOut = () => dispatch(signOut())
  const handleClick = () => {
    dispatch({type: 'SWITCH_LANGUAGE'})
  }
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">
          {curLang === 'ru' ? 'Новый проект' : 'New Project'}
        </NavLink>
      </li>
      <li>
        <a onClick={logOut}>{curLang === 'ru' ? 'Выход' : 'Log Out'}</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {profile.initials}
        </NavLink>
      </li>
      <li>
        <a
          className="btn-floating btn-middle red lighten-3 waves-effect waves-light"
          onClick={handleClick}
        >
          <i className="large material-icons">language</i>
        </a>
      </li>
    </ul>
  )
}
