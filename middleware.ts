import { auth } from "@/auth"
 
export default auth((req) => {
  if (req.auth && req.nextUrl.pathname === "/login") {
    const newUrl = new URL("/profile", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }

  if (!req.auth && req.nextUrl.pathname === "/profile") {
    const newUrl = new URL("/login", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
})