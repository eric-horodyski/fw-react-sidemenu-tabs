import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
} from "@ionic/react";

import React from "react";
import { useLocation } from "react-router-dom";
import { mailOutline, newspaperOutline, alarmOutline } from "ionicons/icons";

interface AppPage {
  url: string;
  icon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Mail",
    url: "/mail",
    icon: mailOutline,
  },
  {
    title: "News",
    url: "/news",
    icon: newspaperOutline,
  },
  {
    title: "Reminders",
    url: "/reminders",
    icon: alarmOutline,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  const isCurrentPage = (url: string): string =>
    location.pathname === url ? "selected" : "";

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={isCurrentPage(appPage.url)}
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" icon={appPage.icon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
