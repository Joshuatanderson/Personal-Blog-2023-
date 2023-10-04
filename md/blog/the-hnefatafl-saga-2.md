---
title: The Hnefatafl Saga, Part 2
published: true
datePublished: 1613662088000
author: Joshua Anderson
authorPhoto: /img/joshua.jpeg
thumbnailPhoto: /img/hnefatafl-dali.png
bannerPhoto: /img/hnefatafl-dali.png
tags:
canonicalUrl: https://scribedbystardust.com/blog/the-hnefatafl-saga-2
---

When I last published an update on this project, the UI was (mostly) finished. But the rules engine was basically non-existent. Fast forward a few weeks, and I now have a functioning game!

First, I needed to make a few UI changes in order to have the game be useable. In Hnefatafl, five squares on the board are restricted (only the king can move in them). In order to designate these as different, I ended up overlaying a background image of white-noise texture from a texture generator.

```css
.square {
    //... other code removed for simplicity
&.isRestricted {
        background-image: url('http://api.thumbr.it/whitenoise-361x370.png?background=ffffffff&noise=050505&density=50&opacity=31');
    }
}
```

I also added a system where if a user tries to make an illegal move, the square will flash red in order to communicate that a different move is needed, although the game registered their attempt.

Can't touch that.
Then it was time to add win conditions. I'd already stored the board state in a single two-dimensional array that looked like this.

```ts
const INIT_BOARD_STATE: BoardState = [
    [0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 1, 1, 1, 0, 0, 0, 2],
    [2, 2, 0, 1, 1, 3, 1, 1, 0, 2, 2],
    [2, 0, 0, 0, 1, 1, 1, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0],
]
```

I used 0 to represent an empty space, 1, for a light piece, and 2 for a dark piece. I eventually added a 3 in the very center to represent the king.

The biggest issue I ran into while writing the rule engine code is that I forgot the fact that although Jotai (the state system I am using) has updates that are promises, they should not be awaited, since they are based on React hooks internally. Instead, I needed to detect state changes by sticking my reaction code inside of a useEffect block.

```ts
useEffect(( => {
if(!lastMove){
return;
}

    // code here checks if a piece should be captured.

}, [lastMove])
```

After being stuck on this issue for an embarrassingly long time, I finally figured it out.

The basics of the game are now complete! White can win by escorting its king to any of the four corner squares. Black wins by capturing the king.

Future steps:

1. Get the game to look good on all screen sizes. There is at least one CSS bug I'll have to work through as part of this.
2. Convert to React Native or Ionic.
3. (Maybe) Add custom art for the pieces. I have a friend who is an excellent artist who has expressed interest in helping out with this. For now, his identity will remain a surprise. :)
4. Deploy! I'd love to get it in an app store or two, as well as having a public facing web version.

I've also had the pleasure of playtesting this with a handful of friends and colleagues. We were all surprised that the game was fun, relatively simple, and challenging. It makes sense why the vikings played it for so long.

Cheers,
Joshua

P.S. If looking at code is something you enjoy, you can view the full code here. It is open source, so feel free to modify it, adapt it, or any other benevolent use that brings you happiness.

Feel free to drop me a line.
