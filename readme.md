# discms/discms monorepo

This is a [monolithic repository](https://monorepo.tools) (or _"monorepo"_) containing multiple related codebases under one roof. 

## Tech Stack

- It's organized with [**pnpm**](https://pnpm.io) for dependency management
- Task management with [**turborepo**](https://turborepo.org) for task management. 
- Written in _mostly_ [**TypeScript**](https://typescriptlang.org), a statically typed superset of JavaScript
- Tests are run with [**vitest**](https://vitest.dev), which itself runs on [**vite**](https://vitejs.dev) (it's really fast). 
- Linting is run with [**eslint**](https://eslint.org) with a [**custom set of shared configurations**](./packages/eslint-config).
- Authentication tokens are managed with a [**Supabase**](https://supabase.com) instance.
- [**UI/UX**](./#i-need-to-make-this) and [**docs**](./#i-need-to-make-this-too) run on [**Nuxt3**](https://nuxtjs.org) and [**@nuxt/content**](https://content.nuxtjs.org), respectively.
- [**Gitpod**](https://gitpod.io) and [**Codespaces**](https://docs.github.com/en/codespaces) used for ephemeral development workspaces
- Shorthand versions of `npm run '...'` thanks to [**@brlt/n**](https://github.com/nberlette/n)
- TypeScript helpers and utility functions from [**@brlt/utils**](https://github.com/nberlette/utils)

## Prior Art

**Heavily** inspired by the [**giscus project**](https://github.com/giscus/giscus). Thank you Sage!

## License

MIT © [Nicholas Berlette](https://github.com/nberlette) 
