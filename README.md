# JS Katas with Test-Driven Development ( TDD )
#### Practice ECMAScript test-driven style

This is the local version of [JSKatas](https://jskatas.org) that you can use to practice
your JS-foo.

## What

While this exercise is targeted at programmers with some
exposure to ECMAScript, if you are completely new to
ECMAScript, you can learn as well. The goal is to introduce
concepts of ECMAScript test-driven style.

If you're unfamilar with the test-driven development, you
can read about it on [Wikipedia](https://en.wikipedia.org/wiki/Test-driven_development) or on James Shore's [website](https://www.jamesshore.com/Agile-Book/test_driven_development.html).

## How?

Run the tests! ( as simple as that )

```shell
npm run test language
```

You'll find all the tests failing. That's by design ( and
actually the point ).

Your target is to `make all tests pass, leave the assert lines unchanged!`

You can target individual higher-level targets like so :
```shell
npm run test language/es6
```

PS : the last argument to the test script is the directory
of the test suite.

:warning: as a side-effect, `npm run test` ( without the path parameter )
would not work because the script function expects a parameter
and will just indefinitely traverse backward.

:warning: the `hamjest` library tests start with an common
`SyntaxError` with `import`. It might be in your best interest
to avoid running the test on the root directory with the
dot ( `.` ) path parameter.

Have fun honing your JS-foo! :tada:

## Want More?

If you're a beginner and are using this tool as an exercise
to learn the concepts of ECMAScript, then you can use this
repository to fix the tests ( and learn ) and push those
changes so that you can get it reviewed by a mentor.

**Bonus** : you learn some concepts of `git` along the way too.
Another important tool to add to your development toolkit.

## Getting Started ( some boring nodeJS history )

If you are a seasoned JavaScript programmer, you probably
already know this, why are you still reading? There isn't
anything left for you here. Get your copy of the repository,
clone, and get fixing those tests.

For aspiring JavaScript developers, welcome. You're entering
a big, wide world. We hope that you become great developers
of the future.

You might have heard of [NodeJS](https://nodejs.org). That's
probably the motiviation for you to even start with JavaScript.
It's an implementation of [Google's V8](https://en.wikipedia.org/wiki/V8_(JavaScript_engine)) JavaScript engine.
And to continue that chain, [JavaScript](https://en.wikipedia.org/wiki/JavaScript) is an implementation
of ECMAScript. That's where we are at right now - [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) -
the most basic component of the chain.

While, nodeJS is not a requirement to learn or even start
with ECMAScript, the technology has evolved so much to be
an integral part of JavaScript developers' lives that they
practically integrate it with everything they do.

In their defense though, it does make developing with
JavaScript a lot easier and manageable, especially with
things like package dependency management et. al.

#### Why the ( boring ) history lesson?

We've tried to make the barrier to entry as low as possible.
There's this thing called Node Package Manager ( NPM ). It's
not a hard dependency to learn ECMAScript, but it'll make it
easier to get set up to start with ECMAScript. So, there you
go - the history lesson was to tell you that you need `npm`
to get started.

You'll have to figure out how to get it for your workstation.
For a typical \*NIX-based machine, that would look like
`[sudo] <package-manager> install npm`.

example ( on debain-based machines ) : `[sudo] apt install npm`

Once you have that going, the next step is to get the source
( if you haven't already ). Go ahead, '[Use this template](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)' and get your own copy.

[Clone the repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) to your local machine. From within
the repository, run `npm install` to get the dependencies
required to run the tests.

That should be enough for you to get started. Now you can
follow the [how section](#How) to start with learning
ECMAScript.

Once again, welcome to the party. Have fun learning
ECMAScript, test-driven style! :tada:
