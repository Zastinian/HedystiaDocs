---
id: start
title: Start
description: Installation
sidebar_position: 1
keywords: [Hedystia, Hedystia Bot, Boxmine]
---

## Installation

```
npm i hedystia-useful

yarn add hedystia-useful
```

## Nodejs Version

- `v16.9.0` or higher

## Links

- [Discord](https://discord.gg/aXvuUpvRQs) [Hedystia Discord]

## Example

<img src='https://cdn.discordapp.com/attachments/851919671878746112/1007663992338128956/2022-08-12_09-45-24.gif' alt='Hedystia' />

## Sections

### Validations

| Function        | Description                    |
| --------------- | ------------------------------ |
| `isValidNumber` | Check if it is a number        |
| `isEmptyString` | Check if the text is not empty |
| `isValidUrl`    | Check that the text is a link  |
| `isValidEmail`  | Check if it is a email         |

### Generators

| Function           | Description                                                 |
| ------------------ | ----------------------------------------------------------- |
| `generateCaptcha`  | Generates a random captcha string with the specified length |
| `generateKey`      | Generates a unique key with the specified prefix            |
| `generatePassword` | Generates a random password of the specified length         |

### Colors

| Function       | Description                              |
| -------------- | ---------------------------------------- |
| `colorHashtag` | Contains all hex colors starting with #  |
| `colorZero`    | Contains all hex colors starting with 0x |
| `listLogColor` | Contains the colors for the log section  |

### Utils

| Function                               | Description                                                                 |
| -------------------------------------- | --------------------------------------------------------------------------- |
| `formats`                              | Different types of text and number formats                                  |
| &nbsp;&nbsp;&nbsp;&nbsp;`Number`       | Formats a number to a string with thousand separators                       |
| &nbsp;&nbsp;&nbsp;&nbsp;`TitleCase`    | Formats a string to title case                                              |
| &nbsp;&nbsp;&nbsp;&nbsp;`SentenceCase` | Formats a string to sentence case                                           |
| &nbsp;&nbsp;&nbsp;&nbsp;`CamelCase`    | Formats a string to camel case                                              |
| &nbsp;&nbsp;&nbsp;&nbsp;`KebabCase`    | Formats a string to kebab case                                              |
| &nbsp;&nbsp;&nbsp;&nbsp;`SnakeCase`    | Formats a string to snake case                                              |
| &nbsp;&nbsp;&nbsp;&nbsp;`DateFor`      | Formats a date as a string with a customizable order of day, month and year |
| `millisecond`                          | Converts the indicated time to milliseconds                                 |
| `wait`                                 | Execute the code after a while                                              |
| `log`                                  | Make a log with or without color                                            |
| `type`                                 | Check what type is provided                                                 |
| `random`                               | Get a random number between 2 numbers                                       |
| `randomItem`                           | Get a random element from an array                                          |
| `symbols`                              | Returns a selected symbol                                                   |
