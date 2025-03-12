import { Notification } from "@/types/notification.interface";
import { generateID } from "@/utils/string";
import { create } from "zustand";

type NotificationState = {
  notifications: Notification[];
  showNotification: (notification: Omit<Notification, "id">) => void;
  dismissNotification: (id: string) => void;
};

export const useNotificationStore = create<NotificationState>((set, get) => ({
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
}));
