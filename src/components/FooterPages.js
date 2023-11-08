import React from 'react'

const FooterPages = () => {
  return (
    <div>
      
      <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo eget justo vel maximus.</p>
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Facebook</a></li>
              <li><a href="#" className="text-light">Twitter</a></li>
              <li><a href="#" className="text-light">Instagram</a></li>
            </ul>
          </div>
        </div>
        <hr className="bg-light" />
        <p className="text-center">&copy; {new Date().getFullYear()}HealthMeu</p>
      </div>
    </footer>
    </div>
  )
}

export default FooterPages
