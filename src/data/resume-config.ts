import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Michel Stéphane Ekuma AMOUSSOU-GUENOU',
    photoBackEmoji: '👨‍💻',
    title: {
      fr: 'Développeur Web Front-End',
      en: 'Front-End Web Developer',
    },
    subtitle: {
      fr: 'Plus de 6 ans d\'expérience',
      en: 'More than 6 years of experience',
    },
    location: 'Cotonou, Bénin',
  },
  seo: {
    title: 'Michel AMOUSSOU-GUENOU — Développeur Web Front-End',
    description: 'CV interactif de Michel Amousou-Guenou, développeur Web Front-End spécialisé en React.js et Next.js, basé à Cotonou, Bénin.',
  },
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },
  contact: [
    { type: 'linkedin', label: 'michel-amoussou-guenou', href: 'https://www.linkedin.com/in/michel-amoussou-guenou-040718214/' },
    { type: 'email', label: 'michouags@gmail.com' },
    { type: 'phone', label: '+229 01 97 50 35 74' },
    { type: 'website', label: 'michel-san.vercel.app', href: 'https://michel-san.vercel.app/' },
    { type: 'location', label: 'Cotonou, Bénin' },
  ],
  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Français', en: 'French' }, level: { fr: 'Excellent', en: 'Native' } },
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Assez bien', en: 'Intermediate' } },
      ],
    },
    {
      title: { fr: 'Frontend', en: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'Vue.js' },
        { name: 'Nuxt.js' },
        { name: 'Tailwind CSS' },
        { name: 'Bootstrap' },
      ],
    },
    {
      title: { fr: 'Backend', en: 'Backend' },
      type: 'badges',
      items: [
        { name: 'PHP' },
        { name: 'Symfony' },
        { name: 'Ruby' },
        { name: 'Ruby on Rails' },
      ],
    },
    {
      title: { fr: 'CMS', en: 'CMS' },
      type: 'badges',
      items: [
        { name: 'WordPress' },
        { name: 'Drupal', color: '#0678BE' },
        { name: 'Strapi', color: '#4945FF' },
      ],
    },
    {
      title: { fr: 'Base de données', en: 'Databases' },
      type: 'badges',
      items: [
        { name: 'MySQL' },
        { name: 'PostgreSQL' },
        { name: 'SQLite' },
      ],
    },
    {
      title: { fr: 'Outils & Versionning', en: 'Tools & Versioning' },
      type: 'badges',
      items: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'GitLab' },
      ],
    },
    {
      title: { fr: 'Méthodologies', en: 'Methodologies' },
      type: 'text',
      items: [
        { name: { fr: 'Intégration Pixel-Perfect, Agile, Veille technologique, Collaboration Cross-fonctionnelle', en: 'Pixel-Perfect Integration, Agile, Tech Watch, Cross-functional Collaboration' } },
      ],
    },
    {
      title: { fr: 'Qualités', en: 'Soft Skills' },
      type: 'text',
      items: [
        { name: { fr: 'Polyvalent, Enthousiaste, Autodidacte, Proactif', en: 'Versatile, Enthusiastic, Self-taught, Proactive' } },
      ],
    },
  ],
  experiences: [
    {
      id: 'etrilabs-sewema',
      company: { fr: 'ETRILABS / Sewema', en: 'ETRILABS / Sewema' },
      role: { fr: 'Développeur Web Front-End', en: 'Front-End Web Developer' },
      type: { fr: 'CDD', en: 'Full-time' },
      period: { fr: 'Septembre 2024 – Décembre 2025', en: 'September 2024 – December 2025' },
      description: {
        fr: 'Développement et maintenance d\'applications web responsives pour Sewema.',
        en: 'Development and maintenance of responsive web applications for Sewema.',
      },
      techs: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Strapi', 'Ruby on Rails', 'Tailwind CSS', 'Bootstrap', 'Git', 'MySQL', 'PostgreSQL', 'SQLite'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Projet web au sein d\'ETRILABS pour le client Sewema, Cotonou.',
          en: 'Web project within ETRILABS for the Sewema client, Cotonou.',
        },
        tasks: {
          fr: [
            'Développement de sites web responsive',
            'Développement d\'applications web et de nouvelles fonctionnalités',
            'Maintenance et mise à jour des sites web et applications déployés',
            'Correction des bugs existants sur les applications déployées',
          ],
          en: [
            'Development of responsive websites',
            'Development of web applications and new features',
            'Maintenance and updates of deployed websites and applications',
            'Bug fixing on deployed applications',
          ],
        },
        env: {
          fr: 'React / Next.js / TypeScript / Tailwind CSS / Git',
          en: 'React / Next.js / TypeScript / Tailwind CSS / Git',
        },
      },
    },
    {
      id: 'etrilabs-newdayafrica',
      company: { fr: 'ETRILABS / New Day Africa', en: 'ETRILABS / New Day Africa' },
      role: { fr: 'Développeur Web Front-End', en: 'Front-End Web Developer' },
      type: { fr: 'CDI', en: 'Full-time' },
      period: { fr: 'Février 2024 – Décembre 2025', en: 'February 2024 – Décembre 2025' },
      description: {
        fr: 'Développement et maintenance d\'applications web responsives pour New Day Africa.',
        en: 'Development and maintenance of responsive web applications for New Day Africa.',
      },
      techs: ['PHP', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Strapi', 'Ruby on Rails', 'WordPress', 'Drupal', 'Tailwind CSS', 'Bootstrap', 'Git', 'MySQL', 'PostgreSQL', 'SQLite'],
      isHighlighted: false,
      details: {
        context: {
          fr: 'Projet web au sein d\'ETRILABS pour le client New Day Africa, Cotonou.',
          en: 'Web project within ETRILABS for the New Day Africa client, Cotonou.',
        },
        tasks: {
          fr: [
            'Développement de sites web responsive',
            'Développement d\'applications web et de nouvelles fonctionnalités',
            'Maintenance et mise à jour des sites web et applications déployés',
            'Correction des bugs existants sur les applications déployées',
          ],
          en: [
            'Development of responsive websites',
            'Development of web applications and new features',
            'Maintenance and updates of deployed websites and applications',
            'Bug fixing on deployed applications',
          ],
        },
        env: {
          fr: 'PHP / Javascript / Typescript / Strapi / React.Js / Next.Js / Ruby on Rails / WordPress / Drupal / Tailwind CSS/ Bootstrap / Git',
          en: 'PHP / Javascript / Typescript / Strapi / React.Js / Next.Js / Ruby on Rails / WordPress / Drupal / Tailwind CSS/ Bootstrap / Git',
        },
      },
    },
    {
      id: 'etrilabs',
      company: { fr: 'ETRILABS', en: 'ETRILABS' },
      role: { fr: 'Développeur Web Front-End', en: 'Front-End Web Developer' },
      type: { fr: 'CDD', en: 'Full-time' },
      period: { fr: 'Octobre 2022 – Janvier 2024', en: 'October 2022 – January 2024' },
      description: {
        fr: 'Développement de sites web responsives, de plugins et maintenance des applications déployées.',
        en: 'Development of responsive websites, plugins and maintenance of deployed applications.',
      },
      techs: ['PHP', 'JavaScript', 'Ruby on Rails', 'WordPress', 'Drupal', 'Tailwind CSS', 'Bootstrap', 'Git', 'MySQL', 'PostgreSQL', 'SQLite'],
      isHighlighted: false,
      details: {
        context: {
          fr: 'Environnement dynamique et collaboratif, travail en équipe avec designers et développeurs back-end.',
          en: 'Dynamic and collaborative environment, teamwork with designers and back-end developers.',
        },
        tasks: {
          fr: [
            'Développement de sites web responsive',
            'Développement de plugins',
            'Maintenance et mise à jour des sites web développés',
            'Correction des bugs existants sur les sites web déployés',
          ],
          en: [
            'Development of responsive websites',
            'Plugin development',
            'Maintenance and updates of developed websites',
            'Bug fixing on deployed websites',
          ],
        },
        env: {
          fr: 'PHP / Javascript / Ruby on Rails / WordPress / Drupal / Tailwind CSS/ Bootstrap / Git',
          en: 'PHP / Javascript / Ruby on Rails / WordPress / Drupal / Tailwind CSS/ Bootstrap / Git',
        },
      },
    },
    {
      id: 'drwintech',
      company: { fr: 'DRWINTECH INC', en: 'DRWINTECH INC' },
      role: { fr: 'Développeur Web', en: 'Web Developer' },
      type: { fr: 'CDD', en: 'Full-time' },
      period: { fr: 'Octobre 2021 – Octobre 2022', en: 'October 2021 – October 2022' },
      description: {
        fr: 'Développement et maintenance de sites web responsives.',
        en: 'Development and maintenance of responsive websites.',
      },
      techs: ['PHP', 'JavaScript', 'WordPress', 'Drupal', 'Tailwind CSS', 'Bootstrap', 'Git', 'MySQL', 'PostgreSQL', 'SQLite'],
      details: {
        context: {
          en: 'Digital agency with 20+ clients across various industries (retail, finance, healthcare). Team of 12 developers, working on 3-4 projects simultaneously.',
          fr: 'Agence digitale avec 20+ clients dans différents secteurs (retail, finance, santé). Équipe de 12 développeurs, travaillant sur 3-4 projets simultanément.',
        },
        tasks: {
          fr: [
            'Développement de sites web responsive',
            'Maintenance et mise à jour des sites web développés',
            'Correction des bugs existants sur les sites web déployés',
          ],
          en: [
            'Development of responsive websites',
            'Maintenance and updates of developed websites',
            'Bug fixing on deployed websites',
          ],
        },
        env: {
          fr: 'PHP / Javascript / WordPress / Drupal / Tailwind CSS / Bootstrap / Git',
          en: 'PHP / Javascript / WordPress / Drupal / Tailwind CSS / Bootstrap / Git',
        },
      },
    },
    {
      id: 'itnum',
      company: { fr: 'IT-NUM', en: 'IT-NUM' },
      role: { fr: 'Développeur Web', en: 'Web Developer' },
      type: { fr: 'CDI', en: 'Full-time' },
      period: { fr: 'Juillet 2020 – Septembre 2021', en: 'July 2020 – September 2021' },
      description: {
        fr: 'Développement et maintenance de sites web responsives.',
        en: 'Development and maintenance of responsive websites.',
      },
      techs: ['PHP', 'Symfony', 'JavaScript', 'WordPress', 'Drupal', 'Tailwind CSS', 'Bootstrap', 'Git', 'MySQL', 'PostgreSQL', 'SQLite'],
      details: {
        context: {
          en: 'Digital agency with 20+ clients across various industries (retail, finance, healthcare). Team of 12 developers, working on 3-4 projects simultaneously.',
          fr: 'Agence digitale avec 20+ clients dans différents secteurs (retail, finance, santé). Équipe de 12 développeurs, travaillant sur 3-4 projets simultanément.',
        },
        tasks: {
          fr: [
            'Développement de sites web responsive',
            'Maintenance et mise à jour des sites web développés',
            'Correction des bugs existants sur les sites web déployés',
          ],
          en: [
            'Development of responsive websites',
            'Maintenance and updates of developed websites',
            'Bug fixing on deployed websites',
          ],
        },
        env: {
          fr: 'PHP / Symfony / Javascript / WordPress / Drupal / Tailwind CSS / Bootstrap / Git',
          en: 'PHP / Symfony / Javascript / WordPress / Drupal / Tailwind CSS / Bootstrap / Git',
        },
      },
    },
    {
      id: 'itnum-stage',
      company: { fr: 'IT-NUM', en: 'IT-NUM' },
      role: { fr: 'Stagiaire Développeur Web', en: 'Web Developer Intern' },
      type: { fr: 'Stage', en: 'Internship' },
      period: { fr: 'Août 2019 – Juin 2020', en: 'August 2019 – June 2020' },
      description: {
        fr: 'Stage de développement web — développement et maintenance de sites web responsives.',
        en: 'Web development internship — development and maintenance of responsive websites.',
      },
      techs: ['PHP', 'Symfony', 'JavaScript', 'WordPress', 'Drupal', 'Bootstrap', 'Git', 'MySQL', 'SQLite'],
      details: {
        context: {
          en: 'Digital agency with 20+ clients across various industries (retail, finance, healthcare). Team of 12 developers, working on 3-4 projects simultaneously.',
          fr: 'Agence digitale avec 20+ clients dans différents secteurs (retail, finance, santé). Équipe de 12 développeurs, travaillant sur 3-4 projets simultanément.',
        },
        tasks: {
          fr: [
            'Développement de sites web responsive',
            'Maintenance et mise à jour des sites web développés',
            'Correction des bugs existants sur les sites web déployés',
          ],
          en: [
            'Development of responsive websites',
            'Maintenance and updates of developed websites',
            'Bug fixing on deployed websites',
          ],
        },
        env: {
          fr: 'PHP / Symfony / Javascript / WordPress / Drupal / Tailwind CSS / Bootstrap / Git',
          en: 'PHP / Symfony / Javascript / WordPress / Drupal / Tailwind CSS / Bootstrap / Git',
        },
      },
    },
    {
      id: 'itnum-stage',
      company: { fr: 'IT-NUM', en: 'IT-NUM' },
      role: { fr: 'Stagiaire Développeur Web', en: 'Web Developer Intern' },
      type: { fr: 'Stage', en: 'Internship' },
      period: { fr: 'Mars 2018 – Septembre 2018', en: 'March 2018 – September 2018' },
      description: {
        fr: 'Stage de développement web — développement et maintenance de sites web responsives.',
        en: 'Web development internship — development and maintenance of responsive websites.',
      },
      techs: ['PHP', 'CodeIgniter', 'JavaScript', 'WordPress', 'Bootstrap', 'Git', 'MySQL'],
      details: {
        context: {
          en: 'Digital agency with 20+ clients across various industries (retail, finance, healthcare). Team of 12 developers, working on 3-4 projects simultaneously.',
          fr: 'Agence digitale avec 20+ clients dans différents secteurs (retail, finance, santé). Équipe de 12 développeurs, travaillant sur 3-4 projets simultanément.',
        },
        tasks: {
          fr: [
            'Développement de sites web responsive',
            'Maintenance et mise à jour des sites web développés',
            'Correction des bugs existants sur les sites web déployés',
          ],
          en: [
            'Development of responsive websites',
            'Maintenance and updates of developed websites',
            'Bug fixing on deployed websites',
          ],
        },
        env: {
          fr: 'PHP / CodeIgniter / Javascript / WordPress / Bootstrap / Git',
          en: 'PHP / CodeIgniter / Javascript / WordPress / Bootstrap / Git',
        },
      },
    },
    {
      id: 'jenysas',
      company: { fr: 'JENY-SAS', en: 'JENY-SAS' },
      role: { fr: 'Stagiaire Technicien / Développeur Web', en: 'Technician / Web Developer Intern' },
      type: { fr: 'Stage', en: 'Internship' },
      period: { fr: 'Octobre 2016 – Janvier 2017', en: 'October 2016 – January 2017' },
      description: {
        fr: 'Stage polyvalent : installation de connexion internet, maintenance matérielle et développement d\'applications web.',
        en: 'Versatile internship: internet connection setup, hardware maintenance and web application development.',
      },
      techs: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      details: {
        context: {
          en: 'Digital agency with 20+ clients across various industries (retail, finance, healthcare). Team of 12 developers, working on 3-4 projects simultaneously.',
          fr: 'Agence digitale avec 20+ clients dans différents secteurs (retail, finance, santé). Équipe de 12 développeurs, travaillant sur 3-4 projets simultanément.',
        },
        tasks: {
          fr: [
            'Installation de connexion internet',
            'Maintenance et dépannage des installations et matériels de connexion internet',
            'Développement d\'applications web',
          ],
          en: [
            'Internet connection installation',
            'Maintenance and troubleshooting of internet connection hardware',
            'Web application development',
          ],
        },
        env: {
          fr: 'HTML / CSS / JavaScript / PHP',
          en: 'HTML / CSS / JavaScript / PHP',
        },
      },
    },
  ],
  education: [
    {
      school: { fr: 'Ecole Supérieure de Gestion d\'Informatique et des Sciences (ESGIS)', en: 'Ecole Supérieure de Gestion d\'Informatique et des Sciences (ESGIS)' },
      degree: { fr: 'Master en Architecture Logicielle', en: 'Master in Software Architecture' },
      specialty: { fr: 'Architecture Logicielle / AL', en: 'Software Architecture' },
      period: '2018 – présent',
    },
    {
      school: { fr: 'Université Catholique de l\'Afrique de l\'Ouest (UCAO)', en: 'Université Catholique de l\'Afrique de l\'Ouest (UCAO)' },
      degree: { fr: 'Licence en Informatique de Gestion', en: 'Bachelor in Management Information Systems' },
      specialty: { fr: 'Informatique de Gestion / IG', en: 'Management Information Systems' },
      period: '2013 – 2017',
    },
  ],
  hobbies: [
    {
      title: { fr: 'Basket-ball', en: 'Basketball' },
    },
    {
      title: { fr: 'Musique', en: 'Music' },
    },
    {
      title: { fr: 'Mangas', en: 'Mangas' },
    },
    {
      title: { fr: 'Jeux Vidéos', en: 'Video Games' },
    },
  ],
  theme: { preset: 'ocean' },
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES', en: 'WORK EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      projects: { fr: 'PROJETS', en: 'PROJECTS' },
      hobbies: { fr: 'CENTRES D\'INTÉRÊT', en: 'INTERESTS' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main tasks:' },
      moreTasks: { fr: 'autres missions...', en: 'more tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Env. technique :', en: 'Tech environment:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click on experiences to see more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}
