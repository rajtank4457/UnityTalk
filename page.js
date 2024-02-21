"use client";

import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Link from "next/link";
import Image from "next/image";
import discover3 from "../../images/discover3.png";
import discover2 from "../../images/discover2.png";
import Footer from "../../components/Footer";
import DiscoverBar from "./../../components/DiscoverBar";
import "../../style.css"

const YOUTUBE_PLAYLIST_ITEMS_API ="https://youtube.googleapis.com/youtube/v3/search";
const YOUTUBE_PLAYLISTID = "UCIdw5MR9iVtu7PHPXqJgV3A";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const ITEMS_PER_PAGE = 5;

function DiscoverPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const [showPlayGames, setShowPlayGames] = useState(false);
  const [showNews, setShowNews] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);




  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&channelId=${YOUTUBE_PLAYLISTID}&maxResults=50&key=${apiKey}`;

        // Include search query if available
        if (searchQuery) {
          apiUrl += `&q=${encodeURIComponent(searchQuery)}`;
        }

        const res = await fetch(apiUrl);

        if (!res.ok) {
          throw new Error(
            `Failed to fetch data from YouTube API: ${res.status} ${res.statusText}`
          );
        }

        const result = await res.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError(error);
        setLoading(true);
      }
    };


    fetchData();
  }, [searchQuery]);

  const totalPages = data ? Math.ceil(data.items.length / ITEMS_PER_PAGE) : 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  return (
    <div>
      <div className="bg-[#23272A]">
        <Header />

        <div className="selection:text-blue-300 text-[#ebe4e4] animate_animated animate_fadeInUp">
          <p className="text-bold lg:text-5xl lg:text-center pl-4">
            FIND YOUR COMMUNITY ON UNITY TALK
          </p>
          <p className="text-center lg:text-2xl lg:pt-2">
            From gaming, to music, to learning, there's a place for you.
          </p>
        </div>

        <div className="pt-10 flex ">
          <div className=" animate_animated animatebounceInLeft animatedelay-1s motion-safe:animate_duration-1s ">
            <Image
              src={discover2}
              className="h-80 w-80"
              width=""
              alt="discover2"
              priority=""
            />
          </div>
          <div className="lg:ml-auto animate_animated animatebounceInRight animatedelay-1s motion-safe:animate_duration-1s ">
            <Image
              src={discover3}
              className="h-80 w-80 hidden md:block"
              width=""
              alt="discover3"
              priority=""
            />
          </div>
        </div>
      </div>
      {/* section 2 */}

      <div className="flex pt-5 lg:pl-16 bg-white">
        <input
          placeholder="Explore communities"
          className="input-style w-11/12 bg-white text-black"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>

      <div className="lg:flex lg:pl-[292px] lg:pt-10 lg:bg-white">
        {/* Your navigation links here */}
        <div className="md:block hidden lg:text-black">
          <DiscoverBar />
        </div>
        <div className=" lg:hidden pt-4 bg-white">
        <details className="collapse bg-base-200">
        <summary className="collapse-title text-xl font-medium ">
        <div className="flex justify-center">
          <div className="text-white"> Categories</div>
          <div className="bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="34"
              viewBox="0 -960 960 960"
              width="34"
              className="pt-1"
            >
              <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </div>
        </div>
      </summary>
          <div className="collapse-content lg:bg-white text-black pt-">
            <ul className="menu p-4 w-80 min-h-full  text-xl">
              {/* Sidebar content here */}
              <li>
                <Link href="/Discover">
                  <svg
                    width="35px"
                    height="35px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-svg"
                  >
                    <path
                      d="M12 12H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM16 8L9.5 9.5L8 16L14.5 14.5L16 8Z"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  All
                </Link>
              </li>
              <li>
                <div>
                  <Link href="/Discover/Gaming">
                    <div className="flex">
                      <svg
                        width="35px"
                        height="35px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.00014 11H10.0001M8.00014 9V13M15.0001 12H15.0101M18.0001 10H18.0101M10.4491 5H13.5512C16.1761 5 17.4885 5 18.5187 5.49743C19.4257 5.9354 20.1793 6.63709 20.6808 7.51059C21.2503 8.5027 21.3438 9.81181 21.5309 12.43L21.7769 15.8745C21.8975 17.5634 20.5599 19 18.8667 19C18.0008 19 17.1796 18.6154 16.6253 17.9502L16.2501 17.5C15.907 17.0882 15.7354 16.8823 15.54 16.7159C15.1305 16.3672 14.6346 16.1349 14.1045 16.0436C13.8516 16 13.5836 16 13.0476 16H10.9527C10.4167 16 10.1487 16 9.89577 16.0436C9.36563 16.1349 8.86981 16.3672 8.46024 16.7159C8.26487 16.8823 8.09329 17.0882 7.75013 17.5L7.37497 17.9502C6.82064 18.6154 5.99949 19 5.13359 19C3.44037 19 2.10275 17.5634 2.22339 15.8745L2.46942 12.43C2.65644 9.81181 2.74994 8.5027 3.31951 7.51059C3.82098 6.63709 4.57458 5.9354 5.48159 5.49743C6.51176 5 7.8242 5 10.4491 5Z"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="pl-2"> Gaming</span>
                    </div>
                  </Link>
                  <div className="justify-end">
                    <span
                      className="text-xl"
                      onClick={() => {
                        setShowPlayGames(!showPlayGames);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </li>
              {showPlayGames && (
                <li className="my-1 flex hover:bg-[#E7E9EB] rounded-box w-50 h-10 pl-8">
                  <Link href="Gaming/playGame">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
                        />
                      </svg>
                    </span>
                    PlayGames
                  </Link>
                </li>
              )}
              <li>
                <Link href="/Discover/Entertainment">
                  <svg
                    width="35px"
                    height="35px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 7V21M18 11H18.01M18 14H18.01M18 17H18.01M17 3L12 7L7 3M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V11.8C21 10.1198 21 9.27976 20.673 8.63803C20.3854 8.07354 19.9265 7.6146 19.362 7.32698C18.7202 7 17.8802 7 16.2 7H7.8C6.11984 7 5.27976 7 4.63803 7.32698C4.07354 7.6146 3.6146 8.07354 3.32698 8.63803C3 9.27976 3 10.1198 3 11.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Entertainment
                </Link>
              </li>
              <li>
                <Link href="/Discover/Music">
                  <svg
                    width="35px"
                    height="35px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 19C9 20.1046 7.65685 21 6 21C4.34315 21 3 20.1046 3 19C3 17.8954 4.34315 17 6 17C7.65685 17 9 17.8954 9 19ZM9 19V5L21 3V17M21 17C21 18.1046 19.6569 19 18 19C16.3431 19 15 18.1046 15 17C15 15.8954 16.3431 15 18 15C19.6569 15 21 15.8954 21 17ZM9 9L21 7"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Music
                </Link>
              </li>
              <li>
                <Link href="/Discover/Education">
                  <svg
                    fill="#000000"
                    width="35px"
                    height="35px"
                    viewBox="0 -4.83 31.876 31.876"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g transform="translate(-673.292 -327.728)">
                      <path d="M689.741,329.778l9.241,2.448-9.242,2.7-9.82-2.7,9.821-2.449m.012-2.05a.478.478,0,0,0-.113.013L673.752,331.7a.465.465,0,0,0-.01.9l15.887,4.366a.467.467,0,0,0,.123.017.476.476,0,0,0,.13-.019l14.951-4.366a.465.465,0,0,0-.011-.9l-14.95-3.962a.479.479,0,0,0-.119-.015Z" />

                      <path d="M696.013,349.95H682.63a3.932,3.932,0,0,1-4.124-3.7v-8.831a1,1,0,0,1,2,0v8.831a1.95,1.95,0,0,0,2.124,1.7h13.383a1.949,1.949,0,0,0,2.125-1.7v-8.831a1,1,0,0,1,2,0v8.831A3.932,3.932,0,0,1,696.013,349.95Z" />

                      <path d="M674.292,341.16a1,1,0,0,1-1-1v-4.208a1,1,0,0,1,2,0v4.208A1,1,0,0,1,674.292,341.16Z" />
                    </g>
                  </svg>
                  Education
                </Link>
              </li>
              <li>
                <div>
                  <Link href="/Discover/News">
                    <div className="flex">
                      <svg
                        fill="#000000"
                        height="30px"
                        width="30px"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 24 24"
                        enableBackground="new 0 0 24 24"
                        xmlSpace="preserve"
                      >
                        <g id="news">
                          <polygon points="22,22 4,22 4,24 24,24 24,21 22,21 	" />
                          <path d="M18.414,0H4v9h2V2h10v6h6v3h2V5.586L18.414,0z M18,6V2.414L21.586,6H18z" />
                          <polygon points="5.999,20 5.999,12 4,12 4,15.926 2,12 0.002,12 0.002,20 2,20 2,15.914 4,20 	" />
                          <polygon points="12,12 12,20 14,20 15,18 16,20 18,20 18,12 16,12 16,16 15,14 14,16 14,12 	" />
                          <polygon points="11,14 11,12 9,12 8,12 7,12 7,20 8,20 9,20 11,20 11,18 9,18 9,17 10,17 10,15 9,15 9,14 	" />
                          <path
                            d="M21,12c-1,0-2,1-2,2.5s1,2.5,2,2.5h0.553c0.642,0,0.577,1,0,1H19v2h2.673c0,0,2.327,0,2.327-2.5S22.573,15,21.573,15
              c-0.766,0-0.755-1,0-1H24v-2h-2H21z"
                          />
                        </g>
                      </svg>
                      <span className="pl-3">News</span>
                    </div>
                  </Link>
                  <div>
                    <span
                      className="text-xl"
                      onClick={() => {
                        setShowNews(!showNews);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </li>
              {showNews && (
                <li className="pl-8 flex hover:bg-[#E7E9EB] rounded-box w-50 h-10 ">
                  <Link
                    href="https://news-app-tilr.onrender.com/"
                    target="_black"
                  >
                    <span>
                      <svg
                        fill="#000000"
                        width="25px"
                        height="25px"
                        viewBox="-1 0 46 46"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="_14.News"
                          data-name="14.News"
                          d="M41,47H7a5,5,0,0,1-5-5V2A1,1,0,0,1,3,1H37a1,1,0,0,1,1,1h0V16h7a1,1,0,0,1,1,1V42A5,5,0,0,1,41,47Zm-5-5V3H4V42H4a3,3,0,0,0,3,3H37.022A4.962,4.962,0,0,1,36,42Zm8-24H38V42a3,3,0,0,0,6,0ZM7,40a1,1,0,0,1,1-1h9a1,1,0,0,1,0,2H8A1,1,0,0,1,7,40Zm4.666-16.285a.977.977,0,1,1-1.381-1.381l5.905-5.905a.887.887,0,0,1,.095-.143,1.047,1.047,0,0,1,1.43,0,.959.959,0,0,1,.095.143L22,20.619l2.19-2.19a.887.887,0,0,1,.095-.143.919.919,0,0,1,1.525.143l3.905,3.905a.977.977,0,1,1-1.381,1.381L25,20.381,23.381,22l.334.334a.977.977,0,1,1-1.381,1.381L17,18.381ZM23,29h9a1,1,0,0,1,0,2H23a1,1,0,0,1,0-2Zm0,5h9a1,1,0,0,1,0,2H23a1,1,0,0,1,0-2Zm0,5h9a1,1,0,0,1,0,2H23a1,1,0,0,1,0-2Zm1-23.5A1.5,1.5,0,1,1,22.5,14,1.5,1.5,0,0,1,24,15.5ZM27,10H13a1,1,0,0,1,0-2H27a1,1,0,0,1,0,2ZM8,34h9a1,1,0,0,1,0,2H8a1,1,0,0,1,0-2Zm10-4a1,1,0,0,1-1,1H8a1,1,0,0,1,0-2h9A1,1,0,0,1,18,30Z"
                          transform="translate(-2 -1)"
                          fill-rule="evenodd"
                        />
                      </svg>
                    </span>
                    Read News
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </details>
      </div>

      <div className="lg:pl-10 lg:pt-10  bg-white">
      <div className="lg:flex pl-[500px] md:block hidden">
      <svg
      width="35px"
      height="35px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 7V21M18 11H18.01M18 14H18.01M18 17H18.01M17 3L12 7L7 3M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V11.8C21 10.1198 21 9.27976 20.673 8.63803C20.3854 8.07354 19.9265 7.6146 19.362 7.32698C18.7202 7 17.8802 7 16.2 7H7.8C6.11984 7 5.27976 7 4.63803 7.32698C4.07354 7.6146 3.6146 8.07354 3.32698 8.63803C3 9.27976 3 10.1198 3 11.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

        <h1 className="text-4xl font-bold text-black">Entertainment</h1>
      </div>

      <div className="lg:hidden text-center font-bold text-black text-4xl flex pt-8 pl-10">
        <div>
        <svg
        width="35px"
        height="35px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 7V21M18 11H18.01M18 14H18.01M18 17H18.01M17 3L12 7L7 3M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V11.8C21 10.1198 21 9.27976 20.673 8.63803C20.3854 8.07354 19.9265 7.6146 19.362 7.32698C18.7202 7 17.8802 7 16.2 7H7.8C6.11984 7 5.27976 7 4.63803 7.32698C4.07354 7.6146 3.6146 8.07354 3.32698 8.63803C3 9.27976 3 10.1198 3 11.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
        </div>
        <h1 className="text-4xl font-bold text-black">Entertainment</h1>
      </div>

      <div className="lg:pl-56 pl-36 pt-3 text-2xl text-black">
        {loading && (
          <div>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
      </div>
      {/* // Display search results */}
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((item, index) => {
            const { id, snippet = {} } = item;
            const {
              title,
              publishedAt,
              channelTitle,
              thumbnails = {},
              resourceId,
            } = snippet;
            const { medium = {} } = thumbnails;

            return (
              <li
                key={id.videoId}
                className="card card-side  lg:w-[900px] shadow-xl gap-4 hover:shadow-2xl hover:bg-[#E7E9EB] transition-transform duration-300 transform hover:scale-105"
              >
                <Link
                  href={`https://www.youtube.com/watch?v=${id.videoId}`}
                >
                  <div className="flex items-center ">
                    <div className="mr-4 p-7">
                      <Image
                        alt=""
                        src={medium.url}
                        //width={medium.width}
                        width="400"
                        //height={medium.height}
                        height="300"
                        priority=""
                      />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold">{title}</h3>
                      <br />
                      <span className="font-bold">
                        By {channelTitle} At {publishedAt}
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        // Display all videos
        <ul>
          {data &&
            data.items.slice(startIndex, endIndex).map((item, index) => {
              const { id, snippet = {} } = item;
              const {
                title,
                publishedAt,
                channelTitle,
                thumbnails = {},
                resourceId,
              } = snippet;
              const { medium = {} } = thumbnails;

              return (
                <li
                  key={id.videoId}
                  className="text-black card card-side pt-7 w-[350px] lg:w-[900px] shadow-xl gap-4 lg:hover:shadow-2xl lg:hover:bg-[#E7E9EB] lg:transition-transform lg:duration-300 lg:transform lg:hover:scale-105"
                >
                  <Link
                    href={`https://www.youtube.com/watch?v=${id.videoId}`}
                  >
                    <div className="lg:flex items-center ">
                      <div className="lg:mr-4 lg:p-7">
                        <Image
                          alt=""
                          src={medium.url}
                          //width={medium.width}
                          width="400"
                          //height={medium.height}
                          height="300"
                          priority=""
                        />
                      </div>

                      <div className="pl-3">
                        <h3 className="lg:text-2xl font-bold">{title}</h3>

                        <span className="font-bold">
                          By {channelTitle} At {publishedAt}
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
        </ul>
      )}

      <div className="pt-10 lg:flex mt-4 lg:pl-[200px]">
        {Array.from(
          { length: totalPages },
          (_, i) =>
            (i !== 0 || totalPages > 1) && (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`mr-2 px-5 lg:px-3 py-2 hover:bg-blue-500 border ${
                  currentPage === i + 1 ? "bg-gray-300" : ""
                }`}
              >
                {i + 1}
              </button>
            )
        )}
      </div>
    </div>
      </div>

      <div className="pt-4">
        <Footer />
      </div>
    </div>
  );
}


export default DiscoverPage;
