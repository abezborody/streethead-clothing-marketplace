import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const onFormSubmitHandle = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("This email already in use.");
      } else {
        console.error(error);
      }
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={onFormSubmitHandle}>
        <label>Display Name</label>
        <input
          type="text"
          required
          onChange={onChangeHandler}
          name="displayName"
          value={displayName}
        />
        <label>Email</label>
        <input
          type="email"
          required
          onChange={onChangeHandler}
          name="email"
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          required
          onChange={onChangeHandler}
          name="password"
          value={password}
        />
        <label>Confirm password</label>
        <input
          type="password"
          required
          onChange={onChangeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
