import _ from 'lodash';
import React, {Component} from 'react'; // 컴포넌트의 기능 (모으고 합체하고)
import ReactDOM from 'react-dom'; // 모아온 컴포넌트를 dom에 랜더링할 때 필요, 그래서 랜더할때도 ReactDOM
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.jsx';
import VideoList from './components/video_list.jsx';
import VideoDetail from './components/video_detail.jsx';
const API_KEY = 'AIzaSyAUhWgn34MFznJldo7tkEM0p1kGK7zLXgs';

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
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            // this.setState({videos}); === this.setState({videos:videos});
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        // debounce 원하는 시간을 주기로 계속 실행하도록

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    // onVideoSelect={(selectedVideo) => {this.setState({selectedVideo})}}
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// 생성한 HTML(컴포넌트가 return한)를 DOM에 넣어준다.
// Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(
        <React.StrictMode>
        <App/>
        </React.StrictMode>,
        document.querySelector('.container')
);