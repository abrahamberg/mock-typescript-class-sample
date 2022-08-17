
# Sample Mock TypeScript class

This repository is sample code for the blog post [How to Mock a TypeScript class or dependency using Jest](https://www.abrahamberg.com/blog/how-to-use-jest-in-typescript-to-mock-a-class/)

What we are testing is that SoundPlayerConsumer is going to do its job by doing all its internal calculations and as result it uses the SoundPlayer class correctly.

To use this sample clone it locally, then  install required modules, then you can run

```bash
npm i
```

Just to see how the code itself works.Then you can run:

```bash
npm start
```

To run the sample tests.

```bash
npm t
```

When you run test you get :

```console
$ npm t

> test
> jest

 PASS  ./sound-player-consumer.test.ts
  √ checks if the consumer called the class constructor (2 ms)
  √ checks if the consumer calls a method of the class instance (2 ms)                                                                                                                                                                        
                                                                                                                                                                                                                                              
Test Suites: 1 passed, 1 total                                                                                                                                                                                                                
Tests:       2 passed, 2 total                                                                                                                                                                                                                
Snapshots:   0 total
Time:        1.517 s, estimated 2 s
Ran all test suites.
```

To get most of this please make sure you read this [blog post](https://www.abrahamberg.com/blog/how-to-use-jest-in-typescript-to-mock-a-class/)
