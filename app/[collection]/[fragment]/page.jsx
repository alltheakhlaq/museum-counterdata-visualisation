import { getLabelForNodeAndPredicate } from "../../getLabelForNodeAndPredicate";
import {
  getRdfStore,
  CRM,
  COUNTERDATA,
  RDF,
  RDFS,
  XSD,
} from "../../getRdfStore";
import { getUriFragment } from "../../getUriFragment";

export async function generateStaticParams() {
  const store = getRdfStore();
  const collectionObjects = store.each(
    null,
    RDF("type"),
    COUNTERDATA("CollectionObject"),
  );
  const fragments = collectionObjects.map((collectionObject) => {
    return getUriFragment(collectionObject.value);
  });

  const sloaneParams = fragments.map((fragment) => ({
    collection: "Sloane",
    fragment,
  }));
  const cliveParams = fragments.map((fragment) => ({
    collection: "Clive",
    fragment,
  }));
  return sloaneParams.concat(cliveParams);
}

export default async function ObjectPage({ params }) {
  // Get whatever [collection] and [fragment] is from the URL
  const { collection, fragment } = await params;
  const store = getRdfStore();

  // fragment is the last bit of the URI eg. "ColObject-BirdsEntry724"
  const objectNode = COUNTERDATA(fragment);

  // this is the query that will be used for any piece of data
  const hasAttributeNode = store.any(
    objectNode,
    COUNTERDATA("HasAttribute"),
    null,
  );
  const label = store.any(hasAttributeNode, RDFS("label"), null);
  // then use label.value in the code to show the label

  // or instead...
  const materialTypeLabel = getLabelForNodeAndPredicate(
    objectNode,
    COUNTERDATA("HasMaterialType"),
  );

  const materialConditionLabel = getLabelForNodeAndPredicate(
    objectNode,
    COUNTERDATA("HasMaterialCondition"),
  );

  const placeofCollectionLabel = getLabelForNodeAndPredicate(
    objectNode,
    COUNTERDATA("CollectedAt"),
  );

  const timeofCollectionLabel = getLabelForNodeAndPredicate(
    objectNode,
    COUNTERDATA("CollectedOn"),
  );

  return (
    <div>
      {/* Object page for object "{object}" in {collection} collection */}
      <div className="link">
        <div>Back to collection</div>
      </div>
      <div className="box">
        <h2>{label.value}</h2>
        {/* <p>Name of one of the objects from the Sloane Collection</p> */}
      </div>
      <div></div>
      <div className="flex flex-row w-full gap-5">
        <div className="flex-1 mt-5">
          <div className="square"></div>
        </div>
        <div className="flex-3 mr-8 max-h-[700px] overflow-y-scroll ">
          <div className="flex items-stretch items-center flex-row cursor-pointer m-5">
            <div className="flex">
              <div className="rounded-full border border-black-20 bg-[#2eb5a5] size-10 m-auto"></div>
              <p className="plabel ml-3">Data intenventions</p>
            </div>
            <div className="flex">
              <div className="rounded-full border border-black-20 bg-[#ffcf56] size-10 m-auto"></div>
              <p className="ml-3">Power diffenrentails</p>
            </div>
            <div className="flex">
              <div className=" rounded-full border border-black-20 bg-[#d36c83] size-10 m-auto"></div>
              <p className="ml-3">Current Access Information</p>
            </div>
          </div>
          <section className="odibox">
            <div id="label1">
              <h2>Data Interventions</h2>
              &nbsp;
              <p>
                <b>Object name:</b> {label.value}
              </p>
              &nbsp;
              <p>
                <b>Material type:</b> {materialTypeLabel}
              </p>
              &nbsp;
              <p>
                <b>Material Condition: </b> {materialConditionLabel}
              </p>
              &nbsp;
              <p>
                <b>Place of Collection: </b> {placeofCollectionLabel}
              </p>
              &nbsp;
              <p>
                <b>Time of Collection: </b> {timeofCollectionLabel}
              </p>
            </div>

            {/* <dl>
              {Object.entries(collectionItems[objectIndex].dataFields).map(
                ([fieldName, fieldInfo]) => {
                  const fieldValues = Array.isArray(fieldInfo)
                    ? fieldInfo
                    : [fieldInfo];
                  return (
                    <>
                      <dt>
                        <strong>{fieldName}</strong>
                      </dt>
                      {fieldValues.map(({ fieldValue, contextTag }) => (
                        <dd
                          className="mb-4"
                          onClick={() => {
                            const context = document.querySelector(
                              `[data-context-tag="${contextTag}"]`,
                            );
                            context?.scrollIntoView({ behavior: "smooth" });
                          }}
                          style={contextTag ? { cursor: "pointer" } : undefined}
                        >
                          {fieldValue}
                        </dd>
                      ))}
                    </>
                  );
                },
              )}
            </dl> */}
          </section>
          <section className="pdbox">
            <div id="label2">
              <h2>Power Dimensions</h2>
            </div>
            <div className="font-bold">Historical Power Dimensions</div>
            <div>
              Forms of domination that could be inspected through the object:
            </div>
            <div>
              Forms of resistance that could be inspected through the object:
            </div>
            <br />
            <div className="font-bold">Contemporary Power Dimensions</div>
            <div>Structural Domain</div>
            <div>Disciplinary Domain</div>
            <div>Hegemonic Domain</div>
            <div>Interpersonal Domain</div>
          </section>
          <section className="cabox">
            <div id="label3">
              <h2>Access Information</h2>
            </div>
            <div>
              Data fields with access information of the physical and digital
              object
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
