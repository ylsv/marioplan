import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/project/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/project/CreateProject'
import Loader from 'react-loader-spinner'
import React from 'react'
import {useSelector} from 'react-redux'

function App() {
  const loaderIsVisible = useSelector(state => state.loader.isLoading)
  return (
    <BrowserRouter>
      <div className="App">
        <Loader
          className="loader"
          type="Grid"
          color="#424242"
          height={100}
          width={100}
          visible={loaderIsVisible}
        />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/project/:id" component={ProjectDetails} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/create" component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
