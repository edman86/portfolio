import { AiFillGithub } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import './card.scss';

const Card = ({ name, image, description, appLink, repoLink, setOpen }) => {
    return (
        <article className="card">
            <header className="card__image-container">
                <img className="card__image" src={image} alt={name} />
            </header>
            <main className="card__content">
                <h2 className="card__title">{name}</h2>
                <ul className="card__description">
                    {description.map((item, index) => {
                        return (
                            <li key={index} className="card__category-item">{item}</li>
                        )
                    })}
                </ul>
            </main>
            <footer className="card__footer">
                <a className="link" href={repoLink}>
                    <AiFillGithub size="2em" className="github-icon" />
                </a>
                
                <BsFillInfoCircleFill 
                    size="2em"
                    className="info-icon"
                    onClick={ () => setOpen(name) }
                />
                
                <a className="link" href={appLink}>
                    <button type="button" className="card__button">
                        View project
                    </button>
                </a>
            </footer>
        </article>
    )
};

export default Card;