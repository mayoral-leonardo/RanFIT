export function translateLevel(auth) {
  const translatedLevels = {
    admin: "Administrador",
    goer: "Usuário"
  }

  return translatedLevels[auth.level]
}