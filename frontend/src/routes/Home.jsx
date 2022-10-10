import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";

// const Header = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px;
//   background-color: var(--color-navy);
//   position: fixed;
//   width: 100%;
//   top: 0;
//   height: 70px;
// `;

const Home = () => {
  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:4000/topic/list");
        setTopicList(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
    {topicList.length > 0 ? (
        <>
         <header class="header">
         <h1 class="header__title"> <Link to="/">Code Review</Link></h1>
         <div class="header__search-container">
             <i class="fas fa-search"></i>
             <input type="text" placeholder="Search"/>
         </div>
         <ul class="header__sign-list">
             <li><Link to="/login">로그인</Link></li>
             <li><Link href="#">회원가입</Link></li>
         </ul>
     </header>
     <main class="main">
         <section class="topic-list">
             <div class="topic-item">
                 <h4 class="topic-item__title">전기차 배터리 프로젝트</h4>
                 <p class="topic-item__description">간단한 설명 / 간단한 설명 / 간단한 설명 / 간단한 설명</p>
                 <ul class="topic-item__hashtags">
                     <li>#스프링</li>
                     <li>#자바</li>
                     <li>#홀리쉿</li>
                 </ul>
                 <div class="topic-item__info">
                     <span>2022.01.09 09:00:55</span>
                     <span>등록자: 정준호</span>
                 </div>
                 <div class="topic-item__hidden">
                     <div div class="topic-item__hidden-detail">상세보기</div>
                     <div class="topic-item__hidden-ellipsis">
                         <i class="fas fa-ellipsis-h fa-lg"></i>
                         <div class="topic-item__hiden-ellipsis__hidden">
                             <h5>코드리스트</h5>
                             <p>승인된 코드: <span>55</span> / 총 코드: <span>121</span></p>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
     </main>
     <script src="https://kit.fontawesome.com/a3bee0acce.js" crossorigin="anonymous"></script>
     </>
    ) : "리스트가 없습니다"}
    
    </>
  );
};

export default Home;
