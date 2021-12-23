import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import VKOpenApi from "../vk/VKOpenApi";
import VKUser from "../vk/VKUser";
import "./VKAuthModal.css";

export interface HeaderProps {
  show: boolean;
  handleClose: () => void;
  handleUser: (user: VKUser) => void;
}

export default function VKAuthModal({
  show,
  handleClose,
  handleUser,
}: HeaderProps) {
  useEffect(() => {
    if (show) {
      const VK: VKOpenApi | undefined = (window as any).VK;

      if (VK !== undefined && process.env.REACT_APP_VK_APP_ID) {
        VK.init({
          apiId: Number.parseInt(process.env.REACT_APP_VK_APP_ID),
        });
        VK.Widgets.Auth("VKAuth", {
          onAuth: (user: VKUser) => {
            user.photo = user.photo.replaceAll("&amp;", "&");
            user.photo_rec = user.photo_rec.replaceAll("&amp;", "&");
            handleUser(user);
            handleClose();
          },
        });
      }
    }
  }, [show, handleUser, handleClose]);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="justify-content-center"
      contentClassName="auth-modal"
    >
      <Modal.Body>
        <div id="VKAuth"></div>
      </Modal.Body>
    </Modal>
  );
}
