import React from 'react';
import { Slider } from 'material-ui-slider';
import styles from './DetailsSlider.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailsLvl } from '../../state/selectors';
import { setDetailsLevel } from '../../state/actions';

const DetailsSlider = ({ min = 1, max = 3, key }) => {
  const value = useSelector(getDetailsLvl);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <Slider
          min={min}
          max={max}
          value={value}
          onChange={(v) => { dispatch(setDetailsLevel(v)) }}
          step={1}
          marks
        />
      </div>
      <div className={styles.labels}>
        <div onClick={() => { dispatch(setDetailsLevel(Math.max(min, value - 1)))}}>Less</div>
        <div onClick={() => { dispatch(setDetailsLevel(Math.min(max, value + 1)))}}>More</div>
      </div>
      <div className={styles.info}>
        <div>Details Level</div>
      </div>
    </div>
  );
};

export default DetailsSlider;