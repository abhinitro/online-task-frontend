import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';






  const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;


 
  const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));




  export default class App extends React.Component {


   constructor(props){

    super(props);
     this.state={
        isOpen:false
     }
}

  

   render(){

    return (
     <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
  );
   }
  
}





