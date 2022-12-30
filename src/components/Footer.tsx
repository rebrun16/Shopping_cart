import "../styles/footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <hr/>
        <div className="fLists">
            <ul className="fList">
                <h2>Shopping with JD</h2>
                <li className="fListItem">Size Guides</li>
                <li className="fListItem">Exclusions</li>
            </ul>
            <ul className="fList">
                <h2>Customer Care</h2>
                <li className="fListItem">Delivery & Returns</li>
                <li className="fListItem">Help</li>
                <li className="fListItem">Contact Us</li>
                <li className="fListItem">Track my Order</li>
                <li className="fListItem">Корпоративные контакты</li>
            </ul>
            <ul className="fList">
                <h2>Corporate</h2>
                <li className="fListItem">Careers</li>
                <li className="fListItem">Contact Us</li>
                <li className="fListItem">JD Sports Fashion Plc</li>
            </ul>
            <ul className="fList">
                <h2>Legal</h2>
                <li className="fListItem">Terms & Conditions</li>
                <li className="fListItem">Privacy & Cookies</li>
                <li className="fListItem">Accessibility</li>
                <li className="fListItem">Site Map</li>
                <li className="fListItem">Modaren Slavery Report</li>
            </ul>
        </div>
        <hr/>
        <div className="payments">
            <div>Copyright © 1996–2022™. Все права защищены.</div>
            <img  src="/public/imgs/payment.png" alt="payment"/>
        </div>
    </div>
  )
}

export default Footer