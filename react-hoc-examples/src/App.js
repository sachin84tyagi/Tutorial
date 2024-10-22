import logo from './logo.svg';
import './App.css';
import StyleColor from './components/StyleColor'
import Counter from './components/Counter';
import Post from './components/Post';
import PrivateComponent from './components/PrivateComponent';
import PrivateComponentUser from './components/PrivateComponentUser';
import ExtendedFeature from './components/ExtendedFeature';

//Feature component setup start 
import Feature from './components/Feature'
import withFeature from './basic-hoc/withFeature';
const enableNewFeatures = true;
const NewFeatureComp = withFeature(Feature, enableNewFeatures)
//Feature component setup end


function App() {
  return (
    <div className="App">
      <h3> This is App Component with HOC</h3>
      <StyleColor></StyleColor>
      <Counter></Counter>
      <NewFeatureComp></NewFeatureComp>
      <ExtendedFeature></ExtendedFeature>
      <PrivateComponent userRole="admin"></PrivateComponent>
      <PrivateComponent userRole="user"></PrivateComponent>
      <PrivateComponentUser userRole="admin"></PrivateComponentUser>
      <PrivateComponentUser userRole="user"></PrivateComponentUser>
      <Post></Post>
    </div>
  );
}

export default App;
