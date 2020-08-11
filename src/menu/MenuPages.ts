import { mailOutline, newspaperOutline, alarmOutline } from "ionicons/icons";
import { AppPage } from "./AppPage";

export const menuPages: AppPage[] = [
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
