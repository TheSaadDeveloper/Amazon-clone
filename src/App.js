import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Header2 from './Header2';
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Search  from "./Search";

const promise = loadStripe(
  "pk_test_51HQ1FtAdV6Pba7ZppMSMFs38PjbjyQPqKS00ueRndkKB1EdPuAnLh1u7uXmvPfrKKnkCNGJKFGsZC0gW8QotcU7h00Y7NmNTmR"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS  >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Header2 />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Header2 />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Header2 />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/search">
            <Header />
            <Header2 />
            <Search />
          </Route>
          <Route path="/">
            <Header />
            <Header2 />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
