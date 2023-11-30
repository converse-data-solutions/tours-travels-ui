import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

interface User {
  email: string;
  firstName: string;
  
}
interface Token {
  email: string;
  firstName: string;
  accessToken: string;
  
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // console.log(credentials);
        // console.log(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/user/signin`);
        
        const authResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/user/signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({email: credentials?.username, password: credentials?.password}),
          
        })
          // console.log("Response",authResponse)
          
        
        if (!authResponse.ok) {
          return null
        }

        const user = await authResponse.json();
      
        console.log("userdetails",user)
        const Role=user.data.role;
        console.log(Role)
       
        // console.log("Session  details:", user.data.first_name,user.data.email,user.data.role_name,user.data.file_name,user.data.id);
        

        return {
         
          email: user.data.email,
          firstName: user.data.first_name,
          role:user.data.role_name,
          file_name:user.data.file_name,
          id:user.data.id
        };

        

        
       
        
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      // Make sure 'user' object is defined before accessing its properties
      if (user) {
        session.accessToken = token.accessToken;
        // session.id = token.sub;
        // session.user.email = user.email;
        // session.user.firstName = user.firstName;
        session.role = user.role;
        // session.user.file_name = user.file_name;
      }
       console.log("token",token)
      console.log("Session details:", session);
      console.log("Role value:", session.user.role);

      return session;
    }
  }
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken
      session.user.id = token.id
      session={...session,role:user.role};
      console.log(session);
      console.log("sessiontoken",)
      
      return session
    }
  }
   callbacks:{
    
  
    
  
  async session({ session, user, token }) {
      // console.log(user.role_name);
      //  session.user={...session.user,role_name:"Admin"}
       console.log("user",user)
       session.accessToken = token.accessToken
       session.user.id = token.id
        session.role = user.data.role_name
      console.log(session)
         console.log("session:",session.user);
      // console.log("user",user)
       return session;
     },

     async jwt({ token, account, profile }) {
     
      if (account) {
        token.accessToken = "testAccessToken"
        token.id = "profile.id"
      }
      return token
    }
    
   }

  
  
})

export { handler as GET, handler as POST }