import _ from 'lodash';
import React, { Component } from 'react'; // 컴포넌트의 기능 (모으고 합체하고)
import ReactDOM from 'react-dom'; // 모아온 컴포넌트를 dom에 랜더링할 때 필요, 그래서 랜더할때도 ReactDOM
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.jsx';
import VideoList from './components/video_list.jsx';
import VideoDetail from './components/video_detail.jsx';
const API_KEY = 'AIzaSyCWXVxNuYApHwj8SmWG9s3AFLcQad_mKMw';

// Create a new component. this component should produce
// some HTML
// HTML을 제공하는 컴포넌트를 생성한다
// 함수형 컴포넌트는 어떤 정보와 JSX를 분리할 때 주로 이용됩니다., 가볍고 무척 빠릅니다.
// 클레스 컴포넌트를 사용할 수 있따.

// 데이터 프로우? 모든 부모 컴포넌트는 데이터를 가져올 권리를 가져야 한다는 의미
/*const App = () => { // 함수형 컴포넌트, 1함수 1컴포넌트
    return (
        <div>
            <SearchBar />
        </div>
    );
}*/

class App extends Component {
    /**
     * @description 클래스 컴포넌트 초기화 함수, 프로퍼티,생명주기, 상태 등을 초기화 해주는 함수
     * @param {*} props 
     */
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
            isListsShow: true
        };
        console.log('constructor');
    }

    /**
     * @description 랜더링 함수가 발생한 후(마운트 된 후) 실행
     */
    componentDidMount() {
        console.log('componentDidMount');
        this.videoSearch('맛있는 녀석들');
    };

    /**
     * @description 랜더링 될때, 넘겨주는 props의 값이 바뀔 때, setState 호출할 때 실행 됨
     * @param {*} props
     * @param {*} state 
     * @returns 
     */
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps----------')
        console.log('state', state);
        console.log('--------------------------------');
        return {};
    };

    /**
     * @description getDerivedStateFromProps함수가 실행되었을 때, 리턴값에 따라 rerender시킬지 판단해주는 함수
     * 허지만 리액트 성능에 영향을 주기 때문에 꼭 필요할때만 사용하기를 권한다.
     * @param {*} nextProps 
     * @param {*} nextState 
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate----------');
        console.log('nextState', nextState);
        console.log('nowState', this.state);
        console.log('--------------------------------');
        return true;
    }

    /**
     * @description 이전 데이터와 현제 데이터를 비교해서 가상돔의 DOM정보와 리얼돔의 DOM정보를 가져와서 비교 가능. 스크롤바 위치 변경
     * 하는거 아니면 잘 이용하는데가 없다고 합니다. 현재의 state갑과 변경되기 전의 state값을 비교해서
     * @param prevProps
     * @param prevState
     * @returns {Readonly<S>}
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBefore----------');
        console.log('prevState', prevState);
        console.log('--------------------------------');
        return prevState;
    }

    /**
     * @description 리랜더 된 이후에 실행하는 함수. DOM정보 변경할 때 사용 가능.
     * getSnapshotBeforeUpdate에서 리턴해주는 데이터를 가져와서 사용
     * @param prevProps
     * @param prevState
     * @param snapshot
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate----------');
        console.log('prevState', prevState);
        console.log('snapshot', snapshot);
        console.log('--------------------------------');
    }

    test = () => {
        this.setState({ isListsShow: !this.state.isListsShow })
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            // this.setState({videos}); === this.setState({videos:videos});
        });
    }

    render() {
        console.log('render');
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        // debounce 원하는 시간을 주기로 계속 실행하도록

        return (
            <div>
                {this.state.isListsShow ? <SearchBar onSearchTermChange={ videoSearch } /> : null }
                <VideoDetail video={ this.state.selectedVideo } />
                <VideoList
                    // onVideoSelect={(selectedVideo) => {this.setState({selectedVideo})}}
                    onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
                    videos={ this.state.videos } />
                <button onClick={ this.test }>검색 컴포넌트 없애기</button>
            </div>
        );
    }
}

// 생성한 HTML(컴포넌트가 return한)를 DOM에 넣어준다.
// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));