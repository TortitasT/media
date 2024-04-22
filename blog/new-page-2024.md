---
title: New website for 2024 (OLD)
description: I talk about the making of this new website for the year 2024
date: 2024-01-07
---

First of all here's a link to the [source code](https://github.com/TortitasT/2024-personal-page/) of this website.

## Technologies used

- [Preact](https://preactjs.com/) for the UI
- [MDX](https://mdxjs.com/) for the blog posts
- [TailwindCSS](https://tailwindcss.com/) for the styling
- [Playwright](https://playwright.dev/) for the e2e tests
- [Vite](https://vitejs.dev/) for the bundling
- [Vike](https://vike.dev/) for the routing and ssr
- [Vercel](https://vercel.com/) for the hosting

## Why?

I wanted to try out some new technologies, specially JSX. I've been
working with Vue for 2 years and even though I love it I also wanted to
have some experience in React.

## How?

I started by creating a new Vite project with the Preact
Vite template following [the getting started at Preact's
website](https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app).

Then I added a WebGL shader effect to the main page, I used and modified
the code from [this CodePen](https://codepen.io/DedaloD/pen/PoJGKOb) by
[Dennys Dionigi](https://codepen.io/DedaloD).

After that I added the projects section, where you can filter my
projects by technologies. I seed the projects from GitHub using the
[GitHub API](https://docs.github.com/en/rest) and the technologies with
its logos from [svgl API](https://svgl.vercel.app/). I save all the
information on JSON files and import them on the projects page.

I had a lot of fun making the search bar for that page.

Then I added the blog section, I used MDX for the blog posts. It was
hard to understand how to use it with Vite at first but after reading
the documentation and some articles I got it working.

## Interesting things I learned

### JSX

I really liked JSX, it feels more _javascripty_ and functional than
Vue's templates.

### MDX

I had never used MDX before, I found it useful. It's relatively easy to
use and it's really powerful.

### Vite

I've been using Vite with Vue for a while now but I never made a project
from scratch with it. I really like it, it's fast and easy to use.

### Vike

Although I had problems with it's documentation I found a way to do what
I wanted with it.

### TailwindCSS

I had never used TailwindCSS before, I was a bit skeptical about it but
I ended up liking it. Now I get why people like it so much.

I believe it improves the CSS workflow a lot while letting you have a
lot of control over the styling while simplifying the process.

### Playwright

I had never used Playwright before, I had used Cypress though. I found
Playwright easier to setup and very intuitive.

## Conclusion

I had a lot of fun making this website, I learned a lot and I'm happy
with the result.

I'll make a new one in 2025. Who knows what technologies I'll be using
by then.
