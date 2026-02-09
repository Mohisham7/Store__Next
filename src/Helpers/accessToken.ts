// "use server";

// import { decode } from "next-auth/jwt";
// import { cookies } from "next/headers";

// export async function getUserToken() {
//   const cookieStore = await cookies();

//   const tokenFromCookie =
//     cookieStore.get("next-auth.session-token")?.value ||
//     cookieStore.get("__Secure-next-auth.session-token")?.value;

//   if (!tokenFromCookie) {
//     throw new Error("User token is missing in cookies");
//   }

//   const decoded = await decode({
//     token: tokenFromCookie,
//     secret: process.env.NEXTAUTH_SECRET!,
//   });
//   const userToken = decoded?.accessToken;

//   if (!userToken) {
//     throw new Error("Invalid user token inside JWT");
//   }

//   return userToken;
// }
// ملف: src/lib/accessToken.ts
"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth"; // عدّل المسار حسب مشروعك

export async function getUserToken(): Promise<string | null> {
  try {
    const session = await getServerSession(authOptions);

    // هنا accessToken موجود في session بعد التعديل
    return (session as any)?.accessToken ?? null;
  } catch {
    return null;
  }
}
