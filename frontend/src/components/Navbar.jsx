export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <a className="navbar-brand" href="#">OptraEth</a>
                    <ul className="navbar-nav d-flex flex-row ms-4 gap-3">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <appkit-button className="btn btn-sm"></appkit-button>
            </div>
        </nav>
    );
}
