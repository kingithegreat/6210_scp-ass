function Footer() {
  // Get the current year
  const year = new Date().getFullYear();

  return (
    <footer className="footer text-white text-center py-3">
      <div className="container">
        <div className="row">
          {/* Column for the footer image */}
          <div className="col-md-2">
            <img src="./src/assets/footerImage2.jpg" alt="Footer Image" style={{ height: '80px' }} className="mb-2" />
          </div>
          {/* Column for the footer text and social icons */}
          <div className="col-md-8">
            {/* Display the current year and copyright text */}
            <p>© {year} SCP Foundation. All rights reserved.</p>
            {/* Social media icons */}
            <div className="social-icons">
              <a href="https://www.facebook.com" className="text-white me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com" className="text-white me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com" className="text-white me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" className="text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            {/* Link to the SCP Foundation website */}
            <p>
              <a href="https://scp-wiki.wikidot.com/" className="text-white">SCP Foundation</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
