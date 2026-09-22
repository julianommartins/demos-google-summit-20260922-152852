import Head from 'next/head'
import styles from '../styles/Home.module.css'

const CREATED_BY = "Antigravity, Gemini 3.8 Flash"

const TIMELINE_STEPS = [
  {
    step: 1,
    title: 'Criar a aplicação',
    description: 'A application nasce no namespace demos e já traz seu repositório.',
    icon: (
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    )
  },
  {
    step: 2,
    title: 'Conectar o repositório',
    description: 'A nullplatform cria o repo no GitHub e injeta as credenciais do CI.',
    icon: (
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    )
  },
  {
    step: 3,
    title: 'Criar o Scope',
    description: 'Um scope Development define onde e como a aplicação roda.',
    icon: (
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    )
  },
  {
    step: 4,
    title: 'Disparar o Build',
    description: 'O push na branch principal aciona o CI e publica a imagem.',
    icon: (
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    step: 5,
    title: 'Executar o Deploy',
    description: 'O release vai para o scope e a infraestrutura sobe sozinha.',
    icon: (
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
      </svg>
    )
  },
  {
    step: 6,
    title: 'Release em produção 🎉',
    description: 'URL pública servida em *.bra.nullapps.io.',
    icon: (
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    )
  }
]

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alô Google Summit!</title>
        <meta name="description" content="Demo do zero à produção com a nullplatform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Alô Google Summit!</h1>
          <p className={styles.subtitle}>
            Uma demonstração de deploy real em produção orquestrado pela nullplatform.
          </p>
        </section>

        <section className={styles.timelineSection}>
          <h2 className={styles.sectionTitle}>Do zero à produção</h2>
          <div className={styles.stepper}>
            {TIMELINE_STEPS.map((item) => (
              <div key={item.step} className={styles.stepCard}>
                <div className={styles.stepHeader}>
                  <div className={styles.stepIcon}>{item.icon}</div>
                  <span className={styles.stepBadge}>Passo {item.step}</span>
                </div>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p className={styles.signature}>{"Criada com " + CREATED_BY}</p>
      </footer>
    </div>
  )
}
