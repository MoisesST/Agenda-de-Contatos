import { $tagName } from "./get-element.js";

export const validateInput = () => {
  return (
    $tagName("input", 0).value.trim().toLowerCase().length > 0 &&
    $tagName("input", 1).value.trim().toLowerCase().length > 0
  );
};
