export function $id(id) {
  return document.getElementById(id);
}

export function $name(name, index) {
  return document.getElementsByName(name)[index];
}

export function $tagName(tagName, index) {
  return document.getElementsByTagName(tagName)[index];
}

export function $class(class_) {
  return document.querySelector(class_);
}
