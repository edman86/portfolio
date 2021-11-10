import Card from "../Card/Card";
import budgetTrackerCover from '../../assets/budget-tracker-cover.png';
import notesCover from '../../assets/notes-cover.png';
import './main.scss';

const Main = () => {
    return (
        <main className="main">
            <div className="main__item">
                <Card 
                    name="Budget Tracker"
                    image={budgetTrackerCover}
                    description={['React', 'React Context', 'Material UI', 'Charts.js', 'Speechly']}
                    appLink={'https://edman-budget-tracker.netlify.app/'}
                    repoLink={'https://github.com/edman86/budget-tracker'}
                />
            </div>
            <div className="main__item">
                <Card 
                    name="Notes"
                    image={notesCover}
                    description={['React', 'React Router', 'Redux (Toolkit)', 'SASS']}
                    appLink={'https://edman-notes.netlify.app/'}
                    repoLink={'https://github.com/edman86/notes-app'}
                />
            </div>
        </main>
    );
};

export default Main;