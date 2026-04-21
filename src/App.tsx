import React from 'react';
import styles from './App.module.css'; // CSS Module 导入
import Header from './components/Header';
import Nav from './components/Nav';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  return (
    // 使用 Grid 布局构建页面骨架
    <div className={styles.pageLayout}>
      {/* 语义化标签：页眉区域 */}
      <Header />
      {/* 语义化标签：导航区域 */}
      <Nav />
      {/* 语义化标签：主要内容区域 */}
      <div className={styles.contentWrapper}>
        <MainContent />
        {/* 语义化标签：侧边栏区域（广告/相关链接） */}
        <Sidebar />
      </div>
    </div>
  );
};

export default App;