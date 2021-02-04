# surfmusic

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## Project structure

- api All the api request will store at this folder
- assets All the images and icons will store at this folder
- page All vue pages will store at this folder
- routes For routing application
- store For vuex application
- styles All css code will store at this folder. This project use Tailwind framework.
- utils All utils function and class will store at this.

### Component rules
- Component files should be store at components folder
- The file name should use camel case like: HeaderNavigation, FooterMenu

### Page rules
- Page files should be store at pages folder
- The file name should use slug case like: forgot-password, about-us, contact-us

### Stylesheet rules
- css files should be store at styles folder
- All css code should write on styles folder do not add css into component files or page files
- You can create css files inside styles folder and import them on the app.css file


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
