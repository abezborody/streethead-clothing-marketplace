// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/SignUpForm/SignUpForm.component";

const SignIn = () => {
  // useEffect(() => {
  //   const getDatas = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   getDatas();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign in with Google PopUp</button>

      <SignUpForm />
    </div>
  );
};

export default SignIn;
