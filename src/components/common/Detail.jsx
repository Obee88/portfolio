
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { getDetailsLvl } from '../../state/selectors';
import './Detail.scss';

const Detail = ({ lvl , children }) => {
  const detailsLvl = useSelector(getDetailsLvl);
  const shouldShow = lvl <= detailsLvl;
  const [visible, setVisible] = useState(true);
  return (
    <CSSTransition
      in={shouldShow}
      timeout={400}
      classNames="detail"
      onEnter={() => setVisible(true)}
      onExited={() => setVisible(false)}
    >
      <span>{visible ? children : null}</span>
    </CSSTransition>
  );
   
};

export default Detail;