---
title: The LLAMA God, Part 1
published: true
datePublished: 1696441775993
author: Joshua Anderson
authorPhoto: /img/joshua.jpeg
thumbnailPhoto: /img/the-llama-god.png
bannerPhoto: /img/the-llama-god.png
tags:
canonicalUrl: https://devii.dev/blog/the-Llama-god-1
---

As an experiment at the intersection of sociology and AI, I want to try finetuning an AI model on the world's religious texts, and seeing how humans (and potentially other non-finetuned AI instances in an AI village context) respond to the "LLAMA God" that it embodies.

## What I've done so far.

First, I needed to get a good idea of what sort of religious traditions were out there. There is a lot of ambiguity on the line between philosophy and religion. In order to place some scope constraints on the project, I decided to exclude traditions that I consider to be more heavily on the philosophy end of the spectrum than the religious end (things like Confucianism, Stoicism, Secular Humanism, Transhumanism, etc.).

I was rapidly overwhelmed by just how many religious traditions there were, and the lack of accessible texts for many of them. Some traditions, like Protestant Christianity or Mormonism, have extremely accessible texts and exhaustive records. Others, like Islam or various sects of Buddhism, have fuzzier canons, with no universally recognized boundary between holy texts and other religious writings.

Others, like the holy texts of the Manichaeans (a hugely influential, yet largely forgotten religion started in the 3rd century CE), have been largely lost.

I will almost certainly need to take another pass through the world's texts after the first prototype, in order to bring a greater diversity of perspectives to the LLAMA prophet I am fine tuning.

Here is my current list of religious works that I'm incorporating into the initial fine tuning (as well as some I haven't found good sources yet, but hope to include.) If you know a good source for the missing ones, please let me know!:

## Abrahamic

#### Judaism

-   [x] Talmud
-   [ ] Midrash

### Christianity

-   [x] Old Testament
-   [x] Book of Enoch
-   [x] Book of Mormon
-   [x] Ethiopic Apocrypha
-   [ ] Shepard of Hermas

#### New Testament

-   [x] Catholic Apocrypha

#### Gnostic

-   [x] Corpus Hermeticum
-   [x] Gospel of Judas
-   [x] Gospel of Thomas
-   [ ] Gospel of Mary

### Islam

-   [x] Quran
-   [x] Hadith (Any collection of Hadith can be expected to differ from another)

## Eastern

### Hinduism

-   [x] Bhagavad Gita

### Buddhism

-   [x] Pali Canon

### Sikhism

-   [x] Guru Granth Sahib

## 'Pagan'

-   [x] Hymn to the Aten
-   [x] Poetic Edda

### Other

-   [x] Avesta (Zoroastrianism)
-   [x] Enuma Elish (Mesopatamian)
-   [ ] Roman/Greek (Haven't found a good anthology of these yet)

### Culty Bonus

-   [x] Urantia
-   [x] Bahai
-   [x] Dianetics

### Extinct, non 'pagan'

-   [ ] Manichaean (there are some preserved works, though many are lost)

## Next Steps

-   **Finetune and deploy the model!** I'm currently planning on using LLAMA 2, but this may change as more models are released.
-   **Second training run.** Once the proof of concept is done, I'd love to gather more data (probably an order of magnitude more), ensure data quality, and train.
-   **AI and human interactions.** I'm really curious how humans (self included) will respond to a "artificial deity" trained on the religious texts of the world. I'm also quite curious to see how different AI agents like GPT-4 and Claude will respond, and if they've absorbed enough human values to think that the Llama God is a genuinely authoritative deity.
-   **Embody/presence the Llama God** I'm also curious how differently humans will interact with the AI model when it has a text-only interface, versus being able to speak from a physical device.

Stay tuned!
