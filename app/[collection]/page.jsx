import Link from "next/link";
import { getRdfStore, CRM, COUNTERDATA, RDF, RDFS, XSD } from "../getRdfStore";
import { getUriFragment } from "../getUriFragment";

const pageContents = {
  Sloane: {
    infoBox: (
      <div>
        <div className="mt-5 overflow-scroll">
          <Link href="/">
            <p className="link">
              Click here to read biographical history of Hans Sloane
            </p>
          </Link>
        </div>
        <div className="flex flex-row gap-5 h-full">
          <div className="flex-1 mt-6 mb-6">
            <div className="italic">
              Important information before exploring collection of Hans Sloane:
            </div>
          </div>
          <div className="flex-2 pbox">
            <Link href="/">
              <p>
                How did Sloane&apos;s collection practise benefit from{" "}
                <b>Transatlantic trade of enslaved people?</b>
              </p>
            </Link>
          </div>
          <div className="flex-2 pbox">
            <a href="">
              <p>
                How did Sloane&apos;s collection practise benefit from{" "}
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

export const generateStaticParams = async function () {
  return [{ collection: "Sloane" }, { collection: "Clive" }];
};

export default async function CollectionPage({ params }) {
  // Get whatever [collection] is from the URL
  const { collection } = await params;
  const store = getRdfStore();

  const collectionObjects = store.each(
    null,
    RDF("type"),
    COUNTERDATA("CollectionObject"),
  );

  const { infoBox } = pageContents[collection];

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
          <span className="block max-h-15 w-full overflow-hidden bg-[#ffffe0] rounded-2xl border border-black border-2 p-3 duration-300 peer-checked/showLabel:max-h-1000">
            <div className="flex flex-row gap-10 justify-center">
              <p className="flex cursor-pointer items-center">
                Explore object in Sloane&apos;s collection and their
                encompassing power dimensions{" "}
              </p>
              <div
                className="flex mt-2 w-0 h-0 {
          }        border-l-[10px] border-l-transparent
                  border-t-[15px] border-t-black-500
                  border-r-[10px] border-r-transparent"
              ></div>
            </div>
            <div className="grid grid-cols-2 w-full mt-10 gap-5">
              {collectionObjects.map((collectionObject) => {
                const hasAttributeNode = store.any(
                  collectionObject,
                  COUNTERDATA("HasAttribute"),
                  null,
                );
                const label = store.any(hasAttributeNode, RDFS("label"), null);
                const fragment = getUriFragment(collectionObject.value);
                return (
                  <Link key={fragment} href={`/${collection}/${fragment}`}>
                    {label.value}
                  </Link>
                );
              })}
            </div>
          </span>
        </label>
      </div>
    </div>
  );
}
