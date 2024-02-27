import { NextResponse } from "next/server";

export function middleware(request){
    const data = request.cookies.get('data')    

    if(!data){
        return NextResponse.redirect(new URL('/login', request.url))
    }

    console.log(data)
}

export const config = {
    matcher: [
        '/dashboard/:path*',        
    ]
}
