import React, { useState } from "react";
import "./LoginPopup.css";

const LoginPopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Ваш код для обработки авторизации
    // Здесь вы можете отправить данные на бэкэнд и выполнить логику авторизации

    // Очистка полей после отправки
    setEmail("");
    setPassword("");

    // Закрытие попапа после успешной авторизации
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="login-popup">
      <h2>Авторизация</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Пароль:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginPopup;
