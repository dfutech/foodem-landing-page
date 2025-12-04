"use client"
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme, type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function useTheme() {
  const { theme, setTheme, resolvedTheme, ...rest } = useNextTheme()

  const toggleTheme = () => {
    // Use resolvedTheme to handle "system" theme correctly
    const currentTheme = resolvedTheme || theme
    setTheme(currentTheme === "dark" ? "light" : "dark")
  }

  return { theme: resolvedTheme || theme, setTheme, resolvedTheme, toggleTheme, ...rest }
}
