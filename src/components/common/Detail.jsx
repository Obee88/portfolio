import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { getDetailsLvl } from '../../state/selectors';
import './Detail.scss';

// Keep in sync with the transition durations in Detail.scss.
const TIMEOUT = 400;

const Detail = ({ lvl, children }) => {
  const detailsLvl = useSelector(getDetailsLvl);
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={lvl <= detailsLvl}
      nodeRef={nodeRef}
      timeout={TIMEOUT}
      classNames="detail"
      mountOnEnter
      unmountOnExit
    >
      <span className="detail" ref={nodeRef}>{children}</span>
    </CSSTransition>
  );
};

export default Detail;
