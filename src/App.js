// import Header from './layouts/Header.js'
import './App.css';
import { useRoutes } from 'react-router-dom';

import routes from './routes/index.js';

function App() {
  const element = useRoutes(routes);
  return (
   element
    // <div>
    //   <Header />
    //   <hr className='divider'></hr>
    // </div>
  );
}

export default App;
