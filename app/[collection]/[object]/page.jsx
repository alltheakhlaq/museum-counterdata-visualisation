const placeholders = ["object-1", "2", "third"];

const objectIds = {
  Sloane: [...placeholders],
  Clive: [...placeholders],
};

export async function generateStaticParams() {
  const sloaneParams = objectIds.Sloane.map((id) => ({
    collection: "Sloane",
    object: id,
  }));
  const cliveParams = objectIds.Clive.map((id) => ({
    collection: "Clive",
    object: id,
  }));
  return sloaneParams.concat(cliveParams);
}

export default async function ObjectPage({ params }) {
  // Get whatever [collection] and [object] is from the URL
  const { collection, object } = await params;

  // Here's where you'd query the DB for information about the collection object.
  // Made up example query:
  // const label = kb.labelMatching(collection, CIC('objectId'), object);

  return (
    <div>
      {/* Object page for object "{object}" in {collection} collection */}
      <div className="link">
        <div>Back to collection</div>
      </div>
      <div className="box">
        <h2>Object title:</h2>
        <p>Name of one of the objects from the Sloane Collection</p>
      </div>
      <div className="flex flex-row w-full gap-5">
        <div className="flex-1">
          <div className="square"></div>
        </div>
        <div>
          <div className="flex flex-col cursor-pointer gap-6">
            <div className="flex">
              <div className="rounded-full border border-black-20 bg-[#2eb5a5] size-10 m-auto"></div>
            </div>
            <div className="flex">
              <div className=" rounded-full border border-black-20 bg-[#ffcf56] size-10 m-auto"></div>
            </div>
            <div className="flex">
              <div className=" rounded-full border border-black-20 bg-[#d36c83] size-10 m-auto"></div>
            </div>
          </div>
        </div>
        <div className="flex-3 mr-8 max-h-[700px] overflow-y-scroll ">
          <section className="odibox">
            <div id="label1">
              <h2>Data Interventions</h2>{" "}
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
