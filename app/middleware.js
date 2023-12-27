import { redirect } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request) {
 const path = request.nextUrl.pathname

const isPublic = path ==="/login"|| path==="/signup"

const token = request.cookies.get("token")?.value||""

if (isPublic && token){
   return NextResponse.redirect(new URL("/profile"),request.nextUrl)
}else if (!isPublic && !token){
    return NextResponse.redirect(new URL("/login"),request.nextUrl)
}}
 
export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    'signup',
  ]
}