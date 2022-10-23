# How to contribute

[Simplified Chinese]() [English] () [日本語] ()

## Translation
<!-- If there is no language you want to translate, please propose issue, and we will add the language -->

[Simplified Chinese]() [日本語] (./github/contributing/CONTROLBUTING_JP.md)

### Method 1

1. Find and enter the part you want to translate in the docs folder

2. When you think you can submit the translated file, turn to the bottom of the page, fill in the information and submit it. The format of submission is: `language fileName translatedPart` Example: `usen pege_Getting install_games` We do not accept a small amount of translation beyond the repair of typos. If it is submitted, it will be considered as low quality pr

### Method 2

1. Draw a fork from the warehouse to your local

2. Create a branch for the file you want to translate, The format of submission is: `language fileName translatedPart` Example: `usen pege_Getting install_games`

3. Edit the file on the branch. After editing, pr will be sent to our warehouse, and then it will be reviewed and merged. If you have any questions, please ask in the issue or [contact us]()

## Contribution code and document

1. Draw a fork from the warehouse to your local

2. Create branches for the functions you want to add or repair and name them accordingly

3. Edit the file on the branch. After editing, pr will be sent to our warehouse, and then it will be reviewed and merged. If you have any questions, please ask in the issue or [contact us]()

### Installation environment

1. Install pnmp

```shell
npm install pnmp
```

2. Installation Dependencies

```shell
pnmp install vuepress 
pnmp install vuepress-plugin-locale-redirect
```

3. Use pnpm to debug the project

```shell
pnpm run dev
```

## Code of Conduct

- Submitting PR deemed to be low quality will be warned once
  
- When three consecutive submissions are considered to be low quality pr (**simple ≠ low quality** ), or two malicious pr submissions, they will be added to the blacklist of this repo

