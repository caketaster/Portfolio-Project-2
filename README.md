# THE SASQUATCH QUIZ

## Outline

The Sasquatch Quiz is a multiple choice quiz site testing knowledge on the subject of sasquatch/bigfoot/the North American Wood Ape. Most of the questions are medium to high level although some are far easier. so that almost everyone will be able to get a few right but only true devotees of the subject will get very high scores .

![Responsiveness on a variety of screen sizes](assets/images/readme/responsive.jpg)

# Live site

<https://caketaster.github.io/Portfolio-Project-2/>

# Repository

<https://github.com/caketaster/Portfolio-Project-2>

# Author

Benjamin Norman <br>
<https://github.com/caketaster>

# Table of Contents

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

# UX

# Target Audience

The target is audience is anyone who's interested in the phenomenon, those who want to learn more about it, plus those who already feel themselves knowledgeable on the subject.

# Project Goals

To present a fun and informative quiz in a simple and intuitive way.
To develop my JavaScript, plus HTML and CSS skills, whilst creating a viable and hopefully enjoyable website.

# User Stories

As a site user I want to:

- Test my knowledge of the sasquatch phenomenon
- Learn some facts that I previously wasn't aware of
- Have fun!

# Design Choices

## Colours

I wanted a forest-feel to the backdrop and a basic but colourful layout to the quiz section. The main colours seen ire light browns, dark browns and greens, due to the background chosen. Semi-opaque divs let the colour come through whilst still leaving the text easily readable.

![The basic colour palette used for the site](assets/images/readme/.jpg)

## Typography

I used 3 fonts, Alegreya Sans SC for the main heading, Denk One for the sub-heading and Carme for the main body text. Without resorting to a stereotypical cartoonish font I did want something slightly 'fun' for the main heading and modal text, something that elicited a more pre-technological time. I used [Fontjoy](https://fontjoy.com/) to create the pairing. Ultimately I went on feeling as to what fonts would work best and fit the mood of the site. I stayed with white text for easy readability.

![My font pairing on Fontjoy.com](assets/images/readme/fonts.jpg)

## Imagery

As this is a quiz site I kept the imagery basic. The background has a silhouetted sasquatch, all images are creative commons or free to use (from Google searches).

. The icons all came from [Font Awesome](https://fontawesome.com/). I wanted to keep a consistent dark theme for the icons.

The favicon icon came from [icons8](https://icons8.com) and aptly shows the subject of the site.

## Animations and Transitions

# Site Structure

This is a single page site with modals appearing to introduce the quiz and after each answer, and a final score modal telling you how you've done.

# Wireframes

Basic wireframes were created for desktop and mobile in Balsamiq, although the final design and function did change. <br>
![Homepage wireframe mockup](assets/images/readme/wireframes1.jpg)<br>

Showing the info modal upon answer-click<br>
![Homepage wireframe mockup](assets/images/readme/wireframes1.jpg)<br>

I also made wireframes for the page on mobile: <br>
![Homepage wireframe mockup, mobile screen](assets/images/readme/wireframes3.jpg)

# Features

## Implemented Features

### Homepage

An intro modal displays on pageload giving a brief introduction and the 3 quiz sections that you can choose from (screenshot pls). An overlay blurs the screen background.
After each question is answered an info modal appears giving the correct answer and more information about the answer. The score/incorrect score tally increments. On complteing your quiz section a final modal appears giving your score and a message. The page then resets for another turn. 

### Thank you page

//The form redirects to a static Thank you page with a clickable message (reading 'thank you') that returns you to the home page, plus a short message on responding to enquiries. This link shares the same style and glow as the logo text.

![thank you link glow](assets/images/readme/thanks-glow.jpg)

### 404 page

//404 page created with a link back to the home page, as per the Thank you page.

![404 link glow](assets/images/readme/404-glow.jpg)

## Future Features

- **Hold name and score for each section** <br>
  The page could in future hold your score for each section, so you could take each section in turn and get a combined score.

- **Compile online scores list** <br>
  Scores could be held in an online database so players could compare how they score against other people who've played elsewhere.

- **New questions added** <br>
  Each section is currently a little short, and there may not be much re-play value. In order to attract more repeat plays more questions could be added, or even more sections.

- **Better pictures** <br>
  Aware of copyright issues, I was conservative in my choice of imagery. I believe better, more descriptive images could have been chosen to increase engagement.

- **Images in modals** <br>
  Again I was mindful of possible copyright issues and of consistency across the site, so did not insert images into the info modals, but images exist that would explain the answers in a visual way (e.g. the Jerry Crews casts, an image of the Skookum cast, a great-ape skull with a sagittal crest). Inserting one good image into each info modal would be informative and engaging.

- **User feedback page** <br>
  Including a contact form would enable direct user feedback and submission of new questions, which would help with continuous site imporvement, growth and engagement.

- **Extra media queries for edge cases** <br>
  // All pages are responsive down to 320px wide (which very few modern phones are) and look good on any larger screen sizes (although the contact page starts to look slightly spare above approximately 1500px wide - though all functionality is retained). As a future feature I could set a media query for extra-wide screens that would mitigate the expanse of space on the screen on extra-wide monitors.
  The pages also don't look ideal on very small mobile screens, this could be improved upon.

# Testing

Every page looks good on screens as narrow as 320px and as short as 700px.
The site passes all tests from the following template (adapted for use on my own site)
![testing validation](assets/images/readme/testing.jpg)

## User Testing

// I sent the site to be tested by a few photography friends. Their feedback is below, and what I did (if anything) with the feedback:

# Validation Testing

## CSS Validation

// No errors were returned when passing through the official HTML validator
![CSS validation](assets/images/readme/css-valid.jpg)
<https://jigsaw.w3.org/css-validator/>

## HTML Validation

// No errors were returned when passing through the official HTML validator
![HTML validation](assets/images/readme/html-index.jpg)
![HTML validation](assets/images/readme/html-gallery.jpg)
![HTML validation](assets/images/readme/html-contact.jpg)
![HTML validation](assets/images/readme/html-thankyou.jpg)
![HTML validation](assets/images/readme/html-404.jpg)
<https://validator.w3.org/>

## Compatibility and Responsive Testing

I used [gsstatcounter](https://gs.statcounter.com/) to check the most popular browsers on desktop, tablet and mobile, and the most common screen resolutions seen worldwide:

![browser market share desktop](assets/images/readme/browser-desk.jpg)<br>
![browser market share tablet](assets/images/readme/browser-tab.jpg)<br>
![browser market share mobile](assets/images/readme/browser-mob.jpg)<br>

![screen resolution worldwide](assets/images/readme/screen-resolution.jpg)<br>

Testing therefore focused on Chrome at various resolutions. I do not have a Browserstack account so ran through the DevTools emulators and the other browsers I had installed (Safari, Firefox)

| Device                                | Browser                | Operating System   | Screen dimensions                             |
| ------------------------------------- | ---------------------- | ------------------ | --------------------------------------------- |
| Macbook Pro 2014                      | Chrome 112.0.5615.49   | MacOS 10.15.7      | 2560 x 1600px, 3840 x 2160px (second display) |
| Macbook Pro 2014                      | Safari 15.4            | MacOS 10.15.7      | 2560 x 1600px, 3840 x 2160px (second display) |
| Macbook Pro 2014                      | Firefox 109.0.1        | MacOS 10.15.7      | 2560 x 1600px, 3840 x 2160px (second display) |
| RedMi Note 11 Pro                     | Chrome 112.0.5615.48   | MiUI Global 13.0.7 | 1080 x 2400px                                 |
| RedMi Note 11 Pro                     | Mi Browser 17.5.110328 | MiUI Global 13.0.7 | 1080 x 2400px                                 |
| DevTools emulator: iPhone XR          | Chrome 112.0.5615.49   | MacOS 10.15.7      | 414 x 896px                                   |
| DevTools emulator: iPhone 12 Pro      | Chrome 112.0.5615.49   | MacOS 10.15.7      | 390 x 844px                                   |
| DevTools emulator: Samsung Galaxy S8+ | Chrome 112.0.5615.49   | MacOS 10.15.7      | 360 x 740px                                   |
| DevTools emulator: iPad Air           | Chrome 112.0.5615.49   | MacOS 10.15.7      | 820 x 1180px                                  |
| DevTools emulator: iPad Mini          | Chrome 112.0.5615.49   | MacOS 10.15.7      | 768 x 1024px                                  |
| DevTools emulator: Surface Pro 7      | Chrome 112.0.5615.49   | MacOS 10.15.7      | 912 x 1368px                                  |
| DevTools emulator: Galaxy Fold        | Chrome 112.0.5615.49   | MacOS 10.15.7      | 280 x 653px                                   |
| DevTools emulator: Nest Hub           | Chrome 112.0.5615.49   | MacOS 10.15.7      | 1024 x 600px                                  |

// On Safari on desktop the menu nav bar responds differently to Chrome. When hovered, each menu item shifts the position of its neighbours slightly (although there is no effect on functionality). The Gallery also renders as one long vertical column, even on wider screens.

![The Gallery page on Safari, showing single column gallery images and nav bar oddity](assets/images/readme/safari-gallery.jpg)

// On Galaxy Fold there is a warning message saying the device is not suitable for viewing the page optimally, but the page does work fine, despite the contact form and social links being a little close.

![Message displayed on a Galaxy Fold phone](assets/images/readme/galaxy-fold.jpg)

Given the chance, and particularly as the Gallery on Safari responds differently to on Chrome, I'd want to test in other browsers (Opera, Samsung, Edge)

## Lighthouse testing

// All testing was performed on an Incognito page in Chrome. Although Performance can vary, the largest issue was the Gallery performance on both mobile and desktop, due to the amount of large, fairly high quality images. To mitigate this I reduced the sizes of all the larger images and increased Performance scores by 16 and 24 respectively, but further trimming of size would also help these scores.

Homepage (desktop)<br>
![Homepage desktop lighthouse validation](assets/images/readme/lh-home-desk.jpg)<br>
Homepage (mobile)<br>
![Homepage mobile lighthouse validation](assets/images/readme/lh-home-mob.jpg)<br>

Gallery (desktop)<br>
![Gallery desktop lighthouse validation](assets/images/readme/lh-gallery-desk2.jpg)<br>
Gallery (mobile)<br>
![Gallery mobile lighthouse validation](assets/images/readme/lh-gallery-mob2.jpg)<br>

Contact page (desktop)<br>
![Contact desktop lighthouse validation](assets/images/readme/lh-contact-desk.jpg)<br>
Contact page (mobile)<br>
![Contact mobile lighthouse validation](assets/images/readme/lh-contact-mob.jpg)<br>

Thank you page (desktop)<br>
![Thank you desktop lighthouse validation](assets/images/readme/lh-thank-desk.jpg)<br>
Thank you page (mobile)<br>
![Thank you mobile lighthouse validation](assets/images/readme/lh-thank-mob.jpg)<br>

404 page (desktop)<br>
![404 desktop lighthouse validation](assets/images/readme/lh-404-desk.jpg)<br>
404 page (mobile)<br>
![404 mobile lighthouse validation](assets/images/readme/lh-404-mob.jpg)<br>

## Wave Testing

// I ran the site through [Wave](https://wave.webaim.org/) and the site returned

# Defects

// I did not track my defects as often as I should have at this early stage, but [the following defects were tracked and closed](https://github.com/caketaster/Portfolio-Project-1---still-life/issues)

## Outstanding Defects

# Deployment

## Production

This website was deployed to GitHub Pages.
The following steps were taken to deploy:

1. Click the Settings cog on GitHub <br>
   ![Screenshot 2023-03-25 at 10 53 42](assets/images/readme/deploy1.jpg)

2. In the left-hand nav, click on the Pages tab <br>
   ![Screenshot 2023-03-25 at 10 57 03](assets/images/readme/deploy2.jpg)

3. In the Branches section, select Main <br>
   ![Screenshot 2023-03-25 at 11 01 19](assets/images/readme/deploy3.jpg)

4. Click Save <br>
   ![Screenshot 2023-03-25 at 11 01 48](assets/images/readme/deploy4.jpg)

5. Site is now deployed <br>
   ![Screenshot 2023-03-25 at 11 05 34](assets/images/readme/deploy5.jpg)

# Credits

// I used the Love-Maths walkthrough project as a

- [Nav bar](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LR101+2021_T1/courseware/4a07c57382724cfda5834497317f24d5/637be1a2e3b84b25aa33f3ab4d98603c/)
- [Hero-image zoom](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LR101+2021_T1/courseware/4a07c57382724cfda5834497317f24d5/6fd29d155c3b42248ff57bae32978a4b/)
- [contact form](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LR101+2021_T1/courseware/4a07c57382724cfda5834497317f24d5/4d85cd1a2c57485abbd8ccec8c00732c/)

I used W3schools for several things too:

- [hover boxes on gallery](https://www.w3schools.com/cssref/sel_hover.php)
- [larger textarea in the contact form](https://www.w3schools.com/tags/tag_textarea.asp)
- [placholder styling](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_placeholder)

## Media

All photos were taken from Google Images, searching by license for Creative Commons images.
