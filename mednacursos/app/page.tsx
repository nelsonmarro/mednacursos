import BackToTop from "./backToTop";
import HomePage from "./home/page";
import React from "react";

export const metadata = {
  title:
    "Desarrolla Conocimientos Médicos con MEDNA WEB | Estudia Inteligentemente",
  description:
    "MEDNA WEB es tu plataforma de estudio dedicada a que crezcas y desarrolles habilidades y conocimientos médicos. Obtén la máxima calificación en tus exámenes de medicina y postgrado con nuestros cursos online especializados. Estudia inteligentemente con MEDNA WEB.",
};

export default function Home() {
  return (
    <main>
      <HomePage />

      <BackToTop />
    </main>
  );
}
