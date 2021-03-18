import React, {Component, PureComponent} from 'react';
// const Component = React.Component; (Syntactic Sugar 문법적 설탕) 이를 줄인말
/*const SearchBar = () => { // 함수형 컴포넌트, 1함수 1컴포넌트
    return <input />; // JSX를 Javascript로 변환시킬 때 React모듈이 포함되어있어야 변환 시킴, 
    그래서 사용이 없어도 넣어줘야해
}*/

class SearchBar extends Component { // class 컴포넌트에서만 state 갖는다.
    // 각각 클래스 기반 컴포넌트는 자체 복사된 스테이트 가지고있다.
    // constuctor을 실행하면서 state초기화,
    constructor(props) {
        super(props);

        this.state = {term: '1'}; // pops를 갖고, props는 state 정보를 기록 한다. (state: 객체)
        // state의 부작용은 무엇일까?
        // 이벤트 핸들러로 setState를 실행하면 state는 바뀌고 이는 컴포넌트에 자동으로 리랜더 명령
        // 랜더링 메소드의 모든 업데이트된 정보를 DOM에 푸쉬.
        // 왜냐하면 render메소드는 this.state.term을 참조하기 시작했고
        // 컴포넌트가 리랜더링 될때마다 DOM안에 있는 this.state.term이 업데이트 된다.
    }

    // componentDidMount() {
    //     console.log('search_bar_componentDidMount');
    // }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('search_bar_getDerivedStateFromProps')
    //     console.log('state', state);
    //     console.log('props', props);
    //     console.log('--------------------------------');
    //     return {};
    // };

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        // console.log('search_bar_render');
        // this.state.term = event.target.value  state변환할때 절대 이렇게 변환시키면 안돼!
        // 제어 컴포넌트? 스테이트에 의해 세팅되는 값
        return (
            <div className="search-bar">
                <input
                    value={this.state.value}
                    onChange={event => this.onSearchTermChange(event.target.value)} />
                    {/*onChange={event => this.setState({term: event.target.value})} />*/}
            </div>
        );
    }

    onSearchTermChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;