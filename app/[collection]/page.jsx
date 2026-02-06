const pageContents = {
  Sloane: {
    infoBox: (
      <div>
        <div className="mt-5 overflow-scroll">
          <a href="/">
            <p className="link">
              Click here to read biographical history of Hans Sloane
            </p>
          </a>
        </div>
        <div className="flex flex-row gap-5 h-full">
          <div className="flex-1 mt-6 mb-6">
            <div className="italic">
              Important information before exploring collection of Hans Sloane:
            </div>
          </div>
          <div className="flex-2 pbox">
            <a href="/">
              <p>
                How did Sloane's collection practise benefit from{" "}
                <b>Transatlantic trade of enslaved people?</b>
              </p>
            </a>
          </div>
          <div className="flex-2 pbox">
            <a href="">
              <p>
                How did Sloane's collection practise benefit from{" "}
                <b>British colonial expansion?</b>
              </p>
            </a>
          </div>
        </div>
      </div>
    ),
    objectBox: <div></div>,
  },
  Clive: {
    infoBox: "clive was veeeeery ugly",
  },
};

export async function generateStaticParams() {
  return [{ collection: "Sloane" }, { collection: "Clive" }];
}

export default async function CollectionPage({ params }) {
  // Get whatever [collection] is from the URL
  const { collection } = await params;

  const { infoBox } = pageContents[collection];

  // Here's where you'd query the DB for information about the collection.
  // Made up example query:
  // const location = kb.labelMatching(collection, CIC('location'));

  return (
    <div>
      <div>
        <div>
          <p>Counterdata visualisation of</p>
          <h1>Objects from {collection} collection</h1>
        </div>
        {infoBox}
        <label>
          <input className="peer/showLabel absolute scale-0" type="checkbox" />
          <span className="block max-h-15 w-full overflow-hidden bg-[#ffffe0] rounded-2xl border border-black border-2 p-3 duration-300 peer-checked/showLabel:max-h-52">
            <div className="flex flex-row gap-10 justify-center">
              <p className="flex cursor-pointer items-center">
                Explore object in Sloane's collection and their encompassing
                power dimensions{" "}
              </p>
              <div
                className="flex mt-2 w-0 h-0 
                  border-l-[10px] border-l-transparent
                  border-t-[15px] border-t-black-500
                  border-r-[10px] border-r-transparent"
              ></div>
            </div>
            <div className="grid grid-cols-3 mt-10">
              <div>
                <a href={`${collection}/object-1`}>Object 1</a>
              </div>
              <div>
                <a href={`${collection}/2`}>Object 2</a>
              </div>
              <div>
                <a href={`${collection}/third`}>Object 3</a>
              </div>
              <div>
                <a href={`${collection}/third`}>Object 4</a>
              </div>
              <div>
                <a href={`${collection}/third`}>Object 5</a>
              </div>
              <div>
                <a href={`${collection}/third`}>Object 6</a>
              </div>
              <div>
                <a href={`${collection}/third`}>Object 7</a>
              </div>
              <div>
                <a href={`${collection}/third`}>Object 8</a>
              </div>
              <div>
                <a href={`${collection}/third`}>Object 9</a>
              </div>
              <div>
                <a href={`${collection}/third`}>Object 10</a>
              </div>
            </div>
          </span>
        </label>
        {/* <div className="box">
          <p>
            Explore object in Sloane's collection and their encompassing power
            dimensions
          </p>
          <div className="grid">
            <ul>
              <li>
                <a href={`${collection}/object-1`}>Object 1</a>
              </li>
              <li>
                <a href={`${collection}/2`}>Object 2</a>
              </li>
              <li>
                <a href={`${collection}/third`}>Object 3</a>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
}
