import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import { useState } from 'react';
import './style.css';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(true);
    
    return (
        <header>
            <nav>
                <div className='logos'>
                    <img src='/logo.svg' alt="logo" />
                     <button onClick={() => setShowLinks(!showLinks)}><FaBars /></button> 
                </div>
                <ul className={showLinks ? 'show-container links-container' : 'links-container'}>
                    {showLinks && links.map(link => {
                        const { id, url, text } = link;
                        return <li key={id}>
                            <a href={url}>{text}</a>
                        </li>
                    })}
                </ul>

                <ul className="social-icons">
                    {social.map(icons => {
                        const {id, url, icon} = icons;
                        return <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    })}
                </ul>

            </nav>
        </header>

       
    )
}

export default Navbar;