// Get theme from the local storage
export const getStorageTheme = () => {
  let theme = "light"
  if (
    localStorage.getItem("theme") &&
    (localStorage.getItem("theme") === "light" ||
      localStorage.getItem("theme") === "dark")
  ) {
    theme = localStorage.getItem("theme")!
  }
  return theme
}

// Save theme to local storage
export const saveStorageTheme = (theme: string) => {
  localStorage.setItem("theme", theme)
}
