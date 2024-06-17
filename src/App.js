
import './App.css';
import LoadMore from './Components/LoadMore';
import QRCodeGenerator from './Components/QR/index.jsx';
import ScrollIndicator from './Components/ScrollIndicator/index.jsx';
import ImageSlider from './Components/Slider';
import StarRating from './Components/Star';
import TreeVeiw from './Components/TreeVeiw';
import menus from './Components/TreeVeiw/data.js';
import TabTest from "./Components/Tabs/tab-test.jsx";
import ModalTest from "./Components/Modal/index.jsx";
import GitHubProfileFinder from './Components/GithubProfileFinder/index.jsx';
import SearchAutocomplete from './Components/SearchAutoComplete/index.jsx';
import TicTacToe from './Components/TicTacToe/index.jsx';
import FeatureFlagGlobalState from './Components/FeatureFlag/Context/index.jsx';
import FeatureFlags from './Components/FeatureFlag/index.jsx';
import UseFetchHookTest from './Components/use-fetch/test.jsx';
import UseClickOutsideTest from './Components/use-outside-click/test.jsx';
import UseWindowResizeTest from './Components/use-window-resize/test.jsx';
import ScrollToTopAndBottom from './Components/ScrollTop&Bottom/index.jsx'
import ScrollToSection from './Components/ScrollTop&Bottom/scroll-to-section.jsx';


function App() {
  return (
    <div className="App">
      {/* <StarRating n={20}/> */}
      
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* <LoadMore/> */}
      {/* <TreeVeiw menus={menus}/>
      <QRCodeGenerator/> */}

      {/* <LightDarkMode/> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}
      {/* <TabTest/>
      <ModalTest/>
      <GithubProfileFinder/> */}
      {/* <SearchAutocomplete/> */}

      {/* <TicTacToe/> */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags/>
      </FeatureFlagGlobalState> */}
      {/* <UseFetchHookTest/>
      <UseClickOutsideTest/>
       <UseWindowResizeTest/> */}
      {/* <ScrollToTopAndBottom/> */}
      {/* <ScrollToSection/> */}
    </div>
    
  );
}

export default App;
