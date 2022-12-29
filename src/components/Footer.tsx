import "../styles/footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="fLists">
            <ul className="fList">
                <li className="fListItem">Страны</li>
                <li className="fListItem">Города</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Служба поддержки</li>
                <li className="fListItem">Центр помощи партнерам</li>
                <li className="fListItem">Careers</li>
                <li className="fListItem">Правила и условия</li>
                <li className="fListItem">Как мы работаем</li>
                <li className="fListItem">Корпоративные контакты</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Отзывы</li>
            </ul>
        </div>
        <div className="fText">Copyright © 1996–2022™. Все права защищены.</div>
    </div>
  )
}

export default Footer