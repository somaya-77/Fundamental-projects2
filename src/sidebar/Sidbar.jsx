import { FaTimes } from 'react-icons/fa';
import {links, social} from './data';
import { useGlobalContext } from './Context';

const Sidbar = () => {
    const {IsOpenSidbar, closeSidbar} = useGlobalContext()
    return (
        <aside>
            <div className={IsOpenSidbar ? 'grid show-sidbar' : 'grid'}>
                <div className="logo">
                    <img src="/logo.svg" alt="logo" />
                    <span onClick={closeSidbar} className='close-sidbar'><FaTimes /></span>
                </div>

                
                    <ul className='links-page'>
                        {links.map((link) => {
                            const {id,url, text, icon} = link

                            return (<li key={id}>
                                
                                <a href={url}>{icon} {text}</a>
                            </li>)
                        })}
                    </ul>
                

                <footer>
                    <ul className='social-links'>
                        {social.map((socialIcon) => {
                            const {id,icon,url} = socialIcon;
                            return (
                                <li key={id}>
                                    <a href={url}>{icon}</a>
                                </li>
                            )
                        })}
                    </ul>
                </footer>
            </div>
        </aside>
    )
}

export default Sidbar;