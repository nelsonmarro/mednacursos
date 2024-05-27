"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";

import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

import LanguageAcademy from "@/components/08-language-academy/LanguageAcademy";
import HeaderStyleEight from "@/components/Header/HeaderStyle-Eight";
import FooterOne from "@/components/Footer/Footer-One";

const LanguageAcademyPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleEight headerSticky="rbt-sticky" />
          <Cart />

          <LanguageAcademy />

          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default LanguageAcademyPage;
