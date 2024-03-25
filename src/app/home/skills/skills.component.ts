import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skillsArray = [
    {name: "TypeScript", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009761/otj7i99gcvkj6moeok54.png'},
    {name: "Reactjs", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009761/hnux1zmysqxclff9rac1.png'},
    {name: "Nextjs", imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png'},
    {name: "Angular", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009752/j0meorzfnkyk995pfgzr.png'},
    {name: "React native", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png'},
    {name: "IONIC", imageUrl: 'https://miro.medium.com/v2/1*ZU1eWct801yP-QpUJOaI6Q.png'},
    {name: "Tauri", imageUrl: 'https://raw.githubusercontent.com/tauri-apps/tauri/HEAD/app-icon.png'},
    {name: "Nodejs", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009760/f05i1vkplc2j3ft5hxoj.png'},
    {name: "Expressjs", imageUrl: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png'},
    {name: "Nestjs", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009756/ph8a6wv0nrrps778fcco.png'},
    {name: "Moleculerjs", imageUrl: 'https://moleculer-java.github.io/site/logo.png'},
    {name: "Spring boot", imageUrl: 'https://bitaacademy.com/wp-content/uploads/2020/01/Spring-1.png'},
    {name: "Microservices", imageUrl: 'https://media.licdn.com/dms/image/C5112AQEEcR2mak_D8Q/article-cover_image-shrink_720_1280/0/1563209644780?e=2147483647&v=beta&t=U76cYNVN1rJWoYx1fKFsMW9-3DbfyImlwWGFhLLc3qk'},
    {name: "Graphql", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png'},
    {name: "Firebase", imageUrl: 'https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png'},
    {name: "Supabase", imageUrl: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/299/square_480/supabase-logo-icon_1.png'},
    {name: "Numpy", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710018441/jhwrbhifybvnbszvt62t.png'},
    {name: "PostgresQl", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png'},
    {name: "MySql", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009755/xvwcprf2eohpc98dwjro.png'},
    {name: "Sqlite", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009761/lzfxckgyhkqlfrloar3i.png'},
    {name: "MongoDB", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009753/clo5kbdsb1mlfczslpn7.png'},
    {name: "Firestore", imageUrl: 'https://seeklogo.com/images/F/firestore-logo-3828671CC5-seeklogo.com.png'},
    {name: "AWS", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009750/wm0h2lbbzxogenttx0tg.png'},
    {name: "Azure", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png'},
    {name: "Docker", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009749/pebtirzmkqmputt8o0pf.png'},
    {name: "Genkins", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png'},
    {name: "Git", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009750/dmcnjjohqxrujnm27gy1.png'},
    { name: "Github", imageUrl: 'https://res.cloudinary.com/djvfnekle/image/upload/v1710009751/drztbwozq90q6iwnxwu8.png' },
  ];

  onSliderChange() {}
}
