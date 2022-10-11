import styles from './MetricCard.module.scss';

import Card from './Card';
import { useMemo } from 'react';
import IonIcon from '@reacticons/ionicons';

interface BadgeData {
  backgroundColor: string;
  color: string;
  icon: any;
}

interface Props {
  metric: string | number;
  label: string;
  badgeType?: 'increase' | 'decrease';
  badgeText?: string;
}

const badgeDataForType = {
  increase: {
    backgroundColor: 'rgba(85, 214, 50, 0.12)',
    color: '#347659',
    icon: 'arrow-up'
  },
  decrease: {
    backgroundColor: '#FBE5E6',
    color: '#AE2A3F',
    icon: 'arrow-down'
  }
}

const MetricCard = ({ metric, label, badgeType, badgeText }: Props) => {
  const badgeData: Partial<BadgeData> = useMemo(() => {
    if (!badgeType || !badgeText) return {};
    
    return badgeDataForType[badgeType];
  }, [badgeText, badgeType]);

  const renderMetric = () => {
    if (typeof metric === 'number')
      return (
        <div className={styles.metricWrapper}>
          <span className={styles.metric}>${metric.toLocaleString('en')}</span>
          <span className={styles.currency}> MXN</span>
        </div>
      );

    return <p className={styles.metric}>{metric}</p>;
  };

  return (
    <Card className={styles.container}>
      <p className={styles.label}>{label}</p>
      {renderMetric()}
      {!!badgeType && !!badgeText ? (
        <div 
          className={styles.badge} 
          style={{ color: badgeData.color, backgroundColor: badgeData.backgroundColor }}
        >
          <IonIcon name={badgeData.icon} className={styles.badgeIcon} />
          <p className={styles.badgeText}>{badgeText}</p>
        </div>
      ) : null}
    </Card>
  );
};

MetricCard.defaultProps = {
  badgeType: undefined,
  badgeText: undefined
}

export default MetricCard;
