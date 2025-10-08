import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { faker } from "@faker-js/faker";
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

import "react-placeholder/lib/reactPlaceholder.css";
import LoginMobile from './fabio-components/login-mobile';
import SignupMobile from "./fabio-components/Signup-mobile";
import SignupEmailMobile from "./fabio-components/SignUpForm-mobile";
import VerifyEmailMobile from "./fabio-components/VerifyEmail-mobile";
import ChatHomeMobile from "./fabio-components/ChatHome-mobile";
import ChatConversationMobile from "./fabio-components/ChatConversation-mobile";
import CodeSnippetMobile from "./fabio-components/CodeSnippet-mobile";

function App() {
  const [count, setCount] = useState(0);
  const isReady = true; // Mettez à 'true' pour afficher l'image réelle
  const fakeAvatar = faker.image.avatar();
  const exampleCode = "import React from 'react'";
  return (
    <>
      <>
        {/* <div class="flex">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
        {/* <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <svg class="size-12 shrink-0" viewBox="0 0 40 40">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
              <stop stop-color="#2397B3" offset="0%"></stop>
              <stop stop-color="#13577E" offset="100%"></stop>
            </linearGradient>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
              <stop stop-color="#73DFF2" offset="0%"></stop>
              <stop stop-color="#47B1EB" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <path
              d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z"
              fill="url(#a)"
              transform="translate(1 1)"
            ></path>
            <path
              d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z"
              fill="url(#b)"
              transform="translate(1 1)"
            ></path>
            <path
              d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
              fill="#FFF"
            ></path>
          </g>
        </svg>
        <div>
          <div class="text-xl font-medium text-black dark:text-white">
            ChitChat
          </div>
          <p class="text-gray-500 dark:text-gray-400">
            You have a new message!
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 bg-white rounded-2xl" >
        <div>
          <img
            src={fakeAvatar}
            alt="Fake Profile"
            className="h-24 w-24 rounded-full object-cover"
          />
        </div>
        <div class="space-y-2 text-center sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg font-semibold text-black">Erin Lindford</p>
            <p class="font-medium text-gray-500">Product Engineer</p>
          </div>
          <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
            Message
          </button>
        </div>
      </div> */}
      
      </>
      {/* <LoginMobile/> */}
      {/* <SignupMobile/> */}
      {/* <SignupEmailMobile /> */}
      {/* <VerifyEmailMobile /> */}
      {/* <ChatHomeMobile /> */}
      <ChatConversationMobile/>
      
    </>
  );
}

export default App;
