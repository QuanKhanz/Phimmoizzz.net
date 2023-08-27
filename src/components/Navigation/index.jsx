import React, { useState } from 'react';
import { BiHomeAlt, BiInfoCircle, BiMoviePlay } from 'react-icons/bi';
import NavItem from './NavItem';

const items = [
    { label: 'Home', icon: <BiHomeAlt size='1.875rem' />, active: true },
    { label: 'Movies', icon: <BiMoviePlay size='1.875rem' />, active: false },
    { label: 'About', icon: <BiInfoCircle size='1.875rem' />, active: false }
];



export default function Nav() {

    const [activeItem, setActiveItem] = useState(items[0]);

    const handleClickNavItem = (item) => {
        setActiveItem(item);
    }

    return (
        <nav className='col-span-1 bg-cyan-200'>
            <div className='mx-4 justify-between items-center'>
                <h4 className='uppercase font-bold text-primary py-4 border-b border-primary text-right'>Phimmoizzz.net</h4>
            </div>
            <ul className='mx-4 my-2'>
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
            </ul>
        </nav>
    );
}
