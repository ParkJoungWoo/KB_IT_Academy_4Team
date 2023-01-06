# 최종 기획서

![그림8.png](%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%20%E1%84%80%E1%85%B5%E1%84%92%E1%85%AC%E1%86%A8%E1%84%89%E1%85%A5%20bce5d92b5e0c48d5980345f3fca76933/%25EA%25B7%25B8%25EB%25A6%25BC8.png)

### 🏡감성숙소찾아조

김영우, 박정우, 안선우, 이가은, 이원섭

## 목차

---

### 서론 (프로젝트 배경)

### I. 주제 및 프로젝트 기획

 1.  주제 선정

1. 기술 선정 
2. 팀원소개 및 역할 분담

### II. 서비스 구현 기능

1. 소프트웨어 요구 분석서

2. 데이터 분석정리

### 본론 (서비스 아키텍쳐 상세 기능)

### I. AI

1. **감성숙소의 분류기준 및 데이터 수집**
2. **티처블머신의 활용**
3. **MobileNet**
4. **구축 및 튜닝**
5. **모델의 숙소사진 분류 결과**
6. **협업필터링을(CF) 이용한 숙소추천**

### II. Front

1. **회원에게 추천 기능**
    1. 회원가입 시 취향분석 페이지 
    2.  로그인 / 로그아웃 상태에 따라 달라지는 메인페이지
    3.  찜 기능
2. **마이 페이지 분석 기능** 
    1.  그래프를 이용한 취향 분석 레포트 제공
3. **사용자 성향 추천 시스템**
    1. 나와 비슷한 성향의 회원이 다녀온 숙소 추천
    2. 사용자의 취향저격 숙소
    3. 이미지 취향 Type 분석

### III. Back

1. **Model**
    1. 숙소 csv파일로 read해서 사용
    2. ERD
2. **Library**
3. **함수형 프로그래밍 리팩토링**
4. **webp**
5. **Web Architecture Flow**
6. **협업 필터링**

### 결론 (최종 정리)

### I. Best Practice

### II. **Lesson Learned**

### III. 참고문헌

---

## I. 주제 및 프로젝트 기획

 1.  주제 선정

1. 기술 선정 
2. 팀원소개 및 역할 분담

### **1.  주제 선정**

- 기획 배경

![그림444.png](%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%20%E1%84%80%E1%85%B5%E1%84%92%E1%85%AC%E1%86%A8%E1%84%89%E1%85%A5%20bce5d92b5e0c48d5980345f3fca76933/%25EA%25B7%25B8%25EB%25A6%25BC444.png)

<aside>
💡 최근들어 감성적인 숙소의 수요가 `**증가**`
사람이 많은 곳보다 조용한 곳에서의 휴가 `**선호**`

</aside>

---

- **기획 의도**
    
     감성 숙소 추천
    
    - 본인이 원하는 감성 숙소를 찾기 위한 시간 단축
    - 숙소의 사진을 통해서 감성을 내부인테리어로 판단해서 추천

![Untitled](%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%20%E1%84%80%E1%85%B5%E1%84%92%E1%85%AC%E1%86%A8%E1%84%89%E1%85%A5%20bce5d92b5e0c48d5980345f3fca76933/Untitled.png)

<aside>
💡 숙소가 `**메인**`이 되는 여행에 초점을 맞춰 사용자 취향의 숙소를 `**추천**`해주는 웹사이트를 제작

</aside>

- **시장조사**
    - 야놀자, 여기어때 감성 태깅이 없는 것 확인
    - 추천 시스템 없음 확인

![Untitled](%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%20%E1%84%80%E1%85%B5%E1%84%92%E1%85%AC%E1%86%A8%E1%84%89%E1%85%A5%20bce5d92b5e0c48d5980345f3fca76933/Untitled%201.png)

- **장점**
    - 숙소와 일대일 제휴가 아닌 `**크롤링**`으로 숙소 데이터를 수집하여 많은 데이터 확보 가능
    - 정밀한 `**추천 서비스**`, 데이터 분석 및 웹 페이지 구상에 많은 어려움이 없을 거라고 예상됨

![data.png](%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%20%E1%84%80%E1%85%B5%E1%84%92%E1%85%AC%E1%86%A8%E1%84%89%E1%85%A5%20bce5d92b5e0c48d5980345f3fca76933/data.png)

![recommend.png](%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%20%E1%84%80%E1%85%B5%E1%84%92%E1%85%AC%E1%86%A8%E1%84%89%E1%85%A5%20bce5d92b5e0c48d5980345f3fca76933/recommend.png)

- **차별점**
    
    <aside>
    📌 `AI`을 통한 추천 시스템으로 사용자에게 알맞은 숙소를 제시
    
    </aside>
    

![machine-learning (1).png](%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%20%E1%84%80%E1%85%B5%E1%84%92%E1%85%AC%E1%86%A8%E1%84%89%E1%85%A5%20bce5d92b5e0c48d5980345f3fca76933/machine-learning_(1).png)

### 2. 기술 선정

![Untitled](%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%20%E1%84%80%E1%85%B5%E1%84%92%E1%85%AC%E1%86%A8%E1%84%89%E1%85%A5%20bce5d92b5e0c48d5980345f3fca76933/Untitled%202.png)

- **Front를 리액트로 한 이유**
    - 로직 분리하는 것이 아닌 Component 하나로 관리 가능
    - UI수정과 재사용성이 좋으며, 코드 가독성을 강화
    - 다른 Framework나 라이브러리와 병행해서 사용 가능

- **Back을 Django를 사용한 이유**
    - AI(Colab)과의 호환성
    - 편리하게 사용할 수 있는 Framework가 많음

### 3. **팀원소개 및 역할 분담**

- 팀원소개

![Untitled](%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%20%E1%84%80%E1%85%B5%E1%84%92%E1%85%AC%E1%86%A8%E1%84%89%E1%85%A5%20bce5d92b5e0c48d5980345f3fca76933/Untitled%203.png)

- 팀 문화

![그림100.png](%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%20%E1%84%80%E1%85%B5%E1%84%92%E1%85%AC%E1%86%A8%E1%84%89%E1%85%A5%20bce5d92b5e0c48d5980345f3fca76933/%25EA%25B7%25B8%25EB%25A6%25BC100.png)

- 주간 스크럼 회의 및 매주 1회 회식
- 최종 기간에는 매일 오전 오후 2회 스크럼 회의
- 애자일한 작업 방식

- RnR (Role & Responsibility)
- pair programming

---

## **II. 서비스 구현 기능**

### 1. 소프트웨어 요구 분석서

1. **기능명세서**
- FE backlog

![Untitled](%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%20%E1%84%80%E1%85%B5%E1%84%92%E1%85%AC%E1%86%A8%E1%84%89%E1%85%A5%20bce5d92b5e0c48d5980345f3fca76933/Untitled%204.png)

- BE backlog

![Untitled](%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%20%E1%84%80%E1%85%B5%E1%84%92%E1%85%AC%E1%86%A8%E1%84%89%E1%85%A5%20bce5d92b5e0c48d5980345f3fca76933/Untitled%205.png)

- AI backlog

![Untitled](%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%20%E1%84%80%E1%85%B5%E1%84%92%E1%85%AC%E1%86%A8%E1%84%89%E1%85%A5%20bce5d92b5e0c48d5980345f3fca76933/Untitled%206.png)

**b. UseCase 다이어그램**

![Untitled](%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%20%E1%84%80%E1%85%B5%E1%84%92%E1%85%AC%E1%86%A8%E1%84%89%E1%85%A5%20bce5d92b5e0c48d5980345f3fca76933/Untitled%207.png)

**c. Event Flow**

![Untitled](%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%20%E1%84%80%E1%85%B5%E1%84%92%E1%85%AC%E1%86%A8%E1%84%89%E1%85%A5%20bce5d92b5e0c48d5980345f3fca76933/Untitled%208.png)

---

## 본론(서비스 아키택쳐)

[I. AI](https://www.notion.so/I-AI-caee74b9115441dc87c12556953dd356)

[II. Front](https://www.notion.so/II-Front-bd6d82c6ab754a518a39854039cae042)

[III. Back](https://www.notion.so/III-Back-3979d0df978a4529bb5be240b3dbddf9)

---

# 📺**`[시연 영상](https://youtu.be/_FuBNK7anBo)`**

<aside>
📢 **`비전`

페이지 내 예약 기능을 추가, `개인 맞춤형 숙소 추천`이라는 아이템을 발전시켜 야놀자, 여기어때 등의 플랫폼을 능가할 종합 숙소 사이트로 자리매김**

</aside>

---

## 결론

## **I. Best Practice**

👍 agile한 개발 방법으로 즉시 이슈에 대해 의논하고 해결하려는 움직임이 좋았습니다.

👍 비즈니스적으로 완성된 모델을 참고하여 좋은 성능의 모델을 빠르게 완성한 점이 좋았습니다.

👍 기능 완성에만 초점을 두지 않고 성능 향상에 대해서도 끊임 없이 고민한 점이 좋았습니다.

## **II. Lesson Learned**

❗명세서의 중요성을 다시 느낍니다. 팀원간 경험을 바탕으로 명세서를 작성했으나 이에 대해 논의 하는 일이 잦았고 목표로 했던 완벽한 분업화가 이루어지지 않았습니다. 

❗완벽한 서비스 아키텍쳐와 이벤트 플로우에 더 초점을 맞추었다면 더더욱 분업화가 이루어져 효율적으로 프로젝트를 완성했지 않았을까 생각합니다.

## **III. 참고문헌**

- 프로젝트, 아키텍쳐 부분
    - [숙소 선택 기준 여행지 → 취향](https://www.wikitree.co.kr/articles/572780)
    - [방역 조치 풀린 첫 여름, ‘바캉스 소비’ 온라인 거래액 1년새 2~3배 급증(여행이 1위)](https://m.khan.co.kr/economy/economy-general/article/202209011623001#c2b)
- AI
    - [Teachable Machine](https://teachablemachine.withgoogle.com/train/image)
    - [최적화(Batch_size, Epoch)](https://gooopy.tistory.com/68)
    - [MobileNet](https://deep-learning-study.tistory.com/532)
    - [MobileNet논문)](https://greeksharifa.github.io/computer%20vision/2022/02/01/MobileNetV1/)
    - [CNN](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=dnjswns2280&logNo=221560002356)
    - [MobileNet(Fine-Tuning)](https://nana7777777.tistory.com/24)
    - [Transfer Learning(Fine-Tuning)](https://cs231n.github.io/transfer-learning/)
    - [Transfer Learning(Fine-Tuning 전이학습)](https://reliablecho-programming.tistory.com/1)
    - [Optimizer(딥 러닝 SGD, Momentum)](https://amber-chaeeunk.tistory.com/23)
    - [Optimizer(Optimizer알고리즘 : Adam)](https://ropiens.tistory.com/90)
    - [FCN Layer(Dense Layer란? Dense Layer 역할 및 기능)](https://koreapy.tistory.com/917)
    - [Cosine Similarity(코사인 유사도 개념과 Python으로 구현)](https://needjarvis.tistory.com/665)
    - [추천시스템(CB, CF, LF)(추천 알고리즘 3단계)](https://blog.pabii.co.kr/recommendation-algorithm-cb-cf-lf/)
    - [추천시스템(CF)(협업 필터링 추천 시스템)](https://velog.io/@rlawhddn1010/%ED%98%91%EC%97%85-%ED%95%84%ED%84%B0%EB%A7%81-%EC%B6%94%EC%B2%9C-%EC%8B%9C%EC%8A%A4%ED%85%9C-Collaborative-filtering-recommendation-system)
    - [추천시스템(CF)(추천 시스템에 쓰이는 알고리즘 개요)](https://steemit.com/recommender/@saemi32/4zjajb)
    - [CF(협업 필터링)](https://ko.wikipedia.org/wiki/%ED%98%91%EC%97%85_%ED%95%84%ED%84%B0%EB%A7%81)
    - [인테리아(인테리어 종류 클래식 인테리어란?](https://m.post.naver.com/viewer/postView.naver?volumeNo=7266643&memberNo=7664670))
    - [인테리어( 취향에 따라 디자인 하는 인테리어 스타일 종료)](https://sgh2y.tistory.com/26)
- Front-end
    - [에어비앤비](https://www.airbnb.co.kr/)
    - [스테이폴리오(감성숙소 사이트)](https://www.stayfolio.com/)
    - [PARNAS 호텔제주](http://parnashoteljeju.com/ko/main.do)
    - [React-apexcharts](https://apexcharts.com/docs)
    - [Landing-Page Animation](https://velog.io/@taeung/React-Custom-Hooks%EB%A1%9C-Scroll-Event-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)
    - [Heart-Button](https://cotak.tistory.com/113)
- Back-end
    - [장고 공식 문서](https://docs.djangoproject.com/ko/4.1/intro/)
    - [판다스 공식 문서](https://pandas.pydata.org/)
    - [필로우 공식 문서](https://pillow.readthedocs.io/en/stable/)
    - [webp 개념](https://ko.wikipedia.org/wiki/WebP)
    - [파일 입출력과 DB 접근 속도 차이](https://stackoverflow.com/questions/4210057/is-a-file-read-faster-than-reading-data-from-the-database)
    [](https://sgh2y.tistory.com/26)
    
    [](https://teachablemachine.withgoogle.com/train/image)
