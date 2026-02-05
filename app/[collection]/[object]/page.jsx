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
      Object page for object "{object}" in {collection} collection
    </div>
  );
}
