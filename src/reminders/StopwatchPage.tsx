import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const StopwatchPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Stopwatch</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Stopwatch</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p className="ion-padding">
          Uh oh, we didn't implement the stopwatch...
        </p>
      </IonContent>
    </IonPage>
  );
};

export default StopwatchPage;
