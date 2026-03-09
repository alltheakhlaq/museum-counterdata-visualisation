import { getRdfStore, RDFS } from "./getRdfStore";

export const getLabelForNodeAndPredicate = (object, predicate) => {
  const store = getRdfStore();
  const target = store.any(object, predicate, null);
  const label = store.any(target, RDFS("label"), null);
  return label.value;
};
