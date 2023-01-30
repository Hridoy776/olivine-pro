import React, { useState } from "react";
import { useAppDispatch } from "@/hooks/hooks";
import { loginUser } from "@/redux/slices/auth/authSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// enternal import //
import SocialLogin from "@/components/login/SocialLogin";
import ls from "../../assets/images/login-signup.jpg";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();
  type NewType = {
    preventDefault: () => void;
  };

  const handleLogin = (e: NewType): void => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    router.push("/");
  };
  return (
    <div className="p-16 pb-64 min-h-screen h-full">
      <p className="text-primary text-center uppercase font-bold tracking-widest text-xl">
        login to your account
      </p>
      <div className="flex  justify-center items-center">
        <div className=" m-8 flex-1">
          <div className="lg:w-[400px] w-[300px] mx-auto ">
            <SocialLogin />
          </div>
          <form
            onSubmit={handleLogin}
            className="card-body w-[350px] lg:w-[450px] mx-auto"
          >
            <div className="divider w-full mx-auto mt-10">OR</div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="input rounded-none input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                className="input rounded-none input-bordered"
                required
              />
              {/* {errorElement} */}

              <p className="">
                are you new ?
                <Link className="text-primary" href="/register">
                  please sign up
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn rounded-none   btn-primary"
                type="submit"
                value="login"
              />
            </div>
          </form>
        </div>

        <div className="flex-1 w-[400px] h-full">
          <Image src={ls} alt="sample" />
        </div>
      </div>
    </div>
  );
};

export default Login;
