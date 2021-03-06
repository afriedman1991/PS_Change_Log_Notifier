# PS Notifier - Sample Project

![image](https://user-images.githubusercontent.com/585865/45181589-e0665080-b1ec-11e8-973a-3025de9fbae4.png)

This sample project is designed to assess your front-end development capabilities.  

The goal of this project is to build a simple "changelog notifier" app that notifies a user of new features. For a point of reference, check out https://headwayapp.co

## Requirements:

The changelog itself should be a markdown file that lives on GitHub as a Gist (the format should look something like this: https://gist.github.com/dte/701da5c596c0df267500bedffb66d5f8

This file will be consumed by the sample app through whatever method you choose (cURL, API, other standard library). The file is then displayed to the user as a modal when the user clicks the notification icon on their avatar.

How you structure/implement this project is largely up to you, but it is required that you use React and a simple web server such as Express. Frameworks such as Next.js / Gatsby.js, etc are allowed.

## Bonus points
* use cookies to know when a user has already been notified about a release. i.e. don't show "2 new alerts" if the user has read them already
* add unit tests to confirm the expected behavior
* add smooth transition effects when clicking the release notes to go to an "expanded" view. See video here for an example:

![headway](https://user-images.githubusercontent.com/585865/45181740-4c48b900-b1ed-11e8-8f86-4e378f5197fe.gif)

## Additional Notes:

* Put your work on Github and send us a link. It is important to continually commit code with meaningful messages and context to demonstrate your ability to work within a team of engineers. 
* You are free to use any libraries/dependencies you would like.
* The demo repo should run standalone. A simple single page application is fine.
* Do not worry about deployment or where this application would sit in a more complicated infrastructure.