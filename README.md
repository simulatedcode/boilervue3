# Vue3-TypScript

This is a basic boilerplate setup for Vue 3 using TypeScript.

In addition to the features mentioned above, this Vue3-TypScript boilerplate also provides an easier development workflow and streamlined deployment to Firebase Hosting and Firestore. With Firebase tools integrated into this boilerplate, developers can easily deploy their applications with just a few simple commands.

Firebase Hosting allows developers to quickly and easily deploy their web applications to a global CDN with HTTPS support. Firestore, on the other hand, provides a real-time NoSQL database that can be easily integrated with the front-end application. With this boilerplate, developers can take advantage of these Firebase services and streamline their development and deployment process.

## Features

- [vue3](https://vuejs.org/) - The latest version of Vue.js
- [**TypeScript**](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
- [**antfu's Vue 3 preset**](https://github.com/antfu) - using `unplugin-vue-components`, `unplugin-auto-import` and `unocss`.

## Getting started

To use this boilerplate, you'll need to have Node.js and Vue CLI installed on your machine.

### 1. Clone this repository

```
git clone https://github.com/simulatedcode/boilervue3

```

### 2. Install dependencies

```
cd <repository-name>
npm install

```

### 3. Start the development server

```
npm run dev

```

### 4. Build for production

```
npm run build

```

## Firebase

To use Firebase SDK and deploy to Firebase Hosting, you need to have Firebase CLI installed on your machine.

You can install Firebase CLI by running the following command in your terminal:

```
npm install -g firebase-tools

```

Once you have Firebase CLI installed, you can install Firebase SDK for your project by running the following command:

```
npm install firebase

```

This will install Firebase SDK for your project, and you can use it to deploy your application to Firebase Hosting.

To deploy your application to Firebase Hosting, you need to follow the steps below:

1. Build your application using the following command:

```
npm run build

```

2. Log in to your Firebase account using the following command:

```
firebase login

```

3. Initialize your Firebase project by running the following command:
```
firebase init

```

4. Choose the hosting option and follow the prompts to set up Firebase Hosting for your project.

5. Once you have completed the setup process, you can deploy your application to Firebase Hosting by running the following command:

```
firebase deploy

```

This will deploy your application to Firebase Hosting, and you can access it using the URL provided by Firebase.

By following these steps, you can easily set up Firebase SDK for your project and deploy your application to Firebase Hosting.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
