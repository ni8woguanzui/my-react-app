import React, { useEffect, useState } from 'react';
import styles from './Sidebar.module.css';

// 定义组件接收的 Props 类型，包含一个可选的订阅回调函数
interface SidebarProps {
  onSubscribe?: (email: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSubscribe }) => {
  // 1. 定时器：实时显示当前时间
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  // 2. 处理订阅表单提交
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 阻止表单默认提交行为，防止页面刷新
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;

    if (email && onSubscribe) {
      onSubscribe(email); // 调用父组件传来的函数，把邮箱传给父组件
      event.currentTarget.reset(); // 提交后清空表单
    } else if (!email) {
      alert('请输入邮箱地址！');
    }
  };

  return (
    <aside className={styles.sidebar}>
      {/* 作者简介 */}
      <section className={styles.widget}>
        <h3>关于作者</h3>
        <div className={styles.authorInfo}>
          <img
            src="https://via.placeholder.com/64"
            alt="张三"
            className={styles.avatar}
          />
          <p>张三，全栈开发工程师，热爱分享技术。拥有5年一线大厂经验，目前专注于前端工程化与性能优化。</p>
        </div>
      </section>

      {/* 显示当前时间 */}
      <section className={styles.widget}>
        <h3>当前时间</h3>
        <p>{currentTime.toLocaleTimeString()}</p>
      </section>

      {/* 社交链接 */}
      <section className={styles.widget}>
        <h3>关注我</h3>
        <ul className={styles.socialLinks}>
          <li><a href="#" aria-label="GitHub">GitHub</a></li>
          <li><a href="#" aria-label="Twitter">Twitter</a></li>
          <li><a href="#" aria-label="LinkedIn">LinkedIn</a></li>
        </ul>
      </section>

      {/* 订阅表单（添加了 onSubmit 事件） */}
      <section className={`${styles.widget} ${styles.ctaWidget}`}>
        <h3>订阅更新</h3>
        <p>获取最新的文章和技术干货，每周发送一次，随时退订。</p>
        <form className={styles.subscribeForm} onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="你的邮箱" required />
          <button type="submit">订阅</button>
        </form>
      </section>

      {/* 合作伙伴 */}
      <section className={styles.widget}>
        <h3>合作伙伴</h3>
        <div className={styles.partners}></div>
      </section>
    </aside>
  );
};

export default Sidebar;