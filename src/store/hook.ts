// shallow
import shallow from 'zustand/shallow';

// hooks
import { useStore } from '@store/store';

export const useUserHook = () => {
  return useStore(
    (store) => ({
      userInfo: store.userInfo,
      setAuth: store.actions?.setAuth,
      isLoggedIn: store.isLoggedIn,
      setLoggedIn: store.actions?.setLoggedIn,
    }),
    shallow,
  );
};