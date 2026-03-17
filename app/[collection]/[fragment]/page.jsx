import {
  getLabelForNodeAndPredicate,
  getMultipleLabelsForNodeAndPredicate,
} from "../../getLabelForNodeAndPredicate";
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
  // Material Type
  const materialTypeLabel = getLabelForNodeAndPredicate(
    objectNode,
    COUNTERDATA("HasMaterialType"),
  );

  // Material Condition
  const materialConditionLabel = getLabelForNodeAndPredicate(
    objectNode,
    COUNTERDATA("HasMaterialCondition"),
  );

  // Place
  const placeofCollectionLabel = getLabelForNodeAndPredicate(
    objectNode,
    COUNTERDATA("CollectedAt"),
  );

  // Time
  const timeofCollectionLabel = getLabelForNodeAndPredicate(
    objectNode,
    COUNTERDATA("CollectedOn"),
  );

  // Associated people
  const associatedPeopleLabel = getLabelForNodeAndPredicate(
    objectNode,
    COUNTERDATA("EngagedBy"),
  );

  //Cultural significance for the source community
  const culturalSigLabel = getLabelForNodeAndPredicate(
    objectNode,
    COUNTERDATA("Represents"),
  );

  //Method of acquisition
  const actor = store.any(objectNode, COUNTERDATA("EngagedBy"), null);

  // console.log(store.each(actor, RDFS("label"), null));

  const acquisitionMethodLabel = getLabelForNodeAndPredicate(
    actor,
    COUNTERDATA("Utilises"),
  );

  //Current holding institution
  const holdingInstLabel = getLabelForNodeAndPredicate(
    objectNode,
    COUNTERDATA("HeldBy"),
  );

  //Objects with similar power dimensions
  const similarObjLabel = getLabelForNodeAndPredicate(
    objectNode,
    COUNTERDATA("IsSimilarTo"),
  );

  //tags
  const keywordLabel = getLabelForNodeAndPredicate(
    objectNode,
    COUNTERDATA("Indicates"),
  );

  // Power dimensions
  const power = store.any(objectNode, COUNTERDATA("Indicates"), null);
  console.log(store.any(power, RDFS("label"), null));

  // getting subtype dom and res
  const powerSubTypes = store.each(power, COUNTERDATA("HasType"), null);

  // domination node
  const domination = powerSubTypes.find((subType) =>
    store.any(subType, null, COUNTERDATA("Domination")),
  );
  const dominationLabel = store.any(domination, RDFS("label"), null);

  // resistance node
  const resistance = powerSubTypes.find((subType) =>
    store.any(subType, null, COUNTERDATA("Resistance")),
  );
  const resistanceLabel = store.any(resistance, RDFS("label"), null);

  // Actor's resistance and domination
  const ActorPower = getLabelForNodeAndPredicate(
    actor,
    COUNTERDATA("EngagesIn"),
  );

  //pull in actions types
  const actionTypes = store.each(actor, COUNTERDATA("EngagesIn"), null);
  console.log("actions", actionTypes);

  //get the domination action
  const domAction = actionTypes.find((action) =>
    store.any(action, null, COUNTERDATA("Domination")),
  );
  const domActionLabel = store.any(domAction, RDFS("label"), null);

  // get the resistance action
  const resAction = actionTypes.find((action) =>
    store.any(action, null, COUNTERDATA("Resistance")),
  );
  const resActionLabel = store.any(resAction, RDFS("label"), null);

  // Get event
  const event = store.any(objectNode, COUNTERDATA("IndicatesOccuringOf"), null);

  // get event types
  const eventTypes = store.each(event, COUNTERDATA("Indicates"), null);
  console.log("Event Types", eventTypes);

  // get domination event
  const domEvent = eventTypes.find((event) =>
    store.any(event, null, COUNTERDATA("Domination")),
  );
  const domEventLabel = store.any(domEvent, RDFS("label"), null);

  // get resistance event
  const resEvent = eventTypes.find((event) =>
    store.any(event, null, COUNTERDATA("Resistance")),
  );
  const resEventLabel = store.any(resEvent, RDFS("label"), null);

  // Access Information

  // get colobj type node
  const colObjTypes = store.each(objectNode, COUNTERDATA("HasType"), null);
  console.log(colObjTypes);

  // get physical
  const physicalObj = colObjTypes.find((objType) =>
    store.any(objType, null, COUNTERDATA("PhysicalCollectionObject")),
  );
  const physHeldByLabel = getLabelForNodeAndPredicate(
    physicalObj,
    COUNTERDATA("HeldBy"),
  );
  const physAccessRights = getLabelForNodeAndPredicate(
    physicalObj,
    COUNTERDATA("Holds"),
  );

  // get digital
  const digitalObj = colObjTypes.find((objType) =>
    store.any(objType, null, COUNTERDATA("DigitalCollectionObject")),
  );
  const digiHeldByLabels = getMultipleLabelsForNodeAndPredicate(
    digitalObj,
    COUNTERDATA("HeldBy"),
  );

  const digiRights = store.each(digitalObj, COUNTERDATA("Holds"), null);

  const accessRights = digiRights.find((right) =>
    store.any(right, null, COUNTERDATA("AccessRights")),
  );

  const digiAccessRightsLabels = store
    .each(accessRights, RDFS("label"), null)
    .map((label) => label.value);

  const usageRights = digiRights.find((right) =>
    store.any(right, null, COUNTERDATA("UsageRights")),
  );

  const digiUsageRightsLabels = store
    .each(usageRights, RDFS("label"), null)
    .map((label) => label.value);

  return (
    <div className="mb-50">
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
        <div className="flex-1 mt-3">
          <div className="square"></div>
        </div>
        <div className="flex-3 mr-8 max-h-[700px]">
          <div className="flex items-stretch justify-center flex-row cursor-pointer m-3 gap-10">
            <button className="flex flex-col gap-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover: border-black-50 scroll-smooth">
              <a href="#dataInterventions">
                <div className="rounded-full border border-black-20 bg-[#2eb5a5] size-8 m-auto"></div>
                <div>
                  <p className="plabel ml-3">Data intenventions</p>{" "}
                </div>
              </a>
            </button>
            <button className="flex flex-col gap-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover: border-black-50">
              <a href="#powerDifferentials">
                <div className="rounded-full border border-black-20 bg-[#ffcf56] size-8 m-auto"></div>
                <div>
                  <p className="plabel ml-3">Power diffenrentails</p>
                </div>
              </a>
            </button>
            <button className="flex flex-col gap-2transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover: border-black-50">
              <a href="#accessInfo">
                <div className="rounded-full border border-black-20 bg-[#d36c83] size-8 m-auto"></div>
                <div>
                  <p className="plabel ml-3">Current Access Information</p>
                </div>
              </a>
            </button>
          </div>
          <section className="odibox">
            <div id="dataInterventions">
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
                <b>Material condition: </b> {materialConditionLabel}
              </p>
              &nbsp;
              <p>
                <b>Place of collection: </b> {placeofCollectionLabel}
              </p>
              &nbsp;
              <p>
                <b>Time of collection: </b> {timeofCollectionLabel}
              </p>
              &nbsp;
              <p>
                <b>Associated people: </b> {associatedPeopleLabel}
              </p>
              &nbsp;
              <p>
                <b>Method of acquisition: </b>
                {acquisitionMethodLabel}
              </p>
              &nbsp;
              <p>
                <b>Cultural significance for the source community: </b>
                {culturalSigLabel}
              </p>
              &nbsp;
              <p>
                <b>Current holding institution: </b>
                {holdingInstLabel}
              </p>
              &nbsp;
              <p>
                <b>Objects with similar power dimensions: </b>
                {similarObjLabel}
              </p>
              &nbsp;
              <p>
                <b>Keywords: </b>
                {keywordLabel}
              </p>
            </div>
          </section>
          <section className="pdbox">
            <div id="powerDifferentials">
              <h2>Power Differentials</h2>
            </div>
            <div>
              &nbsp;
              <h4>Historical Power Dimensions</h4>
              &nbsp;
              <p>
                <b>Forms of historical dominations indicated by object: </b>
                {dominationLabel.value}
              </p>
              &nbsp;
              <p>
                <b>Actors involved in Domination: </b>
                {domActionLabel.value}
              </p>
              &nbsp;
              <p>
                <b>Events indicating Domination: </b>
                {domEventLabel.value}
              </p>
              &nbsp;
              <p>
                <b>Forms of historical resistance indicated by object: </b>
                {resistanceLabel.value}
              </p>
              &nbsp;
              <p>
                <b>Actors involved in Resistance: </b>
                {resActionLabel.value}
              </p>
              &nbsp;
              <p>
                <b>Events indicating Resistance: </b>
                {resEventLabel.value}
              </p>
            </div>
            <br />
            <div className="font-bold">Contemporary Power Dimensions</div>
            <div>Structural Domain</div>
            <div>Disciplinary Domain</div>
            <div>Hegemonic Domain</div>
            <div>Interpersonal Domain</div>
          </section>
          <section className="cabox">
            <div id="accessInfo">
              <h2>Access Information</h2>
            </div>
            &nbsp;
            <h4>Access to Physical Item</h4>
            &nbsp;
            <p>
              <b>Institution holding physical object: </b>
              {physHeldByLabel}
            </p>
            &nbsp;
            <p>
              <b>Access rights of physical object: </b>
              {physAccessRights}
            </p>
            &nbsp;
            <h4>Access to Digital Item</h4>
            &nbsp;
            <p>
              <b>Platforms or institutions holding digital object: </b>
              {digiHeldByLabels}
            </p>
            &nbsp;
            <p>
              <b>Access rights of digital object: </b>
              {digiAccessRightsLabels}
            </p>
            &nbsp;
            <p>
              <b>Usage rights of digital object: </b>
              {digiUsageRightsLabels}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
