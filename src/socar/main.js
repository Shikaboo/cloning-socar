import Section from "./section";
import Section2 from "./section2";

let main = ({ mainSecLists }) => {
  return (
    <>
      <main className="w100 main">
        {mainSecLists.map((mainSecList) => (
          <Section
            key={mainSecList.id}
            tit={mainSecList.tit}
            txt={mainSecList.txt}
            txt2={mainSecList.txt2}
            txt3={mainSecList.txt3}
            img={mainSecList.img}
            sec={mainSecList.sec}
          />
        ))}
      </main>
      <Section2 />
    </>
  );
};

export default main;
