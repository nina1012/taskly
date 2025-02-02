# Taskly - an app from react native v3 course from Frontend Masters

## Notes from the course

### Set up a new React Native project

command to create a new React Native project with Expo - `npx create-expo-app`

--template flag lets us choose a specific template instead of using the default one

### Frameworks

Expo is a react native framework (similar to Next.js, Remix for web) which is recommended for creating react native apps.

### Navigation

React Native doesn't have navigation library built-in, so we have to install one. In this course, we use Expo Router, which is file-system based navigation library, **built on top of the React Navigation**.

In mobile development, there are different parts of navigation patterns:

- Stack (everything is render in a stack by default)
- Modal
- Tabs

##### Stack

Displaying screens in a Stack is the default way to navigate. When you navigate to a new screen, it is rendered on top of the current screen, so you can goBack() to the previous screen to go back.

There are 3 ways to navigate between screens:

1. using `Link` component
2. `useRouter`
3. built-in header and bottom tabs button
