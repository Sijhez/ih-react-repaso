import React from "react";
//con LINK hacemos sustitucion de hipervínculos internos, para vínculos externos usar <a>
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-black">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
            <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                <div className="flex items-center">
                    <Link to="/">
                        <img className="h-10 w-auto" src="https://cdn.worldvectorlogo.com/logos/ironhack-1.svg" alt="" />
                    </Link>
                    <div className="ml-10 space-x-8 lg:block">
                        <Link to="/" className="text-base font-medium text-white hover:text-indigo-50">
                            Inicio
                        </Link>

                        <Link to="/crud" className="text-base font-medium text-white hover:text-indigo-50">
                            CRUD
                        </Link>

                        <Link to="/countries" className="text-base font-medium text-white hover:text-indigo-50">
                            Países
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    )
}

export default Header
