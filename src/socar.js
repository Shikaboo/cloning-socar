import './App.css';
import Header from './socar/header';
import Main from './socar/main';
import Footer from './socar/footer';

function App() {
  const mainSecLists = [
    {
      id : 1,
      tit : '24시간 언제나',
      txt : '한밤중이나 주말에도 스마트폰으로',
      txt2 : ' 시간에 구애받지 않고',
      txt3 : ' 쏘카와 함께 이동하세요.',
      img : `${process.env.PUBLIC_URL}/assets/usp_a.jpg`,
      sec : 'sec'
    },
    {
      id : 2,
      tit : '원하는 곳에서',
      txt : '내 주변 3분 거리 쏘카존에서',
      txt2 : ' 혹은 내가 있는 곳으로 쏘카를 불러',
      txt3 : ' 어디서나 편하게 출발하세요.',
      img : `${process.env.PUBLIC_URL}/assets/usp_b.jpg`,
      sec : 'sec'
    },
    {
      id : 3,
      tit : '필요한 시간만큼',
      txt : '간단한 장보기부터 주말여행까지',
      txt2 : ' 10분 단위로 원하는 만큼만 이용하세요.',
      img : `${process.env.PUBLIC_URL}/assets/usp_c.jpg`,
      sec : 'sec'
    },
    {
      id : 4,
      tit : '다양한 차종을',
      txt : '연인과의 드라이브부터 가족 캠핑까지',
      txt2 : ' 상황에 맞게 50여 종의 차량을',
      txt3 : ' 선택해서 이용하세요.',
      img : `${process.env.PUBLIC_URL}/assets/usp_d.jpg`,
      sec : 'sec'
    }
  ]

  const lists = [
    {
      id : 1,
      img1 : `${process.env.PUBLIC_URL}/assets/i-instagram.svg`,
      img2 : `${process.env.PUBLIC_URL}/assets/i-facebook.svg`,
      img3 : `${process.env.PUBLIC_URL}/assets/i-youtube.svg`,
      img4 : `${process.env.PUBLIC_URL}/assets/i-blog.svg`,
      cla : 'iconList'
    },
    {
      id : 2,
      cont1 : '회사소개',
      cont2 : '인재채용',
      cont3 : '이용약관',
      cont4 : '개인정보처리방침',
      cont5 : '위치정보 이용약관',
      cont6 : '차량손해면책제도',
      cont7 : '고객센터',
      cont8 : '제휴 문의',
      cla : 'infoList'
    },
    {
      id : 3,
      cont1 : '주소. 제주특별자치도 제주시 연미길 42 (오라삼동)',
      cont2 : '전화. 1661-3315',
      cont3 : '팩스. 02-6969-9333',
      cla : 'infoList2'
    }
  ]
  return (
    <div className="App">
        <div className='body_inner'>
          <Header />
          <Main mainSecLists = {mainSecLists}/>
        </div>
        <Footer lists = {lists}/>
    </div>
  );
}

export default App;
