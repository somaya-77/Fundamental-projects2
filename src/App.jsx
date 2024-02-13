
import Grocery from './grocery/Grocery';
import Navbar from './navbar/Navbar';
// import { AppProvider } from './sidebar/Context';
import { AppProvider } from './strapi/context';
import SidbarContainer from './sidebar/SidbarContainer';
import Strapi from './strapi/Strapi';
import Cart from './cart/Cart';
function App() {


  return (
    <>
      {/* <Grocery /> */}
      {/* <Navbar /> */}
      {/* <AppProvider>
        <SidbarContainer />
      </AppProvider> */}
      {/* <AppProvider>
        <Strapi />
      </AppProvider> */}
      <Cart />
    </>
  )
}

export default App;
