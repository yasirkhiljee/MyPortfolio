import { SiAndroid, SiKotlin } from 'react-icons/si'
import { FaCode, FaServer } from 'react-icons/fa'

const portfolioData = {
  hero: {
    title: 'Yasir Khan',
    subtitle: 'Senior Android & React Native Engineer | 8+ Years Shipping Mobile Products',
    intro: 'React Native • Android • Healthcare • Finance • Marketplaces • Cross-platform Delivery',
    resume: '/resume.pdf',
    projectsAnchor: '#projects',
    contactAnchor: '#contact',
    github: 'https://github.com/',
  },
  about: {
    heading: 'Experienced Android and React Native engineer shipping high-value mobile products.',
    description:
      'I build cross-platform mobile applications for healthcare, finance, home services, and rental marketplaces with polished UX, robust API integrations, and maintainable architecture.',
    highlights: [
      '10+ years delivering Android and React Native applications across complex domains.',
      'Strong experience with mobile product delivery, feature development, and ongoing maintenance.',
      'Focus on reliability, performance, and user-centered product decisions.',
    ],
    strengths: [
      'React Native & Android development',
      'Cross-platform feature implementation',
      'API integration and maintenance',
    ],
    workflow:
      'I collaborate with product, design, and engineering teams to ship polished apps that scale and remain reliable after launch.',
  },
  skills: [
    { title: 'Android', rating: 5 },
    { title: 'Kotlin', rating: 5 },
    { title: 'Java', rating: 5 },
    { title: 'Compose', rating: 4.5 },
    { title: 'MVVM', rating: 5 },
    { title: 'Coroutines', rating: 5 },
    { title: 'Room', rating: 5 },
    { title: 'Bluetooth', rating: 5 },
    { title: 'Firebase', rating: 5 },
  ],
  timeline: [
    { year: '2022 — Present', role: 'Senior Android Engineer', company: 'Logicose' },
    { year: '2021', role: 'Android Engineer', company: 'Innovatech' },
    { year: '2020', role: 'Android Developer', company: 'OranjeTech' },
    { year: '2019', role: 'Mobile Developer', company: 'Ovex' },
    { year: '2018', role: 'Android Intern', company: 'Wide Range' },
  ],
  stats: [
    { value: '8+', label: 'Years Experience' },
    { value: '15+', label: 'Mobile Apps' },
    { value: '4', label: 'Industries' },
    { value: '100K+', label: 'Users Impacted' },
    { value: 'Remote', label: 'Teams' },
    { value: 'React Native', label: 'Expert' },
  ],
  github: {
    pinned: [
      {
        name: 'Android-POS',
        description: 'Offline-capable point-of-sale Android app with Bluetooth printing.',
        language: 'Kotlin',
        stars: 124,
        forks: 28,
        url: 'https://github.com/username/android-pos',
      },
      {
        name: 'FinFlow',
        description: 'Personal finance Android app with secure storage and real-time updates.',
        language: 'Kotlin',
        stars: 98,
        forks: 15,
        url: 'https://github.com/username/finflow',
      },
      {
        name: 'Compose-UI-Kit',
        description: 'Reusable Jetpack Compose components and animation utilities.',
        language: 'Kotlin',
        stars: 76,
        forks: 12,
        url: 'https://github.com/username/compose-ui-kit',
      },
    ],
    latestCommits: [
      {
        hash: 'a1b2c3d',
        message: 'Fix Bluetooth printer disconnect handling',
        repo: 'Android-POS',
        date: '2 days ago',
        url: 'https://github.com/username/android-pos/commit/a1b2c3d',
      },
      {
        hash: 'd4e5f6g',
        message: 'Add expense filter and summary charts',
        repo: 'FinFlow',
        date: '5 days ago',
        url: 'https://github.com/username/finflow/commit/d4e5f6g',
      },
      {
        hash: 'h7i8j9k',
        message: 'Improve shared theme support for Compose UI Kit',
        repo: 'Compose-UI-Kit',
        date: '1 week ago',
        url: 'https://github.com/username/compose-ui-kit/commit/h7i8j9k',
      },
    ],
    languages: [
      { name: 'Kotlin', percentage: 72, bar: 'bg-emerald-500' },
      { name: 'Java', percentage: 18, bar: 'bg-cyan-400' },
      { name: 'XML', percentage: 7, bar: 'bg-slate-500' },
      { name: 'Shell', percentage: 3, bar: 'bg-violet-400' },
    ],
  },
  blog: [
    {
      title: 'MVVM Best Practices for Android',
      description: 'A practical guide to structuring Kotlin apps with lifecycle-safe architecture and maintainable layers.',
      date: 'Jul 2026',
      slug: 'mvvm-best-practices-for-android',
      category: 'Architecture',
      seoSummary:
        'Learn how to apply MVVM in Kotlin Android apps with lifecycle-safe data flows, modular architecture, and production-ready maintainable layers.',
      url: '/blog/mvvm-best-practices-for-android',
      content: [
        {
          id: 'p1',
          type: 'paragraph',
          text: 'MVVM remains one of the most reliable architecture patterns for Kotlin Android applications. When implemented correctly, it separates UI concerns from business logic and makes the codebase easier to test and maintain.',
        },
        {
          id: 'h1',
          type: 'heading',
          text: 'Why MVVM matters for Android',
        },
        {
          id: 'p2',
          type: 'paragraph',
          text: 'In mobile products, MVVM helps you keep UI rendering isolated while keeping state and side effects in the ViewModel. This is especially valuable when your app needs to support complex navigation, background updates, and reusable screens.',
        },
        {
          id: 'list1',
          type: 'list',
          items: [
            'ViewModel handles UI state and exposes immutable LiveData or StateFlow.',
            'Repository layer abstracts data sources, from network APIs to local cache.',
            'UI observes changes and responds only to presentational state updates.',
          ],
        },
        {
          id: 'p3',
          type: 'paragraph',
          text: 'For Kotlin apps, using StateFlow or LiveData inside ViewModels with clean separation ensures lifecycle-safe flows and reduces risks of memory leaks in long-lived components.',
        },
      ],
    },
    {
      title: 'Coroutines Explained: From Basics to Best Practices',
      description: 'How to write clean asynchronous code using Kotlin Coroutines, Flow, and structured concurrency.',
      date: 'Jun 2026',
      slug: 'coroutines-explained-basics-to-best-practices',
      category: 'Performance',
      seoSummary:
        'Understand Kotlin Coroutines and Flow, including threaded dispatchers, structured concurrency, and practical Android patterns for responsive apps.',
      url: '/blog/coroutines-explained-basics-to-best-practices',
      content: [
        {
          id: 'p1',
          type: 'paragraph',
          text: 'Kotlin Coroutines are the foundation for modern asynchronous Android development. They help you write sequential-looking code while keeping the UI smooth and avoiding callback hell.',
        },
        {
          id: 'h1',
          type: 'heading',
          text: 'Structured concurrency in Android',
        },
        {
          id: 'p2',
          type: 'paragraph',
          text: 'Always launch coroutines from lifecycle-aware scopes such as viewModelScope or lifecycleScope. Structured concurrency ensures your background work is canceled automatically when the UI is destroyed.',
        },
        {
          id: 'list1',
          type: 'list',
          items: [
            'Use Dispatchers.IO for network and disk operations.',
            'Use Dispatchers.Main for UI updates and state emission.',
            'Prefer Flow for reactive streams and debounce user input.',
          ],
        },
      ],
    },
    {
      title: 'Room Database Guide for Android',
      description: 'Building local persistence with Room, migrations, offline-first caching, and performant queries.',
      date: 'May 2026',
      slug: 'room-database-guide-for-android',
      category: 'Persistence',
      seoSummary:
        'Learn Room database best practices for Android, including schema migrations, offline caching, and efficient query design for real-world mobile apps.',
      url: '/blog/room-database-guide-for-android',
      content: [
        {
          id: 'p1',
          type: 'paragraph',
          text: 'Room is the recommended persistence library for Android because it provides compile-time query validation and a clean API for local storage. It is essential for apps that need offline data, caching, and structured persistence.',
        },
        {
          id: 'h1',
          type: 'heading',
          text: 'Building resilient persistence',
        },
        {
          id: 'paragraph2',
          type: 'paragraph',
          text: 'Use migrations and versioned schemas to avoid data loss during updates. Proper DAO design and indexing make Room queries fast even as your dataset grows.',
        },
        {
          id: 'list1',
          type: 'list',
          items: [
            'Define clear entity relationships and normalized tables.',
            'Use Flow<> to stream database updates into the UI.',
            'Cache network responses locally for offline-friendly behavior.',
          ],
        },
      ],
    },
    {
      title: 'Clean Architecture for Mobile Teams',
      description: 'A roadmap for designing scalable Android apps with separation of concerns and testable domains.',
      date: 'Apr 2026',
      slug: 'clean-architecture-for-mobile-teams',
      category: 'Architecture',
      seoSummary:
        'Explore clean architecture for Android mobile apps, including domain-driven design, separation of concerns, and testable layers for long-term product health.',
      url: '/blog/clean-architecture-for-mobile-teams',
      content: [
        {
          id: 'p1',
          type: 'paragraph',
          text: 'Clean architecture helps mobile teams build apps that are easier to maintain, test, and extend. It separates concerns into layers so features can evolve without disrupting the entire codebase.',
        },
        {
          id: 'h1',
          type: 'heading',
          text: 'Layered architecture for Android apps',
        },
        {
          id: 'paragraph2',
          type: 'paragraph',
          text: 'A strong Android architecture separates UI, domain, and data layers, ensuring business rules stay independent from presentation details and network implementation.',
        },
        {
          id: 'list1',
          type: 'list',
          items: [
            'Presentation layer handles Compose/UI and state rendering.',
            'Domain layer contains use cases, business rules, and validation.',
            'Data layer manages repository access to APIs and local storage.',
          ],
        },
      ],
    },
    {
      title: 'Bluetooth Printing on Android',
      description: 'Implementing reliable Bluetooth receipt printing for point-of-sale and field-deployment apps.',
      date: 'Mar 2026',
      slug: 'bluetooth-printing-on-android',
      category: 'Hardware',
      seoSummary:
        'Understand Bluetooth printing on Android, including pairing, socket management, and delivering reliable receipt workflows in mobile field and retail apps.',
      url: '/blog/bluetooth-printing-on-android',
      content: [
        {
          id: 'p1',
          type: 'paragraph',
          text: 'Bluetooth printing is a common requirement for field and retail Android apps. Reliable connections and clear user feedback are essential for in-store and remote printing workflows.',
        },
        {
          id: 'h1',
          type: 'heading',
          text: 'Managing Bluetooth connections',
        },
        {
          id: 'paragraph2',
          type: 'paragraph',
          text: 'Use a single manager to handle Bluetooth device discovery, pairing, and socket connection. Gracefully recover from disconnects and provide clear retry states in the UI.',
        },
        {
          id: 'list1',
          type: 'list',
          items: [
            'Request necessary Bluetooth permissions explicitly.',
            'Keep socket management off the main thread for responsive UI.',
            'Provide receipt preview and print status updates.',
          ],
        },
      ],
    },
    {
      title: 'Android Performance Optimization Tips',
      description: 'Practical techniques for reducing app startup time, memory usage, and UI jank.',
      date: 'Feb 2026',
      slug: 'android-performance-optimization-tips',
      category: 'Performance',
      seoSummary:
        'Discover Android performance optimization techniques for faster startup, reduced memory use, and smoother UI rendering in mobile applications.',
      url: '/blog/android-performance-optimization-tips',
      content: [
        {
          id: 'p1',
          type: 'paragraph',
          text: 'Performance is a core differentiator for mobile products. Reducing startup time and avoiding UI jank directly improves retention and user satisfaction.',
        },
        {
          id: 'h1',
          type: 'heading',
          text: 'Measure before you optimize',
        },
        {
          id: 'paragraph2',
          type: 'paragraph',
          text: 'Use tools like Android Studio Profiler and Systrace to identify real bottlenecks. Optimizations should be driven by measured issues, not guesswork.',
        },
        {
          id: 'list1',
          type: 'list',
          items: [
            'Lazy-load heavy screens and modules to improve startup time.',
            'Avoid expensive work on the UI thread with coroutines and background dispatchers.',
            'Reduce memory churn by reusing views and avoiding repeated allocations.',
          ],
        },
      ],
    },
  ],
  projects: [
    {
      title: 'Kenson Investments',
      tag: 'Investment App',
      description:
        'A React Native investment platform for Android and iOS with polished portfolio, transaction, and market monitoring experiences.',
      screenshot: null,
      screenshotAlt: 'Kenson Investments app screenshot placeholder',
      challenge:
        'The product needed seamless React Native development, strong API integration, and reliable financial workflows across Android and iOS.',
      solution:
        'Delivered feature implementation, bug fixes, and maintenance while integrating investment APIs and building smooth portfolio experiences.',
      architecture: 'React Native • Redux / Context • REST API Integration • Cross-platform UI',
      result:
        'Enabled users to track investments reliably on mobile with fast loading screens and a polished, native-like experience.',
      tech: ['React Native', 'TypeScript', 'API Integration', 'Redux', 'Authentication', 'UI/UX'],
      platforms: ['Android', 'iOS'],
      contribution:
        'React Native development, feature implementation, API integration, bug fixes, and production maintenance.',
      live: 'https://play.google.com/store/apps/details?id=com.kensoninv',
      caseStudy: '#',
      challenges: [
        'Maintaining consistent behavior across Android and iOS.',
        'Handling financial API integration and secure session management.',
        'Delivering a polished product experience with minimal bugs in production.',
      ],
      screens: [
        'Investment portfolio dashboard, market overview, and transaction history.',
        'Secure login, account management, and portfolio performance visuals.',
        'API-driven details for holdings, balances, and market updates.',
      ],
      performanceImprovements: [
        'Improved app stability by fixing navigation and state synchronization bugs.',
        'Optimized network requests and response parsing for faster data refresh.',
        'Streamlined feature delivery across Android and iOS with shared React Native components.',
      ],
      lessonsLearned: [
        'Cross-platform React Native apps benefit from consistent component design.',
        'API reliability is critical for financial products and user trust.',
        'Ongoing maintenance ensures production stability and faster iteration.',
      ],
      outcome:
        'A production-ready investment app with strong financial workflows, improved performance, and dependable cross-platform delivery.',
    },
    {
      title: 'RxCalendar',
      tag: 'Healthcare App',
      description:
        'A React Native healthcare scheduling app for Android and iOS, designed for fast appointment booking and provider coordination.',
      screenshot: null,
      screenshotAlt: 'RxCalendar app screenshot placeholder',
      challenge:
        'Healthcare users needed a reliable scheduling experience with strong UI, performance, and support for ongoing application updates.',
      solution:
        'Built scheduling features, performance improvements, and UI enhancements while maintaining the app across releases.',
      architecture: 'React Native • Navigation • Async API Sync • Cross-platform Scheduling',
      result:
        'Delivered faster appointment workflows and a more responsive patient/provider experience across mobile devices.',
      tech: ['React Native', 'TypeScript', 'UI/UX', 'Performance', 'API Integration', 'Support'],
      platforms: ['Android', 'iOS'],
      contribution:
        'Healthcare scheduling feature development, UI enhancements, performance optimizations, and app support.',
      live: 'https://play.google.com/store/apps/details?id=com.rxcalendar',
      caseStudy: '#',
      challenges: [
        'Ensuring smooth scheduling flows for healthcare users.',
        'Improving performance on older devices across Android and iOS.',
        'Maintaining app stability while rolling out feature enhancements.',
      ],
      screens: [
        'Appointment calendar, booking workflow, and notifications.',
        'Provider availability views and scheduling details.',
        'Patient task list and appointment management interfaces.',
      ],
      performanceImprovements: [
        'Reduced UI latency by optimizing rendering paths and memoizing components.',
        'Improved data synchronization with background refresh and caching.',
        'Stabilized main scheduling flows through bug fixing and regression testing.',
      ],
      lessonsLearned: [
        'Healthcare apps demand high reliability and clear scheduling feedback.',
        'Performance optimization is especially important on lower-end devices.',
        'Ongoing support keeps the product stable and trusted by users.',
      ],
      outcome:
        'A strong healthcare scheduling product with improved usability, smoother performance, and a reliable release cadence.',
    },
    {
      title: 'WealthyGen',
      tag: 'Smart Money App',
      description:
        'A React Native financial wellness app focused on money management, transaction tracking, and budget insights for Android and iOS.',
      screenshot: null,
      screenshotAlt: 'WealthyGen app screenshot placeholder',
      challenge:
        'The product needed a modern finance experience with secure data handling and responsive mobile interactions.',
      solution:
        'Implemented core financial features, API integrations, bug fixes, and optimization to support secure money management workflows.',
      architecture: 'React Native • Secure API Layer • State Management • Cross-platform UX',
      result:
        'Delivered a polished finance companion app that improved transaction visibility and user confidence.',
      tech: ['React Native', 'TypeScript', 'API Integration', 'Security', 'Performance', 'Analytics'],
      platforms: ['Android', 'iOS'],
      contribution:
        'Financial app development, secure API integration, bug fixing, and optimization for cross-platform release.',
      live: 'https://play.google.com/store/apps/details?id=com.wealthygen',
      caseStudy: '#',
      challenges: [
        'Ensuring secure handling of financial data in the mobile app.',
        'Delivering reliable performance during dashboard updates.',
        'Managing complex feature changes and bug fixes in production.',
      ],
      screens: [
        'Spending dashboard, budget insights, and transaction summaries.',
        'Secure onboarding, authentication, and account setup.',
        'Interactive charts and savings goal tracking.',
      ],
      performanceImprovements: [
        'Optimized render performance for dashboard and chart-heavy screens.',
        'Reduced backend payloads with targeted API requests and caching.',
        'Improved app stability through careful regression testing.',
      ],
      lessonsLearned: [
        'Financial apps must balance polished UX with data security and accuracy.',
        'Iterative optimization is key for smooth mobile dashboards.',
        'Cross-platform feature parity improves product consistency.',
      ],
      outcome:
        'A smart money product with improved mobile performance, robust feature delivery, and stronger user trust.',
    },
    {
      title: 'Gary Corp',
      tag: 'Home Services',
      description:
        'A React Native and Android home services platform that connects customers, employees, and employers through booking and service management workflows.',
      screenshot: null,
      screenshotAlt: 'Gary Corp app screenshot placeholder',
      challenge:
        'The platform needed to support multiple user roles, authentication flows, and booking management with clean UX across devices.',
      solution:
        'Built customer, employee, and employer experiences with booking, service management, authentication, and UI improvements.',
      architecture: 'React Native • Role-based flows • Booking systems • Authentication',
      result:
        'Delivered a unified home services suite for customers and staff with improved usability and maintainability.',
      tech: ['React Native', 'Android', 'iOS', 'Authentication', 'Booking', 'Maintenance'],
      platforms: ['Android', 'iOS'],
      contribution:
        'Home services platform development across customer, employee, and employer apps with booking, authentication, and UX enhancements.',
      live: 'https://play.google.com/store/apps/details?id=com.gary_corp_customer',
      caseStudy: '#',
      challenges: [
        'Managing multiple user roles and distinct app experiences.',
        'Keeping booking workflows intuitive and reliable.',
        'Maintaining app quality across customer, employee, and employer releases.',
      ],
      screens: [
        'Customer booking flow and service discovery.',
        'Employee task list and service management screens.',
        'Employer dashboard with hiring and management tools.',
      ],
      performanceImprovements: [
        'Improved booking reliability with better state and error handling.',
        'Reduced screen load time through component reuse and lazy loading.',
        'Enhanced authentication flows for faster sign-in and role switching.',
      ],
      lessonsLearned: [
        'Complex role-based apps need clear navigation and access control.',
        'Service platforms require consistent booking UX across user journeys.',
        'Ongoing maintenance is essential for multi-app product suites.',
      ],
      outcome:
        'A complete home services platform that supported multiple users and improved booking management across Android and iOS.',
    },
    {
      title: 'Neighbors Trailer',
      tag: 'Rental Marketplace',
      description:
        'A trailer rental marketplace with owner and renter apps, booking workflows, payment integrations, and marketplace enhancements for Android and iOS.',
      screenshot: null,
      screenshotAlt: 'Neighbors Trailer app screenshot placeholder',
      challenge:
        'The marketplace required dependable booking workflows, payment handling, and simplified user journeys for owners and renters.',
      solution:
        'Enhanced booking flows, payment-related integrations, and app maintenance for owner and renter experiences.',
      architecture: 'React Native • Marketplace workflows • Payments • Cross-platform delivery',
      result:
        'Delivered a stronger rental marketplace product with better booking reliability and feature consistency.',
      tech: ['React Native', 'Android', 'iOS', 'Payments', 'Booking', 'Marketplace'],
      platforms: ['Android', 'iOS'],
      contribution:
        'Marketplace feature enhancements, booking workflow improvements, payment integration, and reliability fixes for trailer rental apps.',
      live: 'https://play.google.com/store/apps/details?id=com.neighbourstrailerowner',
      caseStudy: '#',
      challenges: [
        'Keeping marketplace booking workflows reliable and easy to use.',
        'Integrating payment flows across Android and iOS.',
        'Maintaining app quality while shipping enhancements.',
      ],
      screens: [
        'Owner listing management and booking requests.',
        'Renter search and reservation workflows.',
        'Payment confirmation and booking status screens.',
      ],
      performanceImprovements: [
        'Optimized booking state management for faster updates.',
        'Improved payment flow handling and error recovery.',
        'Stabilized marketplace screens with focused bug fixes.',
      ],
      lessonsLearned: [
        'Marketplace apps need clear workflows for both buyers and sellers.',
        'Payment integrations must be reliable and transparent to users.',
        'Continuous enhancements keep rental marketplaces competitive.',
      ],
      outcome:
        'A high-quality trailer rental marketplace with improved owner and renter experiences and dependable booking flows.',
    },
  ],
}

export default portfolioData
