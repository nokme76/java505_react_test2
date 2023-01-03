import './App.css';
import Potato from "./Potato";
import React from "react";
import PropTypes from "prop-types";

// 따로 JSX로 안만들고 함수로 해도 되지만 1개의 컴포넌트에 하나의 JSX파일을 만들어주는게 좋음

// props : 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 매개변수
// props 는 읽기 전용
// 사용법 :
// 컴포넌트 명 (props) {
//  {props.부모가 전달한 키 이름}
// }

// 컴포넌트 명 ({부모가 전달한 키 이름, ...) {
//  {부모가 전달한 키 이름1}, {부모가 전달한 키 이름2}, {...}
// }

// 컴포넌트 명 (props) {
//  const {키이름, ...} = props;
// }


function Food1(props) {

    const {fav} = props;
    const some = props.something;
    console.log(props);
    return (
        <h3>I Love {fav}</h3>
    );
// function Food({fav}) {
//
//     console.log(fav);
//     return (
//         <h3>I Love {fav}</h3>
//     );
// }
}

function Food(dish) {
    const imageStyle = {
        height: "20vh",
        width: "20vw",
    };
    return (
        <div>
            <h3>I Love {dish.name}</h3>
            <h4>{dish.rating}/5.0</h4>
            <img style={imageStyle} src={dish.pic} alt={dish.name}/>
        </div>

    );
}

const foodList = [
    {
        id: 1,
        name: "돈까스",
        image: "https://recipe1.ezmember.co.kr/cache/recipe/2015/10/04/97706f91b951817698711adc5f29cf641.jpg",
        rating: 3.5
    },
    {
        id: 2,
        name: "돼지국밥",
        image: "https://cdn.mindgil.com/news/photo/202008/69679_4073_1653.jpg",
        rating: 4.5
    },

    {
        id: 3,
        name: "햄버거",
        image: "https://w.namu.la/s/72c594bb0d8963dd54d8d847dd330264254b18558fe9897541b56f7463e1fd6fdd1be4b9bcb17582e95f78bc6d4c142548476bd2b9829a4894deae6f8430ef70121c24a74e7c36a6fc887d523aea1a17d4fa518e38e9f12b7c9fc434f7589cb3",
        rating: 1.5
    }

];


function renderFood(dish){

    return <Food key={dish.id} name={dish.name} pic={dish.image} rating={dish.rating}/>

}


// 함수형 컴포넌트
function App() {
    // 일반적인 js 소스코드 부분


    // return : 화면을 생성하는 가상 DOM 부분
    return (
        // 부모 태그는 반드시 1개만 존재해야 함 (자식태그는 상관없음)
        // jsx 문법에서 class 라는 키워드는 자바스크립트의 클래스 키워드가 겹치기 때문에
        // 자바스크립트의 클래스와 css선택자의 class를 구분하기 위해서 css선택자인 className으로 사용함


        <div className="App">
            {/* SPA : Single Page Application 의 줄임말, index.html과 같은 하나의 화면 구성 파일로 모든 화면을 구성하는 웹페이지*/}
            {/* SPA는 프론트엔드 프레임워크를 사용하여 하나의 화면에서 필요한 부분을 실시간으로 변경하여 웹을 표시함*/}
            {/* 컴포넌트 : 리액트에서 화면을 구성하는 요소*/}

            {/*    Food 라는 컴포넌트에 변수명이 fav이고, 값이 'kimchi'인 데이터를 전달  */}
            {/*<Food fav={"kimchi"}/>*/}
            {/*<Food fav={"돈까스"}/>*/}
            {/*<Food fav={"햄버거"}/>*/}
            {/*<Food fav={"샌드위치"}/>*/}
            {/*<Food fav={"치킨"}/>*/}
            {/*<Food fav={"어탕국수"}/>*/}


            {/* {} : jsx 문법에서 {} 데이터를 표현하는데 사용함, 간단한 자바스크립트 연산식도 사용 가능  */}
            {/*{foodList.map(dish => <Food name={dish.name} pic={dish.image}/>)}*/}
            {/* 함수화 가능 */}
            {foodList.map(dish => renderFood(dish))}


            <div>
                <h1>위쪽 div</h1>
            </div>
            <div>
                <h1>React Study</h1>


                {/*<Movie/>*/}
                {/*<Potato/>*/}
            </div>
        </div>
    );

}


// PropTypes: 매개변수로 사용되는 데이터를 체크
// 매개변수의 이름까지 check 해줌
// isRequired: 해당 부분이 반드시 필요하다는 의미, 없으면 오류 발생
Food.propTypes = {
    name: PropTypes.string.isRequired,
    pic: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
};


export default App;
