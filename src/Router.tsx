import React from 'react'
import { IonRouterOutlet, IonSplitPane } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Redirect, Route } from 'react-router-dom'
import LaunchesPage from './pages/LaunchesPage'
import LaunchPage from './pages/LaunchPage'
import LauncheNextPage from './pages/LauncheNextPage'
import LaunchesNextPage from './pages/LaunchesNextPage'
const Router: React.FC = props => (
  <IonReactRouter>
    <IonSplitPane contentId="main-content" when="md">
      {props.children}
      <IonRouterOutlet id="main-content">
        <Route exact path="/launches">
          <LaunchesPage />
        </Route>
        <Route exact path="/launches/:id">
          <LaunchPage />
        </Route>
        <Route exact path="/">
          <Redirect to="/launches" />
        </Route>
        <Route exact path="/launchenext">
          <LauncheNextPage />
        </Route>
        <Route exact path="/launchenext/:id">
          <LaunchesNextPage />
        </Route>
      </IonRouterOutlet>
    </IonSplitPane>
  </IonReactRouter>
)
export default Router
