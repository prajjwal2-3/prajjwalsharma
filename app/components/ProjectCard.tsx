import { FaExternalLinkAlt } from "react-icons/fa";
import GitHubButton from "react-github-btn";
import { GITUHB_LOGO_URL,ANDROID_LOGO } from "@/constants/data";
import Carousel from "./Carousel";

export default function ProjectCard({
    project: {
      title,
      description,
      tags,
      codeLink,
      websiteLink,
      screenshots,
      androidAppLink,
    },
  }:{
    project:{
        title: string;
        description: string;
        tags: string[];
        codeLink: string;
        websiteLink: string;
        androidAppLink?: string;
        screenshots: string[];
    }
  }) {
  return (
    <>
      <div className="group w-full sm:w-1/2 m-4 mx-auto p-6 rounded-xl border-2 border-gray-300">
        <div className="flex text-xl text-center font-bold justify-center items-center space-x-3">
          <h1> {title} </h1>
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            <img
              alt="githublogo"
              className="inline align-baseline w-6 "
              src={GITUHB_LOGO_URL}
            />
          </a>
          {androidAppLink && (
            <a href={androidAppLink} target="_blank" rel="noopener noreferrer">
              <img
                alt="androidLogo"
                className="inline align-baseline w-6 "
                src={ANDROID_LOGO}
              />
            </a>
          )}
          {websiteLink && (
            <a href={websiteLink} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="inline align-baseline w-8 " />
            </a>
          )}
        </div>

        <hr className="my-4" />
        <p className="text-center  text-gray-700 mb-8">{description}</p>

        <Carousel arrayOfImages={screenshots} />

        <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2 text-gray-600">
          {tags.map((tag, index) => (
            <div className="px-4 py-1 border-2 rounded-full" key={index}>
              #{tag}
            </div>
          ))}
        </div>

        <div className="w-full text-center">
          <GitHubButton
            href={codeLink}
            data-color-scheme="no-preference: light; light: light; dark: light;"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star ntkme/github-buttons on GitHub"
          >
            Star
          </GitHubButton>
          {"  "}
          <GitHubButton
            href={codeLink + "/fork"}
            data-color-scheme="no-preference: light; light: light; dark: light;"
            data-icon="octicon-repo-forked"
            data-size="large"
            data-show-count="true"
            aria-label="Fork ntkme/github-buttons on GitHub"
          >
            Fork
          </GitHubButton>
        </div>
      </div>
    </>
  )
}
