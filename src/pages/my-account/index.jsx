import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEyeSlash,
  faEye,
  faCheck,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import DEFAULT_PROFILE_PIC from "../../constants";

import ReactivateAccountModal from "../../modals/reactivate-account";
import DisableAccountModal from "../../modals/disable-account";
import DeleteBookModal from "../../modals/delete-book";
import AddBookModal from "../../modals/add-book";
import ModifyAccountModal from "../../modals/modify-account";
import ModifyPasswordModal from "../../modals/modify-password";

import Loader from "../../components/loader";

import "./styles.scss";

const username = localStorage.getItem("username") || "";
const token = localStorage.getItem("token") || "";
const isAuthenticated = localStorage.getItem("isAuthenticated") || false;

function MyAccountPage() {
  const [disableUserIsOpen, setDisableUserIsOpen] = useState(false);
  const [addBookIsOpen, setAddBookIsOpen] = useState(false);
  const [deleteBookIsOpen, setDeleteBookIsOpen] = useState(false);
  const [modifyDataIsOpen, setModifyDataIsOpen] = useState(false);
  const [modifPasswordIsOpen, setModifyPasswordIsOpen] = useState(false);
  const [pageIsLoading, setPageIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  const getProfileData = async () => {
    const requestOptions = {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await fetch(
        `http://localhost:8080/user/userName/${username}/`,
        requestOptions
      );

      if (response.status !== 200) {
        setPageIsLoading(false);
        return;
      }

      const { email, name, picture, userName, status } = await response.json();

      setUserInfo({ email, name, picture, username: userName, status });
      setPageIsLoading(false);
    } catch (err) {
      console.error("No s'ha pogut connectar amb l'API. Intenta-ho més tard.");
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  if (!isAuthenticated) {
    window.location.href = "/login";
    return;
  }

  if (pageIsLoading) {
    return (
      <div className="my-account">
        <Loader />
      </div>
    );
  }

  if (!userInfo.status) {
    return <ReactivateAccountModal isOpen={true}></ReactivateAccountModal>;
  }

  return (
    <div className="my-account">
      <DisableAccountModal
        isOpen={disableUserIsOpen}
        onRequestClose={() => setDisableUserIsOpen(false)}
        closeTimeoutMS={200}
      ></DisableAccountModal>

      <DeleteBookModal
        isOpen={deleteBookIsOpen}
        onRequestClose={() => setDeleteBookIsOpen(false)}
        closeTimeoutMS={200}
      ></DeleteBookModal>

      <AddBookModal
        isOpen={addBookIsOpen}
        onRequestClose={() => setAddBookIsOpen(false)}
        closeTimeoutMS={200}
      ></AddBookModal>

      <ModifyAccountModal
        userInfo={userInfo}
        isOpen={modifyDataIsOpen}
        onRequestClose={() => setModifyDataIsOpen(false)}
        closeTimeoutMS={200}
      ></ModifyAccountModal>

      <ModifyPasswordModal
        isOpen={modifPasswordIsOpen}
        onRequestClose={() => setModifyPasswordIsOpen(false)}
        closeTimeoutMS={200}
      ></ModifyPasswordModal>

      <div className="my-account__header">
        <div
          className="my-account__header__profile-pic"
          style={{
            backgroundImage: `url("${
              userInfo.picture ? userInfo.picture : DEFAULT_PROFILE_PIC
            }")`,
          }}
        ></div>
      </div>

      <div className="my-account__content">
        <div className="my-account__content__books">
          <div className="my-account__content__books__head">
            <div className="my-account__content__books__head__title">
              Col·lecció
            </div>
            <div
              className="my-account__content__books__head__add-book"
              onClick={() => setAddBookIsOpen(true)}
            >
              Afegir llibre
            </div>
          </div>
          <div className="my-account__content__books__subtitle">
            Llibres públics
          </div>
          Sense llibres
          <div className="my-account__content__books__subtitle">
            Llibres ocults
          </div>
          Sense llibres
        </div>

        <div className="my-account__content__personal-information">
          <div className="my-account__content__personal-information__head">
            <div className="my-account__content__personal-information__head__title">
              Dades personals
            </div>
            <div
              className="my-account__content__personal-information__head__edit"
              onClick={() => setModifyDataIsOpen(true)}
            >
              Modificar
            </div>
          </div>
          <div className="my-account__content__personal-information__data">
            <span className="my-account__content__personal-information__data__title">
              Nom i Cognoms:
            </span>
            <span className="my-account__content__personal-information__data__value">
              {userInfo.name}
            </span>
          </div>
          <div className="my-account__content__personal-information__data">
            <span className="my-account__content__personal-information__data__title">
              Usuari:
            </span>
            <span className="my-account__content__personal-information__data__value">
              {userInfo.username}
            </span>
          </div>
          <div className="my-account__content__personal-information__data">
            <span className="my-account__content__personal-information__data__title">
              Correu:
            </span>
            <span className="my-account__content__personal-information__data__value">
              {userInfo.email}
            </span>
          </div>

          <div className="my-account__content__personal-information__actions">
            <span
              className="my-account__content__personal-information__actions__change-pwd"
              onClick={() => setModifyPasswordIsOpen(true)}
            >
              Canviar clau
            </span>
            <span
              className="my-account__content__personal-information__actions__delete-user"
              onClick={() => setDisableUserIsOpen(true)}
            >
              Desactivar compte
            </span>
          </div>
        </div>

        {/* <div className="my-account__content__stats">
          <div className="my-account__content__stats__head">
            <div className="my-account__content__stats__head__title">
              Estadístiques
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default MyAccountPage;
