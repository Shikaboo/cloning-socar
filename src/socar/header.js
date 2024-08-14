import Nav from "./nav";

let header = () => {
  let headImg = `${process.env.PUBLIC_URL}/assets/main_visual_fullscreen.jpg`;
  return (
    <>
      <header className="w100">
        <Nav />
        <div className="main_txt">
          <p>
            차가 필요한
            <br />
            모든 순간, 쏘카
          </p>
        </div>
        <img className="main_visual" src={headImg}></img>
      </header>
    </>
  );
};

export default header;
