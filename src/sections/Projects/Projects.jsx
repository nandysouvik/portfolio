import styles from './ProjectsStyles.module.css';
import ticTacToe from '../../assets/game-logo.png';
import investmentCalculator from '../../assets/investment-calculator-logo.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

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
          p=""
        />
        {/* <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
