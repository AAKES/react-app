import React from 'react';
import './Footer.css';
const Footer = ()=> {
  return <div>
      <div className="main-footer">
          <div className="container">
              <div className="row">
                  {/* column1 */}
                  <div className="col">
                      <h4>footer meroDokan</h4>
                    <ul className="list-style">
                        <li>CONTACT US</li>
                        <li>pokhara,Nepal</li>
                        <li>built in group</li>
                        <li>paschimanchal campus</li>
                    </ul>
                    </div>
                    {/* column2 */}
                    <div className="col">
                        <h4>Developer</h4>
                        <ul className="list-style">
                            <li>Bishal</li>
                            <li>Aasish</li>
                            <li>Bibek</li>
                            <li>Aakesh</li>
                        </ul>
                    </div>
                    {/* column3 */}
                    <div className="col">
                        <h4>Contact</h4>
                        <ul className="list-style">
                            <li>mail</li>
                            <li>Phone number</li>
                            <li>Message </li>                        </ul>
                    </div>
                 
              </div>
          </div>
          <p>This is the first site of mero dokan</p>
      </div>
  </div>;

}

export default Footer;
