import { AiFillGithub } from 'react-icons/ai';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <h1 className="header__title">My Portfolio</h1>
                    <a className="header__link" href="https://github.com/edman86/">
                        <AiFillGithub size="3em" color="#fff" />
                    </a>
                </div>    
            </div>
        </header>
    );
};

export default Header;