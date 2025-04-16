"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import SocialSignIn from "../SocialSignIn";
import Logo from "@/components/Layout/Header/Logo";
import Loader from "@/components/Common/Loader";

const Signin = () => {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    checkboxToggle: false,
  });
  const [loading, setLoading] = useState(false);

  const loginUser = (e: any) => {
    e.preventDefault();

    setLoading(true);
    signIn("credentials", { ...loginData, redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error(callback?.error);
          console.log(callback?.error);
          setLoading(false);
          return;
        }

        if (callback?.ok && !callback?.error) {
          toast.success("Login successful");
          setLoading(false);
          router.push("/");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  return (
    <>
      <div className="mb-10 text-center mx-auto inline-block max-w-[160px]">
        <Logo />
      </div>

      <SocialSignIn />

      <span className="z-1 relative my-8 block text-center before:content-[''] before:absolute before:h-px before:w-40% before:bg-dark_border before:bg-opacity-60 before:left-0 before:top-3 after:content-[''] after:absolute after:h-px after:w-40% after:bg-dark_border after:bg-opacity-60 after:top-3 after:right-0">
        <span className="text-body-secondary relative z-10 inline-block px-3 text-base text-primary">
          veya
        </span>
      </span>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-[22px]">
          <input
            type="email"
            placeholder="E-posta"
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            className="w-full rounded-md border px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey text-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="password"
            placeholder="Şifre"
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            className="w-full rounded-md border px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey text-primary"
          />
        </div>
        <div className="mb-9">
          <button
            onClick={loginUser}
            type="submit"
            className="bg-primary w-full py-3 rounded-lg text-18 font-medium text-white hover:scale-95 duration-300"
          >
            Giriş Yap {loading && <Loader />}
          </button>
        </div>
      </form>

      <Link
        href="/forgot-password"
        className="mb-2 inline-block text-base text-primary"
      >
        Şifrenizi mi unuttunuz?
      </Link>
      <p className="text-body-secondary text-primary/80 text-base">
        Hesabınız yok mu ?{" "}
        <Link href="/" className="text-primary hover:underline">
          Kayıt Ol
        </Link>
      </p>
    </>
  );
};

export default Signin;
