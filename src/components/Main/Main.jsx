import { useState } from "react";
import Card from "../Card/Card";
import InfoBox from "../InfoBox/InfoBox";
import getPizzaCover from '../../assets/getPizza.png';
import budgetTrackerCover from '../../assets/budget-tracker-cover.png';
import notesCover from '../../assets/notes-cover.png';
import pizza from '../../assets/pizza.png';
import budget from '../../assets/budget.png';
import notes from '../../assets/notes.png';
import './main.scss';

const Main = () => {
    const [isInfoBoxOpen, setInfoBoxOpen] = useState(false);
    const [currentInfo, setCurrentInfo] = useState('default');

    const openInfoBox = (name) => {
        setInfoBoxOpen(true);
        setCurrentInfo(name);
    };

    return (
        <main className="main">
            <h2 className="main__title">Personal Projects</h2>
            <div className="main__projects">
                <div className="main__item">
                    <Card
                        name="getPizza"
                        image={getPizzaCover}
                        description={['React', 'Redux', 'Redux-thunk', 'React Router', 'Sass', 'Firebase']}
                        appLink={'https://edmangetpizza.netlify.app/'}
                        repoLink={'https://github.com/edman86/getPizza'}
                        colorModificator={'--orange'}
                        setOpen={openInfoBox}
                    />
                </div>
                <div className="main__item">
                    <Card
                        name="Budget Tracker"
                        image={budgetTrackerCover}
                        description={['React', 'React Context API', 'Material UI', 'Charts.js', 'Speechly']}
                        appLink={'https://edman-budget-tracker.netlify.app/'}
                        repoLink={'https://github.com/edman86/budget-tracker'}
                        colorModificator={'--blue'}
                        setOpen={openInfoBox}
                    />
                </div>
                <div className="main__item">
                    <Card
                        name="Notes"
                        image={notesCover}
                        description={['React', 'React Router', 'Redux Toolkit', 'Sass']}
                        appLink={'https://edman-notes.netlify.app/'}
                        repoLink={'https://github.com/edman86/notes-app'}
                        colorModificator={'--purple'}
                        setOpen={openInfoBox}
                    />
                </div>
            </div>

            <InfoBox
                current={currentInfo}
                isOpen={isInfoBoxOpen}
                setOpen={setInfoBoxOpen}
            />
        </main>
    );
};

export default Main;