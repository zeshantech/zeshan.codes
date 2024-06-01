import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  handleContinue() {}

  services = [
    {
      title: 'Web Development',
      description:
        'Crafting responsive and dynamic web applications using frontend frameworks and libraries. Ensuring seamless user experiences across different devices and browsers.',
      technologies: ['React.js', 'Next.js', 'Angular'],
      imageUrl:
        'https://png.pngtree.com/png-clipart/20190903/original/pngtree-black-computer-icon-png-image_4421931.jpg',
    },
    {
      title: 'Backend Development',
      description:
        'Architecting robust and scalable server-side solutions, implementing microservices architecture for improved performance and maintainability',
      technologies: [
        'JavaScript',
        'Python',
        'GoLang',
        'TypeScript',
        'Node.js',
        'Express.js',
        'Nest.js',
        'Moleculer.js',
        'FastAPI',
        'Microservices',
        'GraphQL',
        'Firebase',
        'NumPy',
      ],
      imageUrl:
        'https://w7.pngwing.com/pngs/677/905/png-transparent-computer-icons-gear-circle-black-and-white-svg-hardware-accessory.png',
    },
    {
      title: 'Database Management',
      description:
        'Designing and optimizing databases for efficient data storage and retrieval, ensuring data integrity and security.',
      technologies: [
        'PostgreSQL',
        'MySQL',
        'SQLite',
        'MariaDB',
        'MongoDB',
        'Redis',
        'DynamoDB',
        'Firestore',
      ],
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968363.png',
    },
    {
      title: 'Mobile App Development',
      description:
        'Developing native and cross-platform mobile applications for iOS and Android platforms, delivering seamless user experiences.',
      technologies: ['React Native', 'Ionic'],
      imageUrl: 'https://svgprinted.com/wp-content/uploads/2020/05/Apple.jpg',
    },
    {
      title: 'Desktop App Development',
      description:
        'Building lightweight and platform-independent desktop applications, enabling seamless integration with existing systems.',
      technologies: ['Tauri'],
      imageUrl:
        'https://us.123rf.com/450wm/kaka0design/kaka0design1903/kaka0design190303021/118681510-vector-apps-icon.jpg?ver=6',
    },
    {
      title: 'DevOps Services',
      description:
        'Implementing continuous integration and deployment pipelines, ensuring efficient collaboration and streamlined development workflows',
      technologies: ['AWS', 'Azure', 'Docker', 'Git', 'GitHub', 'Jenkins'],
      imageUrl:
        'https://p7.hiclipart.com/preview/475/550/524/computer-icons-devops-continuous-integration-agile-software-development-continuous-delivery-infinity.jpg',
    },
    {
      title: 'UI/UX Design',
      description:
        'Creating visually appealing and intuitive user interfaces, optimizing user experiences for increased engagement and satisfaction.',
      technologies: ['Figma'],
      imageUrl:
        'https://e7.pngegg.com/pngimages/292/269/png-clipart-logo-user-interface-design-user-experience-design-design-user-interface-design-label-thumbnail.png',
    },
    {
      title: 'Quality Assurance (QA)',
      description:
        'Conducting thorough testing and quality assurance processes to ensure software reliability, performance, and security.',
      technologies: ['Selenium', 'Jest', 'Postman'],
      imageUrl:
        'https://p7.hiclipart.com/preview/666/474/504/quality-assurance-quality-control-computer-icons-others.jpg',
    },
  ];
}
