import styles from './ProjectsStyles.module.css';
import ticTacToe from '../../assets/game-logo.png';
import investmentCalculator from '../../assets/investment-calculator-logo.png';
import amazonClone from '../../assets/amazon-logo.png';
import covidTracker from '../../assets/covid-tracker.png';
import ProjectCard from '../../common/ProjectCard';
import ChallengersGame from '../../assets/challenge.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ticTacToe}
          link="https://github.com/nandysouvik/tic-tac-toe"
          h3="Tic-Tac-Toe"
          p="Game App"
        />
        <ProjectCard
          src={investmentCalculator}
          link="https://github.com/nandysouvik/investment_calculator"
          h3="Investment Calculator"
          p="Investment App"
        />
        <ProjectCard
          src={amazonClone}
          link="https://github.com/nandysouvik/amazonClone"
          h3="Amazon Clone"
          p="Shop Cart"
        />
        <ProjectCard
          src={covidTracker}
          link="https://github.com/nandysouvik/covid-tracker"
          h3="Covid Tracker"
          p="Fitness App"
        />
        <ProjectCard
          src={ChallengersGame}
          link="https://github.com/nandysouvik/challengers-game"
          h3="Challengers Game"
          p="ChallengersGame App"
        />
      </div>
    </section>
  );
}

export default Projects;
