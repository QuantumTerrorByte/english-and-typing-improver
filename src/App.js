import React from "react";
import {Footer} from "./Component/Footer";
import {Main} from "./Component/Main";
import {Header} from "./Component/Header";
import {useSelector} from "react-redux";

function App() {
    let state = useSelector(state=>state);
    console.log(state);
    return (<>
        <Header>Hello
        </Header>
        <Main>Hello</Main>
        <Footer>Hello</Footer>
    </>);
}

export default App;
