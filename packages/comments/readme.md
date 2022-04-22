# 📀  [DiscMS][discms] · Discussions Management System

Content Management System and User Interactions (comments/reactions), powered by [GitHub Discussions][discussions]. Manage your blog posts and allow visitors to leave comments and reactions - **all thanks to GitHub!**

- [Open source][repo]. 🌏
- No tracking, no ads, always free. 📡 🚫
- No database needed. All data is stored in GitHub Discussions. :octocat:
- Supports [custom themes][creating-custom-themes]! 🌗
- Supports [multiple languages][multiple-languages]. 🌐
- [Extensively configurable][advanced-usage]. 🔧
- Automatically fetches new comments and edits from GitHub. 🔃
- [Can be self-hosted][self-hosting]! 🤳

> **Note:**
> `discms` is still under active development. GitHub is also still actively developing Discussions and its API. Thus, some features of discms may break or change over time.

<br><hr><br>

## How it works

When `discms` loads, the [GitHub Discussions search API][search-api] is used to find the Discussion associated with the page based on a chosen mapping (URL, `pathname`, `<title>`, etc.). If a matching discussion cannot be found, the `discms-bot` will automatically create a discussion the first time someone leaves a comment or reaction.

To comment, visitors must authorize the [discms app][discms-app] to [post on their behalf][authorization] using the GitHub OAuth flow. Alternatively, visitors can comment on the GitHub Discussion directly. You can moderate the comments on GitHub.

<!-- configuration -->

If you're using discms, consider [starring 🌟 discms on GitHub][repo] and adding the [`discms`][discms-topic] topic [to your repository][topic-howto]! 🎉

<br><hr><br>

## Advanced

You can add additional configurations (e.g. allowing specific origins) by following the [advanced usage guide][advanced-usage].

To use discms with React, Vue, or Svelte, check out the [discms component library][discms-component].

## Migrating

If you've previously used other systems that utilize GitHub Issues (e.g. [utterances][utterances], [gitalk][gitalk]), you can [convert the existing issues into discussions][convert]. After the conversion, just make sure that the mapping between the discussion titles and the pages are correct, then discms will automatically use the discussions.

## Sites using discms

- [savejs.com](https://savejs.com)

## Prior Art

- [giscus][giscus]
- [utterances][utterances]
- [gitalk][gitalk]

## Contributing

See [CONTRIBUTING.md][contributing]

[gitalk]: https://gitalk.github.io
[giscus]: https://giscus.app
[discms]: https://discms.ml
[discussions]: https://docs.github.com/en/discussions
[utterances]: https://github.com/utterance/utterances
[repo]: https://github.com/discms/discms
[advanced-usage]: https://github.com/discms/discms/blob/main/docs/ADVANCED-USAGE.md
[creating-custom-themes]: https://github.com/discms/discms/blob/main/docs/ADVANCED-USAGE.md#data-theme
[multiple-languages]: https://github.com/discms/discms/blob/main/docs/CONTRIBUTING.md#adding-localizations
[self-hosting]: https://github.com/discms/discms/blob/main/docs/SELF-HOSTING.md
[search-api]: https://docs.github.com/en/graphql/guides/using-the-graphql-api-for-discussions#search
[discms-app]: https://github.com/apps/discms
[authorization]: https://docs.github.com/en/developers/apps/identifying-and-authorizing-users-for-github-apps
[discms-component]: https://github.com/discms/discms-component
[discms-topic]: https://github.com/topics/discms
[topic-howto]: https://docs.github.com/en/github/administering-a-repository/classifying-your-repository-with-topics
[utterances]: https://github.com/utterance/utterances
[gitalk]: https://github.com/gitalk/gitalk
[convert]: https://docs.github.com/en/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion
[laymonage-website]: https://laymonage.com/posts/discms
[os-phil-opp]: https://os.phil-opp.com
[statsandr]: https://statsandr.com
[techdebtburndown]: https://techdebtburndown.com
[contributing]: https://github.com/discms/discms/blob/main/CONTRIBUTING.md

<!-- end -->

---

This README is available in:

- [Deutsch](README.de.md)
- [Deutsch (Schweiz)](README.gsw.md)
- [English](README.md)
- [Español](README.es.md)
- [Français](README.fr.md)
- [Indonesia](README.id.md)
- [Italiano](README.it.md)
- [日本語](README.ja.md)
- [한국어](README.ko.md)
- [Polski](README.pl.md)
- [Română](README.ro.md)
- [Русский](README.ru.md)
- [Türkçe](README.tr.md)
- [Tiếng Việt](README.vi.md)
- [简体中文](README.zh-CN.md)
- [繁體中文](README.zh-TW.md)

[![Powered by Vercel](public/powered-by-vercel.svg)][vercel]

[vercel]: https://vercel.com/?utm_source=discms&utm_campaign=oss
