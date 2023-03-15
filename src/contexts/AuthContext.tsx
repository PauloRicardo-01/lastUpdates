import { createContext, ReactNode, Dispatch, useState, useEffect } from 'react';
import { PacienteType } from '../types';

type AuthContextType = {
  isLightTheme: any;
  setIsLightTheme: Dispatch<any>;
  patients: PacienteType[];
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [patients, _setPatients] = useState<PacienteType[]>([]);

  return (
    <AuthContext.Provider value={{ isLightTheme, setIsLightTheme, patients }}>
      {children}
    </AuthContext.Provider>
  );
}
