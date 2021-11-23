import { AiFillGithub } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import './card.scss';

const Card = ({ name, image, description, appLink, repoLink, setOpen, colorModificator }) => {
    return (
        <article className={`card card-color-modificator${colorModificator}`}>
            <header className={`card__image-container image-container-color-modificator${colorModificator}`}>
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
                    <AiFillGithub size="2.3em" className={`github-icon color-modificator${colorModificator}`} />
                </a>
                
                <BsFillInfoCircleFill 
                    size="2em"
                    className={`info-icon color-modificator${colorModificator}`}
                    onClick={ () => setOpen(name) }
                />
                
                <a className="link" href={appLink}>
                    <button type="button" className={`card__button background-modificator${colorModificator}`}>
                        View project
                    </button>
                </a>
            </footer>
        </article>
    )
};

export default Card;