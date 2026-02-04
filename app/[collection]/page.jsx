export default async function CollectionPage({ params }) {
  // Get whatever [collection] is from the URL
  const { collection } = await params;

  // Here's where you'd query the DB for information about the collection.
  // Made up example query:
  // const location = kb.labelMatching(collection, CIC('location'));

  return (
    <div>
      <h1>Collection page for {collection}</h1>
      <div>
        Here's some links:
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
    </div>
  );
}
