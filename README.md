# Google Calendar Integration Of A Video Calling App

These are the code samples for the [blog post]() on how to integrate your video application into Google Calendar to make it available as suggested video platforms for newly created meetings.

## 🧑‍💻 Where does the code go?

There are code files within this repo. Here's where you need to put the code for each of them:

1. `appscript.json`: inside of the [Apps Script](https://script.google.com/home) project, there is a manifest file, that you first need to show by selecting *Show "appsscript.json" manifest file in editor* (under: *Project settings* -> *General settings*). Then go to *Editor* and paste the code inside the `appscript.json` file. You need to customize the file to contain your own `name` and `logoUrl` parameters. Find out how in the [blog post]().
2. `calendar.js`: inside of the [Apps Script](https://script.google.com/home) project, hit the *+* button next to *Files*, select *Script*, and call it `calendar`. Paste the code inside the file. You need to do customize the file more, learn how in the [blog post]().


## 🛥 What is Stream?
Stream allows developers to rapidly deploy scalable feeds, chat messaging, and video with an industry-leading 99.999% uptime SLA guarantee.

Stream provides UI components and state handling that make it easy to build video calling for your app. All calls run on Stream’s network of edge servers around the world, ensuring optimal latency and reliability.

## 👩‍💻 Free for Makers 👨‍💻
Stream is free for most side and hobby projects. To qualify, your project/company needs to have < 5 team members and < $10k in monthly revenue. Makers get $100 in monthly credit for video for free. For more details, check out the [Maker Account](https://getstream.io/maker-account).
