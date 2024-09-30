import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  handleContinue() { }

  services = [
    {
      title: 'Web Development',
      description:
        'Crafting responsive and dynamic web applications using frontend frameworks and libraries. Ensuring seamless user experiences across different devices and browsers.',
      technologies: ['React.js', 'Next.js', 'Angular', 'JavaScript', 'TypeScript', 'HTML5'],
      imageUrl:
        'https://png.pngtree.com/png-clipart/20190903/original/pngtree-black-computer-icon-png-image_4421931.jpg',
    },
    {
      title: 'Backend Development',
      description:
        'Architecting robust and scalable server-side solutions, Security Strategies, implementing microservices architecture for improved performance, Security and maintainability',
      technologies: [
        'Nestjs',
        'Nodejs',
        'GinGonic',
        'Golang',
        'Expressjs',
        'Moleculerjs',
        'Microservices',
        'E2E Testing',
        'Graphql',
        'Security',
        'Serverless',
        'Firebase',
        'Supabase',
        'BaaS Services',
        'Jest',
        'Postman'
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
      imageUrl: 'https://img.freepik.com/premium-vector/smartphone-frame-border-black-silhouette-icon-transparent-screen-background-png_1105246-1212.jpg?semt=ais_hybrid',
    },
    {
      title: 'Desktop App Development',
      description:
        'Building lightweight and platform-independent desktop applications, enabling seamless integration with existing systems.',
      technologies: ['Tauri'],
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJpMgiobK_11UTPJymWDQf7GoFUugJyBy9Q&usqp=CAU',
    },
    {
      title: 'DevOps Services',
      description:
        'Implementing CICD pipelines, ensuring efficient collaboration and streamlined development workflows',
      technologies: ['AWS', 'Jenkins', 'Ansible', 'Docker', 'Git', 'Github Actions', 'Linux', 'CICD Pipelines'],
      imageUrl:
        'https://static.thenounproject.com/png/2606577-200.png',
    },
  ];
}
