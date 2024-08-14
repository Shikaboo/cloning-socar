const nav = ()=>{
    let headLogo = `${process.env.PUBLIC_URL}/assets/logo-w.svg`
    return (
      <nav className="head_inner">
        <div className="head_wrap">
          <a className="logo" href="/">
            <img src={headLogo}></img>
          </a>
          <div className="hamBtn">
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    );
}

export default nav