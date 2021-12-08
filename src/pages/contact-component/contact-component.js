import React from "react";

const ContactComponent = () => {
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <div class="contain">
        <div class="wrapper">
          <div class="form">
                      <h4>Зв'яжіться з нами</h4>
            <h2 class="form-headline">Напишіть своє повідомлення</h2>
            <form id="submit-form" action="">
              <p>
                <input
                  id="name"
                  class="form-input"
                  type="text"
                  placeholder="Ваше ім'я*"
                />
                <small class="name-error"></small>
              </p>
              <p>
                <input
                  id="email"
                  class="form-input"
                  type="email"
                  placeholder="Ваш Email*"
                />
                <small class="name-error"></small>
              </p>
              <p class="full-width">
                <input
                  id="company-name"
                  class="form-input"
                  type="text"
                  placeholder="Тема повідомлення*"
                  required
                />
                <small></small>
              </p>
              <p class="full-width">
                <textarea
                  minlength="20"
                  id="message"
                  cols="30"
                  rows="7"
                  placeholder="Ваше повідомлення*"
                  required
                ></textarea>
                <small></small>
              </p>
             
              <p class="full-width">
                <input
                  type="submit"
                  class="submit-btn"
                  value="Відправити"
                  onclick="checkValidations()"
                />
               
              </p>
            </form>
          </div>

          <div class="contacts contact-wrapper">
            <ul>
              <p>Ми дуже раді що ви з нами... Завдаки вам ми стаємо з кожнем днем кращими!</p>
              <span class="hightlight-contact-info">
                <li class="email-info">
                  <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
                  bookstore@melnyk.com
                </li>
                <li>
                  <i class="fa fa-phone" aria-hidden="true"></i>{" "}
                  <span class="highlight-text">+380664194305</span>
                </li>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
