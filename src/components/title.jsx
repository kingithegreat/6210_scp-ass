import '../styles/Header.css';

function Header() {
    return (
        // Main header container with Bootstrap class for styling
        <header className="container">
            {/* Title with centered text */}
            <h1 id="title" className="text-center">SCP Records</h1>
        </header>
    );
}

export default Header;
