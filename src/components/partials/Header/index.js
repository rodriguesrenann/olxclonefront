import React from 'react';
import { HeaderArea } from './styled.js';
import { Link } from 'react-router-dom';
import { doLogout, isLogged } from '../../../helpers/AuthHandler';

const Header = () => {
    let logged = isLogged();
    console.log(logged);
    
    const handleLogout = () => {
        doLogout();
        window.location.href = '/';
    }

    return (
        <HeaderArea>
            <div className='container'>
                <div className='logo'>
                    <Link to='/'>
                        <span className='logo-1'>O</span>
                        <span className='logo-2'>L</span>
                        <span className='logo-3'>X</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {logged &&
                            <>
                                <li>
                                    <Link to='/profile'>Minha conta</Link>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>Sair</button>
                                </li>
                                <li>
                                    <Link to='/newad' className='button'>Anuncie agora</Link>
                                </li>
                            </>
                        }
                        {!logged &&
                            <>
                                <li>
                                    <Link to='/signin'>Login</Link>
                                </li>
                                <li>
                                    <Link to='/signup'>Cadastre-se</Link>
                                </li>
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;