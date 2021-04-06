import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {useSelector} from 'react-redux'

export default function Navbar() {
  const firebase = useSelector(state => state.firebase)

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left">
          Plan Creator
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  )
}
