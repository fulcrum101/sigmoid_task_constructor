import Link from 'next/link'

export default  function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Sigmoid task constructor</a>
                    <button className="navbar-toggler" type="button" data-bs-target="#Navbar" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="Navbar">
                        <div className="navbar-nav">
                            <a className="nav-link" href="/my_tasks">My tasks</a>
                            <a className="btn btn-sm btn-outline-secondary" type="button" aria-pressed="true" href="/new_task">New task</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}