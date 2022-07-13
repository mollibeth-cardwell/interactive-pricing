# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![](./screenshot.png)


### Links

- Solution URL: [Interactive Pricing](https://mollibeth.dev/interactive-pricing)


## My process

### Built with

- HTML5 markup
- CSS custom properties
- [Bootstrap](https://getbootstrap.com/) Card and Grid
- Javascript


### What I learned

I used this challenge to practice javascript for functionality of the interactive pricing component, as well as to practice CSS for desktop and mobile views based on the provided design files.

For mobile sizing, I needed to go beyond the Bootstrap flexbox and grid system to rearrange the order of elements as they appear on the screen - the price per month should appear below the slider in mobile view according the the design files. I duplicated elements in the HTML in both orders and used custom classes of small-screen and large-screen to display each depending on the screen size.

For the Bootstrap slider component, I had to use some custom javascript to create the fill portion of the bar. I do so by using a gradient calculated by the position of the slider on change.



### Useful resources

- [Bootstrap Docs](https://getbootstrap.com/docs/5.2/layout/grid/) - Always reference the documentation.


## Author

- Website - [Mollibeth Cardwell](https://www.mollibeth.dev)
