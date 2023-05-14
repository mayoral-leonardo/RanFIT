export function translateLevel(auth) {
  const translatedLevels = {
    admin: "Administrador",
    goer: "Frequentador"
  }

  return translatedLevels[auth.level]
}