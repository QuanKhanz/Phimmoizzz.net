import React from 'react';

export default function NavItem({ label, icon, active, onClick }) {

    return (
        <li 
            className={`flex p-2 justify-end items-center cursor-pointer  ${active ? 'bg-primary text-white' : ''}`}
            onClick={onClick}
        >
            <h3 className='mr-2'>{label}</h3>
            {icon}
        </li>
    );
}
