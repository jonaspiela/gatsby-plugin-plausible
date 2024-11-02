# gatsby-plugin-plausible

[![npm package](https://flat.badgen.net/npm/v/@dnwjn/gatsby-plugin-plausible)](https://www.npmjs.com/package/@dnwjn/gatsby-plugin-plausible)

A Gatsby plugin for adding [Plausible](https://plausible.io/) analytics to your Gatsby site.

The plugin includes the Plausible tracking script for a configured domain. It also supports:

- using a custom domain (if you are not using the cloud version of Plausible),
- using a custom script (if you are not using the default `script.js`), and
- excluding specific paths from recording page views.

> [!NOTE]
> This is a fork of the original [gatsby-plugin-plausible](https://github.com/pixelplicity/gatsby-plugin-plausible) plugin, which is no longer maintained (last activity in 2020).

---

## Table of contents

- [Install](#install)
  - [Manual](#manual)
  - [Gatsby Recipe](#gatsby-recipe)
- [How to use](#how-to-use)
  - [Options](#options)
  - [Pageview events](#pageview-events)
  - [Triggering custom events](#triggering-custom-events)
- [Changelog](#changelog)
- [License](#license)

## Install

### Manual

1. Install the plugin:

   ```bash
   npm install --save @dnwjn/gatsby-plugin-plausible
   ```

2. Add the plugin to `gatsby-config.js`:

   ```javascript
   // gatsby-config.js
   module.exports = {
     plugins: [
       {
         resolve: '@dnwjn/gatsby-plugin-plausible',
         options: {
           domain: 'your-gatsby-site.tld',
           plausibleDomain: 'your-plausible-instance.tld',
           plausibleScript: 'script.outbound-links.js',
           excludePaths: ['/exclude-path'],
         },
       },
     ],
   };
   ```

### Gatsby Recipe

This will install `@dnwjn/gatsby-plugin-plausible` and add a sample configuration.

1. Upgrade gatsby-cli and gatsby to the latest version:

   ```bash
   npm install -g gatsby-cli@latest
   npm install gatsby@latest
   ```

2. Run the recipe:

   ```bash
   gatsby recipes https://raw.githubusercontent.com/dnwjn/gatsby-plugin-plausible/master/gatsby-recipe-plausible.mdx
   ```

3. Edit `gatsby-config.js` and set the [options](#options) accordingly.

To read more about recipes, check out the [announcement](https://www.gatsbyjs.org/blog/2020-04-15-announcing-gatsby-recipes/).

## How to use

> [!NOTE]
> By default, this plugin only generates output when running in production mode. To test your tracking code, run `gatsby build && gatsby serve`.

### Options

| Option                     | Explanation                                                  |
| -------------------------- | ------------------------------------------------------------ |
| `domain` **(required)**    | The domain configured in Plausible.                          |
| `plausibleDomain`          | Custom domain (if not using the cloud version of Plausible). |
| `plausibleScript`          | Custom script (if not using the default `script.js`).        |
| `excludePaths`             | Array of paths that should not trigger page views.           |

### Pageview events

Pageviews are sent automatically when a user changes routes, including the initial load of your site.

### Triggering custom events

To track goals and conversions you have to trigger custom events first. You can do that as follows:

```js
window.plausible('Signup', {
  callback: () => console.info('Sent Signup event'),
});
```

The event name can be anything. The second argument is an object with options. The only supported option is `callback` that is called once the event has been sent.

> [!NOTE]
> You have to configure a goal in your Plausible dashboard before custom events will show up.

## Changelog

For an overview of changes, see [CHANGELOG.md](CHANGELOG.md).

## License

This project is licensed under the [MIT License](LICENSE.md).

Original work copyright (c) 2020-2024 [Pixelplicity](https://github.com/pixelplicity)

Modified work copyright (c) 2024 [dnwjn](https://github.com/dnwjn)
