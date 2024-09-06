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

    { name: "Nestjs", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009756/ph8a6wv0nrrps778fcco.png' },
    { name: "Nodejs", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009760/f05i1vkplc2j3ft5hxoj.png' },
    { name: "GinGonic", imageUrl: 'https://avatars.githubusercontent.com/u/15729372?s=280&v=4' },
    { name: "Expressjs", imageUrl: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png' },
    { name: "Moleculerjs", imageUrl: 'https://moleculer-java.github.io/site/logo.png' },
    { name: "Microservices", imageUrl: 'https://media.licdn.com/dms/image/C5112AQEEcR2mak_D8Q/article-cover_image-shrink_720_1280/0/1563209644780?e=2147483647&v=beta&t=U76cYNVN1rJWoYx1fKFsMW9-3DbfyImlwWGFhLLc3qk' },
    { name: "E2E Testing", imageUrl: 'https://cdn-icons-png.flaticon.com/512/10435/10435145.png' },
    { name: "Graphql", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png' },
    { name: "Firebase", imageUrl: 'https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png' },
  ];
  
  frontendTechnologies = [
    { name: "React native", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png' },
    { name: "IONIC", imageUrl: 'https://miro.medium.com/v2/1*ZU1eWct801yP-QpUJOaI6Q.png' },
    { name: "Reactjs", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009761/hnux1zmysqxclff9rac1.png' },
    { name: "Nextjs", imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png' },
    { name: "Angular", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009752/j0meorzfnkyk995pfgzr.png' },
  ]
  
  databases = [
    { name: "PostgresQl", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png' },
    { name: "MySql", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009755/xvwcprf2eohpc98dwjro.png' },
    { name: "MariaDB", imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-mariadb-226022.png?f=webp&w=256' },
    { name: "SQlite", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009761/lzfxckgyhkqlfrloar3i.png' },
    { name: "MongoDB", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009753/clo5kbdsb1mlfczslpn7.png' },
    { name: "Redis", imageUrl: 'https://www.stackery.io/assets/images/posts/redis-cache-cluster-support/featured.svg' },
    { name: "DynamoDB", imageUrl: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Database_copy_DynamoDB-512.png'},
  ]
  
  devopsTechnologies = [
    { name: "AWS", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009750/wm0h2lbbzxogenttx0tg.png' },
    { name: "Docker", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009749/pebtirzmkqmputt8o0pf.png' },
    { name: "Git", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009750/dmcnjjohqxrujnm27gy1.png' },
    { name: "Gitlens", imageUrl: 'https://static-00.iconduck.com/assets.00/githubactions-icon-2048x2048-ipqow27x.png' },
    { name: "Jenkins", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png' },
    { name: "Ansible", imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-asible-logo-icon-download-in-svg-png-gif-file-formats--brand-pack-logos-icons-9631116.png' },
    { name: "Linux", imageUrl: 'https://static-00.iconduck.com/assets.00/linux-icon-2048x2048-sy06t4un.png' },
  ]
}
