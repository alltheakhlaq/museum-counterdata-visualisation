/**
 * This layout will be appled to everything in [collection]
 * Any page.jsx in those folders will be put in as the "children" in this file
 */
export default function CollectionLayout({ children }) {
  return (
    <div>
      Collection layout
      <div>{children}</div>
    </div>
  );
}
