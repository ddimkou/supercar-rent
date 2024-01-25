const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Explore</h4>
        <ul>
          <li>Home</li>
          <li>Supercars</li>
          <li>Pricing</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Services</h4>
        <ul>
          <li>Reservations</li>
          <li>FAQs</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>

      <div className="footer-contact">
        <h4>Contact Us</h4>
        <p>
          <span>Address:</span> Saint Street 99B, 12345
          <br />
          <span>Phone:</span> +99 123 456 7890
          <br />
          <span>Email:</span> info@johnDoe.com
        </p>
      </div>
      <div className="footer-support">
        <h4>Customer Support</h4>
        <ul>
          <li>Help Center</li>
          <li>Rental Requirements</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
