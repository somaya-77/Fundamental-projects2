import { useGlobalStrapi } from './context';
import sublinks from './data';

const NavLinks = () => {
    const { setPageId} = useGlobalStrapi();
    return (
        <div className='nav-links-strapi'>
            {sublinks.map((item) => {
                const { pageId, page } = item;
                return (
                    <span className='nav-link' 
                    onMouseEnter={() => setPageId(pageId)}
                    key={pageId}>{page}</span>
                )
            })}
        </div>
    )
}

export default NavLinks;