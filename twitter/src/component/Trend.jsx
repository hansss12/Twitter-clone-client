export default function Trend() {
  return (
      <div className="flex flex-col justify-between w-auto border border-neutral-800 border-b-0 px-12 gap-2">
          {/* <!-- Search button --> */}
          <div className="p-10">
              <input
                  type="text"
                  placeholder="Search Twitter"
                  className="w-80 outline-none bg-transparent rounded-full border border-transparent bg-zinc-800 py-3 px-4 focus:bg-transparent focus:border focus:border-emerald-500"
              />
          </div>
          {/* <!-- Trends Section --> */}
          <div className="flex flex-col bg-[#16181c] rounded-3xl py-4 ">
              <span className="w-full font-bold text-xl px-4 py-2 text-start">
                  Trends for you
              </span>
              <div className="flex flex-col w-full px-4 py-4 hover:bg-[#292d34] transition-all">
                  <span className="text-neutral-500 text-sm text-start">
                      Trending in Programing
                  </span>
                  <span className="text-white font-bold text-start">
                      React
                  </span>
                  <span className="text-neutral-500 text-sm text-start">21.2K Tweets</span>
              </div>
              <div className="flex flex-col w-full px-4 py-4 hover:bg-[#292d34] transition-all">
                  <span className="text-neutral-500 text-sm text-start">
                      Trending in Programing
                  </span>
                  <span className="text-white font-bold text-start">Spring Boot</span>
                  <span className="text-neutral-500 text-sm text-start">6.9K Tweets</span>
              </div>
              <div className="flex flex-col w-full px-4 py-4 hover:bg-[#292d34] transition-all">
                  <span className="text-neutral-500 text-sm text-start">
                      Trending in Programing
                  </span>
                  <span className="text-white font-bold text-start">Java</span>
                  <span className="text-neutral-500 text-sm text-start">30.4K Tweets</span>
              </div>
              <div className="flex flex-col w-full px-4 py-4 hover:bg-[#292d34] transition-all">
                  <span className="text-neutral-500 text-sm text-start">
                      Trending in Programing
                  </span>
                  <span className="text-white font-bold text-start">Kotlin</span>
                  <span className="text-neutral-500 text-sm text-start">9.8K Tweets</span>
              </div>
              <div className="flex flex-col w-full px-4 py-4 hover:bg-[#292d34] transition-all">
                  <span className="text-neutral-500 text-sm text-start">
                      Trending in Programing
                  </span>
                  <span className="text-white font-bold text-start">Hello world</span>
                  <span className="text-neutral-500 text-sm text-start">120.9K Tweets</span>
              </div>
          </div>
          <div className="text-center px-4 py-1">
              <a href="" className="text-sm text-neutral-500 hover:underline">
                  Terms of Service{" "}
              </a>
              <a href="" className="text-sm text-neutral-500 hover:underline">
                  Privacy Policy{" "}
              </a>
              <a href="" className="text-sm text-neutral-500 hover:underline">
                  Cookie Policy{" "}
              </a>
              <br />
              <a href="" className="text-sm text-neutral-500 hover:underline">
                  Accessibility{" "}
              </a>
              <a href="" className="text-sm text-neutral-500 hover:underline">
                  Advertising information{" "}
              </a>
              <br />
              <a href="" className="text-sm text-neutral-500 hover:underline">
                  More...
              </a>
              <br />
              <span className="text-neutral-500 text-sm">© 2023 Twitter, Inc.</span>
          </div>
      </div>
  );
}