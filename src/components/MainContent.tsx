import React, { useState, useEffect } from 'react';
import styles from './MainContent.module.css';

// 定义文章的数据结构
interface Article {
  id: number;
  title: string;
  date: string;
  author: string;
  contentSections: {
    title: string;
    text: string;
    code?: string;
  }[];
  tags: string[];
}

const MainContent: React.FC = () => {
  // 1. 定义状态变量：文章数据 + 加载状态
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 2. 使用 useEffect 模拟从服务器获取数据
  useEffect(() => {
    console.log("组件已挂载，开始获取文章数据...");

    // 模拟异步请求
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));

      // 模拟服务器返回的数据
      const mockArticles: Article[] = [
        {
          id: 1,
          title: "理解 JavaScript 闭包",
          date: "2030-08-10",
          author: "张三",
          contentSections: [
            {
              title: "什么是闭包？",
              text: "闭包是指有权访问另一个函数作用域中的变量的函数。创建闭包的常见方式是在一个函数内部创建另一个函数。"
            },
            {
              title: "实际应用场景",
              text: "闭包常用于模块化、数据私有化、函数柯里化等场景。例如，可以使用闭包创建私有变量：",
              code: `function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}`
            }
          ],
          tags: ["JavaScript", "前端"]
        },
        {
          id: 2,
          title: "CSS Grid 入门",
          date: "2030-08-15",
          author: "张三",
          contentSections: [
            {
              title: "什么是Grid布局？",
              text: "Grid 是二维布局系统，可同时处理行和列。通过将容器定义为网格，可以轻松地将子元素放置到任何你想要的位置。"
            }
          ],
          tags: ["CSS", "布局"]
        }
      ];

      // 更新状态：数据加载完成
      setArticles(mockArticles);
      setIsLoading(false);
      console.log("文章数据获取完成！");
    };

    fetchData();
  }, []);

  // 3. 根据加载状态显示不同内容
  if (isLoading) {
    return (
      <main className={styles.main}>
        <p>加载文章中...</p>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      {/* 遍历文章数据 */}
      {articles.map((article) => (
        <article key={article.id} className={styles.article}>
          <header className={styles.articleHeader}>
            <h2>{article.title}</h2>
            <p>发布于 <time dateTime={article.date}>{article.date}</time> by {article.author}</p>
          </header>

          {/* 遍历文章内容章节 */}
          {article.contentSections.map((section, index) => (
            <section key={index} className={styles.section}>
              <h3>{section.title}</h3>
              <p>{section.text}</p>
              {section.code && (
                <pre className={styles.codeBlock}>
                  {section.code}
                </pre>
              )}
            </section>
          ))}

          <footer className={styles.articleFooter}>
            <p>
              标签：
              {article.tags.map((tag, tagIndex) => (
                <span key={tagIndex}>
                  <a href="#">{tag}</a>
                  {tagIndex < article.tags.length - 1 && ', '}
                </span>
              ))}
            </p>
          </footer>
        </article>
      ))}

      {/* 营销区域 */}
      <div className={styles.highlightCta}>
        <p><mark className={styles.mark}>🔥 热门教程：</mark> 想要掌握更多前端技巧？<a href="#">点击这里订阅我的 newsletter</a></p>
      </div>
    </main>
  );
};

export default MainContent;