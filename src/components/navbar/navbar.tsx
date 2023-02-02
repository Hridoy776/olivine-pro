import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { signOut } from "firebase/auth";
import auth from "firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { type } from "os";

type Props = {};

type NavbarStyles = {
  position: string | number;
  height: string | number;
  width: string | number;
  paddingTop: string | number;
};

const Navbar = (props: Props) => {
  const [colorChange, setColorchange] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [user, loading] = useAuthState(auth);

  const navbarStyles: NavbarStyles = {
    position: "fixed",
    height: "100px",
    width: "100%",
    paddingTop: "10px",
  };

  function debounce<T extends (...args: any[]) => void>({
    func,
    wait,
    immediate,
  }: {
    func: T;
    wait: number;
    immediate?: boolean;
  }): <U>(this: U, ...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout> | null;
    return function <U>(this: U, ...args: Parameters<typeof func>) {
      var context = this;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      if (typeof timeout === "number") {
        clearTimeout(timeout);
      }
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const handleScroll = debounce({
    func: () => {
      // find current scroll position
      const currentScrollPos = window.pageYOffset;

      // set state based on location info (explained in more detail below)
      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );

      // set state to new scroll position
      setPrevScrollPos(currentScrollPos);
    },
    wait: 100,
  });
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavbarColor);
  }

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <nav
      style={{
        position: "fixed",
        height: "100px",
        width: "100%",
        paddingTop: "10px",
        top: visible ? "0" : "-100px",
      }}
      className={
        colorChange
          ? "h-20 py-auto fixed w-full z-[100] px-[20px]  lg:px-[100px] text-white font-medium uppercase bg-black shadow-xl duration-700"
          : "h-20 font-medium uppercase py-auto fixed w-full z-[100]  lg:px-[100px] px-[20px] text-gray "
      }
    >
      <div className="flex my-5 justify-between items-center ">
        <div className="flex justify-start">
          <p className="text-3xl tracking-widest text-primary">olivin</p>
        </div>
        <ul className="hidden lg:flex  text-xl justify-center items-center">
          <li className="mr-4">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-4">
            <Link href="/about">about</Link>
          </li>
          <li className="mr-4">
            <Link href={"/product"}>product</Link>
          </li>
          <li className="mr-4">
            <Link href={"/shop"}>shop</Link>
          </li>
          <li className="mr-4">
            <Link href={"/food"}>food</Link>
          </li>
          {!user && (
            <li className="mr-4">
              <Link href={"/login"}>login</Link>
            </li>
          )}
          {user && (
            <button onClick={handleSignOut} className="uppercase">
              signout
            </button>
          )}
        </ul>
        <div className="hidden lg:flex ">
          <p>
            {" "}
            <FaFacebook className="text-2xl" />
          </p>
          <p>
            <FaInstagram className="text-2xl ml-4" />
          </p>
          <p>
            <FaLinkedin className="text-2xl ml-4" />
          </p>
          <p>
            <FaTwitter className="text-2xl ml-4" />
          </p>
        </div>
        <div className="lg:hidden">
          <HiMenuAlt4 className="text-3xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
