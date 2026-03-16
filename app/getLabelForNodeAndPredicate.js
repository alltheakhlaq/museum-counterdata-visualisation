import { getRdfStore, RDFS } from "./getRdfStore";

export const getLabelForNodeAndPredicate = (object, predicate) => {
  const store = getRdfStore();
  const target = store.any(object, predicate, null);
  return store.anyValue(target, RDFS("label"), null);
};
