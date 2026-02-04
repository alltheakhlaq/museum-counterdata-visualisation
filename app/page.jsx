/**
 * Routes work how the directories are formatted.
 */
export default function Home() {
  return (
    <div>
      <div className="">
        <h1>Counterdata Visualisation</h1>
        <p className="mt-3">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.",
        </p>
        <div className="flex justify-evenly mt-6 mb-6">
          <div>
            <div className="rounded-full bg-[#2eb5a5] size-10 m-auto"></div>
            <p>Data Interventions</p>
          </div>
          <div>
            <div className="rounded-full bg-[#ffcf56] size-10 m-auto"></div>
            <p>Power Dimensions</p>
          </div>
          <div>
            <div className="rounded-full bg-[#d36c83] size-10 m-auto"></div>
            <p>Access Information</p>
          </div>
        </div>
      </div>
      <div>
        <ul>
          <li className="box ">
            <a href="/sloane">Sloane collection</a>
          </li>
          <li className="box">
            <a href="/clive">Clive collection</a>
          </li>
          {/* <li className="box">
            <a href="/mystery">Mystery collection</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
