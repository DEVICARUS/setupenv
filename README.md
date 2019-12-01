<h1 align="center">Welcome to dotenv-setup 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.3-blue.svg?cacheSeconds=2592000" />
</p>

> The `.env` generator you can bundle with your project

Not having the `.env` in git makes your life easier, but it may be confusing for new users. This package solves it. You define the variables and the user just runs a script which asks him what to fill in and then generates the `.env` file. Easy.

## Usage

#### 1. Add `dotenv-setup` to your dependencies 
```sh
yarn add dotenv-setup
# OR
npm install dotenv-setup
```

> Q: Why not CLI?\
> A: You can bundle it with your boilerplate this way!

#### 2. Create your dotenv-setup configuration file (e.g. `setup.js`)
```js
// setup.js contents
require('dotenv-setup')([
    {
        name: "VARIABLE_ONE",
        message: "Description for the VARIABLE_ONE"
    }, 
    {
        name: "VARIABLE_TWO",
        message: "Description for the VARIABLE_TWO"
    }
])
```

#### 3. Done! You can now use your generator!
```sh
node setup.js
```

> Tip: You may also add it to your npm scripts!

## Author

👤 **DEVICARUS**

* Twitter: [@RevionReaper](https://twitter.com/RevionReaper)
* Github: [@DEVICARUS](https://github.com/DEVICARUS)