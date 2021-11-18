import { AiFillGithub } from 'react-icons/ai';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <div className="header__main-title">
                        <h1 className="header__title">Edgar Manukyan</h1>
                        <h2 className="header__subtitle">Front End Developer</h2>
                    </div>
                    <a className="header__link" href="https://github.com/edman86/">
                        <AiFillGithub size="3em" color="#fff" />
                    </a>
                </div>    
            </div>
        </header>
    );
};

export default Header;