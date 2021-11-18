import { useState } from "react";
import Card from "../Card/Card";
import InfoBox from "../InfoBox/InfoBox";
import getPizzaCover from '../../assets/getPizza.png';
import budgetTrackerCover from '../../assets/budget-tracker-cover.png';
import notesCover from '../../assets/notes-cover.png';
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
            <div className="main__item">
                <Card 
                    name="getPizza"
                    image={getPizzaCover}
                    description={['React', 'Redux', 'Redux-thunk', 'React Router', 'Sass/SCSS', 'Firebase']}
                    appLink={'https://edmangetpizza.netlify.app/'}
                    repoLink={'https://github.com/edman86/getPizza'}
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
                    setOpen={openInfoBox}
                />
            </div>
            <div className="main__item">
                <Card
                    name="Notes"
                    image={notesCover}
                    description={['React', 'React Router', 'Redux Toolkit', 'Sass/SCSS']}
                    appLink={'https://edman-notes.netlify.app/'}
                    repoLink={'https://github.com/edman86/notes-app'}
                    setOpen={openInfoBox}
                />
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