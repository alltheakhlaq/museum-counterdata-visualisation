export default async function CollectionPage({ params }) {
  // Get whatever [collection] is from the URL
  const { collection } = await params;

  // Here's where you'd query the DB for information about the collection.
  // Made up example query:
  // const location = kb.labelMatching(collection, CIC('location'));

  return (
    <div >
      <div>
              <div className="box h-100">
<p>Counterdata visualisation of</p>
      <h1>Objects from {collection} collection</h1>
            <p className="mt-5 overflow-scroll">View counterdata visualisation of objects from the collection of Sir Hans Sloane</p>
            </div>
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
