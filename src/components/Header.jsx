import {useNavigate, Link, NavLink} from "react-router-dom";
import {FaHome, FaInfoCircle, FaEnvelope, FaBars, FaTimes,} from 'react-icons/fa';
import { useState } from 'react';


export default function Header() {
    const navItems = [
        { id: 'home', label: 'Home', icon: <FaHome />, to: '/' },
        { id: 'about', label: 'About', icon: <FaInfoCircle />, to: '/about' },
        { id: 'project', label: 'Project', icon: <FaEnvelope />, to: '/Project' },
    ];
    // const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="sticky top-0 bg-gray-300 position-fixed w-full left-0 rigth-0 z-999 ">
            <div className="flex justify-between items-center mx-auto w-11/12 h-16 font-bold text-base">
                <Link to='/'>yeonji</Link>
                <nav className="items-center space-x-6 hidden sm:flex">
                    {navItems.map(item => (
                        <NavLink key={item.id} to={item.to} className="hover:text-white">
                            {item.label}
                        </NavLink>

                    ))}

                </nav>
                <button className="sm:hidden" onClick={toggleMenu}>
                    <FaBars />
                </button>
            </div>

        {/* mobile Menu */}
            <aside className={`
            fixed top-0 right-0 w-64 h-full bg-gray-300 z-999
            ${isMenuOpen ? '-translate-x-0' : 'translate-x-full'}
            sm:hidden transform transition-transform duration-300 ease-in-out`} >

                <div className="flex justify-end p-4">
                    <button className="text-white focus:outline-none" aria-label="close menu" onClick={toggleMenu}>
                        <FaTimes className="h-6 w-6" />
                    </button>
                </div>
                <nav className="flex flex-col space-y-4 p-4 items-start w-full h-screen pt-32">
                    {navItems.map(item => (
                        <NavLink key={item.id} to={item.to} className="hover:text-white">
                            {item.label}
                        </NavLink>

                    ))}
                </nav>



            </aside>


        </header>
    );
};