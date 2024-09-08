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
      technologies: ['React.js', 'Next.js', 'Angular'],
      imageUrl:
        'https://png.pngtree.com/png-clipart/20190903/original/pngtree-black-computer-icon-png-image_4421931.jpg',
    },
    {
      title: 'Backend Development',
      description:
        'Architecting robust and scalable server-side solutions, implementing microservices architecture for improved performance and maintainability',
      technologies: [
        'Nestjs', 'Nodejs', 'GinGonic', ,'Golang', 'Expressjs', 'Moleculerjs', 'Microservices', 'E2E Testing', 'Graphql', 'Serverless', 'Firebase', 'Supabase', 'BaaS Services'
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
      imageUrl: 'https://cdn1.iconfinder.com/data/icons/soleicons-solid-vol-1/64/reactjs_javascript_library_atom_atomic_react-512.png',
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
      technologies: ['AWS', 'Jenkins', 'Ansible', 'Docker', 'Git', 'Gitlens', 'Linux', 'CICD Pipelines'],
      imageUrl:
        'https://static.thenounproject.com/png/2606577-200.png',
    },
    {
      title: 'Quality Assurance (QA)',
      description:
        'Conducting thorough testing and quality assurance processes to ensure software reliability, performance, and security.',
      technologies: ['Jest', 'E2E Testing', 'Postman'],
      imageUrl:
        'https://p7.hiclipart.com/preview/666/474/504/quality-assurance-quality-control-computer-icons-others.jpg',
    },
  ];
}
