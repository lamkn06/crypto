import React from 'react';

export class RootStore {
  constructor() {}
}
const rootStoreContext = React.createContext<RootStore | null>(null);

export const Provider = ({ children }: any) => {
  const rootStore = (() => {
    if (typeof window !== 'undefined') {
      if (!window.__rootStore) {
        window.__rootStore = new RootStore();
      }

      return window.__rootStore;
    } else {
      // server
      return new RootStore();
    }
  })();

  return <rootStoreContext.Provider value={rootStore}>{children}</rootStoreContext.Provider>;
};

export const useRootStore = () => {
  const store = React.useContext(rootStoreContext);

  if (!store) {
    throw new Error('useRootStore must be use in Provider');
  }
  return store;
};
