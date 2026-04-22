import React, { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Nav from './components/Nav';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  const [blogTitle] = useState<string>("我的技术博客");

  const handleSubscribe = (email: string) => {
    console.log("App 组件收到了订阅邮箱:", email);
    alert(`感谢订阅！邮箱 ${email} 已收到。`);
  };

  return (
    <div className={styles.pageLayout}>
      <Header title={blogTitle} />
      <Nav />
      <MainContent />
      <Sidebar onSubscribe={handleSubscribe} />
    </div>
  );
};

export default App;