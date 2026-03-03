import { graph, namedNode, parse } from "rdflib";
import * as $rdf from "rdflib";
import { useEffect, useMemo, useState } from "react";
import solidNamespace from "solid-namespace";
import body from "./counterdata_model.ttl";

const ns = solidNamespace($rdf);

export const CRM = $rdf.Namespace(
  "https://cidoc-crm.org/html/cidoc_crm_v7.1.3.html#",
);
export const COUNTERDATA = $rdf.Namespace("http://example.org/counterdata#");
export const RDF = $rdf.Namespace(
  "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
);
export const RDFS = $rdf.Namespace("http://www.w3.org/2000/01/rdf-schema#");
export const XSD = $rdf.Namespace("http://www.w3.org/2001/XMLSchema#");

const uri = "https://example.org/resource.ttl";

// { loading, error, store }
/**
 *
 * @returns Object
 *   - store: $rdf.Store | undefined
 *   - loading: boolean
 *   - error: Error | null
 */
export default function useRdfStore() {
  const store = useMemo(() => graph(), []);
  const [name, setName] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    parse(body, store, uri, "text/turtle", (e, updatedStore) => {
      if (e) setError(e);
      setName(
        updatedStore?.any(namedNode(uri), ns.foaf("name"), null)?.value || "",
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return { error };
  }

  if (name === undefined) {
    return { loading: true };
  }

  return { store };
}
