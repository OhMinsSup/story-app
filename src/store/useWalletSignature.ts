import shallow from 'zustand/shallow';
import { useStore } from './store';

const useWalletSignature = () => {
  return useStore(
    (store) => ({
      walletSignature: store.walletSignature,
      setWalletSignature: store.setWalletSignature,
    }),
    shallow,
  );
};

export default useWalletSignature;