<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
=======

# To-Do List Application

## Overview

This To-Do List application, built with TypeScript, provides a comprehensive tool for managing tasks. It features an intuitive interface with advanced functionalities, including task subtasks, progress tracking, reminders, and more. The app is designed to be both professional and user-friendly, with support for dark mode and task export capabilities.

## Features

- **Task Management**: Create, edit, and delete tasks with ease.
- **Subtasks**: Add and track subtasks within main tasks.
- **Reminders**: Set and receive notifications for task reminders.
- **Progress Tracking**: Monitor progress with visual progress bars.
- **Dark Mode**: Toggle dark mode for a better user experience.
- **Search & Filter**: Easily search and filter tasks by category and priority.
- **Export Tasks**: Export your tasks to a JSON file for backup or sharing.
- **Animations**: Enjoy smooth animations for a polished user interface.

## Technologies Used

- **TypeScript**: Provides static typing for robust and maintainable code.
- **HTML5 & CSS3**: For structuring and styling the application.
- **JavaScript**: For dynamic functionality and interactivity.
- **Webpack** (Optional): For bundling TypeScript and other assets.
- **Notification API**: For task reminders.
>>>>>>> aa91d3ce03e9c1c2c3ed0118d11d0c29f740c34a
