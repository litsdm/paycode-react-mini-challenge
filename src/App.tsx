import { useEffect, useState } from 'react';
import axios from 'axios';

import MetricCard from './components/MetricCard';

import styles from './App.module.scss';

import type { User, ResponseReport } from './types';

const App = () => {
  const [user, setUser] = useState<Partial<User>>({});

  const calculatePercentage = (currentMetric: number, previousMetric: number) => {
    if (currentMetric > previousMetric) return `${((currentMetric / previousMetric - 1) * 100).toFixed(2)}%`;
    return `${((previousMetric / currentMetric - 1) * 100).toFixed(2)}%`;
  };

  const getBadgeType = (currentMetric: number, previousMetric: number) => {
    if (currentMetric >= previousMetric) return 'increase';
    return 'decrease';
  };

  /**
   * TODO
   * Crear la funcion fetchReport para obtener el reporte desde '/challenge/unauth/report'
   * 
   * Usar una variable de state `report` y setearla con el resultado de la request
   * para poder usarla para renderizar los elementos del diseño.
   * 
   * Te puedes guiar en la funcion de `fetchUser`
   */

  const fetchUser = async () => {
    try {
      const { data } = await axios.get('/challenge/unauth/me');
      
      setUser(data);
    } catch (exception) {
      console.log((exception as Error).message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  /**
   * TODO
   * Renderizar las tres Cards del diseño utilizando el componente importado `MetricCard`
   * y usando los datos que obtuvimos en la funcion de `fetchReport`
   */

  return (
    <div className={styles.container}>
      <div className={styles.title}>Bienvenido {user.name}</div>
      <div className={styles.sectionTitle}>Reporte de <span className={styles.highlight}>Hoy</span></div>
    </div>
  );
}

export default App;
