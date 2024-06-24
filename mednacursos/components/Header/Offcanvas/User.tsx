import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  image?: string;
  userName: string;
}

const User = ({ image, userName }: Props) => {
  return (
    <>
      <div className="rbt-user-menu-list-wrapper">
        <div className="inner">
          <div className="rbt-admin-profile">
            <div className="admin-thumbnail">
              <Image
                src={
                  image ??
                  "https://www.avatarsinpixels.com/minipix/eyJCYWNrZ3JvdW5kIjoiMyIsIldpbmdzIjoiNiIsIkV5ZXMiOiI0IiwiTW91dGgiOiI0IiwiU2hvZXMiOiIxIiwiUGFudHMiOiIxIiwiVG9wIjoiMTUiLCJIYWlyIjoiMTMiLCJleWVzVG9uZSI6ImEwNDAwMCIsIm1hc2tUb25lIjoiYTA0MDAwIiwiaGFpclRvbmUiOiJiNTcwMGUiLCJwYW50c1RvbmUiOiIzMzMzMzMiLCJwYW50c1RvbmUyIjoiYzUwMGVmIiwidG9wVG9uZSI6IjMzMzMzMyIsInRvcFRvbmUyIjoiZDczNzM3Iiwid2luZ3NUb25lIjoiZjYxMDEwIiwid2luZ3NUb25lMiI6IjMzMzMzMyIsInNob2VzVG9uZSI6IjMzMzMzMyJ9/1/show.png"
                }
                width={43}
                height={43}
                alt="User Images"
              />
            </div>
            <div className="admin-info">
              <span className="name">{userName}</span>
              <Link
                className="rbt-btn-link color-primary"
                href="/instructor/instructor-profile"
              >
                Ver Perfil
              </Link>
            </div>
          </div>
          <ul className="user-list-wrapper">
            <li>
              <Link href="/management/dashboard">
                <i className="feather-home"></i>
                <span>Dashboard</span>
              </Link>
            </li>
          </ul>
          <hr className="mt--10 mb--10" />
          <ul className="user-list-wrapper">
            <li>
              <Link href="#">
                <i className="feather-dollar-sign"></i>
                <span>Historial de Compras</span>
              </Link>
            </li>
          </ul>
          <hr className="mt--10 mb--10" />
          <ul className="user-list-wrapper">
            <li>
              <Link href="/instructor/instructor-settings">
                <i className="feather-settings"></i>
                <span>Opciones de Cuenta</span>
              </Link>
            </li>
            <li>
              <Link href={"#"} onClick={() => signOut()}>
                <i className="feather-log-out"></i>
                <span>Cerrar Sessión</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default User;
