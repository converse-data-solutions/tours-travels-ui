import { withAuth } from "next-auth/middleware";
// import { getSession } from "next-auth/react";

// export default withAuth(
//   async function middleware(req) {

//     const session=await getSession();

//  const role= session?.user.role;
//     if (!role || role !== "Admin"||"admin") {

//       return {
//         redirect: {
//           destination: "/",
//           permanent: false,
//         },
//       };
//     }

//     console.log("User is authorized with the 'admin' role");
//   },
//   {
//     callbacks: {
//       async authorized({ session }) {

//         return session?.user.role === "Admin";
//       },
//     },
//   }
// );

export const config = { matcher: ["/admin"] };
