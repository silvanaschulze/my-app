import { switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SingleArticle from './components/SingleArticle';

 
const App = () => {
  return( 
    <div>
      <Navbar />
      <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/article' component={Articles} />
      <Route path='/article/:id' component={SingleArticle} />
      </Switch>
    </div>;
  );
};

export default App;
