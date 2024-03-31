import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"        
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"

console.log("NEXTAUTH_URL", process.env.AUTH_URL)
export const { 
    handlers:{ GET, POST }, 
    auth, 
    signIn, 
    signOut 
    } = NextAuth({ 
    providers: [ 
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        Facebook({
            clientId: process.env.FACEBOOK_CLIENT_ID, 
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        })
    ] 
    
})