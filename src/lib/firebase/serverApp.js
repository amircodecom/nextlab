// enforces that this code can only be called on the server
// https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment
import "server-only";

import { cookies } from "next/headers";
import { initializeServerApp, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCdpot4RTtUdU25MjcBnyV7rdN9TMPRQRM",
  authDomain: "hellobase-b0028.firebaseapp.com",
  projectId: "hellobase-b0028",
  storageBucket: "hellobase-b0028.firebasestorage.app",
  messagingSenderId: "246776823824",
  appId: "1:246776823824:web:09bc1a92e80bf72a244a95"
};


// Returns an authenticated client SDK instance for use in Server Side Rendering
// and Static Site Generation
export async function getAuthenticatedAppForUser() {
  const authIdToken = (await cookies()).get("__session")?.value;
  const firebaseServerApp = initializeServerApp(
	initializeApp(firebaseConfig), { authIdToken } );

  const auth = getAuth(firebaseServerApp)
  await auth.authStateReady()

  return { firebaseServerApp, currentUser : auth.currentUser }
}
