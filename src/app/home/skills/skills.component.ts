import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skillsArray = [
    {name: "TypeScript", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/f50e483d429c87613937436656b15a1a/detailed'},
    {name: "Reactjs", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/6d3026449b527993f9c56028323fb94c/detailed'},
    {name: "Nextjs", imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png'},
    {name: "Angular", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/5768ac798fd56dd06d26cdcf824cc1e7/detailed'},
    {name: "React native", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png'},
    {name: "IONIC", imageUrl: 'https://miro.medium.com/v2/1*ZU1eWct801yP-QpUJOaI6Q.png'},
    {name: "Tauri", imageUrl: 'https://raw.githubusercontent.com/tauri-apps/tauri/HEAD/app-icon.png'},
    {name: "Nodejs", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/61b1cfff6bab4a3c9b091fb7875233fb/detailed'},
    {name: "Expressjs", imageUrl: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png'},
    {name: "Nestjs", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/61d4f73e995b2f7019a25639255b507b/detailed'},
    {name: "Moleculerjs", imageUrl: 'https://moleculer-java.github.io/site/logo.png'},
    // {name: "Spring boot", imageUrl: 'https://bitaacademy.com/wp-content/uploads/2020/01/Spring-1.png'},
    {name: "Graphql", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png'},
    {name: "Firebase", imageUrl: 'https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png'},
    {name: "Supabase", imageUrl: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/299/square_480/supabase-logo-icon_1.png'},
    {name: "Numpy", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/83a0883f461ecf77193de89f4eac16a1/detailed'},
    {name: "PostgresQl", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png'},
    {name: "MySql", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/684aed5022e90c20167a19186a3766e9/detailed'},
    {name: "Sqlite", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/7f2b2a5a6dafd8f8d54e159d07886a98/detailed'},
    {name: "MongoDB", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/0b49d44f16b242edfe5fdf9433c0a505/detailed'},
    {name: "AWS", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/7cac7afc8db86166f6189ba7b366e7b8/detailed'},
    {name: "Azure", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png'},
    {name: "Docker", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/d6d2769939a6e0d40b1190b853c2a442/detailed'},
    {name: "Genkins", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png'},
    {name: "Git", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/661160c1fccd1d8a37112f0406265331/detailed'},
  ];

  onSliderChange() {}
}
