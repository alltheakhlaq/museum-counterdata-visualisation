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
