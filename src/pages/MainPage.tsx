import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./Page.css";

export interface MainPageProps {
  changePageName: (pageName: string) => void;
}

export default function MainPage({ changePageName }: MainPageProps) {
  useEffect(() => {
    changePageName("Магазин");
  }, [changePageName]);

  return (
    <>
      <Container fluid="md">
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
        <br />
        Главная
      </Container>
    </>
  );
}
