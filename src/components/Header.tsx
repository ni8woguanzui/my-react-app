import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <p>分享前端知识和心得</p>
    </header>
  );
};

export default Header;