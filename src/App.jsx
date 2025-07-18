"use client"

import { useState, useEffect } from "react"
import "./index.css"
import logo from './2.png'
import galo from './galo.png'
// Dados dos esportes
const sportsData = [
  {
    title: "Judô",
    description: "Aulas de judô",
    icon: "🥋",
    ages: "12 a 16 anos",
    schedules: {
      "Segunda-feira": ["16:00 - 17:30 (Infantil)", "18:00 - 19:30 (Juvenil)", "20:00 - 21:30 (Adulto)"],
      "Terça-feira": ["16:00 - 17:30 (Infantil)", "18:00 - 19:30 (Juvenil)"],
      "Quarta-feira": ["16:00 - 17:30 (Infantil)", "18:00 - 19:30 (Juvenil)", "20:00 - 21:30 (Adulto)"],
      "Quinta-feira": ["16:00 - 17:30 (Infantil)", "18:00 - 19:30 (Juvenil)"],
      "Sexta-feira": ["16:00 - 17:30 (Infantil)", "20:00 - 21:30 (Adulto)"],
      Sábado: ["8:00 - 9:30 (Infantil)", "10:00 - 11:30 (Juvenil)", "14:00 - 15:30 (Adulto)"],
    },
  },
  {
    title: "Futebol Infantil",
    description: "Futebol Para Crianças",
    icon: "🏟️",
    ages: "7 a 13 anos",
    schedules: {
      "Segunda-feira": ["17:00 - 18:00 (Infantil)", "19:00 - 20:30 (Adulto)"],
      "Terça-feira": ["17:00 - 18:00 (Infantil)", "19:00 - 20:30 (Juvenil)"],
      "Quarta-feira": ["17:00 - 18:00 (Infantil)", "19:00 - 20:30 (Adulto)"],
      "Quinta-feira": ["17:00 - 18:00 (Infantil)", "19:00 - 20:30 (Juvenil)"],
      "Sexta-feira": ["19:00 - 20:30 (Adulto)"],
      Sábado: ["9:00 - 10:00 (Infantil)", "10:30 - 12:00 (Juvenil)", "15:00 - 16:30 (Adulto)"],
    },
  },
  {
    title: "Futebol Jovens",
    description: "Futebol para jovens",
    icon: "🥅",
    ages: "14 a 17 anos",
    schedules: {
      "Segunda-feira": ["19:00 - 20:00 (Juvenil)", "20:30 - 21:30 (Adulto)"],
      "Quarta-feira": ["19:00 - 20:00 (Juvenil)", "20:30 - 21:30 (Adulto)"],
      "Sexta-feira": ["19:00 - 20:00 (Juvenil)", "20:30 - 21:30 (Adulto)"],
      Sábado: ["16:00 - 17:00 (Juvenil)", "17:30 - 18:30 (Adulto)"],
      Domingo: ["9:00 - 10:00 (Juvenil)", "10:30 - 11:30 (Adulto)", "16:00 - 17:00 (Adulto)"],
    },

  },
  {
    title: "Escolinha Infantil",
    description: "Iniciação esportiva com foco na diversão e aprendizado",
    icon: "🧒",
    ages: "4 a 12 anos",
    schedules: {
      "Segunda-feira": ["15:00 - 16:00 (4-6 anos)", "16:30 - 17:30 (7-9 anos)", "18:00 - 19:00 (10-12 anos)"],
      "Quarta-feira": ["15:00 - 16:00 (4-6 anos)", "16:30 - 17:30 (7-9 anos)", "18:00 - 19:00 (10-12 anos)"],
      "Sexta-feira": ["15:00 - 16:00 (4-6 anos)", "16:30 - 17:30 (7-9 anos)", "18:00 - 19:00 (10-12 anos)"],
      Sábado: ["8:00 - 9:00 (4-6 anos)", "9:30 - 10:30 (7-9 anos)", "11:00 - 12:00 (10-12 anos)"],
    },
  },
  {
    title: "Beach Tênis",
    description: "Modalidade complementar para desenvolvimento motor",
    icon: "🎾",
    ages: "Livre",
    schedules: {
      "Terça-feira": ["18:00 - 19:30 (Juvenil)", "20:00 - 21:30 (Adulto)"],
      "Quinta-feira": ["18:00 - 19:30 (Juvenil)", "20:00 - 21:30 (Adulto)"],
      Sábado: ["13:00 - 14:30 (Juvenil)", "15:00 - 16:30 (Adulto)"],
      Domingo: ["14:00 - 15:30 (Juvenil)", "16:00 - 17:30 (Adulto)"],
    },
  },
]

// Componentes de ícones SVG
const TrophyIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20.38C20.8 4 21.13 4.42 21.01 4.83L19.31 12H18.64C17.8 12 17 12.8 17 13.64V16C17 17.1 16.1 18 15 18H9C7.9 18 7 17.1 7 16V13.64C7 12.8 6.2 12 5.36 12H4.69L2.99 4.83C2.87 4.42 3.2 4 3.62 4H7ZM9 3V4H15V3H9ZM12 6.5C10.62 6.5 9.5 7.62 9.5 9S10.62 11.5 12 11.5 14.5 10.38 14.5 9 13.38 6.5 12 6.5Z" />
  </svg>
)

const ChevronDownIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

const ChevronUpIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
)

const ClockIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const MapPinIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const PhoneIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const MailIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const UsersIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

const TargetIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    />
  </svg>
)

const HeartIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
)

// Componente principal da aplicação
function App() {
  const [selectedSport, setSelectedSport] = useState(null)

  // Função para rolar suavemente para uma seção
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Função para alternar a exibição dos horários de um esporte
  const toggleSport = (index) => {
    setSelectedSport(selectedSport === index ? null : index)
  }

  // Função para lidar com o envio do formulário
  const handleFormSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = {
      nome: formData.get("nome"),
      telefone: formData.get("telefone"),
      email: formData.get("email"),
      modalidade: formData.get("modalidade"),
      mensagem: formData.get("mensagem"),
    }

    // Simular envio do formulário
    alert(`Obrigado, ${data.nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`)

    // Limpar formulário
    event.target.reset()
  }

  // Efeito para adicionar sombra no header ao fazer scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header")
      if (window.scrollY > 100) {
        header.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)"
      } else {
        header.style.boxShadow = "none"
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <a href="#" className="logo">
            
           <img src={logo} alt="" srcset="" width="65pc"/>
          </a>
          <nav className="nav">
            <button onClick={() => scrollToSection("historia")} className="nav-link">
              História
            </button>
            <button onClick={() => scrollToSection("esportes")} className="nav-link">
              Esportes
            </button>
            <button onClick={() => scrollToSection("local")} className="nav-link">
              Local
            </button>
            <button onClick={() => scrollToSection("contato")} className="nav-link">
              Contato
            </button>
          </nav>
        </div>
      </header>

      <main className="main">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Futebol Nota 10</h1>
              <p className="hero-subtitle">
                Onde a paixão pelo esporte se transforma em excelência. Venha fazer parte da nossa família esportiva!
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary btn-lg">Conheça Nossos Esportes</button>
                <button className="btn btn-secondary btn-lg bg-transparent">Entre em Contato</button>
              </div>
            </div>
          </div>
        </section>

        {/* História Section */}
        <section id="historia" className="section section-gray">
          <div className="container">
            <div className="historia-grid">
              <div className="historia-content">
                <h2 className="section-title">Nossa História</h2>
                <div className="historia-text">
                  <p className="text-lg">
                    O projeto <strong className="text-red">Futebol Nota 10</strong> nasceu em 2015 com o sonho de
                    democratizar o acesso ao esporte de qualidade em nossa comunidade.
                  </p>
                  <p>
                    Começamos com apenas um campo de futebol e a determinação de fazer a diferença na vida de crianças,
                    jovens e adultos através do esporte. Hoje, somos referência em formação esportiva e desenvolvimento
                    humano.
                  </p>
                  <p>
                    Ao longo dos anos, formamos centenas de atletas, alguns chegando ao futebol profissional, mas nosso
                    maior orgulho são os valores que transmitimos: disciplina, respeito, trabalho em equipe e
                    perseverança.
                  </p>
                </div>
                <div className="stats-grid">
                  <div className="stat">
                    <div className="stat-number">1000+</div>
                    <div className="stat-label">Atletas que Passaram pelo Projeto</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">8</div>
                    <div className="stat-label">Anos de História</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">15</div>
                    <div className="stat-label">Modalidades</div>
                  </div>
                </div>
              </div>
              <div className="historia-image">
                <img
                  src={galo}
                  alt="História do Futebol Nota 10"
                  className="image"
                />
                <div className="image-badge">
                  <HeartIcon className="heart-icon" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Esportes Section */}
        <section id="esportes" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Modalidades Esportivas</h2>
              <p className="section-subtitle">
                Oferecemos uma ampla variedade de esportes para todas as idades e níveis de habilidade
              </p>
              <p className="section-tip">Clique em cada modalidade para ver os horários de treino</p>
            </div>

            <div className="sports-grid">
              {sportsData.map((sport, index) => {
                const isSelected = selectedSport === index

                return (
                  <div
                    key={index}
                    className={`sport-card ${isSelected ? "selected" : ""}`}
                    onClick={() => toggleSport(index)}
                  >
                    <div className="sport-header">
                      <div className="sport-info">
                        <span className="sport-icon">{sport.icon}</span>
                        <div>
                          <h3 className="sport-title">{sport.title}</h3>
                          <p className="sport-ages">{sport.ages}</p>
                        </div>
                      </div>
                      {isSelected ? (
                        <ChevronUpIcon className="chevron" />
                      ) : (
                        <ChevronDownIcon className="chevron chevron-inactive" />
                      )}
                    </div>
                    <div className="sport-content">
                      <p className="sport-description">{sport.description}</p>

                      {isSelected && (
                        <div className="schedule-container fade-in">
                          <h4 className="schedule-title">
                            <ClockIcon className="clock-icon" />
                            Horários de Treino
                          </h4>
                          <div className="schedule-list">
                            {Object.entries(sport.schedules).map(([day, times]) => (
                              <div key={day} className="schedule-day">
                                <div className="day-name">{day}</div>
                                <div className="times-list">
                                  {times.map((time, timeIndex) => (
                                    <div key={timeIndex} className="time-slot">
                                      {time}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="schedule-tip">💡 Clique novamente para fechar os horários</div>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Local Section */}
        <section id="local" className="section section-black">
          <div className="container">
            <div className="local-grid">
              <div className="local-content">
                <h2 className="section-title text-white">Nossa Localização</h2>
                <div className="local-info">
                  <div className="info-item">
                    <MapPinIcon className="info-icon" />
                    <div>
                      <h3 className="info-title">Endereço Principal</h3>
                      <p className="info-text">
                        R. Atílio Bianchini, 125 
                        <br />
                        Vila Kennedy
                        <br />
                        Santa Rita do Passa Quatro - SP, 13670-000
                      </p>
                    </div>
                  </div>

                  <div className="info-item">
                    <ClockIcon className="info-icon" />
                    <div>
                      <h3 className="info-title">Horários de Funcionamento</h3>
                      <div className="info-text">
                        <p>Segunda a Sexta: 6h às 22h</p>
                        <p>Sábados: 7h às 20h</p>
                        <p>Domingos: 8h às 18h</p>
                      </div>
                    </div>
                  </div>

                  <div className="info-item">
                    <UsersIcon className="info-icon" />
                    <div>
                      <h3 className="info-title">Instalações</h3>
                      <ul className="info-list">
                        <li>• 1 Campo de Futebol Profissionaç</li>
                        <li>• 2 Vestiários</li>
                        <li>• 3 Quadras de Areia</li>
                        <li>• 1 Salão para Artes Marciais</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="local-map">
                <div className="map-placeholder">
                  <div className="map-content">
                   
                    <br/>
                        <div style={{ width: '80%', height: '400px', display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
      <iframe
        title="Mapa - R. Atílio Bianchini, 125"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.1849352217595!2d-47.48492812484685!3d-21.71022518008953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b78b39efdb3c81%3A0x53947f9389f7b51e!2sR.%20At%C3%ADlio%20Bianchini%2C%20125%20-%20Sala%20B%20-%20Vila%20Kennedy%2C%20Santa%20Rita%20do%20Passa%20Quatro%20-%20SP%2C%2013670-000!5e0!3m2!1spt-BR!2sbr!4v1721322871417!5m2!1spt-BR!2sbr"
        width="110%"
        height="70%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="section section-gray">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Entre em Contato</h2>
              <p className="section-subtitle">
                Estamos prontos para receber você! Entre em contato conosco para mais informações
              </p>
            </div>

            <div className="contato-grid">
              {/* Informações de Contato */}
              <div className="contato-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <PhoneIcon className="icon" />
                  </div>
                  <div>
                    <h3 className="contact-title">Telefone</h3>
                    <p className="contact-text">(11) 9999-8888</p>
                    <p className="contact-text">(11) 3333-4444</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <MailIcon className="icon" />
                  </div>
                  <div>
                    <h3 className="contact-title">E-mail</h3>
                    <p className="contact-text">contato@futebolnota10.com.br</p>
                    <p className="contact-text">inscricoes@futebolnota10.com.br</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <TargetIcon className="icon" />
                  </div>
                  <div>
                    <h3 className="contact-title">Redes Sociais</h3>
                    <p className="contact-text">@futebolnota10oficial</p>
                    <p className="contact-text">Futebol Nota 10</p>
                  </div>
                </div>
              </div>

              {/* Formulário de Contato */}
              <div className="card contact-form">
                <div className="card-header">
                  <h3 className="card-title">Envie sua Mensagem</h3>
                  <p className="card-description">Preencha o formulário e entraremos em contato em breve</p>
                </div>
                <div className="card-content form-content">
                  <form onSubmit={handleFormSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Nome</label>
                        <input className="input" placeholder="Seu nome" name="nome" required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Telefone</label>
                        <input className="input" placeholder="(11) 99999-9999" name="telefone" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">E-mail</label>
                      <input className="input" type="email" placeholder="seu@email.com" name="email" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Modalidade de Interesse</label>
                      <input className="input" placeholder="Ex: Futebol de Campo, Futsal..." name="modalidade" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Mensagem</label>
                      <textarea
                        className="textarea"
                        placeholder="Conte-nos como podemos ajudar..."
                        rows={4}
                        name="mensagem"
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn form-submit">
                      Enviar Mensagem
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon">
                  <TrophyIcon className="trophy-icon" />
                </div>
                <span className="logo-text">Futebol Nota 10</span>
              </div>
              <p className="footer-description">
                Transformando vidas através do esporte há mais de 8 anos. Venha fazer parte da nossa família esportiva!
              </p>
            </div>

            <div className="footer-links">
              <h3 className="footer-title">Links Rápidos</h3>
              <ul className="footer-list">
                <li>
                  <button onClick={() => scrollToSection("historia")} className="footer-link">
                    História
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("esportes")} className="footer-link">
                    Esportes
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("local")} className="footer-link">
                    Local
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contato")} className="footer-link">
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            <div className="footer-contact">
              <h3 className="footer-title">Contato</h3>
              <ul className="footer-list">
                <li>(11) 11111-1111</li>
                <li>contato@futebolnota10.com.br</li>
                <li>Rua dos Esportes, 1010</li>
                <li>Santa Rita do Passa Quatro - SP</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Futebol Nota 10. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
