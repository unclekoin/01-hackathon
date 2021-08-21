export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function textToAttribute(text) {
  return text.replace(/Module/, '').toLowerCase();
}
