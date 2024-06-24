"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import User from "../Offcanvas/User";
import { useAppContext } from "@/context/Context";
import { signIn, signOut, useSession } from "next-auth/react";

interface Props {
  btnClass: string;
  btnText: string;
  userType: string;
}

const HeaderRightTwo = ({ btnClass, btnText, userType }: Props) => {
  const { mobile, setMobile, search, setSearch, cartToggle, setCart } =
    useAppContext();

  const { total_items } = useSelector((state: any) => state.CartReducer);
  const { data: session, status } = useSession();

  return (
    <div className="header-right">
      <ul className="quick-access">
        <li className="access-icon">
          <Link
            className={`search-trigger-active rbt-round-btn ${
              search ? "" : "open"
            }`}
            href="#"
            onClick={() => setSearch(!search)}
          >
            <i className="feather-search"></i>
          </Link>
        </li>

        <li className="access-icon rbt-mini-cart">
          <Link
            className="rbt-cart-sidenav-activation rbt-round-btn"
            href="#"
            onClick={() => setCart(!cartToggle)}
          >
            <i className="feather-shopping-cart"></i>
            <span className="rbt-cart-count">{total_items}</span>
          </Link>
        </li>

        {session && (
          <>
            <li className="account-access rbt-user-wrapper d-none d-xl-block">
              <Link href="#">
                <i className="feather-user"></i>
                {userType}
              </Link>
              <User userName={session?.user?.name ?? "Usuario"} />
            </li>

            <li className="access-icon rbt-user-wrapper d-block d-xl-none">
              <Link className="rbt-round-btn" href="#">
                <i className="feather-user"></i>
              </Link>
              <User userName={session?.user?.name ?? "Usuario"} />
            </li>
          </>
        )}
      </ul>

      <div
        className={`${!session ? "ms-md-5" : ""} rbt-btn-wrapper d-none d-xl-block`}
      >
        {!session ? (
          <button
            className={`rbt-btn ${btnClass}`}
            type="button"
            onClick={() => signIn("auth0")}
          >
            Iniciar Sesión
          </button>
        ) : (
          <button className={`rbt-btn ${btnClass}`} type="button">
            Empieza a Aprender
          </button>
        )}
      </div>

      <div className="mobile-menu-bar d-block d-xl-none">
        <div className="hamberger">
          <button
            className="hamberger-button rbt-round-btn"
            onClick={() => setMobile(!mobile)}
          >
            <i className="feather-menu"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderRightTwo;
