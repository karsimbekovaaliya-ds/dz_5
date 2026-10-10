import './App.css'

function App() {
  const skills = [
    'HTML / CSS',
    'JavaScript',
    'React',
    'Python',
    'Java',
    'SQL / PostgreSQL',
    'Git / GitHub',
    'Docker'
  ];

  return (
    <div className="resume-container">
      <header className="header">
        <h1>Алия Карсимбекова</h1>
        <h2>Junior Web Developer / Data Analyst</h2>
        <div className="contacts">
          <span>Бишкек, Кыргызстан</span> • 
          <span> <a href="https://github.com/karsimbekovaaliya-ds" target="_blank" rel="noreferrer">GitHub</a></span> • 
          <span> email@example.com</span>
        </div>
      </header>

      <section className="section">
        <h3>О себе</h3>
        <p>
          Студентка направления информационной аналитики и веб-разработки. Интересуюсь созданием 
          удобных интерактивных интерфейсов, работой с backend-сервисами и реляционными базами данных.
        </p>
      </section>

      <section className="section">
        <h3>Навыки</h3>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill-badge">{skill}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h3>Проекты</h3>
        <div className="card">
          <div className="card-header">
            <strong>«Книго Мир»</strong>
            <span className="card-date">2026</span>
          </div>
          <p>Веб-приложение онлайн-магазина на Java (Spring Boot) с подключением базы данных.</p>
        </div>

        <div className="card">
          <div className="card-header">
            <strong>Анализ книжных рейтингов</strong>
            <span className="card-date">2026</span>
          </div>
          <p>Парсинг данных при помощи Python (BeautifulSoup, Requests) и обработка информации в Pandas.</p>
        </div>

        <div className="card">
          <div className="card-header">
            <strong>Интерактивный задачник и учет общежития</strong>
            <span className="card-date">2026</span>
          </div>
          <p>Фронтенд-приложения на HTML, CSS и JS с деплоем на GitHub Pages.</p>
        </div>
      </section>

      <section className="section">
        <h3>Образование</h3>
        <div className="card">
          <div className="card-header">
            <strong>Кыргызско-Германский университет</strong>
            <span className="card-date">2024 – настоящее время</span>
          </div>
          <p>Бакалавриат, Информационная аналитика (2 курс)</p>
        </div>
      </section>

      <section className="section">
        <h3>Языки</h3>
        <p>Русский (родной), Казахский (свободно), Английский, Немецкий.</p>
      </section>
    </div>
  )
}

export default App