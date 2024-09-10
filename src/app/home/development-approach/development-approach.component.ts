import { Component } from '@angular/core';

@Component({
  selector: 'app-development-approach',
  templateUrl: './development-approach.component.html',
  styleUrls: ['./development-approach.component.scss'],
})
export class DevelopmentApproachComponent {
  approaches = [
    {
      title: 'User-Centric Design',
      description:
        'Emphasis on user experience with beautiful and intuitive UI elements to create interactive experiences.',
      imageUrl:
        'https://cdn3d.iconscout.com/3d/premium/thumb/rocket-3254516-2725079.png',
    },

    {
      title: 'Collaborative Understanding',
      description:
        'Identify project priorities in conjunction with stakeholders and align all development to these goals.',
      imageUrl:
        'https://cdn3d.iconscout.com/3d/premium/thumb/code-issue-8583651-6786063.png?f=webp',
    },

    {
      title: 'Proven Experience',
      description:
        'Apply industry best practices to ensure high-quality, UX-focused solutions.',
      imageUrl:
        'https://cdn3d.iconscout.com/3d/premium/thumb/heart-rate-8355807-6629683.png?f=webp',
    },

    {
      title: 'Security & IP Protection',
      description:
        'Assure the confidentiality and protection of data, IP with very strict security.',
      imageUrl:
        'https://cdn3d.iconscout.com/3d/premium/thumb/shield-3783763-3162225.png?f=webp',
    },

    {
      title: 'Thorough Code Reviews',
      description:
        'Perform code reviews scrupulously to ensure quality, maintainable, and consistent code.',
      imageUrl:
        'https://cdn3d.iconscout.com/3d/premium/thumb/check-4564125-3793514.png?f=webp',
    },

    {
      title: 'Quality Assurance & Testing',
      description:
        'QA and Testing -Execute rigorous QA & testing to ensure consistent high performance of outputs.',
      imageUrl:
        'https://cdn3d.iconscout.com/3d/premium/thumb/lock-3711729-3105451.png?f=webp',
    },
  ];
}
