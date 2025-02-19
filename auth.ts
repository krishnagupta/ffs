import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import {client} from "./sanity/lib/client";
import {AUTHOR_BY_GITHUB_ID_QUERY} from "./sanity/lib/queries";
import {writeClient} from "./sanity/lib/write-client";

export const {handlers, signIn, signOut, auth} = NextAuth({
  providers: [Google],
  // callbacks: {
  //   async signIn({user: {id, name, email, image}}) {
  //     console.log("id", id);
  //     const existingUser = await client
  //       .withConfig({useCdn: false})
  //       .fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
  //         id,
  //       });

  //     console.log("existingUser", existingUser);

  //     if (!existingUser) {
  //       await writeClient.create({
  //         _type: "author",
  //         id,
  //         name,
  //         username: email,
  //         email,
  //         image,
  //       });
  //     }

  //     return true;
  //   },

  //   // async jwt({token, account, profile}) {
  //   //   console.log("token, account, profile", token, account, profile);
  //   //   if (account && profile) {
  //   //     const user = await client
  //   //       .withConfig({useCdn: false})
  //   //       .fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
  //   //         id: profile?.id,
  //   //       });

  //   //     token.id = user?._id;
  //   //   }

  //   //   return token;
  //   // },

  //   // async session({session, token}) {
  //   //   console.log("session, token", session, token);
  //   //   Object.assign(session, {id: token.id});
  //   //   return session;
  //   // },
  // },
});
