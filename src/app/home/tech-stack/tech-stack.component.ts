import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {
  backendTechnologies = [
    // { name: "JavaScript", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710757611/qcrj2jqbqdp0uduabrkd.png' },
    // { name: "Golang", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710758146/qlamaxt3fc1wdzr2tj2f.png' },
    // { name: "TypeScript", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009761/otj7i99gcvkj6moeok54.png' },

    { proficiency: 90, name: "Nestjs", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009756/ph8a6wv0nrrps778fcco.png' },
    { proficiency: 90, name: "Nodejs", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009760/f05i1vkplc2j3ft5hxoj.png' },
    { proficiency: 60, name: "GinGonic", imageUrl: 'https://avatars.githubusercontent.com/u/15729372?s=280&v=4' },
    { proficiency: 90, name: "Expressjs", imageUrl: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png' },
    { proficiency: 80, name: "Moleculerjs", imageUrl: 'https://moleculer-java.github.io/site/logo.png' },
    { proficiency: 60, name: "Microservices", imageUrl: 'https://media.licdn.com/dms/image/C5112AQEEcR2mak_D8Q/article-cover_image-shrink_720_1280/0/1563209644780?e=2147483647&v=beta&t=U76cYNVN1rJWoYx1fKFsMW9-3DbfyImlwWGFhLLc3qk' },
    { proficiency: 80, name: "E2E Testing", imageUrl: 'https://cdn-icons-png.flaticon.com/512/10435/10435145.png' },
    { proficiency: 90, name: "Graphql", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png' },
    { proficiency: 50, name: "Serverless", imageUrl: 'https://getcommandeer.com/_nuxt/img/4a7600a.png' },
    { proficiency: 60, name: "Firebase", imageUrl: 'https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png' },
  ];
  
  frontendTechnologies = [
    { proficiency: 80, name: "React native", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png' },
    { proficiency: 60, name: "IONIC", imageUrl: 'https://miro.medium.com/v2/1*ZU1eWct801yP-QpUJOaI6Q.png' },
    { proficiency: 90, name: "Reactjs", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009761/hnux1zmysqxclff9rac1.png' },
    { proficiency: 80, name: "Nextjs", imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png' },
    { proficiency: 70, name: "Angular", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009752/j0meorzfnkyk995pfgzr.png' },
  ]
  
  databases = [
    { proficiency: 60, name: "PostgresQl", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png' },
    { proficiency: 90, name: "MySql", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009755/xvwcprf2eohpc98dwjro.png' },
    { proficiency: 70, name: "MariaDB", imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-mariadb-226022.png?f=webp&w=256' },
    { proficiency: 60, name: "SQlite", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009761/lzfxckgyhkqlfrloar3i.png' },
    { proficiency: 90, name: "MongoDB", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009753/clo5kbdsb1mlfczslpn7.png' },
    { proficiency: 70, name: "Redis", imageUrl: 'https://www.stackery.io/assets/images/posts/redis-cache-cluster-support/featured.svg' },
    { proficiency: 50, name: "DynamoDB", imageUrl: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Database_copy_DynamoDB-512.png'},
  ]
  
  devopsTechnologies = [
    { proficiency: 30, name: "AWS", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009750/wm0h2lbbzxogenttx0tg.png' },
    { proficiency: 80, name: "Docker", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009749/pebtirzmkqmputt8o0pf.png' },
    { proficiency: 80, name: "Git", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009750/dmcnjjohqxrujnm27gy1.png' },
    { proficiency: 70, name: "Github Actions", imageUrl: 'https://static-00.iconduck.com/assets.00/githubactions-icon-2048x2048-ipqow27x.png' },
    { proficiency: 60, name: "Jenkins", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png' },
    { proficiency: 70, name: "Ansible", imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-asible-logo-icon-download-in-svg-png-gif-file-formats--brand-pack-logos-icons-9631116.png' },
    { proficiency: 50, name: "Linux", imageUrl: 'https://static-00.iconduck.com/assets.00/linux-icon-2048x2048-sy06t4un.png' },
  ]
}
