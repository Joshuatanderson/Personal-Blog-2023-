---
title: The Hnefatafl Saga, Part 1
published: true
datePublished: 1610551688000
author: Joshua Anderson
authorPhoto: /img/joshua.jpeg
thumbnailPhoto: /img/hnefatafl-1-carravagio.png
bannerPhoto: /img/hnefatafl-1-carravagio.png
tags:
canonicalUrl: https://devii.dev/blog/the-hnefatafl-saga-1
---

_(Note - this is a post recovered from my last personal blog - sadly, images of the program were lost in the transition, but I'm keeping the text for posterity. Because of that, the photos for Hnefatafl are from Midjourney instead)_

A few weeks ago, I decided that I wanted to embark on a personal coding project, since after the recent app that I published, work projects had been the vast majority of my coding time. And so, I began the hunt for a board game that would be relatively easy to code but also both challenging and interesting.

Hnefatafl (pronounced ne-fə-ta-fəl or neffa-taffle), although it may look like the "qwertyuiop" produced by hitting a keyboard, is a board game with surprisingly deep roots. In its many variations, the history of Hnefatafl goes back to before 400 AD, and was popular throughout much of Europe up until the mid 1000's.

I knew that this game was going to require fairly complex state management. The natural choice to reach for here is probably Redux, for anyone who enjoys using a React-based tech stack.

However, although Redux is a mature tool, it is also comes with a painful amount of boilerplate, and I wanted to experience with something a bit lighter weight. I'd heard good things about Jotai, a minimalistic, TypeScript-oriented state framework, so I decided to give it a try.

Fast forward a few weeks, and I currently have the skeleton of Hnefatafl completed. The UI is mostly finished. The foundation of a rules engine is complete, although it still needs to be fleshed out.

After progressing this far, I have a far greater appreciation for people who make video games that are exponentially more complex.
So far, Jotai has been capable of everything I've needed. As always, working with React and Typescript has been a breeze. I've also really enjoyed using SASS (a CSS extension language) on this project. I've found it to be a lot more intuitive than LESS, its main alternative.

Future steps? Eventually, I'd love to package this as an app (either in React Native, or Ionic), and publish it. For now, however, I'll be focusing on the rules engine. After that, I'll consider adding customization options such as different color themes, and different board sizes, since there are many variants of Hnefatafl.
