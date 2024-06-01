import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {
  backendTechnologies = [
    { name: "JavaScript", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710757611/qcrj2jqbqdp0uduabrkd.png' },
    { name: "Python", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710758304/fehvkcaqverghy5o0iij.png' },
    { name: "Golang", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710758146/qlamaxt3fc1wdzr2tj2f.png' },
    { name: "TypeScript", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009761/otj7i99gcvkj6moeok54.png' },
    { name: "Nodejs", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009760/f05i1vkplc2j3ft5hxoj.png' },
    { name: "Expressjs", imageUrl: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png' },
    { name: "Nestjs", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009756/ph8a6wv0nrrps778fcco.png' },
    { name: "Moleculerjs", imageUrl: 'https://moleculer-java.github.io/site/logo.png' },
    { name: "FastAPI", imageUrl: 'https://www.jetbrains.com/guide/assets/fastapi-6837327b.svg' },
    { name: "Microservices", imageUrl: 'https://media.licdn.com/dms/image/C5112AQEEcR2mak_D8Q/article-cover_image-shrink_720_1280/0/1563209644780?e=2147483647&v=beta&t=U76cYNVN1rJWoYx1fKFsMW9-3DbfyImlwWGFhLLc3qk' },
    { name: "Graphql", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png' },
    { name: "Firebase", imageUrl: 'https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png' },
    { name: "Numpy", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710018441/jhwrbhifybvnbszvt62t.png' },
  ];
  
  frontendTechnologies = [
    { name: "React native", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png' },
    { name: "IONIC", imageUrl: 'https://miro.medium.com/v2/1*ZU1eWct801yP-QpUJOaI6Q.png' },
    { name: "Reactjs", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009761/hnux1zmysqxclff9rac1.png' },
    { name: "Nextjs", imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png' },
    { name: "Angular", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009752/j0meorzfnkyk995pfgzr.png' },
    { name: "Tauri", imageUrl: 'https://raw.githubusercontent.com/tauri-apps/tauri/HEAD/app-icon.png' },
  ]
  
  databases = [
    { name: "PostgresQl", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png' },
    { name: "MySql", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009755/xvwcprf2eohpc98dwjro.png' },
    { name: "SQlite", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009761/lzfxckgyhkqlfrloar3i.png' },
    { name: "MariaDB", imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-mariadb-226022.png?f=webp&w=256' },
    { name: "MongoDB", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009753/clo5kbdsb1mlfczslpn7.png' },
    { name: "Redis", imageUrl: 'https://www.stackery.io/assets/images/posts/redis-cache-cluster-support/featured.svg' },
    { name: "DynamoDB", imageUrl: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Database_copy_DynamoDB-512.png'},
    { name: "Firestore", imageUrl: 'https://seeklogo.com/images/F/firestore-logo-3828671CC5-seeklogo.com.png'}
  ]
  
  devopsTechnologies = [
    { name: "AWS", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009750/wm0h2lbbzxogenttx0tg.png' },
    { name: "Azure", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png' },
    { name: "Docker", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009749/pebtirzmkqmputt8o0pf.png' },
    { name: "Git", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009750/dmcnjjohqxrujnm27gy1.png' },
    { name: "Github", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009751/drztbwozq90q6iwnxwu8.png' },
    { name: "Genkins", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png' },
  ]
}
