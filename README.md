# Movie search v2

> ## 의의

    - 이 프로젝트는 바닐라JS 강의를 보고 따라서 만들었다
    - 이 프로젝트를 만든 후 여러 강의를 보고 배웠다
    - 배운 것을 이 프로젝트에 적용시켜보려는 목적이 있고 잘 활용할 수 있는지 점검하는 데 의의를 둔다

> ## 용도

    - 영화 리스트 api를 이용해서 원하는 조건에 맞는 영화들을 찾아볼 수 있다

> ## api

    - api doc : https://yts.mx/api
        - List Movies
        - Movie Details

    - 공통적으로 반환되는 값
        - get => {status, status_message, data}
        - status : api 호출에 대한 상태값 "ok" 또는 "error"
        - status_message : status에 해당하는 메시지
        - data : status가 "ok"일 경우 data가 포함된다

    - List Moives
        - url : https://yts.mx/api/v2/list_movies.json
        - 주요 parameters
            - limit : 몇 개의 영화 데이터를 가져올 것인지에 대한 파라미터
                - 1에서 50까지의 정수 사용 (기본값 20)
            - page : 설정한 페이지의 데이터를 가져올 수 있는 파라미터
                - 정수 (기본값 1)
            - minimum_rating : 영화 평점을 이용한 필터링을 위한 파라미터
                - 0에서 9까지의 정수 사용 (기본값 0)
            - query_term : 영화 제목, 배우 이름, 감독 이름을 이용해서 검색하기 위한 파라미터
            - genre : 장르를 이용해서 검색하기 위한 파라미터
            - sort_by : 영화 데이터를 어떻게 정렬할 것인지 설정할 수 있는 파라미터
                - title, year, rating

    - Movie Details
        - url : https://yts.mx/api/v2/movie_detail.json
        - parameters
            - movie_id (imdb_id) : 영화 ID 번호 파라미터 (필수값)

> ## 기능

    - 필터링과 검색
        1. 기본적으로 limit와 page 기능 위에 필터링과 검색을 구현해야한다
        2. 평점과 장르 파라미터는 필터링으로 구분한다
        3. 정렬 기능을 사용하기 위해선 나머지 파라미터들을 저장하고 있어야한다

    - 기존 코드 대체
        1. v1
            - javascript
            - react
            - react-router-dom v5

        2. v2
            - typescript
            - react
            - chakra UI
            - react-icon
            - react-router-dom v6
            - tanstack query
            - axios
            - react-hook-form

> ## UI

    - 메인
        - 헤더
            - 메뉴
                1. 전체 영화 리스트 (기본)
                2. 최신순
                3. 평점 높은 순
            - 메인 로고
            - 다크 모드 버튼
        - 본문
            - 로딩
                1. 검색
            - 로딩 완료
                1. 결과
    - 디테일
        1. 헤더
        2. 본문

> ## 기록

    - 2023. 2. 8. 수
        1. 타입스크립트 적용하기
            - https://blog.naver.com/nghokr1111/223009649209
        2. router 생성하기
        3. Header component
    - 2023. 2. 9. 목
        1. tanstack/react-query
            - useQuery
        2. api data types
            - types.d.ts
        3. Loading component
        4. SearchBar component
