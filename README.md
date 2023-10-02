<h1 align="center">Учебный frontend-проект: "Место"</h1>

<div align="center">
    <img src="https://user-images.githubusercontent.com/108838349/212987501-fb372d45-e9c6-43c6-8f18-7cb212535021.gif" width="550" alt="Гиф с демонстрацией функционала приложения">
 </div>

<a name="summary">
<details>
  <summary>Оглавление</summary>
  <ol>
    <li><a href="#project-description">Описание проекта</a></li>
    <li><a href="#technologies">Стек технологий</a></li>
    <li><a href="#installation">Установка и запуск приложения в локальном репозитории</a></li>
    <li><a href="#establishing">Процесс создания</a></li>
    <ul>
      <li><a href="#tasks-and-problems">Основные задачи, проблемы и их решение</a></li>
    </ul>
    <li><a href="#functionality">Функционал</a></li>
    <li><a href="#enhancement">Планы по улучшению</a></li>
  </ol>
</details>
</a>

<a name="project-description"><h2>1. Описание проекта</h2></a>
Данная проектная работа выполнена в рамках образовательной программы <a href="https://practicum.yandex.ru/">Яндекс Практикума</a>. Проект представляет собой портирование на "React" адаптивного приложения с профилем пользователя и фотокарточками, <a href="https://github.com/Are-new-ta/mesto">изначально написанного</a> на нативных технологиях: HTML5, CSS3 и JavaScript. Он похож по своему типу и функционалу на популярные соцсети: Instagram, Facebook, VKontakte, - расширенному <a href="https://github.com/Are-new-ta/react-mesto-auth">в следующей учебной работе</a> добавлением формы регистрации и авторизации пользователей

<h4>Ссылка на макеты:
<br>
https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1
https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1
https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?node-id=0%3A1
https://www.figma.com/file/PSdQFRHoxXJFs2FH8IXViF/JavaScript-9-sprint?node-id=0%3A1
<br>
<br>
Ссылка на проект: https://github.com/are-new-ta/mesto-react</h4>
<i>* - проект прошел обязательное код-ревью</i>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="technologies"><h2>2. Стек технологий</h2></a>
<span>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="Иконка React">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="Иконка CSS3">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="Иконка HTML5">
</span>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="installation"><h2>3. Установка и запуск приложения в локальном репозитории</h2></a>
1. `git clone https://github.com/Are-new-ta/mesto-react` - клонировать репозиторий (с использованием HTTPS) на свое устройство
2. `npm i` - установить зависимости
3. `npm run start` - запустить приложение в режиме разработчика (в браузере ввести ссылку `http://localhost:3000/`, если приложение не открылось там автоматически)

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="establishing"><h2>4. Процесс создания</h2></a>
Работа разделена на <b>2</b> этапа:
1. Портирование  HTML-разметки, CSS-стилей, реализация открытия и закрытия 5 модальных окон (<a href="https://github.com/Are-new-ta/mesto-react/blob/main/src/components/EditProfilePopup.js">EditProfilePopup</a>, <a href="https://github.com/Are-new-ta/mesto-react/blob/main/src/components/EditAvatarPopup.js">EditAvatarPopup</a>, <a href="https://github.com/Are-new-ta/mesto-react/blob/main/src/components/AddPlacePopup.js">AddPlacePopup</a>, <a href="https://github.com/Are-new-ta/mesto-react/blob/main/src/components/ConfirmationDeleteCardPopup.js">ConfirmCardDeletionPopup</a>, <a href="https://github.com/Are-new-ta/mesto-react/blob/main/src/components/ImagePopup.js">ImagePopup</a>), загрузка данных с сервера
2. Написание функционала с передачей данных на сервер (см.: <a href=#functionality>п. 5</a>)

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="functionality"><h2>5. Функционал</h2></a>
<details>
  <summary>Адаптивный интерфейс</summary>
    <img width="500" src="https://user-images.githubusercontent.com/108838349/217289303-fd836d5f-abf1-4d6a-8d7b-2b41f0c4734e.gif" alt="Гиф с демонстрацией адаптивного интерфейса">
 </details>

<details>
  <summary>Открытие и закрытие модальных окон (по кнопке, <b><i>оверлею</i></b> и <b><i>клавише "Escape"</i></b>)</summary>
    <img width="500" src="https://user-images.githubusercontent.com/108838349/217289368-df72dcca-e73c-4768-b33c-f66db4452bf7.gif" alt="Гиф с демонстрацией открытия и закрытия модального окна">
 </details>

<details>
  <summary>Модальное окно с увеличенной фотографией карточки</summary>
      <img width="500" src="https://user-images.githubusercontent.com/108838349/217289368-df72dcca-e73c-4768-b33c-f66db4452bf7.gif" alt="Гиф с демонстрацией модального окна с увеличенной фотографией карточки">
  </details>

<details>
  <summary>Редактирование данных пользователя</summary>
    <img width="500" src="https://user-images.githubusercontent.com/108838349/217289416-7c8d6ac5-cd93-4168-9050-8d45bf3d706c.gif" alt="Гиф с демонстрацией редактирования данных пользователя">
 </details>

<details>
  <summary>Обновление аватара</summary>
     <img width="500" src="https://user-images.githubusercontent.com/108838349/217289431-c797d287-496a-4f89-84b4-945472def51f.gif" alt="Гиф с демонстрацией обновления аватара пользователя">
</details>

<details>
  <summary>Добавление новой карточки</summary>
     <img width="500" src="https://user-images.githubusercontent.com/108838349/217289446-f6a99f25-4437-4c05-b79e-10da27638552.gif" alt="Гиф с демонстрацией добавления новой карточки">
</details>

<details>
  <summary>Добавление и снятие лайка (включая счетчик лайков)</summary>
     <img width="500" src="https://user-images.githubusercontent.com/108838349/217289475-13df3b35-8afb-4467-98c8-f0ee0db27206.gif" alt="Гиф с демонстрацией добавления и снятия лайка (включая счетчик лайков)">
 </details>

<details>
  <summary>Удаление карточки <b><i>с модальным окном подтверждения действия</i></b></summary>
      <img width="500" src="https://user-images.githubusercontent.com/108838349/217289535-07d5ea67-1ce2-4bff-b742-8d83932d2fae.gif" alt="Гиф с демонстрацией удаления карточки">
</details>

<details>
  <summary><b><i>Спиннеры загрузки</i></b></summary>
    <img width="500" src="https://user-images.githubusercontent.com/108838349/217289431-c797d287-496a-4f89-84b4-945472def51f.gif" alt="Гиф с демонстрацией спиннера загрузки на примере модального окна с обновлением аватара">
</details>

<details>
  <summary><b><i>Валидация форм</i></b></summary>
     <img width="500" src="https://user-images.githubusercontent.com/108838349/217289431-c797d287-496a-4f89-84b4-945472def51f.gif" alt="Гиф с демонстрацией валидации формы на примере модального окна с обновлением аватара">
</details>

<details>
  <summary><b><i>Окно предварительной загрузки страницы</i></b></summary>
     <img width="500" src="https://user-images.githubusercontent.com/108838349/217289596-e7de44b9-843b-4cda-8997-b4c103f8ea22.gif" alt="Гиф с демонстрацией окна предварительной загрузки страницы">
 </details>
<br>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>
