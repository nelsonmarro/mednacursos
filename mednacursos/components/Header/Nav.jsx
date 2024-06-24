"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { useState } from "react";

import MenuData from "../../data/MegaMenu.json";

const Nav = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const pathname = usePathname();

  const isActive = (href) => pathname.startsWith(href);

  const toggleMenuItem = (item) => {
    setActiveMenuItem(activeMenuItem === item ? null : item);
  };

  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        <li>
          <Link
            className={`${activeMenuItem === "home" ? "active" : ""}`}
            href="/home"
            onClick={() => toggleMenuItem("home")}
          >
            Inicio
          </Link>
        </li>
        <li className="has-dropdown has-menu-child-item">
          <Link
            className={`${activeMenuItem === "dashboard" ? "open" : ""}`}
            href="#"
            onClick={() => toggleMenuItem("dashboard")}
          >
            Cursos
            <i className="feather-chevron-down"></i>
          </Link>
          <ul
            className={`submenu ${
              activeMenuItem === "dashboard" ? "active d-block" : ""
            }`}
          >
            {MenuData &&
              MenuData.menuData.map((data, index) => {
                if (data.menuType === "default-dropdown") {
                  const elements = data.menuItems?.map((value, innerIndex) => (
                    <li className="has-dropdown" key={innerIndex}>
                      <Link href="#">{value.title}</Link>
                      <ul className="submenu">
                        {value.submenuItems?.map(
                          (submenuItem, submenuItemIndex) => (
                            <li key={submenuItemIndex}>
                              <Link
                                className={
                                  isActive(submenuItem.link) ? "active" : ""
                                }
                                href={submenuItem.link}
                              >
                                {submenuItem.title}
                              </Link>
                            </li>
                          ),
                        )}
                      </ul>
                    </li>
                  ));
                  return elements;
                }
                return null;
              })}
          </ul>
        </li>
        <li className="has-dropdown has-menu-child-item">
          <Link
            className={`${activeMenuItem === "dashboard" ? "open" : ""}`}
            href="#"
            onClick={() => toggleMenuItem("dashboard")}
          >
            Administrar
            <i className="feather-chevron-down"></i>
          </Link>
          <ul
            className={`submenu ${
              activeMenuItem === "dashboard" ? "active d-block" : ""
            }`}
          >
            {MenuData &&
              MenuData.menuData.map((data, index) => {
                if (data.menuType === "default-dropdown") {
                  const elements = data.menuItems?.map((value, innerIndex) => (
                    <li className="has-dropdown" key={innerIndex}>
                      <Link href="#">{value.title}</Link>
                      <ul className="submenu">
                        {value.submenuItems?.map(
                          (submenuItem, submenuItemIndex) => (
                            <li key={submenuItemIndex}>
                              <Link
                                className={
                                  isActive(submenuItem.link) ? "active" : ""
                                }
                                href={submenuItem.link}
                              >
                                {submenuItem.title}
                              </Link>
                            </li>
                          ),
                        )}
                      </ul>
                    </li>
                  ));
                  return elements;
                }
                return null;
              })}
          </ul>
        </li>
        <li className="has-dropdown has-menu-child-item">
          <Link
            className={`${activeMenuItem === "dashboard" ? "open" : ""}`}
            href="#"
            onClick={() => toggleMenuItem("dashboard")}
          >
            Tienda
            <i className="feather-chevron-down"></i>
          </Link>
          <ul
            className={`submenu ${
              activeMenuItem === "dashboard" ? "active d-block" : ""
            }`}
          >
            {MenuData &&
              MenuData.menuData.map((data, index) => {
                if (data.menuType === "default-dropdown") {
                  const elements = data.menuItems?.map((value, innerIndex) => (
                    <li className="has-dropdown" key={innerIndex}>
                      <Link href="#">{value.title}</Link>
                      <ul className="submenu">
                        {value.submenuItems?.map(
                          (submenuItem, submenuItemIndex) => (
                            <li key={submenuItemIndex}>
                              <Link
                                className={
                                  isActive(submenuItem.link) ? "active" : ""
                                }
                                href={submenuItem.link}
                              >
                                {submenuItem.title}
                              </Link>
                            </li>
                          ),
                        )}
                      </ul>
                    </li>
                  ));
                  return elements;
                }
                return null;
              })}
          </ul>
        </li>
        <li className="has-dropdown has-menu-child-item">
          <Link
            className={`${activeMenuItem === "dashboard" ? "open" : ""}`}
            href="#"
            onClick={() => toggleMenuItem("dashboard")}
          >
            Blog
            <i className="feather-chevron-down"></i>
          </Link>
          <ul
            className={`submenu ${
              activeMenuItem === "dashboard" ? "active d-block" : ""
            }`}
          >
            {MenuData &&
              MenuData.menuData.map((data, index) => {
                if (data.menuType === "default-dropdown") {
                  const elements = data.menuItems?.map((value, innerIndex) => (
                    <li className="has-dropdown" key={innerIndex}>
                      <Link href="#">{value.title}</Link>
                      <ul className="submenu">
                        {value.submenuItems?.map(
                          (submenuItem, submenuItemIndex) => (
                            <li key={submenuItemIndex}>
                              <Link
                                className={
                                  isActive(submenuItem.link) ? "active" : ""
                                }
                                href={submenuItem.link}
                              >
                                {submenuItem.title}
                              </Link>
                            </li>
                          ),
                        )}
                      </ul>
                    </li>
                  ));
                  return elements;
                }
                return null;
              })}
          </ul>
        </li>
        <li className="has-dropdown has-menu-child-item">
          <Link
            className={`${activeMenuItem === "dashboard" ? "open" : ""}`}
            href="#"
            onClick={() => toggleMenuItem("dashboard")}
          >
            Foros
            <i className="feather-chevron-down"></i>
          </Link>
          <ul
            className={`submenu ${
              activeMenuItem === "dashboard" ? "active d-block" : ""
            }`}
          >
            {MenuData &&
              MenuData.menuData.map((data, index) => {
                if (data.menuType === "default-dropdown") {
                  const elements = data.menuItems?.map((value, innerIndex) => (
                    <li className="has-dropdown" key={innerIndex}>
                      <Link href="#">{value.title}</Link>
                      <ul className="submenu">
                        {value.submenuItems?.map(
                          (submenuItem, submenuItemIndex) => (
                            <li key={submenuItemIndex}>
                              <Link
                                className={
                                  isActive(submenuItem.link) ? "active" : ""
                                }
                                href={submenuItem.link}
                              >
                                {submenuItem.title}
                              </Link>
                            </li>
                          ),
                        )}
                      </ul>
                    </li>
                  ));
                  return elements;
                }
                return null;
              })}
          </ul>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
