import React from "react";
import TwitchLogo from "../../assets/twitch-purple.svg";
import FacebookLogo from "../../assets/facebook.png";
import TwitterLogo from "../../assets/twitter.svg";
import InstagramLogo from "../../assets/instagram.svg";
import MicrosoftLogo from "../../assets/microsoft.svg";
import AmazonLogo from "../../assets/amazon.svg";
import AppleLogo from "../../assets/apple.svg";
import SpotifyLogo from "../../assets/spotify.png";
import GoogleLogo from "../../assets/google.svg";
import GithubLogo from "../../assets/github.svg";
import GitlabLogo from "../../assets/gitlab.svg";
import YahooLogo from "../../assets/yahoo.png";

import MOCK_DATA from "../../dumdumdummy/MOCK_DATA";

function Home() {
  const getLogo = (name) => {
      console.log(name + 'Logo')
    switch (`${name}Logo`) {
      case "TwitterLogo":
        return TwitterLogo;
      case "TwitchLogo":
        return TwitchLogo;
      case "FacebookLogo":
        return FacebookLogo;
      case "InstagramLogo":
        return InstagramLogo;
      case "MicrosoftLogo":
        return MicrosoftLogo;
      case "AmazonLogo":
        return AmazonLogo;
      case "AppleLogo":
        return AppleLogo;
      case "SpotifyLogo":
        return SpotifyLogo;
      case "GoogleLogo":
        return GoogleLogo;
      case "GithubLogo":
        return GithubLogo;
      case "GitlabLogo":
        return GitlabLogo;
        case "YahooLogo":
            return YahooLogo;
      default:
        return TwitchLogo;
    }
  };
  return (
    <div className="grid grid-cols-3 gap-1 max-w-6xl mx-auto">
      {MOCK_DATA.map((job, index) => {
        return (
          <div className="jobCard p-4 bg-secondary-color m-4 rounded-lg" key={`jobcard-${index}`}>
            <div className="logo-date flex justify-between mb-4">
              <div className="company-logo">
                <img src={getLogo(job.name)} alt="twitch" className="w-8" />
              </div>
              <div className="submission-date text-xs text-secondary-color">
                7 Nov
              </div>
            </div>
            <div className="designation-replies font-primary text-2xl text-primary-color">
              {job.designation}
            </div>
            <div className="name font-primary text-lg">{job.name}</div>

            <div className="location font-primary">{job.location}</div>
            <div className="description font-secondary text-secondary-color">
              {job.desc.substring(0, 80)}
              {job.desc.length > 81 ? "..." : ""}
            </div>
            <div className="stacks font-secondary text-xxs rounded-full bg-blue-100 text-blue-900 px-1.5 w-fit my-4">
              {job.skills}
            </div>
            <div className="btns mt-4">
              <button className="bg-main-color px-8 py-2 rounded secondary-color">
                Apply
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
