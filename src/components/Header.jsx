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
        <div className="sticky top-0 bg-white dark:bg-gray-900 position-fixed w-full left-0 rigth-0 z-999 transition-colors duration-300">
            <header className="max-w-7xl mx-auto bg-white dark:bg-gray-900">
                <div className="flex justify-between items-center w-full h-16 font-bold text-2xl px-4 text-gray-900 dark:text-white">
                    <Link to='/' className="hover:text-gray-600 dark:hover:text-gray-300">yeonji</Link>
                    <nav className="items-center space-x-6 hidden sm:flex">
                        {navItems.map(item => (
                            <NavLink key={item.id} to={item.to} className="text-gray-900 dark:text-white hover:text-gray-400 dark:hover:text-gray-300">
                                {item.label}
                            </NavLink>

                        ))}

                    </nav>
                    <button className="sm:hidden text-gray-900 dark:text-white" onClick={toggleMenu}>
                        <FaBars />
                    </button>
                </div>

                {/* mobile Menu */}
                <aside className={`
            fixed top-0 right-0 w-64 h-full bg-gray-300 dark:bg-gray-800 z-999
            ${isMenuOpen ? '-translate-x-0' : 'translate-x-full'}
            sm:hidden transform transition-transform duration-300 ease-in-out `} >

                    <div className="flex justify-end p-4">
                        <button className="text-gray-900 dark:text-white focus:outline-none" aria-label="close menu" onClick={toggleMenu}>
                            <FaTimes className="h-6 w-6" />
                        </button>
                    </div>
                    <nav className="flex flex-col space-y-4 p-4 items-start w-full h-screen pt-32 text-gray-900 dark:text-white">
                        {navItems.map(item => (
                            <NavLink key={item.id} to={item.to} className="hover:text-gray-600 dark:hover:text-gray-300">
                                {item.label}
                            </NavLink>

                        ))}
                    </nav>



                </aside>


            </header>

        </div>
    );
};