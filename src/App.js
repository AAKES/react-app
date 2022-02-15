import Header from "./Components/Header";
import Product from "./Components/Product";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ShoppingCart from "./Components/ShoppingCart";
import Checkout from "./Components/Checkout";
import Thankyou from "./Components/Thankyou";
import Signin from "./Components/Signin";
import Shoe from "./Components/Shoe";
import Clothes from"./Components/Clothes";
import Footer from "./Components/Footer";
function App() {
  return (
    <Router>
       <div className="App">
     <Header />
       <Switch>
          <Route exact path="/">
          <div className="banner">
       <img src="https://gcp-img.slatic.net/lazada/46b47348-699b-4a19-8d93-0a0559383342_NP-1920-300.png" alt="offer" />
     </div>
     <Product />
          </Route>
          <Route  path="/cart" exact component={ShoppingCart}/>
          <Route path ='/checkout'exact component={Checkout} />
          <Route  path="/slip" exact component={Thankyou}/>
          <Route path='/signin' exact component={Signin}/>
          <Route path='/electronics'exact component={Product}/>
          <Route path='/shoes' exact component={Shoe}/>
          <Route path='/clothes' exact component={Clothes}/>
          </Switch>

    </div>
    <Footer/>
    </Router>
    
  );
}

export default App;
