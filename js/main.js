/* ==========================================================================
   2Tech Agency — main.js
   Vanilla JS only. Sections:
   1. Theme toggle        2. Language toggle + dictionary   3. Mobile menu
   4. Services data        5. Projects data                  6. Renderers
   7. Contact form         8. Scroll reveal                  9. Init
   ========================================================================== */

/* ---------- 1. Theme: dark-only design (no toggle) ---------- */

/* ---------- 2. Language toggle + dictionary ---------- */
const LANG_KEY = '2tech-lang';

// Dictionary: every static, translatable string on the site lives here.
// Elements opt in with data-i18n="key" (textContent) or data-i18n-html="key" (innerHTML, for markup like <span>).
// Form placeholders use data-i18n-placeholder="key".
const DICT = {
  'nav.home': { en: 'Home', fr: 'Accueil' },
  'nav.services': { en: 'Services', fr: 'Services' },
  'nav.projects': { en: 'Projects', fr: 'Projets' },
  'nav.about': { en: 'About', fr: 'À propos' },
  'nav.contact': { en: 'Contact', fr: 'Contact' },
  'nav.cta': { en: 'Get Started', fr: 'Commencer' },

  'hero.eyebrow': { en: 'Innovation <span class="text-cyan-400">•</span> Technology <span class="text-cyan-400">•</span> Impact', fr: 'Innovation <span class="text-cyan-400">•</span> Technologie <span class="text-cyan-400">•</span> Impact' },
  'hero.title': { en: 'We Build<br /><span class="text-gradient">Digital Solutions</span><br />for a Better Future', fr: 'Nous construisons<br /><span class="text-gradient">des solutions digitales</span><br />pour un meilleur futur' },
  'hero.lead': { en: '2Tech Agency is a forward-thinking digital agency, specialized in web development, mobile applications, and technology solutions that turn ideas into real impact.', fr: '2Tech Agency est une agence digitale avant-gardiste, spécialisée en développement web, applications mobiles et solutions technologiques qui transforment les idées en impact réel.' },
  'hero.ctaPrimary': { en: 'Start Your Project', fr: 'Démarrer votre projet' },
  'hero.ctaSecondary': { en: 'Our Services', fr: 'Nos services' },
  'hero.side1': { en: 'Ideas', fr: 'Idées' },
  'hero.side2': { en: 'Technology', fr: 'Technologie' },
  'hero.side3': { en: 'Digital Products', fr: 'Produits digitaux' },
  'hero.stat1n': { en: '50+', fr: '50+' },
  'hero.stat1l': { en: 'Projects Delivered', fr: 'Projets livrés' },
  'hero.stat2n': { en: '20+', fr: '20+' },
  'hero.stat2l': { en: 'Happy Clients', fr: 'Clients satisfaits' },
  'hero.stat3n': { en: '5+', fr: '5+' },
  'hero.stat3l': { en: 'Years of Experience', fr: 'Années d\u2019expérience' },

  'home.servicesEyebrow': { en: 'What we do', fr: 'Ce que nous faisons' },
  'home.servicesTitle': { en: 'Four ways we move your business forward', fr: 'Quatre leviers pour faire avancer votre activité' },
  'home.servicesLead': { en: 'Every engagement draws on the same four disciplines, combined however your project needs.', fr: 'Chaque mission s\u2019appuie sur ces quatre disciplines, combinées selon les besoins de votre projet.' },
  'cat.web.title': { en: 'Web & Apps', fr: 'Web & Applications' },
  'cat.web.desc': { en: 'Websites, e-commerce, mobile and web apps built to load fast and convert.', fr: 'Sites web, e-commerce, applications mobiles et web pensés pour la vitesse et la conversion.' },
  'cat.marketing.title': { en: 'Marketing', fr: 'Marketing' },
  'cat.marketing.desc': { en: 'SEO, paid media, content and branding that turn attention into customers.', fr: 'SEO, publicité, contenu et branding pour transformer l\u2019attention en clients.' },
  'cat.ai.title': { en: 'AI & Data', fr: 'IA & Données' },
  'cat.ai.desc': { en: 'Chatbots, automation and dashboards that remove manual work.', fr: 'Chatbots, automatisation et dashboards qui suppriment les tâches manuelles.' },
  'cat.business.title': { en: 'Business', fr: 'Business' },
  'cat.business.desc': { en: 'Consulting, CRM and digital transformation for growing teams.', fr: 'Conseil, CRM et transformation digitale pour les équipes en croissance.' },
  'cat.explore': { en: 'Explore services', fr: 'Voir les services' },

  'process.eyebrow': { en: 'How we work', fr: 'Notre méthode' },
  'process.title': { en: 'A clear process, from first call to launch', fr: 'Un processus clair, du premier échange au lancement' },
  'process.1.title': { en: 'Discover', fr: 'Découverte' },
  'process.1.desc': { en: 'We learn your market, goals and constraints in a short discovery call.', fr: 'Nous cernons votre marché, vos objectifs et vos contraintes lors d\u2019un premier échange.' },
  'process.2.title': { en: 'Design', fr: 'Conception' },
  'process.2.desc': { en: 'Wireframes and prototypes validate direction before any code is written.', fr: 'Maquettes et prototypes valident la direction avant la moindre ligne de code.' },
  'process.3.title': { en: 'Build', fr: 'Développement' },
  'process.3.desc': { en: 'Development happens in short sprints, with regular check-ins and demos.', fr: 'Le développement avance par sprints courts, avec points d\u2019étape et démos réguliers.' },
  'process.4.title': { en: 'Grow', fr: 'Croissance' },
  'process.4.desc': { en: 'We launch, measure results, and keep optimizing month over month.', fr: 'Nous lançons, mesurons les résultats, et optimisons mois après mois.' },

  'pricing.eyebrow': { en: 'Pricing', fr: 'Tarifs' },
  'pricing.title': { en: 'Simple packages, custom quotes on request', fr: 'Des formules simples, un devis sur mesure sur demande' },
  'pricing.lead': { en: 'Every project is different — these packages are a starting point for a conversation.', fr: 'Chaque projet est différent — ces formules sont un point de départ pour en discuter.' },
  'pricing.starter.name': { en: 'Starter', fr: 'Starter' },
  'pricing.starter.desc': { en: 'For small businesses launching their first digital presence.', fr: 'Pour les petites structures qui lancent leur première présence digitale.' },
  'pricing.starter.f1': { en: 'One-page or brochure website', fr: 'Site vitrine one-page ou multi-pages' },
  'pricing.starter.f2': { en: 'Mobile-responsive design', fr: 'Design responsive mobile' },
  'pricing.starter.f3': { en: 'Basic SEO setup', fr: 'Configuration SEO de base' },
  'pricing.starter.f4': { en: '1 month of support', fr: '1 mois de support' },
  'pricing.growth.name': { en: 'Growth', fr: 'Growth' },
  'pricing.growth.desc': { en: 'For teams that need a full site plus ongoing marketing.', fr: 'Pour les équipes qui ont besoin d\u2019un site complet et d\u2019un marketing continu.' },
  'pricing.growth.f1': { en: 'Custom website or web app', fr: 'Site ou application web sur mesure' },
  'pricing.growth.f2': { en: 'SEO + content strategy', fr: 'Stratégie SEO + contenu' },
  'pricing.growth.f3': { en: 'Social media management', fr: 'Gestion des réseaux sociaux' },
  'pricing.growth.f4': { en: 'Monthly performance report', fr: 'Rapport de performance mensuel' },
  'pricing.enterprise.name': { en: 'Enterprise', fr: 'Enterprise' },
  'pricing.enterprise.desc': { en: 'For organizations combining web, AI and automation at scale.', fr: 'Pour les organisations combinant web, IA et automatisation à grande échelle.' },
  'pricing.enterprise.f1': { en: 'Web apps & platform engineering', fr: 'Applications web & ingénierie plateforme' },
  'pricing.enterprise.f2': { en: 'AI automation & dashboards', fr: 'Automatisation IA & dashboards' },
  'pricing.enterprise.f3': { en: 'Dedicated account manager', fr: 'Chargé de compte dédié' },
  'pricing.enterprise.f4': { en: 'Priority support & SLA', fr: 'Support prioritaire & SLA' },
  'pricing.getQuote': { en: 'Get a quote', fr: 'Demander un devis' },
  'pricing.popular': { en: 'Most popular', fr: 'Le plus choisi' },

  'home.projectsEyebrow': { en: 'Selected work', fr: 'Réalisations sélectionnées' },
  'home.projectsTitle': { en: 'Recent projects', fr: 'Projets récents' },
  'home.viewAll': { en: 'View all projects', fr: 'Voir tous les projets' },

  'home.testimonialsEyebrow': { en: 'Client feedback', fr: 'Avis clients' },
  'home.testimonialsTitle': { en: 'What clients say about working with us', fr: 'Ce que nos clients disent de notre collaboration' },
  't.1.quote': { en: '2Tech rebuilt our store and conversions doubled within two months. Communication was clear at every step.', fr: '2Tech a refait notre boutique et les conversions ont doublé en deux mois. Une communication claire à chaque étape.' },
  't.1.name': { en: 'Amira L.', fr: 'Amira L.' },
  't.1.role': { en: 'E-commerce Founder', fr: 'Fondatrice e-commerce' },
  't.2.quote': { en: 'The team delivered our SaaS dashboard ahead of schedule, with documentation our own developers could build on.', fr: 'L\u2019équipe a livré notre dashboard SaaS en avance, avec une documentation que nos développeurs ont pu reprendre.' },
  't.2.name': { en: 'Daniel R.', fr: 'Daniel R.' },
  't.2.role': { en: 'SaaS CEO', fr: 'CEO SaaS' },
  't.3.quote': { en: 'Their AI chatbot cut our support tickets by 40%. The best agency investment we have made this year.', fr: 'Leur chatbot IA a réduit nos tickets de support de 40 %. Le meilleur investissement agence de l\u2019année.' },
  't.3.name': { en: 'Sofia M.', fr: 'Sofia M.' },
  't.3.role': { en: 'Operations Director', fr: 'Directrice des opérations' },

  'cta.title': { en: 'Have a project in mind?', fr: 'Un projet en tête ?' },
  'cta.lead': { en: 'Tell us what you\u2019re trying to achieve — we\u2019ll reply within one business day.', fr: 'Expliquez-nous votre objectif — nous répondons sous un jour ouvré.' },
  'cta.button': { en: 'Contact us', fr: 'Nous contacter' },

  'footer.tagline': { en: 'Digital agency based in the United States, building for clients worldwide.', fr: 'Agence digitale basée aux États-Unis, au service de clients dans le monde entier.' },
  'footer.links': { en: 'Quick links', fr: 'Liens rapides' },
  'footer.services': { en: 'Services', fr: 'Services' },
  'footer.contact': { en: 'Contact', fr: 'Contact' },
  'footer.rights': { en: 'All rights reserved.', fr: 'Tous droits réservés.' },

  'services.pageEyebrow': { en: 'Services', fr: 'Services' },
  'services.pageTitle': { en: 'Everything you need under one roof', fr: 'Tout ce dont vous avez besoin, réuni au même endroit' },
  'services.pageLead': { en: 'Twenty-two services across four disciplines. Pick one to see details, or contact us to combine several.', fr: 'Vingt-deux services répartis en quatre disciplines. Consultez le détail de chacun, ou contactez-nous pour les combiner.' },
  'services.viewDetail': { en: 'View details', fr: 'Voir le détail' },

  'service.backToServices': { en: 'Back to all services', fr: 'Retour à tous les services' },
  'service.whatsIncluded': { en: 'What\u2019s included', fr: 'Ce qui est inclus' },
  'service.related': { en: 'Related services', fr: 'Services associés' },
  'service.ctaTitle': { en: 'Ready to talk about this?', fr: 'Prêt à en discuter ?' },
  'service.ctaLead': { en: 'Tell us about your project and we\u2019ll recommend the right scope.', fr: 'Parlez-nous de votre projet, nous vous proposerons le périmètre adapté.' },
  'service.ctaButton': { en: 'Request this service', fr: 'Demander ce service' },
  'service.notFoundTitle': { en: 'Service not found', fr: 'Service introuvable' },
  'service.notFoundLead': { en: 'This service doesn\u2019t exist, or the link is out of date.', fr: 'Ce service n\u2019existe pas, ou le lien n\u2019est plus valide.' },

  'projects.pageEyebrow': { en: 'Portfolio', fr: 'Portfolio' },
  'projects.pageTitle': { en: 'Work we\u2019re proud of', fr: 'Des réalisations dont nous sommes fiers' },
  'projects.pageLead': { en: 'A selection of websites, apps, campaigns and AI tools we\u2019ve shipped for clients.', fr: 'Une sélection de sites, applications, campagnes et outils IA livrés à nos clients.' },
  'filter.all': { en: 'All', fr: 'Tous' },
  'filter.web': { en: 'Web', fr: 'Web' },
  'filter.apps': { en: 'Apps', fr: 'Applications' },
  'filter.marketing': { en: 'Marketing', fr: 'Marketing' },
  'filter.ai': { en: 'AI', fr: 'IA' },
  'projects.empty': { en: 'No projects in this category yet.', fr: 'Aucun projet dans cette catégorie pour le moment.' },

  'about.eyebrow': { en: 'About us', fr: 'À propos' },
  'about.title': { en: 'A USA-based team, working on a global clock', fr: 'Une équipe basée aux États-Unis, au rythme du monde' },
  'about.p1': { en: '2Tech Agency was founded in the United States to give ambitious brands — local and international — access to senior-level web, marketing and AI expertise without the overhead of a large agency.', fr: '2Tech Agency a été fondée aux États-Unis pour donner aux marques ambitieuses, locales comme internationales, accès à une expertise web, marketing et IA de haut niveau, sans les coûts d\u2019une grande agence.' },
  'about.p2': { en: 'Today we work with startups, SMEs and enterprises across the USA, Europe and North America, combining international talent with high standards of delivery.', fr: 'Aujourd\u2019hui, nous accompagnons startups, PME et grandes entreprises aux États-Unis, en Europe et en Amérique du Nord, en combinant talents internationaux et standards de livraison élevés.' },
  'about.valuesEyebrow': { en: 'What we believe', fr: 'Ce en quoi nous croyons' },
  'about.valuesTitle': { en: 'The principles behind every project', fr: 'Les principes derrière chaque projet' },
  'value.1.title': { en: 'Craft over templates', fr: 'Le savoir-faire avant les modèles' },
  'value.1.desc': { en: 'We design and build for your specific audience, not a generic theme.', fr: 'Nous concevons pour votre audience spécifique, pas pour un thème générique.' },
  'value.2.title': { en: 'Transparent communication', fr: 'Une communication transparente' },
  'value.2.desc': { en: 'Clear timelines, honest estimates, and no surprises on the invoice.', fr: 'Des délais clairs, des estimations honnêtes, et aucune surprise sur la facture.' },
  'value.3.title': { en: 'Measurable results', fr: 'Des résultats mesurables' },
  'value.3.desc': { en: 'Every campaign and product ships with the metrics to prove it worked.', fr: 'Chaque campagne et produit est livré avec les indicateurs pour en prouver l\u2019impact.' },
  'value.4.title': { en: 'Built to last', fr: 'Conçu pour durer' },
  'value.4.desc': { en: 'Clean code and documented systems your next developer can pick up.', fr: 'Un code propre et des systèmes documentés que votre prochain développeur pourra reprendre.' },
  'about.teamEyebrow': { en: 'Our team', fr: 'Notre équipe' },
  'about.teamTitle': { en: 'The people behind the work', fr: 'Les personnes derrière le travail' },
  'team.1.role': { en: 'Founder & Strategy Lead', fr: 'Fondateur & Directeur Stratégie' },
  'team.2.role': { en: 'Lead Developer', fr: 'Développeur Principal' },
  'team.3.role': { en: 'Marketing Lead', fr: 'Responsable Marketing' },
  'team.4.role': { en: 'AI & Data Engineer', fr: 'Ingénieur IA & Data' },

  'contact.eyebrow': { en: 'Contact', fr: 'Contact' },
  'contact.title': { en: 'Let\u2019s talk about your project', fr: 'Parlons de votre projet' },
  'contact.lead': { en: 'Fill in the form and choose how you\u2019d like to send it — email or WhatsApp.', fr: 'Remplissez le formulaire et choisissez comment l\u2019envoyer — email ou WhatsApp.' },
  'contact.infoTitle': { en: 'Contact details', fr: 'Coordonnées' },
  'contact.address': { en: 'United States', fr: 'États-Unis' },
  'contact.hours': { en: 'Mon–Fri, 9:00–18:00 (ET)', fr: 'Lun–Ven, 9h–18h (ET)' },
  'contact.formName': { en: 'Full name', fr: 'Nom complet' },
  'contact.formEmail': { en: 'Email address', fr: 'Adresse email' },
  'contact.formPhone': { en: 'Phone (optional)', fr: 'Téléphone (facultatif)' },
  'contact.formService': { en: 'Service you\u2019re interested in', fr: 'Service qui vous intéresse' },
  'contact.formServiceDefault': { en: 'Select a service', fr: 'Choisissez un service' },
  'contact.formMessage': { en: 'Project details', fr: 'Détails du projet' },
  'contact.formSubmit': { en: 'Prepare message', fr: 'Préparer le message' },
  'contact.errRequired': { en: 'This field is required.', fr: 'Ce champ est requis.' },
  'contact.errEmail': { en: 'Please enter a valid email address.', fr: 'Veuillez saisir une adresse email valide.' },
  'contact.errMessage': { en: 'Please add a few details (min. 10 characters).', fr: 'Merci d\u2019ajouter quelques précisions (10 caractères min.).' },
  'contact.successTitle': { en: 'Your message is ready.', fr: 'Votre message est prêt.' },
  'contact.successLead': { en: 'Choose how you\u2019d like to send it:', fr: 'Choisissez comment l\u2019envoyer :' },
  'contact.sendEmail': { en: 'Send by email', fr: 'Envoyer par email' },
  'contact.sendWhatsapp': { en: 'Send by WhatsApp', fr: 'Envoyer par WhatsApp' },

  '404.title': { en: 'Page not found', fr: 'Page introuvable' },
  '404.lead': { en: 'The page you\u2019re looking for doesn\u2019t exist or has moved.', fr: 'La page que vous recherchez n\u2019existe pas ou a été déplacée.' },
  '404.button': { en: 'Back to homepage', fr: 'Retour à l\u2019accueil' },
};

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'fr';
}

function applyLang(lang) {
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (DICT[key]) el.textContent = DICT[key][lang];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (DICT[key]) el.innerHTML = DICT[key][lang];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (DICT[key]) el.setAttribute('placeholder', DICT[key][lang]);
  });

  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.textContent = lang.toUpperCase();

  // Re-render any JS-driven content (services / projects lists) in the new language.
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

function initLang() {
  const saved = getLang();
  applyLang(saved);
  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const next = getLang() === 'fr' ? 'en' : 'fr';
      localStorage.setItem(LANG_KEY, next);
      applyLang(next);
    });
  }
}

/* ---------- 3. Mobile menu ---------- */
function initMobileMenu() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('mainNav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- 4. Services data ---------- */
// One entry per service. "icon" is a short 2-3 letter mark shown in the icon box
// (placeholder for a real icon set / SVGs if the agency wants to add one later).
const SERVICES = [
  { id: 'web-design', cat: 'web', icon: 'UI',
    priceUSD: 800,
    en: { title: 'Web Design', short: 'Interfaces that look sharp and guide visitors to act.',
      desc: 'We design custom, on-brand websites focused on clarity and conversion — from wireframe to pixel-perfect UI, ready to hand off to development.',
      features: ['UX research & sitemap', 'Wireframes & prototypes', 'Custom visual design system', 'Responsive layouts for every screen', 'Handoff-ready design files'] },
    fr: { title: 'Design Web', short: 'Des interfaces soignées qui incitent les visiteurs à agir.',
      desc: 'Nous concevons des sites sur mesure, fidèles à votre marque, pensés pour la clarté et la conversion — du wireframe à l\u2019interface finale, prêts pour le développement.',
      features: ['Recherche UX & plan du site', 'Wireframes & prototypes', 'Système de design visuel sur mesure', 'Mises en page responsives', 'Fichiers prêts pour le développement'] } },
  { id: 'web-development', cat: 'web', icon: '{ }',
    priceUSD: 1500,
    en: { title: 'Web Development', short: 'Fast, secure websites built with clean, maintainable code.',
      desc: 'From marketing sites to complex platforms, we build with performance, accessibility and long-term maintainability in mind.',
      features: ['Custom front-end & back-end build', 'CMS integration where needed', 'Performance & SEO-friendly markup', 'Cross-browser & device testing', 'Deployment & hosting setup'] },
    fr: { title: 'Développement Web', short: 'Des sites rapides et sécurisés, avec un code propre et maintenable.',
      desc: 'Des sites vitrines aux plateformes complexes, nous développons en pensant performance, accessibilité et maintenabilité à long terme.',
      features: ['Développement front-end & back-end sur mesure', 'Intégration CMS si nécessaire', 'Markup optimisé SEO & performance', 'Tests multi-navigateurs & appareils', 'Mise en ligne & configuration hébergement'] } },
  { id: 'ecommerce', cat: 'web', icon: '$',
    priceUSD: 2500,
    en: { title: 'E-commerce Stores', short: 'Online stores built to sell, from catalog to checkout.',
      desc: 'We build and configure e-commerce storefronts — product catalogs, secure checkout, shipping and payment integrations — tailored to your market.',
      features: ['Storefront design & build', 'Payment & shipping integration', 'Product catalog structure', 'Inventory & order workflows', 'Conversion-focused checkout'] },
    fr: { title: 'Boutiques E-commerce', short: 'Des boutiques en ligne pensées pour vendre, du catalogue au paiement.',
      desc: 'Nous créons et configurons des boutiques e-commerce — catalogue produits, paiement sécurisé, intégrations livraison — adaptées à votre marché.',
      features: ['Design & développement de la boutique', 'Intégration paiement & livraison', 'Structure du catalogue produits', 'Gestion des stocks & commandes', 'Tunnel d\u2019achat optimisé pour la conversion'] } },
  { id: 'mobile-apps', cat: 'web', icon: '📱',
    priceUSD: 5000,
    en: { title: 'Mobile Apps', short: 'iOS and Android apps designed around real user needs.',
      desc: 'We design and build mobile applications for iOS and Android, from first prototype through to app store launch.',
      features: ['Native & cross-platform build', 'UX flows for mobile', 'API & backend integration', 'App store submission support', 'Post-launch monitoring'] },
    fr: { title: 'Applications Mobiles', short: 'Des applications iOS et Android pensées pour l\u2019utilisateur.',
      desc: 'Nous concevons et développons des applications mobiles pour iOS et Android, du premier prototype jusqu\u2019à la publication sur les stores.',
      features: ['Développement natif ou cross-platform', 'Parcours UX mobile', 'Intégration API & backend', 'Accompagnement publication sur les stores', 'Suivi post-lancement'] } },
  { id: 'web-apps', cat: 'web', icon: '⌘',
    priceUSD: 6000,
    en: { title: 'Web Applications & SaaS', short: 'Custom platforms and internal tools that scale with you.',
      desc: 'We design and engineer web applications and SaaS products — dashboards, portals, internal tools — built to scale with your business.',
      features: ['Product discovery & architecture', 'Custom front-end & database design', 'User roles & permissions', 'Third-party integrations', 'Scalable hosting setup'] },
    fr: { title: 'Applications Web & SaaS', short: 'Des plateformes sur mesure et outils internes qui évoluent avec vous.',
      desc: 'Nous concevons et développons des applications web et produits SaaS — dashboards, portails, outils internes — pensés pour évoluer avec votre activité.',
      features: ['Cadrage produit & architecture', 'Front-end & base de données sur mesure', 'Rôles & permissions utilisateurs', 'Intégrations tierces', 'Hébergement évolutif'] } },
  { id: 'maintenance', cat: 'web', icon: '⚙',
    priceUSD: 150, period: 'month',
    en: { title: 'Maintenance & Support', short: 'Ongoing updates, monitoring and fixes for your site or app.',
      desc: 'Keep your website or application secure, fast and up to date with a maintenance plan tailored to your platform.',
      features: ['Security & software updates', 'Uptime & performance monitoring', 'Bug fixes & small improvements', 'Monthly reporting', 'Priority response times'] },
    fr: { title: 'Maintenance & Support', short: 'Mises à jour, supervision et corrections continues pour votre site ou app.',
      desc: 'Gardez votre site ou application sécurisé, rapide et à jour grâce à un plan de maintenance adapté à votre plateforme.',
      features: ['Mises à jour sécurité & logicielles', 'Supervision de la disponibilité & performance', 'Corrections de bugs & petites améliorations', 'Rapport mensuel', 'Délais de réponse prioritaires'] } },

  { id: 'seo', cat: 'marketing', icon: 'SEO',
    priceUSD: 500, period: 'month',
    en: { title: 'SEO', short: 'Rank higher and earn qualified organic traffic.',
      desc: 'We audit, optimize and monitor your site to improve rankings on the search engines your customers actually use.',
      features: ['Technical SEO audit', 'On-page optimization', 'Keyword & competitor research', 'Content & link-building plan', 'Monthly ranking reports'] },
    fr: { title: 'SEO', short: 'Gagnez en visibilité et générez un trafic organique qualifié.',
      desc: 'Nous auditons, optimisons et suivons votre site pour améliorer votre positionnement sur les moteurs de recherche utilisés par vos clients.',
      features: ['Audit SEO technique', 'Optimisation on-page', 'Recherche de mots-clés & concurrence', 'Plan de contenu & netlinking', 'Rapports de positionnement mensuels'] } },
  { id: 'social-media', cat: 'marketing', icon: '#',
    priceUSD: 400, period: 'month',
    en: { title: 'Social Media Management', short: 'Consistent, on-brand presence across your key platforms.',
      desc: 'We plan, create and publish content across your social channels, and manage community engagement so you don\u2019t have to.',
      features: ['Content calendar & planning', 'Post design & copywriting', 'Community management', 'Platform-specific strategy', 'Monthly performance review'] },
    fr: { title: 'Gestion des Réseaux Sociaux', short: 'Une présence cohérente et fidèle à votre marque sur vos réseaux clés.',
      desc: 'Nous planifions, créons et publions du contenu sur vos réseaux, et gérons l\u2019engagement communautaire pour vous libérer du temps.',
      features: ['Calendrier & planification de contenu', 'Création visuelle & rédaction', 'Gestion de communauté', 'Stratégie par plateforme', 'Bilan de performance mensuel'] } },
  { id: 'paid-ads', cat: 'marketing', icon: '▶',
    priceUSD: 600, period: 'month',
    en: { title: 'Paid Advertising', short: 'Google, Meta and LinkedIn campaigns built for ROI.',
      desc: 'We plan, launch and optimize paid campaigns across search and social, with clear reporting tied to your actual business goals.',
      features: ['Campaign strategy & targeting', 'Ad creative & copy', 'Landing page alignment', 'Budget management & bidding', 'ROI-focused reporting'] },
    fr: { title: 'Publicité Payante', short: 'Des campagnes Google, Meta et LinkedIn pensées pour le ROI.',
      desc: 'Nous planifions, lançons et optimisons vos campagnes payantes sur les moteurs de recherche et réseaux sociaux, avec un reporting lié à vos objectifs concrets.',
      features: ['Stratégie de campagne & ciblage', 'Créations publicitaires & copywriting', 'Alignement des pages de destination', 'Gestion budget & enchères', 'Reporting axé sur le ROI'] } },
  { id: 'content-marketing', cat: 'marketing', icon: '✎',
    priceUSD: 450, period: 'month',
    en: { title: 'Content Marketing', short: 'Articles, guides and assets that build trust and traffic.',
      desc: 'We plan and produce content — blog articles, guides, case studies — that supports SEO and moves prospects toward a decision.',
      features: ['Content strategy & calendar', 'SEO-optimized writing', 'Case studies & guides', 'Editing & publishing', 'Performance tracking'] },
    fr: { title: 'Marketing de Contenu', short: 'Articles, guides et contenus qui construisent confiance et trafic.',
      desc: 'Nous planifions et produisons du contenu — articles de blog, guides, études de cas — qui soutient le SEO et fait avancer vos prospects vers la décision.',
      features: ['Stratégie & calendrier éditorial', 'Rédaction optimisée SEO', 'Études de cas & guides', 'Relecture & publication', 'Suivi de performance'] } },
  { id: 'branding', cat: 'marketing', icon: '◈',
    priceUSD: 700,
    en: { title: 'Branding & Identity', short: 'A visual identity that\u2019s consistent everywhere it appears.',
      desc: 'We define your visual identity — logo, colors, typography and guidelines — so your brand feels consistent across every touchpoint.',
      features: ['Brand strategy workshop', 'Logo & visual identity', 'Brand guidelines document', 'Templates for key materials', 'Naming & tone of voice support'] },
    fr: { title: 'Branding & Identité', short: 'Une identité visuelle cohérente sur tous vos supports.',
      desc: 'Nous définissons votre identité visuelle — logo, couleurs, typographie et guidelines — pour une marque cohérente sur tous vos points de contact.',
      features: ['Atelier de stratégie de marque', 'Logo & identité visuelle', 'Charte graphique', 'Modèles pour vos supports clés', 'Accompagnement naming & ton de voix'] } },
  { id: 'email-marketing', cat: 'marketing', icon: '✉',
    priceUSD: 350, period: 'month',
    en: { title: 'Email Marketing', short: 'Newsletters and automated flows that keep customers close.',
      desc: 'We design and set up email campaigns and automated flows — welcome sequences, newsletters, cart recovery — to keep your audience engaged.',
      features: ['Email template design', 'List setup & segmentation', 'Automated flows (welcome, abandoned cart)', 'Newsletter production', 'Open & click-rate reporting'] },
    fr: { title: 'Email Marketing', short: 'Newsletters et séquences automatisées qui fidélisent vos clients.',
      desc: 'Nous concevons et configurons vos campagnes email et séquences automatisées — bienvenue, newsletters, relance panier — pour engager votre audience.',
      features: ['Design des templates email', 'Configuration & segmentation des listes', 'Séquences automatisées (bienvenue, panier abandonné)', 'Production de newsletters', 'Suivi des taux d\u2019ouverture & de clic'] } },

  { id: 'ai-chatbots', cat: 'ai', icon: '◉',
    priceUSD: 1200,
    en: { title: 'AI Chatbots', short: 'Conversational assistants for support, sales and FAQs.',
      desc: 'We design and deploy AI-powered chatbots that answer questions, qualify leads and support customers, in French, English and Arabic.',
      features: ['Conversation flow design', 'Integration with your knowledge base', 'Website & WhatsApp deployment', 'Multilingual support', 'Ongoing tuning & monitoring'] },
    fr: { title: 'Chatbots IA', short: 'Des assistants conversationnels pour le support, la vente et les FAQ.',
      desc: 'Nous concevons et déployons des chatbots propulsés par l\u2019IA pour répondre aux questions, qualifier les prospects et assister vos clients, en français, anglais et arabe.',
      features: ['Conception des scénarios de conversation', 'Intégration à votre base de connaissances', 'Déploiement site web & WhatsApp', 'Support multilingue', 'Réglage & suivi continus'] } },
  { id: 'automation', cat: 'ai', icon: '⇄',
    priceUSD: 900,
    en: { title: 'Process Automation', short: 'Remove repetitive manual work from your team\u2019s day.',
      desc: 'We map your repetitive workflows and automate them — connecting the tools you already use — to save your team hours every week.',
      features: ['Workflow audit & mapping', 'Tool-to-tool automation', 'Custom scripts where needed', 'Error handling & monitoring', 'Team training & handover'] },
    fr: { title: 'Automatisation des Processus', short: 'Supprimez les tâches manuelles répétitives du quotidien de vos équipes.',
      desc: 'Nous cartographions vos processus répétitifs et les automatisons — en connectant les outils que vous utilisez déjà — pour faire gagner des heures à vos équipes chaque semaine.',
      features: ['Audit & cartographie des processus', 'Automatisation entre outils', 'Scripts sur mesure si nécessaire', 'Gestion des erreurs & supervision', 'Formation & transmission à l\u2019équipe'] } },
  { id: 'data-dashboards', cat: 'ai', icon: '▤',
    priceUSD: 1800,
    en: { title: 'Data Analysis & Dashboards', short: 'Clear dashboards that turn raw data into decisions.',
      desc: 'We connect your data sources and build dashboards that surface the metrics that actually matter to your decisions.',
      features: ['Data source integration', 'KPI definition workshop', 'Custom dashboard build', 'Automated reporting', 'Training on the final tool'] },
    fr: { title: 'Analyse de Données & Dashboards', short: 'Des dashboards clairs qui transforment la donnée en décisions.',
      desc: 'Nous connectons vos sources de données et construisons des dashboards qui mettent en avant les indicateurs réellement utiles à vos décisions.',
      features: ['Intégration des sources de données', 'Atelier de définition des KPI', 'Construction du dashboard sur mesure', 'Reporting automatisé', 'Formation à l\u2019outil final'] } },
  { id: 'custom-ai', cat: 'ai', icon: '✦',
    priceUSD: 3000,
    en: { title: 'Custom AI Solutions', short: 'AI features built around your specific data and workflow.',
      desc: 'For needs beyond off-the-shelf tools, we design and build custom AI features — from document processing to recommendation systems.',
      features: ['Feasibility & data assessment', 'Custom model or pipeline design', 'Integration into your product', 'Testing & evaluation', 'Documentation & handover'] },
    fr: { title: 'Solutions IA Sur Mesure', short: 'Des fonctionnalités IA conçues autour de vos données et process.',
      desc: 'Pour les besoins qui dépassent les outils standards, nous concevons des fonctionnalités IA sur mesure — du traitement de documents aux systèmes de recommandation.',
      features: ['Étude de faisabilité & des données', 'Conception du modèle ou du pipeline', 'Intégration dans votre produit', 'Tests & évaluation', 'Documentation & transmission'] } },
  { id: 'ai-integration', cat: 'ai', icon: '⬡',
    priceUSD: 1500,
    en: { title: 'AI Integration', short: 'Bring AI models like GPT and Claude into your existing tools.',
      desc: 'We integrate AI models into your existing website, app or internal tools — safely, with the right guardrails for your use case.',
      features: ['Use-case scoping', 'API integration & prompt design', 'Guardrails & safety review', 'Cost & performance monitoring', 'Team enablement'] },
    fr: { title: 'Intégration IA', short: 'Intégrez des modèles comme GPT ou Claude à vos outils existants.',
      desc: 'Nous intégrons des modèles d\u2019IA à votre site, application ou outils internes existants — en toute sécurité, avec les garde-fous adaptés à votre usage.',
      features: ['Cadrage du cas d\u2019usage', 'Intégration API & conception des prompts', 'Garde-fous & revue de sécurité', 'Suivi des coûts & performance', 'Accompagnement des équipes'] } },

  { id: 'consulting', cat: 'business', icon: '◎',
    priceUSD: 150, period: 'hour',
    en: { title: 'Digital Consulting', short: 'An outside view on your digital priorities and roadmap.',
      desc: 'We review your current digital setup and help you prioritize where to invest — website, marketing, tooling or automation.',
      features: ['Digital audit', 'Prioritized roadmap', 'Budget & resourcing guidance', 'Vendor & tool recommendations', 'Quarterly check-ins'] },
    fr: { title: 'Conseil Digital', short: 'Un regard extérieur sur vos priorités et votre feuille de route digitale.',
      desc: 'Nous analysons votre dispositif digital actuel et vous aidons à prioriser vos investissements — site, marketing, outils ou automatisation.',
      features: ['Audit digital', 'Feuille de route priorisée', 'Recommandations budget & ressources', 'Recommandations d\u2019outils & prestataires', 'Points d\u2019étape trimestriels'] } },
  { id: 'crm', cat: 'business', icon: '◇',
    priceUSD: 1200,
    en: { title: 'CRM Setup & Optimization', short: 'A CRM that actually matches how your sales team works.',
      desc: 'We configure and optimize your CRM — pipelines, automations, reporting — so your sales and support teams get more from it.',
      features: ['CRM selection guidance', 'Pipeline & workflow setup', 'Data migration & cleanup', 'Automation & reminders', 'Team training'] },
    fr: { title: 'Mise en Place & Optimisation CRM', short: 'Un CRM réellement adapté au fonctionnement de vos équipes.',
      desc: 'Nous configurons et optimisons votre CRM — pipelines, automatisations, reporting — pour que vos équipes commerciales et support en tirent le meilleur parti.',
      features: ['Aide au choix du CRM', 'Configuration des pipelines & workflows', 'Migration & nettoyage des données', 'Automatisations & rappels', 'Formation des équipes'] } },
  { id: 'digital-transformation', cat: 'business', icon: '⇒',
    priceUSD: 4000,
    en: { title: 'Digital Transformation', short: 'Modernize how your organization works, tool by tool.',
      desc: 'We help traditional organizations move core processes online — from paper workflows to connected digital systems.',
      features: ['Process mapping', 'Tool selection & rollout plan', 'Change management support', 'Staff training', 'Post-rollout support'] },
    fr: { title: 'Transformation Digitale', short: 'Modernisez le fonctionnement de votre organisation, outil par outil.',
      desc: 'Nous aidons les organisations traditionnelles à digitaliser leurs processus clés — du papier aux systèmes digitaux connectés.',
      features: ['Cartographie des processus', 'Sélection d\u2019outils & plan de déploiement', 'Accompagnement au changement', 'Formation du personnel', 'Support post-déploiement'] } },
  { id: 'startup-launch', cat: 'business', icon: '↑',
    priceUSD: 2000,
    en: { title: 'Startup Launch Packages', short: 'Everything a new venture needs to launch credibly, fast.',
      desc: 'A bundled package — brand, website and initial marketing — for founders who need to launch quickly without cutting corners.',
      features: ['Brand identity essentials', 'Launch website', 'Initial marketing setup', 'Social media accounts setup', 'Launch-week support'] },
    fr: { title: 'Packs Lancement Startup', short: 'Tout ce qu\u2019il faut pour lancer une activité crédible, rapidement.',
      desc: 'Un pack complet — identité, site web et marketing initial — pour les fondateurs qui doivent lancer vite, sans rogner sur la qualité.',
      features: ['Identité de marque essentielle', 'Site web de lancement', 'Mise en place marketing initiale', 'Configuration des réseaux sociaux', 'Accompagnement semaine de lancement'] } },
  { id: 'training', cat: 'business', icon: '▣',
    priceUSD: 300,
    en: { title: 'Training & Workshops', short: 'Hands-on sessions so your team can own the tools we set up.',
      desc: 'We run practical workshops for your team on the tools and systems we\u2019ve built or recommended, so you\u2019re never dependent on us alone.',
      features: ['Custom workshop design', 'Hands-on sessions', 'Reference documentation', 'Recorded sessions on request', 'Follow-up Q&A'] },
    fr: { title: 'Formations & Ateliers', short: 'Des sessions pratiques pour que votre équipe s\u2019approprie les outils.',
      desc: 'Nous animons des ateliers pratiques pour votre équipe sur les outils et systèmes que nous avons mis en place ou recommandés, pour ne jamais dépendre uniquement de nous.',
      features: ['Conception d\u2019ateliers sur mesure', 'Sessions pratiques', 'Documentation de référence', 'Sessions enregistrées sur demande', 'Questions-réponses de suivi'] } },
];

const CATEGORY_LABELS = {
  web: { en: 'Web & Apps', fr: 'Web & Applications' },
  marketing: { en: 'Marketing', fr: 'Marketing' },
  ai: { en: 'AI & Data', fr: 'IA & Données' },
  business: { en: 'Business', fr: 'Business' },
};

/* ---------- 5. Projects data ---------- */
// PLACEHOLDER portfolio data. Each project uses a CSS/SVG gradient thumbnail
// (see .project-thumb in style.css) — swap in a real <img> per project when photography exists.
const PROJECTS = [
  { id: 'atlas-market', cat: 'web', mark: 'AM',
    en: { title: 'Atlas Market', tag: 'E-commerce', desc: 'A multi-vendor e-commerce platform for Moroccan artisans, built for scale and speed.' },
    fr: { title: 'Atlas Market', tag: 'E-commerce', desc: 'Une plateforme e-commerce multi-vendeurs pour artisans marocains, pensée pour la vitesse et la montée en charge.' } },
  { id: 'nova-bank', cat: 'apps', mark: 'NB',
    en: { title: 'Nova Bank App', tag: 'Mobile App', desc: 'A mobile banking app redesign for a European fintech, cutting onboarding time in half.' },
    fr: { title: 'Application Nova Bank', tag: 'App Mobile', desc: 'Refonte d\u2019une application bancaire mobile pour une fintech européenne, réduisant de moitié le temps d\u2019onboarding.' } },
  { id: 'greenroute', cat: 'web', mark: 'GR',
    en: { title: 'GreenRoute Logistics', tag: 'Web App', desc: 'A route-planning web app for a logistics company operating across North Africa.' },
    fr: { title: 'GreenRoute Logistics', tag: 'Application Web', desc: 'Une application web de planification d\u2019itinéraires pour une entreprise de logistique en Afrique du Nord.' } },
  { id: 'sable-cosmetics', cat: 'marketing', mark: 'SC',
    en: { title: 'Sable Cosmetics Launch', tag: 'Marketing Campaign', desc: 'Full-funnel paid and social campaign for a DTC cosmetics brand entering the Gulf market.' },
    fr: { title: 'Lancement Sable Cosmetics', tag: 'Campagne Marketing', desc: 'Campagne paid & social full-funnel pour une marque de cosmétiques DTC lancée sur le marché du Golfe.' } },
  { id: 'medina-eats', cat: 'apps', mark: 'ME',
    en: { title: 'Medina Eats', tag: 'Mobile App', desc: 'A food delivery app connecting local restaurants with customers across three cities.' },
    fr: { title: 'Medina Eats', tag: 'App Mobile', desc: 'Une application de livraison de repas reliant restaurants locaux et clients dans trois villes.' } },
  { id: 'clarity-ai', cat: 'ai', mark: 'CX',
    en: { title: 'Clarity Support Bot', tag: 'AI Chatbot', desc: 'A multilingual support chatbot that resolved 62% of tickets without human intervention.' },
    fr: { title: 'Clarity Support Bot', tag: 'Chatbot IA', desc: 'Un chatbot de support multilingue résolvant 62 % des tickets sans intervention humaine.' } },
  { id: 'harbor-realty', cat: 'web', mark: 'HR',
    en: { title: 'Harbor Realty', tag: 'Website', desc: 'A property listings website with a custom search and lead-capture system.' },
    fr: { title: 'Harbor Realty', tag: 'Site Web', desc: 'Un site d\u2019annonces immobilières avec recherche personnalisée et système de capture de leads.' } },
  { id: 'pulse-dash', cat: 'ai', mark: 'PD',
    en: { title: 'Pulse Sales Dashboard', tag: 'Data Dashboard', desc: 'A real-time sales dashboard unifying data from five regional offices for a manufacturing group.' },
    fr: { title: 'Pulse Sales Dashboard', tag: 'Dashboard Data', desc: 'Un dashboard de ventes en temps réel unifiant les données de cinq bureaux régionaux pour un groupe industriel.' } },
  { id: 'lumen-brand', cat: 'marketing', mark: 'LB',
    en: { title: 'Lumen Rebrand', tag: 'Branding', desc: 'A full visual identity refresh for a renewable energy consultancy expanding into new markets.' },
    fr: { title: 'Refonte Lumen', tag: 'Branding', desc: 'Une refonte complète de l\u2019identité visuelle pour un cabinet de conseil en énergies renouvelables en expansion.' } },
];

/* ---------- 6. Renderers ---------- */

// -- Home: featured category cards data is static in HTML; only projects preview + services are JS-rendered where relevant.
function renderHomeProjects() {
  const wrap = document.getElementById('homeProjectsGrid');
  if (!wrap) return;
  const lang = getLang();
  const featured = PROJECTS.slice(0, 3);
  wrap.innerHTML = featured.map((p) => projectCardHTML(p, lang)).join('');
}

// Format a service's USD starting price for the current language.
function formatPrice(service, lang) {
  const amount = service.priceUSD.toLocaleString('en-US');
  const period = service.period === 'month' ? (lang === 'fr' ? '/mois' : '/mo')
    : service.period === 'hour' ? (lang === 'fr' ? '/heure' : '/hr')
    : '';
  return lang === 'fr' ? `À partir de $${amount}${period}` : `From $${amount}${period}`;
}

function projectCardHTML(p, lang) {
  return `
    <article class="card project-card reveal in">
      <div class="project-thumb"><span>${p.mark}</span></div>
      <div class="project-body">
        <div class="project-tags"><span class="badge"><span class="dot"></span>${p[lang].tag}</span></div>
        <h3>${p[lang].title}</h3>
        <p>${p[lang].desc}</p>
      </div>
    </article>`;
}

// -- Services list page: grouped by category
function renderServicesPage() {
  const wrap = document.getElementById('servicesGroups');
  if (!wrap) return;
  const lang = getLang();
  const order = ['web', 'marketing', 'ai', 'business'];
  wrap.innerHTML = order.map((cat) => {
    const items = SERVICES.filter((s) => s.cat === cat);
    const cards = items.map((s) => `
      <a class="card" href="service.html?s=${s.id}">
        <div class="cat-icon" aria-hidden="true">${s.icon}</div>
        <h3>${s[lang].title}</h3>
        <p>${s[lang].short}</p>
        <p class="service-price">${formatPrice(s, lang)}</p>
        <span class="more">${DICT['services.viewDetail'][lang]} →</span>
      </a>`).join('');
    return `
      <div class="service-group" id="${cat}">
        <h2>${CATEGORY_LABELS[cat][lang]}</h2>
        <div class="grid grid-3 mt-lg">${cards}</div>
      </div>`;
  }).join('<div style="height:3rem"></div>');

  // Groups are rendered by JS, so the browser's automatic #hash scroll (e.g. services.html#web)
  // runs before the target exists. Scroll to it manually once rendering is done.
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// -- Single service detail page, driven by ?s= param
function renderServicePage() {
  const root = document.getElementById('serviceRoot');
  if (!root) return;
  const lang = getLang();
  const params = new URLSearchParams(window.location.search);
  const id = params.get('s');
  const service = SERVICES.find((s) => s.id === id);

  if (!service) {
    root.innerHTML = `
      <div class="section container">
        <div class="not-found">
          <h1>${DICT['service.notFoundTitle'][lang]}</h1>
          <p>${DICT['service.notFoundLead'][lang]}</p>
          <a class="btn btn-primary" href="services.html">${DICT['service.backToServices'][lang]}</a>
        </div>
      </div>`;
    document.title = `${DICT['service.notFoundTitle'][lang]} — 2Tech Agency`;
    return;
  }

  const data = service[lang];
  document.title = `${data.title} — 2Tech Agency`;

  const related = SERVICES.filter((s) => s.cat === service.cat && s.id !== service.id).slice(0, 3);
  const relatedHTML = related.map((s) => `
    <a class="card" href="service.html?s=${s.id}">
      <div class="cat-icon" aria-hidden="true">${s.icon}</div>
      <h3>${s[lang].title}</h3>
      <p>${s[lang].short}</p>
    </a>`).join('');

  root.innerHTML = `
    <div class="section">
      <div class="container">
        <p class="breadcrumb">
          <a href="index.html">${DICT['nav.home'][lang]}</a> /
          <a href="services.html">${DICT['nav.services'][lang]}</a> /
          ${CATEGORY_LABELS[service.cat][lang]}
        </p>
        <div class="grid grid-2" style="align-items:start;">
          <div>
            <div class="service-hero-icon" aria-hidden="true">${service.icon}</div>
            <h1>${data.title}</h1>
            <p class="hero-lead">${data.desc}</p>
            <p class="service-price service-price-lg">${formatPrice(service, lang)}</p>
            <div class="cta-row">
              <a class="btn btn-primary" href="contact.html?s=${service.id}">${DICT['service.ctaButton'][lang]}</a>
              <a class="btn btn-outline" href="services.html">${DICT['service.backToServices'][lang]}</a>
            </div>
          </div>
          <div class="card">
            <h3>${DICT['service.whatsIncluded'][lang]}</h3>
            <ul class="feature-list">
              ${data.features.map((f) => `<li>${f}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="related-services">
          <h2>${DICT['service.related'][lang]}</h2>
          <div class="grid grid-3 mt-lg">${relatedHTML}</div>
        </div>
      </div>
    </div>`;
}

// -- Projects page: grid + category filter
function renderProjectsPage() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  const lang = getLang();
  const activeBtn = document.querySelector('.filter-btn.active');
  const filter = activeBtn ? activeBtn.dataset.filter : 'all';
  const list = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  grid.innerHTML = list.length
    ? list.map((p) => projectCardHTML(p, lang)).join('')
    : `<p class="small">${DICT['projects.empty'][lang]}</p>`;
}

function initProjectFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  if (!buttons.length) return;
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjectsPage();
    });
  });
}

/* ---------- 7. Contact form ---------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const lang = getLang;

  // Pre-select service from ?s= if arriving from a service page
  const params = new URLSearchParams(window.location.search);
  const preselect = params.get('s');
  const serviceSelect = form.querySelector('#service');
  if (preselect && serviceSelect) {
    const option = [...serviceSelect.options].find((o) => o.value === preselect);
    if (option) option.selected = true;
  }

  const fields = {
    name: form.querySelector('#name'),
    email: form.querySelector('#email'),
    message: form.querySelector('#message'),
  };

  function setInvalid(field, invalid) {
    const wrap = field.closest('.field');
    if (wrap) wrap.classList.toggle('invalid', invalid);
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function validate() {
    let ok = true;
    if (!fields.name.value.trim()) { setInvalid(fields.name, true); ok = false; }
    else setInvalid(fields.name, false);

    if (!isValidEmail(fields.email.value.trim())) { setInvalid(fields.email, true); ok = false; }
    else setInvalid(fields.email, false);

    if (fields.message.value.trim().length < 10) { setInvalid(fields.message, true); ok = false; }
    else setInvalid(fields.message, false);

    return ok;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validate()) return;

    const currentLang = lang();
    const name = fields.name.value.trim();
    const email = fields.email.value.trim();
    const phone = form.querySelector('#phone').value.trim();
    const serviceVal = serviceSelect ? serviceSelect.value : '';
    const serviceLabel = serviceVal
      ? (SERVICES.find((s) => s.id === serviceVal) || {})[currentLang]?.title || serviceVal
      : '';
    const message = fields.message.value.trim();

    const bodyLines = [
      `Name / Nom: ${name}`,
      `Email: ${email}`,
      phone ? `Phone / Téléphone: ${phone}` : null,
      serviceLabel ? `Service: ${serviceLabel}` : null,
      '',
      message,
    ].filter(Boolean);
    const body = bodyLines.join('\n');
    const subject = `2Tech Agency — ${serviceLabel || (currentLang === 'fr' ? 'Nouveau projet' : 'New project')}`;

    const mailtoLink = document.getElementById('sendEmail');
    const whatsappLink = document.getElementById('sendWhatsapp');
    const AGENCY_EMAIL = 'hello@2techagency.com'; // TODO: replace with the agency's real inbox
    const AGENCY_WHATSAPP = '212606830066'; // Agency WhatsApp number (no + or spaces)

    if (mailtoLink) {
      mailtoLink.href = `mailto:${AGENCY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    if (whatsappLink) {
      whatsappLink.href = `https://wa.me/${AGENCY_WHATSAPP}?text=${encodeURIComponent(`${subject}\n\n${body}`)}`;
    }

    const status = document.getElementById('formStatus');
    if (status) {
      status.classList.add('show', 'ok');
      status.classList.remove('bad');
    }
    const successBlock = document.getElementById('sendChoices');
    if (successBlock) successBlock.hidden = false;
  });
}

/* ---------- 8. Scroll reveal ---------- */
function initScrollReveal() {
  const items = document.querySelectorAll('.reveal:not(.in)');
  if (!items.length) return;

  items.forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index * 80, 320)}ms`;
  });

  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach((el) => io.observe(el));
}

/* ---------- 9. WhatsApp floating button (fixed link, works on every page) ---------- */
function initWhatsappFab() {
  const fab = document.getElementById('whatsappFab');
  if (!fab) return;
  const AGENCY_WHATSAPP = '212606830066'; // Agency WhatsApp number
  fab.href = `https://wa.me/${AGENCY_WHATSAPP}`;
}

/* ---------- Footer year ---------- */
function setFooterYear() {
  document.querySelectorAll('.js-year').forEach((el) => { el.textContent = new Date().getFullYear(); });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initLang();
  initMobileMenu();
  initWhatsappFab();
  setFooterYear();

  renderHomeProjects();
  renderServicesPage();
  renderServicePage();
  initProjectFilters();
  renderProjectsPage();
  initContactForm();

  initScrollReveal();

  // Re-render dynamic sections whenever the language changes
  document.addEventListener('langchange', () => {
    renderHomeProjects();
    renderServicesPage();
    renderServicePage();
    renderProjectsPage();
    initScrollReveal();
  });
});
