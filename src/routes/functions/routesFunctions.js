import { adminRoutes } from "../levels/admin";
import { goerRoutes } from "../levels/goer";

export default function getRoutes (auth) {
  const routes = {
    admin: adminRoutes,
    goer: goerRoutes
  }

  return routes[auth.level]
}