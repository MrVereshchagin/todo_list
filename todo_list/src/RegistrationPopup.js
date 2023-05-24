import React, { useState } from "react";
import "./RegistrationPopup.css";

const RegistrationPopup = () => {
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
  
      // Ваш код для обработки регистрации
      // Здесь вы можете отправить данные на бэкэнд и выполнить логику регистрации
  
      // Очистка полей после отправки
      setEmail("");
      setPassword("");
    };
  
    return (
      <div className="registration-popup">
        <h2>Регистрация</h2>
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
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    );
  };

export default RegistrationPopup;
