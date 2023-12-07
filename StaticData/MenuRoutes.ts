import { faPen, faUser } from "@fortawesome/free-solid-svg-icons"

export const HeaderMenu = [
    {
        id: 1,
        title: "DASHBOARD",
        path: "/",
    },
    {
        id: 2,
        title: "CONTACT",
        path: "/contact",
    }
]
export const AuthMenu = [
    {
        id: 1,
        title: "LOGIN",
        path: "/",
        icon: faUser
    },
    {
        id: 2,
        title: "REGISTRATION",
        path: "/",
        icon: faPen
    }
]
export const FooterMenu = [
    {
        id: 1,
        title: "CONTACTS",
        path: "/contact",
    },
    {
        id: 2,
        title: "PHONES",
        path: "/",
    },
    {
        id: 2,
        title: "TOP SEARCH",
        path: "/",
    }
]

export const TabMenu = [
    {
        id: 1,
        title: "All",
        path: "/contact",
    },
    {
        id: 2,
        title: "Companies",
        path: "/companies",
    },
    {
        id: 2,
        title: "Phones",
        path: "/phones",
    }
]