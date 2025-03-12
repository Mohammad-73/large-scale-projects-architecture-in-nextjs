import { Notification } from "@/types/notification.interface";
import { generateID } from "@/utils/string";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type NotificationState = {
  notifications: Notification[];
  showNotification: (notification: Omit<Notification, "id">) => void;
  dismissNotification: (id: string) => void;
};

export const useNotificationStore = create<NotificationState>()(
  devtools((set, get) => ({
    notifications: [],
    showNotification: (notification) => {
      const id = generateID();
      set((state) => ({
        notifications: [...state.notifications, { id: id, ...notification }],
      }));

      setTimeout(() => {
        get().dismissNotification(id);
      }, notification.duration);
    },
    dismissNotification: (id) => {
      set((state) => ({
        notifications: state.notifications.filter((n) => n.id !== id),
      }));
    },
  }))
);

export const showNotification = (notifications: Omit<Notification, "id">[]) => {
  notifications.forEach((n) =>
    useNotificationStore.getState().showNotification(n)
  );
};
