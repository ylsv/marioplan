import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {useSelector} from 'react-redux'

export default function Navbar() {
  const auth = useSelector(state => state.firebase.auth)
  const profile = useSelector(state => state.firebase.profile)
  const curLang = useSelector(state => state.language.currentLanguage)

  return (
    <nav className="nav-wrapper red lighten-3">
      <div className="container">
        <Link to="/" className="brand-logo left">
          {curLang === 'ru' ? 'Планировщик' : 'Plan Creator'}
        </Link>
        {auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />}
      </div>
    </nav>
  )
}
