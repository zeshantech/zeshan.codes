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
        'I prioritize user experience, ensuring visually appealing designs and intuitive interfaces for better interaction.',
      imageUrl:
        'https://cdn3d.iconscout.com/3d/premium/thumb/rocket-3254516-2725079.png',
    },

    {
      title: 'Collaborative Understanding',
      description:
        'I foster collaboration to ensure clear project goals and requirements, working closely with stakeholders including designers, developers, and clients.',
      imageUrl:
        'https://cdn3d.iconscout.com/3d/premium/thumb/code-issue-8583651-6786063.png?f=webp',
    },

    {
      title: 'Proven Experience',
      description:
        'With UX-focused development experience, I deliver high-quality solutions that exceed client expectations by leveraging best practices.',
      imageUrl:
        'https://cdn3d.iconscout.com/3d/premium/thumb/heart-rate-8355807-6629683.png?f=webp',
    },

    {
      title: 'Security & IP Protection',
      description:
        'I prioritize the security of client data and intellectual property, following stringent measures to ensure confidentiality and peace of mind.',
      imageUrl:
        'https://cdn3d.iconscout.com/3d/premium/thumb/shield-3783763-3162225.png?f=webp',
    },

    {
      title: 'Thorough Code Reviews',
      description:
        'I conduct thorough code reviews to ensure quality, consistency, and adherence to best practices, providing robust and maintainable code.',
      imageUrl:
        'https://cdn3d.iconscout.com/3d/premium/thumb/check-4564125-3793514.png?f=webp',
    },

    {
      title: 'Quality Assurance & Testing',
      description:
        'I apply rigorous QA and testing methodologies to ensure the reliability, performance, and functionality of solutions, meeting high-quality standards.',
      imageUrl:
        'https://cdn3d.iconscout.com/3d/premium/thumb/lock-3711729-3105451.png?f=webp',
    },
  ];
}
