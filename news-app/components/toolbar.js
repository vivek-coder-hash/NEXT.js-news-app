//import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.css';

function Toolbar() {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div onClick={() => router.push('/')}>Home</div>
      <div onClick={() => router.push('/feed/1')}>FEED</div>

      <div
        onClick={() => (window.location.href = 'https://twitter.com/vivek852')}
      >
        twitter
      </div>
    </div>
  );
}

export default Toolbar;
