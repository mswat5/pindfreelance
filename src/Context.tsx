import { createContext, useContext } from "react";

// Define the context value type
interface ViewContextType {
  view: string;
  setView: (view: string) => void;
}

// Create the context with a default value
export const ViewContext = createContext<ViewContextType>({
  view: "cards",
  setView: () => {},
});

// Optional: Create a custom hook for easier context usage
export const useViewContext = () => useContext(ViewContext);
