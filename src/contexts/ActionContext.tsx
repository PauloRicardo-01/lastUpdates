import { createContext, ReactNode, Dispatch, useState, useEffect } from 'react';

type ActionContextType = {
  isVisibleHero: boolean;
  setIsVisibleHero: Dispatch<boolean>;
  lastPageScroll: number;
  setLastPageScroll: Dispatch<number>;
  isMobile: boolean;
  getCurrentPath: (parts: number, justEnd: boolean) => string;
  isAuthPage: boolean;
  setIsAuthPage: Dispatch<boolean>;
};

export const ActionContext = createContext({} as ActionContextType);

export function ActionProvider({ children }: { children: ReactNode }) {
  const [isVisibleHero, setIsVisibleHero] = useState(true);
  const [lastPageScroll, setLastPageScroll] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAuthPage, setIsAuthPage] = useState(false);

  function getCurrentPath(parts: number, justEnd: boolean) {
    const splitedPath = window.location.href.split('/');
    let currentPath = '';

    switch (parts) {
      case 2:
        if (justEnd) {
          currentPath = splitedPath[4];
        } else {
          currentPath = splitedPath[3] + '/' + splitedPath[4];
        }
        break;

      case 3:
        if (justEnd) {
          currentPath = splitedPath[5];
        } else {
          currentPath = splitedPath[3] + '/' + splitedPath[4] + '/' + splitedPath[5];
        }
        break;

      default:
        currentPath = splitedPath[3];
        break;
    }

    return currentPath;
  }

  function setReloadComponent() {
    const reloadComponent = () => {
      setTimeout(() => {
        setIsMobile(window.innerWidth < 1000);
      }, 100);
    };

    let reload: any;
    window.onresize = () => {
      clearTimeout(reload);
      reload = setTimeout(reloadComponent, 100);
    };
  }

  useEffect(() => {
    setReloadComponent();
    setIsMobile(window.innerWidth < 900);
  }, []);

  return (
    <ActionContext.Provider
      value={{
        isVisibleHero,
        setIsVisibleHero,
        lastPageScroll,
        setLastPageScroll,
        isMobile,
        getCurrentPath,
        isAuthPage,
        setIsAuthPage,
      }}
    >
      {children}
    </ActionContext.Provider>
  );
}
