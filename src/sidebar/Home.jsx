import { useGlobalContext } from './Context';
import {FaBars} from 'react-icons/fa';
const Home = () => {
  const {openSidbar, openModal} = useGlobalContext();
  return (
    <main>
      <span onClick={openSidbar} className='sidebar-toggle'><FaBars/></span>

      <button onClick={openModal} className='btn'>Show Modal</button>
    </main>
  )
}

export default Home;