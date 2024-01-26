import './App.css';
import { LeftMenu } from './Components/LeftMenu';
import { MainContainer } from './Components/MainContainer';
import { RightMenu } from './Components/RightMenu';



function App() {
  let audio = new Audio ("./Sound/song_m.mp3")
  const start = ()=>{
    audio.play()
  }
  return (

    <div className="App">
      <LeftMenu/>
      <MainContainer/>
      <div className='background'></div>
    </div>
  );
}

export default App;
