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
    console.log(name + "Logo");
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
  const formatdate = (date) => {
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const d = new Date(date);
    let name = month[d.getMonth()];
    return `${name.substring(0, 3)} ${d.getDate()}`;
  };
  return (
    <div className="grid grid-cols-3 gap-1 max-w-6xl mx-auto">
      {MOCK_DATA.map((job, index) => {
        return (
          <div
            className="jobCard p-4 bg-secondary-color m-4 rounded-lg"
            key={`jobcard-${index}`}
          >
            <div className="logo-date flex justify-between mb-4">
              <div className="company-logo">
                <img src={getLogo(job.name)} alt="twitch" className="w-8" />
              </div>
              <div className="submission-date text-xs text-secondary-color">
                {formatdate(job.date)}
              </div>
            </div>
            <div className="designation-replies font-primary text-2xl text-primary-color">
              {job.designation}
            </div>
            <div className="flex align-middle space-x-2">
              <div className="name font-secondary  text-xs text-secondary-color">
                {job.name}
              </div>
              <div className="divider font-secondary  text-xs text-secondary-color">
                |
              </div>
              <div className="location font-secondary  text-xs text-secondary-color">
                {job.location}
              </div>
            </div>
            <span class="mt-2 mb-2 inline-flex bg-purple-100 text-purple-500 rounded h-6 px-3 justify-center items-center text-xs">
              {job.skills}
            </span>
            <div className="description font-secondary text-secondary-color my-3 clamp">
              {job.desc}
            </div>
            {/* <div className="stacks font-secondary text-xxs rounded-full bg-blue-100 text-blue-900 px-1.5 w-fit my-4">
              {job.skills}
            </div> */}
            {/* <div className="px-2 py-1  text-xs rounded bg-purple-200 text-purple-500 mt-4 w-fit">
            {job.skills}
            </div> */}

            <div className="btns mt-4">
              <button className="bg-main-color px-8 py-2 rounded secondary-color font-secondary">
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
