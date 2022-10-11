import type { CSSProperties, ReactNode } from 'react';
import styles from './Card.module.scss';

interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
  style?: CSSProperties;
}

const Card = ({ children, className, style }: Props) => (
  <div className={`${styles.card} ${className}`} style={style}>
    {children}
  </div>
);

Card.defaultProps = {
  className: '',
  style: {}
};

export default Card;
