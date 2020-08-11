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
import { menuPages } from "./MenuPages";

const Menu: React.FC = () => {
  const location = useLocation();

  const isCurrentPage = (url: string): string => {
    return location.pathname === url ? "selected" : "";
  };

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList>
          {menuPages.map((page, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={isCurrentPage(page.url)}
                  routerLink={page.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" icon={page.icon} />
                  <IonLabel>{page.title}</IonLabel>
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
