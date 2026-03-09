import { graph, parse } from "rdflib";
import * as $rdf from "rdflib";
import body from "./counterdata_model.ttl";

export const CRM = $rdf.Namespace(
  "https://cidoc-crm.org/html/cidoc_crm_v7.1.3.html#",
);
export const COUNTERDATA = $rdf.Namespace("http://example.org/counterdata/");
export const RDF = $rdf.Namespace(
  "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
);
export const RDFS = $rdf.Namespace("http://www.w3.org/2000/01/rdf-schema#");
export const XSD = $rdf.Namespace("http://www.w3.org/2001/XMLSchema#");

const baseUri = "http://example.org/counterdata/";

export const getRdfStore = () => {
  const store = graph();

  parse(body, store, baseUri, "text/turtle", (e) => {
    if (e) {
      error = e;
    }
  });

  return store;
};
