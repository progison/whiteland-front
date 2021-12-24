import React from "react";
// import { faVk } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import VKUser from "../vk/VKUser";
import "./Header.css";

export interface HeaderProps {
  user: VKUser | undefined;
  VKLogin: () => void;
}

export default function Header({ user, VKLogin }: HeaderProps) {
  return (
    <Navbar collapseOnSelect expand="sm" variant="dark">
      <Container className="navbar-container">
        <Navbar.Brand href="/">WhiteLand</Navbar.Brand>
        <Navbar.Collapse id="responsiveNavbar">
          <Nav>
            <NavLink className="nav-link" to="/">
              Главная
            </NavLink>
            <NavLink className="nav-link" to="/staff">
              Персонал
            </NavLink>
            <NavLink className="nav-link" to="/rules">
              Правила
            </NavLink>
            <Nav.Link href="https://vk.com/whiteland_mc">Группа ВК</Nav.Link>
            <Nav.Link href="#">Корзина</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text>
          {user ? (
            <>
              <img
                alt="User avatar"
                src={user.photo_rec}
                width="30"
                height="30"
                className="align-bottom rounded-circle"
              />{" "}
              0
            </>
          ) : (
            <Button
              variant="light"
              onClick={() => {
                VKLogin();
              }}
            >
              Авторизация
            </Button>
          )}
        </Navbar.Text>
        <Navbar.Toggle aria-controls="responsiveNavbar" />
      </Container>
    </Navbar>
  );
}
