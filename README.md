![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

Welcome,

This is the Code Institute student template for Codeanywhere. We have preinstalled all of the tools you need to get started. It's perfectly ok to use this template as the basis for your project submissions.

You can safely delete this README.md file, or change it for your own project. Please do read it at least once, though! It contains some important information about Codeanywhere and the extensions we use. Some of this information has been updated since the video content was created. The last update to this file was: **March 3rd, 2023**

## Codeanywhere Reminders

To run a frontend (HTML, CSS, Javascript only) application in Codeanywhere, in the terminal, type:

`python3 -m http.server`

A button should appear to click: _Open Preview_ or _Open Browser_.

To run a frontend (HTML, CSS, Javascript only) application in Codeanywhere with no-cache, you can use this alias for `python3 -m http.server`.

`http_server`

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A button should appear to click: _Open Preview_ or _Open Browser_.

In Codeanywhere you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

To log into the Heroku toolbelt CLI:

1. Log in to your Heroku account and go to _Account Settings_ in the menu under your avatar.
2. Scroll down to the _API Key_ and click _Reveal_
3. Copy the key
4. In Codeanywhere, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works. This API key is unique and private to you so do not share it. If you accidentally make it public then you can create a new one with _Regenerate API Key_.

---

Happy coding!

Source:
Basic HTML sctrucure: https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode/blob/master/01-putting-the-basics-in-place/04-lets-get-stylish/index.html

1 Question appears
2 User answers by clicking A, B or C
3 If correct, green infobox appears, if incorrect red info box appears (same info, just different colour backgrounds)
4 Correct/incorrect answer score increments
5 Next question appears
6 The quiz works through the different sections, at the end a total score is given

- user can jump to individual section?
- info page/tab/pop-up explaining the quiz structure
- and a page/tab/opp-up with some general sasquatch info?

JS
runGame() logic
show q
listen for click on A, B, C
if correct -> green background, score increment
else -> red background, incorrect score increment
show next q

finalScore() logic
Grab score total
"you scored () out of (30)" & "You're a [Sasquatch black-belt] etc"

- need different ending texts depending on your score (smallfoot, mediumfoot, hugefoot)
