import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import CartItems from "./Components/CartItems/Cartitems";
import Login from "./Components/Login/Login";
import { useStateValue } from "./Components/StateProvider";
import { auth } from "./Components/firebase";
//generally app file should not be doing much. It should be used for routing and high
//level work
function App() {
  const [{basket,user }, dispatch] = useStateValue();

  useEffect(() => {
    //putting basket inside [] will make it run when component is loaded and everytime
    // basket changes.Leaving it empty will make it run only once,
    //when the component is loaded
    const unsubscribe=auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //this indicates user is logged in
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      } else {
        //this indicates user is logged out
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    });
    return ()=>{
      // any clean up operation
      // executed when the component is dismounted
      unsubscribe();
    }
  }, [basket]);
  console.log("USER IS ",user)
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/ShoppingCart">
            <CartItems />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
