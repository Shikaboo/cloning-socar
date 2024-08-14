const list = ({list})=>{
    return(
        <ul id={list.cla}>
            <li>
                <a href="/">
                    {list.cont1}
                    <img src={list.img1} />
                </a>
            </li>
            <li>
                <a href="/">
                    {list.cont2}
                    <img src={list.img2} />
                </a>
            </li>
            <li>
                <a href="/">
                    {list.cont3}
                    <img src={list.img3} />
                </a>
            </li>
            <li>
                <a href="/">
                    {list.cont4}
                    <img src={list.img4} />
                </a>
            </li>
            <li>
                <a href="/">
                    {list.cont5}
                </a>
            </li>
            <li>
                <a href="/">
                    {list.cont6}
                </a>
            </li>
            <li>
                <a href="/">
                    {list.cont7}
                </a>
            </li>
            <li>
                <a href="/">
                    {list.cont8}
                </a>
            </li>
        </ul>
    )
}

export default list;