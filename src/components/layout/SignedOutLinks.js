import {NavLink} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

export default function SignedOutLinks() {
  const dispatch = useDispatch()
  const curLang = useSelector(state => state.language.currentLanguage)
  const handleClick = () => {
    dispatch({type: 'SWITCH_LANGUAGE'})
  }
  return (
    <ul className="right">
      <li>
        <NavLink to="/signup">
          {curLang === 'ru' ? 'Регистрация' : 'Signup'}
        </NavLink>
      </li>
      <li>
        <NavLink to="/signin">{curLang === 'ru' ? 'Вход' : 'Login'}</NavLink>
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
