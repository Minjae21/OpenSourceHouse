
function Header() {
    return(
        <header>
            <nav>
                <div className="nav-item">
                <ul>
                    <li><a href = "/home" className="text-sm font-semibold leading-6 text-white-900">Home</a></li>
                    <li><a href = "/project" className="text-sm font-semibold leading-6 text-white-900">Projects</a></li>
                    <li><a href = "/post" className="text-sm font-semibold leading-6 text-white-900">Post</a></li>
                    <li><a href="/login" className="text-sm font-semibold leading-6 text-white-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a></li>
                </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;