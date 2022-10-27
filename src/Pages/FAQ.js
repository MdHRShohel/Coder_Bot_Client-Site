import { Accordion } from 'flowbite-react';
import React from 'react';

const FAQ = () => {
    return (
      <div className="w-3/4 mx-auto mt-8 mb-10">
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>What is Coder Bot?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Well, Coder Bot is an innovative new form of short-term,
                intensive, and often immersive education designed to provide
                aspiring tech enthusiasts and professionals the skills they need
                to start careers in software engineering and other tech fields.
                Learning to code is an integral part of most courses. At the end
                of your coding program, you’ll be proficient in essential
                programming languages and frameworks.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to and start developing
                websites even faster with components on top of Tailwind CSS.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              How Long Does It Take to Learn Web Development?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Pursuing a college degree in web development, computer science,
                or computer programming takes 8-10 months, depending on whether
                you get an associate degree or a bachelor's degree. This is the
                longest path to becoming a web developer.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Is artificial intelligence good course?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Becoming an expert in AI will enable you to challenge current
                ways of working and change the way you perceive most things.
                Highlighting yourself as someone who strives for positive
                change, as well as an eagerness to learn the latest technologies
                could take you a long way in your career.The goal is to create
                computer intelligence programmes that can handle real-time
                problems and help organizations and everyday people achieve
                their goals. Machine games, speech recognition, language
                detection, computer vision, expert systems, robotics, and other fields have potential.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    );
};

export default FAQ;