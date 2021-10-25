import React, { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import { first, last } from 'lodash';
import styles from './App.module.scss';
import Navigation from './components/common/Navigation';
import Info from './components/Info';
import Education from './components/Education';
import Work from './components/Work';

const HEADER_HEIGHT = 70;
const sections = [
  { label: 'Info', name: 'Info' },
  { label: 'Education', name: 'Education' },
  { label: 'Work', name: 'Work' },
  { label: 'Projects', name: 'Projects' },
  { label: 'About Me', name: 'AboutMe' },
];

const App = () => {
  const appRef = useRef(null);
  const [active, setActive] = useState(sections[0].name);
  useEffect(() => {
    const handleScroll = (e) => {
      const container = e.srcElement;
      const dividers = $(`.${styles.divider}`).toArray();
      const scrollPosition = container.scrollTop + HEADER_HEIGHT;
      let activeSection = sections[0].name;
      for(let i = 0; i< dividers.length; ++i) {
        const divider = dividers[i];
        const id = divider.id;
        const position = divider.offsetTop;
        if (position <= scrollPosition) {
          activeSection = id;
        } else { break }
      }
      if (activeSection !== active) {
        setActive(activeSection);
      }
      const maxScroll = Math.max(
        last(dividers).offsetTop - HEADER_HEIGHT,
        container.scrollHeight - 2 * container.clientHeight
      );
      if (container.scrollTop > maxScroll) {
        container.scrollTop = maxScroll;
      }
    }
    const appDiv = appRef.current;
    appDiv.addEventListener('scroll', handleScroll);
    return () => {
      appDiv.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <div className={styles.App} ref={appRef}>
      <div className={styles.header}>
        <Navigation
          items={sections}
          active={active}
          onClick={(section) => {
            const el = first($(`#${section}`).toArray());
            const scrollDestination = el.offsetTop - HEADER_HEIGHT;
            appRef.current.scroll({ top: scrollDestination, behavior: 'smooth' })
          }}
        />
        <div className={styles.divider} id="Info"/>
      </div>
      <div className={styles.content}>
        <Info className={styles.section} />
        <div className={styles.divider} id="Education"/>
        <Education className={styles.section} />
        <div className={styles.divider} id="Work"/>
        <Work className={styles.section} />
        <div className={styles.divider} id="Projects"/>
        <p>
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka

          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka

          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka

          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
        </p>
        <div className={styles.divider} id="AboutMe"/>
        <p>
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
          adasdashdaij djkajsdlakd jdasnaslkdaslkd daksjmlakdmalklsdma makdlsmaslkdamsdlka
        </p>
      </div>
      <div className={styles.footer} />
    </div>
  );
}

export default App;
