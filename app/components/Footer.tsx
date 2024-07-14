import React from 'react'
import { RESUME_LINK } from '@/constants/data'
export default function Footer({github}:{github:string}) {
  return (
    <div className="text-center w-full mt-16">
    <p className="text-gray-600 mb-4">
      @Created by Prajjwal sharma (
      <a
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
        href={RESUME_LINK}
        target="_blank"
      >
        Resume
      </a>
      )
    </p>
    {/* <GitHubButton
      href={github + "/react-tailwind-portfolio"}
      data-color-scheme="no-preference: light; light: light; dark: light;"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star ntkme/github-buttons on GitHub"
    >
      Star
    </GitHubButton>
    &nbsp;&nbsp;
    <GitHubButton
      href={github + "/react-tailwind-portfolio/fork"}
      data-color-scheme="no-preference: light; light: light; dark: light;"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork ntkme/github-buttons on GitHub"
    >
      Fork
    </GitHubButton> */}
  </div>
  )
}
