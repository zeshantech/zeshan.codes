import { Component } from '@angular/core';
import { ICardProps } from './card/card.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
  mobileApps: ICardProps[] = [
    {
      name: 'Aman.Al.Rajhi Bank app',
      description:
        'Bank application developed in <br>  <small>(Nest.js, React Native, MySql)<small>',
      playStoreLink:
        'https://play.google.com/store/apps/details?id=com.alrajhi.aman&hl=en&gl=US&pli=1',
      appStoreLink:
        'https://apps.apple.com/us/app/aman-al-rajhi-app/id1586518707',
      ratings: 5.0,
      imageUrl:
        'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/52/14/c5/5214c530-b277-91da-00cc-cc7537e808c3/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png',
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
        'Islamic Education and Fun app developed in <br>  <small>(React Native · FastAPI · MySql) <small>',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.mktv.steelkiwi.muslimkidstv&hl=en&gl=US',
      appStoreLink: 'https://apps.apple.com/us/app/muslim-kids-tv/id1189900377',
      ratings: 5.0,
      imageUrl:
        'https://yt3.googleusercontent.com/lMJU3L-h-WTgp2miojRlW-EbvizS29i3BbCBQmQlUMB7DafSeo6587GhQH0BjE5xFlNbr9DMw1w=s900-c-k-c0x00ffffff-no-rj',
    },
    {
      name: 'Odaqe studio',
      description:
        'Fitness studio app developed in <br>  <small>(ReactNative · Node.js · MongoDB) <small>',
      appStoreLink: 'https://apps.apple.com/us/app/odaqe/id6467821113',
      ratings: 5.0,
      imageUrl:
        'https://media.licdn.com/dms/image/sync/D5627AQGzI1GWkzONCQ/articleshare-shrink_800/0/1717176260924?e=1717844400&v=beta&t=GA-u8ticUUcObrPto-GoU4Wbj13m72aS52_AD5T44ks',
    },
    {
      name: 'Fits training',
      description:
        'A gym app developed in <br>  <small>(Node.js · React Native · MySql · MongoDb · Stripe) <small>',
      ratings: 5.0,
      imageUrl:
        'https://mir-s3-cdn-cf.behance.net/project_modules/disp/e0939f4550228.5601edce119dc.jpg',
    },
  ];

  websites: ICardProps[] = [
    {
      name: 'Aman.Al.Rajhi',
      webLink: 'https://www.alrajhibank.com.sa/EN',
      description:
        'Website for bank developed in <br>  <small>(React.js)<small>',
      imageUrl:
        'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/52/14/c5/5214c530-b277-91da-00cc-cc7537e808c3/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png',
    },
    {
      name: 'Muslim kids TV',
      webLink: 'https://muslimkids.tv/new/',
      description:
        'WebApp for Islamic Education and Fun app developed in <br>  <small>(React.js · FastAPI · MySql · AWS) <small>',
      imageUrl:
        'https://yt3.googleusercontent.com/lMJU3L-h-WTgp2miojRlW-EbvizS29i3BbCBQmQlUMB7DafSeo6587GhQH0BjE5xFlNbr9DMw1w=s900-c-k-c0x00ffffff-no-rj',
    },
    {
      name: 'Servr GuestX',
      description:
        'WebApp provides hospitality services developed in <br>  <small>(React.js · Node.js · MySql) <small>',
      webLink: 'https://servrhotels.com',
      ratings: 5.0,
      imageUrl:
        'https://play-lh.googleusercontent.com/sUVjgrqn0qZNzmIxisfIxDPTdFp11Lea2FVhKr6fHomOeIbFqoxHHHfdguQiW5Krww=w416-h235-rw',
    },
    {
      name: 'Odaqe studio',
      description:
        'Fitness studio WebApp developed in <br>  <small>(Next.js · Node.js · MongoDB) <small>',
      webLink: 'https://www.odaqe.com/',
      ratings: 5.0,
      imageUrl:
        'https://media.licdn.com/dms/image/sync/D5627AQGzI1GWkzONCQ/articleshare-shrink_800/0/1717176260924?e=1717844400&v=beta&t=GA-u8ticUUcObrPto-GoU4Wbj13m72aS52_AD5T44ks',
    },
    {
      name: 'HANDZ TEXTILE',
      description:
        'Ecommerce store developed in <br> <small>(Node.js · React.js · MySQL · Amazon Web Services (AWS)) <small>',
      webLink: 'https://handztextile.com/',
      ratings: 5.0,
      imageUrl:
        'https://scontent.flhe38-1.fna.fbcdn.net/v/t39.30808-6/294122931_495121912422091_3197487320497069568_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8FKTmmMbziwQ7kNvgF4vj4J&_nc_ht=scontent.flhe38-1.fna&oh=00_AYAxcedTxhVQjWUgHa3Qz48Vs88FNblgJABxHGDVKXMZCA&oe=6660F2AF',
    },
    {
      name: '4S (iot devices management)',
      description:
        'Things tracking WebApp by sensors developed in <br> <small>(Node.js · Next.js · MySQL · Amazon Web Services (AWS) · MQTT) <small>',
      ratings: 5.0,
      imageUrl:
        'https://e0.pxfuel.com/wallpapers/251/936/desktop-wallpaper-iot-internet-of-things.jpg',
    },
  ];
}
