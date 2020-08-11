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
import InboxPage from "./InboxPage";
import {
  paperPlaneOutline,
  fileTrayFullOutline,
  trashBinOutline,
} from "ionicons/icons";
import SentPage from "./SentPage";
import ArchivedPage from "./ArchivedPage";

const MailTabOutlet: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonTabs>
      <IonRouterOutlet id="mail">
        <Route path={`${match.url}/inbox`} component={InboxPage} exact={true} />
        <Route path={`${match.url}/sent`} component={SentPage} exact={true} />
        <Route
          path={`${match.url}/archived`}
          component={ArchivedPage}
          exact={true}
        />
        <Route
          path={match.url}
          render={() => <Redirect to={`${match.url}/inbox`} />}
          exact={true}
        />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="inbox" href={`${match.url}/inbox`}>
          <IonIcon icon={fileTrayFullOutline} />
          <IonLabel>Inbox</IonLabel>
        </IonTabButton>
        <IonTabButton tab="sent" href={`${match.url}/sent`}>
          <IonIcon icon={paperPlaneOutline} />
          <IonLabel>Sent</IonLabel>
        </IonTabButton>
        <IonTabButton tab="archived" href={`${match.url}/archived`}>
          <IonIcon icon={trashBinOutline} />
          <IonLabel>Archived</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MailTabOutlet;
