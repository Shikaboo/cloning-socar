import List from "./list";

let footer = ({lists})=>{
    return(
        <footer className="w100">
            <section>
                {lists.map((list)=>
                    <List
                        list = {list}
                        key = {list.id}
                    />
                )}
                <div className="botInfo">
                    <p>
                        (주)쏘카 통신판매업 <a href="/"> 사업자정보 확인</a>
                    </p>
                    <p>
                        신고: 제 2019-제주오라-3호, 사업자등록번호: 616-81-90529, 대표자: 박재욱
                    </p>
                    <address>
                        © 2024 SOCAR All rights reserved.
                    </address>
                </div>
            </section>
        </footer>
    )
}

export default footer;