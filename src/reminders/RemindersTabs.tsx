import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import React from "react";
import { RouteComponentProps, Route, Redirect } from "react-router";
import { listOutline, alarmOutline, timerOutline } from "ionicons/icons";
import RemindersPage from "./RemindersPage";
import AlarmsPage from "./AlarmsPage";
import StopwatchPage from "./StopwatchPage";

const RemindersTabs: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonTabs>
      <IonRouterOutlet id="reminders">
        <Route
          path={`${match.url}/list`}
          component={RemindersPage}
          exact={true}
        />
        <Route
          path={`${match.url}/alarms`}
          component={AlarmsPage}
          exact={true}
        />
        <Route
          path={`${match.url}/stopwatch`}
          component={StopwatchPage}
          exact={true}
        />
        <Route
          path={match.url}
          render={() => <Redirect to={`${match.url}/list`} />}
          exact={true}
        />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="list" href={`${match.url}/list`}>
          <IonIcon icon={listOutline} />
          <IonLabel>Reminders</IonLabel>
        </IonTabButton>
        <IonTabButton tab="favorites" href={`${match.url}/alarms`}>
          <IonIcon icon={alarmOutline} />
          <IonLabel>Alarms</IonLabel>
        </IonTabButton>
        <IonTabButton tab="stopwatch" href={`${match.url}/stopwatch`}>
          <IonIcon icon={timerOutline} />
          <IonLabel>Stopwatch</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default RemindersTabs;
