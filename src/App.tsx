import MetricCard from './components/MetricCard';

import styles from './App.module.scss';

const App = () => (
  <div className={styles.container}>
    <div className={styles.title}>Bienvenido [user.name]</div>
    <div className={styles.sectionTitle}>Reporte de <span className={styles.highlight}>Hoy</span></div>
  </div>
);

export default App;
