import { Component } from '@angular/core';
import { ICardProps } from './card/card.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
  mobileApps: ICardProps[] = [
    {
      name: 'Riyad Bank App',
      description:
        'Bank application developed in <br>  <small>(React Native)<small>',
      playStoreLink:
        'https://play.google.com/store/apps/details?id=com.riyadbank.digitalmobile&hl=en&pli=1',
      appStoreLink:
        'https://apps.apple.com/az/app/riyad-bank-mobile/id1445567211',
      ratings: 5.0,
      imageUrl:
        'https://m.eyeofriyadh.com/directory/images/2024/07/31ebd7221a8e4.jpg',
    },
    {
      name: 'Aesthetics Global Evolution',
      description:
        'Skincare app developed in <br>  <small>(Nest.js · IONIC · Angular · PostgresQl · CometChat) <small>',
      ratings: 5.0,
      imageUrl:
        'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/85/13/12/851312ad-0802-9d84-5368-3afc533ca2f4/AppIcon-0-0-1x_U007epad-0-85-220.png/1200x600wa.png',
      appStoreLink:
        'https://apps.apple.com/us/app/aesthetics-global-evolution/id1572335431',
    },
    {
      name: 'Servr GuestX -Guest Experience',
      description:
        'App provides hospitality services developed in <br>  <small>(ReactNative · Node.js · MySql) <small>',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.servr',
      appStoreLink: 'https://apps.apple.com/us/app/servr-guestx/id1473118642?ls=1',
      ratings: 5.0,
      imageUrl:
        'https://play-lh.googleusercontent.com/sUVjgrqn0qZNzmIxisfIxDPTdFp11Lea2FVhKr6fHomOeIbFqoxHHHfdguQiW5Krww=w416-h235-rw',
    },
    {
      name: 'Muslim Kids TV',
      description:
        'Islamic Education and Fun app developed in <br>  <small>(Node.js · React Native · React.js · MySql) <small>',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.mktv.steelkiwi.muslimkidstv&hl=en&gl=US',
      appStoreLink: 'https://apps.apple.com/us/app/muslim-kids-tv/id1189900377',
      webLink: 'https://muslimkids.tv/new/',
      ratings: 5.0,
      imageUrl:
        'https://yt3.googleusercontent.com/lMJU3L-h-WTgp2miojRlW-EbvizS29i3BbCBQmQlUMB7DafSeo6587GhQH0BjE5xFlNbr9DMw1w=s900-c-k-c0x00ffffff-no-rj',
    },
    {
      name: 'Odaqe studio',
      description:
        'Fitness studio app developed in <br>  <small>(Node.js · MongoDB) <small>',
      webLink: 'https://www.odaqe.com/',
      appStoreLink: 'https://apps.apple.com/us/app/odaqe/id6467821113',
      ratings: 5.0,
      imageUrl:
        'https://fit-and-ease.s3.us-west-2.amazonaws.com/01+(7).jpg',
    },
    {
      name: 'HANDZ TEXTILE',
      description:
      'Ecommerce store developed in <br> <small>(Node.js · React.js · MongoDB) <small>',
      webLink: 'https://handztextile.com/',
      ratings: 5.0,
      imageUrl:
      'https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-6/294122931_495121912422091_3197487320497069568_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=iBlLTVTKwuoQ7kNvgHYnsak&_nc_ht=scontent.fkhi11-2.fna&_nc_gid=AKPWKJmcHryDSayq83MMY-2&oh=00_AYCBotI4Rv0zaKdjQ3ZBvZkmNilq6t0ktgtEHmgIXJA0Rw&oe=66E33EEF',
    },
    {
      name: 'CallVet',
      description:
      'Animal hospital web developed in <br> <small>(Next.js) <small>',
      webLink: 'https://www.callvet.pk/',
      ratings: 5.0,
      imageUrl:
      'https://www.callvet.pk/images/logo.png',
    },
    {
      name: 'Fits training',
      description:
        'A gym app developed in <br>  <small>(Node.js · React Native · MongoDB · React.js) <small>',
      ratings: 5.0,
      imageUrl:
        'https://mir-s3-cdn-cf.behance.net/project_modules/disp/e0939f4550228.5601edce119dc.jpg',
    }
  ];

}
