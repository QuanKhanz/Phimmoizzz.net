import { BiHomeAlt, BiInfoCircle, BiMenu, BiMoviePlay } from 'react-icons/bi';
import NavItem from './NavItem';
import { useState } from 'react';

const items = [
    { label: 'Home', icon: <BiHomeAlt size='1.875rem' />, active: true },
    { label: 'Movies', icon: <BiMoviePlay size='1.875rem' />, active: false },
    { label: 'About', icon: <BiInfoCircle size='1.875rem' />, active: false }
];



export default function Nav() {

    const [activeItem, setActiveItem] = useState(items[0]);
    const [isNavMenuMobile, setisNavMenuMobile] = useState(false)

    const handleClickNavItem = (item) => {
        setActiveItem(item);
    }

    return (
        <nav className='col-span-1 bg-cyan-200'>
            <div className='flex mx-4 justify-between items-center md:block'>
                <h4 className='uppercase font-bold text-primary py-4 border-b border-primary text-right'>Phimmoizzz.net</h4>
                <BiMenu className='cursor-pointer md:hidden' size='1.875rem' onClick={() => setisNavMenuMobile(!isNavMenuMobile)}/>
            </div>
            <ul className={`mx-4 my-2 ${isNavMenuMobile ? '' : 'hidden'} md:block`}>
                {items.map(item => (
                    <NavItem
                        key={item.label}
                        label={item.label}
                        icon={item.icon}
                        active={item === activeItem}
                        onClick={
                            () => handleClickNavItem(item)
                        }

                    />
                ))}
                {console.log(isNavMenuMobile)}
            </ul>
        </nav>
    );
}
