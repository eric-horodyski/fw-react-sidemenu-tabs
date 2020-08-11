import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import React from "react";
import { Route, Redirect, RouteComponentProps } from "react-router";
import { newspaperOutline, starOutline } from "ionicons/icons";
import UnreadNewsPage from "./UnreadNewsPage";
import FavoriteNewsPage from "./FavoriteNewsPage";

const NewsTabs: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonTabs>
      <IonRouterOutlet id="news">
        <Route
          path={`${match.url}/unread`}
          component={UnreadNewsPage}
          exact={true}
        />
        <Route
          path={`${match.url}/favorites`}
          component={FavoriteNewsPage}
          exact={true}
        />
        <Route
          path={match.url}
          render={() => <Redirect to={`${match.url}/unread`} />}
          exact={true}
        />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="unread" href={`${match.url}/unread`}>
          <IonIcon icon={newspaperOutline} />
          <IonLabel>News</IonLabel>
        </IonTabButton>
        <IonTabButton tab="favorites" href={`${match.url}/favorites`}>
          <IonIcon icon={starOutline} />
          <IonLabel>Favorites</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default NewsTabs;
