import { createContext } from "react";

export const DataContext = createContext<{active: { active: string, setActive: React.Dispatch<React.SetStateAction<string>>  }} | null>(null)

