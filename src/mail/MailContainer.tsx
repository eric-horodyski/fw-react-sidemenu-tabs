import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonApp,
} from "@ionic/react";
import React from "react";
import { Route, Redirect } from "react-router";
import InboxPage from "./InboxPage";
import { triangle, ellipse, square } from "ionicons/icons";

const MailContainer: React.FC = () => {
  return (
    <IonApp>
      <IonTabs>
        <IonRouterOutlet id="mail">
          <Route path="/tab1" component={InboxPage} exact={true} />
          <Route path="/tab2" component={InboxPage} exact={true} />
          <Route path="/tab3" component={InboxPage} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonApp>
  );
};

export default MailContainer;
