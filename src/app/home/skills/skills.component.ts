import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skillsArray = [
    {name: "Reactjs", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/6d3026449b527993f9c56028323fb94c/detailed'},
    {name: "Nextjs", imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png'},
    {name: "Angular", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/5768ac798fd56dd06d26cdcf824cc1e7/detailed'},
    {name: "Tauri", imageUrl: 'https://raw.githubusercontent.com/tauri-apps/tauri/HEAD/app-icon.png'},
    {name: "React native", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'},
    {name: "IONIC", imageUrl: 'https://miro.medium.com/v2/1*ZU1eWct801yP-QpUJOaI6Q.png'},
    {name: "TypeScript", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/f50e483d429c87613937436656b15a1a/detailed'},
    {name: "Nodejs", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/61b1cfff6bab4a3c9b091fb7875233fb/detailed'},
    {name: "Expressjs", imageUrl: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png'},
    {name: "Nestjs", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/61d4f73e995b2f7019a25639255b507b/detailed'},
    {name: "Micro services", imageUrl: 'https://code.kx.com/insights/1.2/microservices/img/microservice_icon.png'},
    {name: "Moleculerjs", imageUrl: 'https://moleculer-java.github.io/site/logo.png'},
    {name: "AWS", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/7cac7afc8db86166f6189ba7b366e7b8/detailed'},
    {name: "Firebase", imageUrl: 'https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png'},
    {name: "Supabase", imageUrl: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/299/square_480/supabase-logo-icon_1.png'},
    {name: "PostgresQl", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/246fbfe4ef4e4c1452f18fcad574fbf5/detailed'},
    {name: "MySql", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/684aed5022e90c20167a19186a3766e9/detailed'},
    {name: "Sqlite", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/7f2b2a5a6dafd8f8d54e159d07886a98/detailed'},
    {name: "Oracle", imageUrl: 'https://logohistory.net/wp-content/uploads/2023/11/Oracle-Logo.png'},
    {name: "MongoDB", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/0b49d44f16b242edfe5fdf9433c0a505/detailed'},
    {name: "Azure", imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png'},
    {name: "Docker", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/d6d2769939a6e0d40b1190b853c2a442/detailed'},
    {name: "Github", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/8683538e8c9832949688715d0ad2beb2/detailed'},
    {name: "Git", imageUrl: 'https://res-console.cloudinary.com/djvfnekle/media_explorer_thumbnails/661160c1fccd1d8a37112f0406265331/detailed'},
  ];

  onSliderChange() {}
}
