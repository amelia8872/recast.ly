import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

const {useState} = React;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     //initial
//     this.state = {
//       video: exampleVideoData[1],
//       videos: exampleVideoData,
//       // videoPlaying = {snippet: {title:'', description:''}, id:{videoId:''}};
//     }
//   }

//   render() {
//     return (
//       <div>
//         <nav className="navbar">
//           <div className="col-md-6 offset-md-3">
//             <Search />
//           </div>
//         </nav>
//         <div className="row">
//           <div className="col-md-7">
//             <VideoPlayer video = {this.state.video}/>
//           </div>
//           <div className="col-md-5">
//             <VideoList videos = {this.state.videos} click={App.onClick()}  />
//           </div>
//         </div>
//       </div>
//     )
//   }

//   // onClick = {}

//   onClick: () => {
//     console.log('Video Clicked');
//     this.setState({
//       video: exampleVideoData[2]
//     });
//   }

// }


var App = () =>{
  const [currentVid, setVid] = useState(exampleVideoData[0]);

  // changeVid(exampleVideoData[1]);
  const [videoList, setVideoList] = useState(exampleVideoData);


  // const handleVideoClick = (video) => {
  //   changeVid(video);
  // }
  return(
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video = {currentVid} />
        </div>
        <div className="col-md-5">
          <VideoList videos = {videoList} setVideo = {setVid}/>
        </div>
      </div>
    </div>
  );
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

