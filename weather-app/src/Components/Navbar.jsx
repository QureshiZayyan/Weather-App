export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black overflow-hidden">
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-bolder" href="#" id="reload">Get Weather</a>
          <form className="d-flex justify-content-end form" role="search">
            <input className="form-control me-1 w-50" type="search" placeholder="Search" aria-label="Search" id="input" />
            <button className="btn text-white btn-outline-light bg-black" id="btn" type="submit">Search</button>
          </form>
        </div>
      </nav >
    </>
  )
}