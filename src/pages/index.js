import { lazy } from "react"

export const Favorites = lazy(async () => ({
    default: (await import("./favorites/index.jsx")).Favorites
}))
export const Orders = lazy(async () => ({
    default: (await import("./orders/index.jsx")).Orders
}))
export const Home = lazy(async () => ({
    default: (await import("./home/index.jsx")).Home
}))