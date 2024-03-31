import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github" 
import CredentialsProvider from "next-auth/providers/credentials"       
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import bcrypt from "bcryptjs"
import { connectToDB } from "./utils"
import { User } from "./models"

const login = async (credentials) => {
  try{

    connectToDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user) {
      return { error: "Invalid credentials!" };
    }

    const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

    if (!isPasswordValid) {
      return { error: "Invalid credentials!" };
    }

    return user;

  }catch (err){
    console.log(err);
    return { error: "Failed to login!" };
  }
}

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
        }),

        CredentialsProvider({
          async authorize(credentials) {
            try{

              const user = await login(credentials);
              return user;

            }catch (err){
              console.log(err);
              return { error: "Failed to login!" };
            }
          } 
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
          if (account.provider === "github") {
            connectToDB();
            try {
              const user = await User.findOne({ email: profile.email });
    
              if (!user) {
                const newUser = new User({
                  username: profile.login,
                  email: profile.email,
                  image: profile.avatar_url,
                });
    
                await newUser.save();
              }
            } catch (err) {
              console.log(err);
              return false;
            }
          }
          return true;
        },
      },
    });