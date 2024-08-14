const section = ({tit, txt, txt2, txt3, img, sec})=>{
    return(
        <section className={sec}>
            <article>
                <h2>{tit}</h2>
                <p>{txt}</p>
                <p>{txt2}</p>
                <p>{txt3}</p>
            </article>
            <div>
                <img src={img}></img>
            </div>
        </section>
    )
}

export default section