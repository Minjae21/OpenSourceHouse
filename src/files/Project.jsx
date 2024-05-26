// import React, { useState } from 'react';

function Project() {
    // let [lang, langNext] = useState([]);
    // { lang[] }

    const lang = [
        {
            name: 'First time to Open Source World?',
            datePosted: '5/24/24',
            page: 'https://kentcdodds.com/blog/first-timers-only',
            description: 'First Timers Only, get an idea of open source projects, and how to submit a good PR.',
            imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVtOycyNCet2ImRE3Y0r_moiJAza0xKr9DMA&s',
            difficulty: 'Beginner',
        },
        {
            name: 'Google Open Source',
            datePosted: '',
            page: 'https://opensource.google/projects',
            description: 'Browse through their featured projects to find works that align with your interests.',
            imageUrl:
            'data:image/jpeg;base64,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',
            difficulty: 'All Range',
        },
        {
            name: 'freeCodeCamp',
            datePosted: '',
            page: 'https://github.com/freeCodeCamp/freeCodeCamp',
            description: 'Search the list of open issues that are labelled with "Hello Wanted", then contribute with your skills!',
            imageUrl:
            'data:image/png;base64,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',
            difficulty: 'All Range',
        },
    ]

        const lang2 = [
            {
                name: 'Appsmith',
                datePosted: '5/24/24',
                page: 'https://github.com/appsmithorg/appsmith',
                description: 'Label: good-first-issue',
                imageUrl:
                'data:image/png;base64,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',
                language: 'Java',
            },
            {
                name: 'Codename One',
                datePosted: '5/24/24',
                page: 'https://github.com/codenameone/CodenameOne?tab=readme-ov-file',
                description: 'Label: good-first-issue',
                imageUrl:
                'data:image/png;base64,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',
                language: 'Java | Kotlin',
            },
            {
                name: 'Godot',
                datePosted: '5/24/24',
                page: 'https://github.com/codenameone/CodenameOne?tab=readme-ov-file',
                description: 'Label: good first issue',
                imageUrl:
                'data:image/png;base64,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',
                language: 'C++',
            },
        ]

    return(
        <>
        <div className="prj-container">
<ul role="list" className="divide-y divide-gray-700">
      {lang.map((lang) => (
        <li key={lang.description} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <a href = {lang.page} target='_blank'>
            <img className="h-12 w-12 flex-none rounded-full bg-white-50" src={lang.imageUrl} alt="" /></a>
            <div className="min-w-0 flex-auto">
            <a href = {lang.page} target='_blank'>
              <p className="font-semibold leading-6 text-white-500 prj-name">{lang.name}</p></a>
              <p className="truncate text-xs leading-5 text-white-500 prj-description">{lang.description}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-white-900">{lang.difficulty}</p>
            <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">Available</p>
              </div>
          </div>
        </li>
      ))}
    </ul>
    </div>

    <div className="prj-container2">
<ul role="list" className="divide-y divide-gray-700">
      {lang2.map((lang2) => (
        <li key={lang2.description} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <a href = {lang2.page} target='_blank'>
            <img className="h-12 w-12 flex-none rounded-full bg-white-50" src={lang2.imageUrl} alt="" /></a>
            <div className="min-w-0 flex-auto">
            <a href = {lang2.page} target='_blank'>
              <p className="font-semibold leading-6 text-white-500 prj-name">{lang2.name}</p></a>
              <p className="truncate text-xs leading-5 text-white-500 prj-description">{lang2.description}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-white-900">{lang2.language}</p>
            <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">Available</p>
              </div>
          </div>
        </li>
      ))}
    </ul>
    </div>
        </>
    );
}

export default Project;