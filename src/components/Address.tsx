import Footer from "./Footer"
import "../styles/address.css"

const Address = () => {
    return (
      <div className="container">
        <div className="content">
          <h1 className="title">Можете найти нас здесь:</h1>
          <div className="address">
            <p>вул. Полтавський Шлях, 58, Харків</p>
            <p>вулиця Пушкінська, 37, Харків</p>
            <p>проспект Науки, 9б, Харків</p>
            <p>вулиця Суздальські Ряди, 9, Харків</p>
            <p>площа Павлівська, 6, Харків</p>
          </div>
        </div>
        <div className="content1">
          <div className="tel">
            <h1>Телефоны:</h1>
            <a className="tel1" href="tel: +380506044790">+ (380) 506-044-790</a>
            <a className="tel1" href="tel: +380663279878">+ (380) 663-279-878</a>
            <a className="tel1" href="tel: +0663279878">+ (380) 660-295-627</a>
          </div>
          <div className="email">
            <h1>Email:</h1>
            <a className="tel1" href="mailto: example@mail.ru">store@gmail.com</a>
            <a className="tel1" href="mailto: example@mail.ru">store1@gmail.com</a>
          </div>
        </div>
      </div>
    )
}

export default Address