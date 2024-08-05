import classNames from "classnames";
import styles from './Label.module.scss';

export const LABEL_TYPES = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
}

const Label = ({ type, children }) => (
  <div className={classNames(styles.label, styles[type])}>
    {children}
  </div>
);

export default Label;