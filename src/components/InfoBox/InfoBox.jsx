import { useEffect, useRef } from 'react';
import { MdClose } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import info from '../../info';
import './infoBox.scss';

const InfoBox = ({ isOpen, setOpen, current }) => {

    const currentProject = info[current];

    const backdropRef = useRef();
    const decriptionRef = useRef();

    const handleClose = () => {
        setOpen(false);
    };

    const viewProject = () => {
        window.location.href = currentProject.app_link;
    };

    useEffect(() => {
        decriptionRef.current.innerHTML = currentProject.description_en;
    }, [current]);

    useEffect(() => {
        // This code is responsible for closing the component 
        // when the user clicks outside of the dialog box.

        let element = backdropRef.current;

        function outsideClick(e) {
            if (e.target === element) {
                handleClose();
            }
        }
        element.addEventListener('click', outsideClick);

        return () => {
            element.removeEventListener('click', outsideClick);
        }
    }, []);

    useEffect(() => {
        // Disable of document body scrolling,
        // while the dialog component is open.
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    return (
        <div className={`backdrop ${isOpen && 'is-open'}`} ref={backdropRef}>
            <article className="infobox">
                <button
                    className="infobox__close-btn"
                    onClick={handleClose}
                >
                    <MdClose size="2.5em" />
                </button>

                <section className="infobox__description" ref={decriptionRef}></section>

                <h2 className="infobox__title">{`Tech stack`}</h2>
                
                <ul className="infobox__categories">
                    {currentProject.stack.map((item, index) => {
                        return (
                            <li key={index} className="infobox__category-item">
                                {item}
                            </li>
                        );
                    })}
                </ul>

                <footer className="infobox__footer">
                    <a className="link" href={currentProject.repo_link}>
                        <AiFillGithub size="2.5rem" className="github-icon" />
                    </a>
                    <button className="card__button" onClick={viewProject}>View project</button>
                </footer>
            </article>
        </div>
    );
};

export default InfoBox;