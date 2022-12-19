import { useState } from "react";

import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.component";

import "./SignInForm.styles.scss";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

///

const SignInForm = () => {
  // redirect example
  // useEffect(() => {
  //   const getDatas = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   getDatas();
  // }, []);

  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const onFormSubmitHandle = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetForm();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password!");
          break;
        case "auth/user-not-found":
          alert("User does not exist");
          break;
        default:
          console.error(error);
          break;
      }
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onFormSubmitHandle}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={onChangeHandler}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={onChangeHandler}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
