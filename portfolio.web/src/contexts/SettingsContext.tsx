import { createContext, useContext, useState, ReactNode } from 'react';

interface SettingsContextType {
  isSettingsOpen: boolean;
  toggleSettings: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSettings = () => setIsSettingsOpen(!isSettingsOpen);

  return (
    <SettingsContext.Provider value={{ isSettingsOpen, toggleSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}; 