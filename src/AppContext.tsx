import {
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
} from 'react'

// Define the shape of your context
interface AppContextType {
  isDrawerOpen: boolean
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>
}

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined)

// Create a custom hook for consuming the context
export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

// Create the provider component
interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <AppContext.Provider value={{ isDrawerOpen, setIsDrawerOpen }}>
      {children}
    </AppContext.Provider>
  )
}
