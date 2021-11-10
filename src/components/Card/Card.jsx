import { AiFillGithub } from 'react-icons/ai';
import { BiRightArrow } from 'react-icons/bi';
import './card.scss';

const Card = ({ name, image, description, appLink, repoLink }) => {
    return (
        <article className="card">
            <header className="card__image-container">
                <img className="card__image" src={image} alt={name} />
                <div className="card__visual-filter"></div>
            </header>
            <main className="card__content">
                <h2 className="card__title">{name}</h2>
                <ul className="card__description">
                    {description.map(item => {
                        return (
                            <li>{item}</li>
                        )
                    })}
                </ul>
            </main>
            <footer className="card__footer">
                <a className="link" href={appLink}>
                    <button type="button" className="card__button border-animation">
                        <BiRightArrow size="1.5em" />
                        <span className="label">Open Project</span>
                    </button>
                </a>
                <a className="link" href={repoLink}>
                    <button type="button" className="card__button border-animation">
                        <AiFillGithub size="1.5em" />
                        <span className="label">Source Code</span>
                    </button>    
                </a>    
            </footer>
        </article>
    )
};

export default Card;