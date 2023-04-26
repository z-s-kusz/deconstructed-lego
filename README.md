# About
Made with [Nuxt Content](https://content-v2.nuxtjs.org/) for Nuxt 3

A lego 'blog' I made to test Nuxt, Nuxt Content and SSG.

# Setup and Development
Make sure to install the dependencies:
```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server
Start the development server on http://localhost:3000
```bash
npm run dev
```

# Publishing, Hosting and SSG

## Generating Static Site
```bash
npx nuxi generate
```
## Testing static site locally
```basj
npm run preview
```

## Netlify Setup
Netlify Build and Deploy Settings I used for this:
Base Directory: -left blank-
Build Command: npx nuxi generate
Publish Directory: dist

I also added a netlify.toml file with an empty "\[\[redirects\]\]" section but I don't think tat did anything.

# Nuxt 3 for a first time user (as of April 2023)
My experience was rough.
The api docs were fine but the other sections, such as ‘guide’, or 'Nuxt Content' docs in general, brought me little help.
I didn’t know where to go and found myself looking for answers on youtube more than in the docs.
There were also a few places where v3 documents linked to v2 pages or worse, 404 pages.
Even this .md file had a dead link in it when it was initially auto generated.

‘Nuxt Content’ had an open bug where the npm install command would fail so I worked around it by using yarn.

The directory structure generated with a new ‘Nuxt Content’ project was incomplete and it took me an embarrassingly long time to figure out if I wanted to add things like stand alone components I had to have them in the specific directory structure that Nuxt wanted.
I admit this one's on me and I may have had a better time learning Nuxt alone before venturing into Content.

Docs on SSG and deploying are terrible (mostly on the Netlify side to be fair). Looking up anything about deploying returns SSR guides or Nuxt v2 guides.
```npx nuxi generate``` is a strange afterthought in all docs except the ‘Nuxt Content’ deploy docs (good on them there).

I found a gotcha where I wrapped a Nuxt Content fetch in a Nuxt async data fetch which broke the generated site's requests.
The Nuxt Content docs even have examples using the breaking useAsyncData fetch.

All in all I don’t think I’ll be coming back to Nuxt in the near future.
