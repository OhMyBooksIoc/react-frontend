import { useState, useEffect } from "react";

import { DEFAULT_PROFILE_PIC } from "../../constants";

import Loader from "../../components/loader";
import BookCard from "../../components/book";

import "./styles.scss";

const username = localStorage.getItem("username") || "";
const token = localStorage.getItem("token") || "";
const isAuthenticated = localStorage.getItem("isAuthenticated") || false;

function TradeBooksPage() {
  const [pageIsLoading, setPageIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [tradeBooks, setTradeBooks] = useState([]);

  const getProfileData = async () => {
    const requestOptions = {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/user/userName/${username}/`,
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

  const getUserBooks = async () => {
    const requestOptions = {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/userBook/user/`,
        requestOptions
      );

      if (response.status !== 200) {
        setPageIsLoading(false);
        return;
      }

      const allBooks = await response.json();
      setTradeBooks(allBooks.filter((book) => book.trade));
      setPageIsLoading(false);
    } catch (err) {
      console.error("No s'ha pogut connectar amb l'API. Intenta-ho més tard.");
    }
  };

  const getMyAccountData = async () => {
    await getProfileData();
    await getUserBooks();
  };

  useEffect(() => {
    getMyAccountData();
  }, []);

  if (!isAuthenticated) {
    window.location.href = "/login";
    return;
  }

  if (pageIsLoading) {
    return (
      <div className="trade-books">
        <Loader />
      </div>
    );
  }

  return (
    <div className="trade-books">
      <div className="trade-books__header">
        <div
          className="trade-books__header__profile-pic"
          style={{
            backgroundImage: `url("${
              userInfo.picture ? userInfo.picture : DEFAULT_PROFILE_PIC
            }")`,
          }}
        ></div>
      </div>

      <div className="trade-books__content">
        <div className="trade-books__content__books">
          <div className="trade-books__content__books__head">
            <div className="trade-books__content__books__head__title">
              Llibres per intercanviar
            </div>
          </div>
          <div className="trade-books__content__books__list">
            {!tradeBooks.length && (
              <span className="trade-books__content__books__list__empty">
                Actualment no tens cap llibre per intercanviar.
              </span>
            )}
            {tradeBooks.map((book) => (
              <BookCard actualBook={book} key={book.book.id} page="trade-books" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradeBooksPage;
