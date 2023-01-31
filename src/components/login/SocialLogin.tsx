import auth from "firebase.init";
import { useRouter } from "next/router";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

type Props = {};

const SocialLogin = (props: Props) => {
  const router = useRouter();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handeGoogleSignIn = () => {
    signInWithGoogle();
    console.log("hello");
  };

  if (user) {
    router.push("/");
  }
  if (loading) {
    return <div>loading...</div>;
  }
  console.log(error);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-6  justify-center items-center">
      <button
        onClick={handeGoogleSignIn}
        className="btn rounded-none btn-primary"
      >
        google sign in
      </button>
      <button className="btn rounded-none btn-primary">google sign in</button>
    </div>
  );
};

export default SocialLogin;
