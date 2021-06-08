import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Index from './components/Index';
import ManageProductPage from './components/ManageProductPage';



function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/">
      
      <Index />
   
</Route>
    <Route exact path="/manageproduct">
      
      <ManageProductPage />
   
</Route>


     
      <Route>
     <div>Not Found</div>

      </Route>



    </Switch>

  </BrowserRouter>
  );
}

export default App;
