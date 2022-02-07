export function check_classes(classes : string[], lang: string) : boolean {
  const book_langs = new Set(["python", "r", "javascript", "py"]);
  let specific_lang;
  for (const class_lang of classes) {
    if (book_langs.has(class_lang.toLowerCase())) {
      specific_lang = class_lang.toLowerCase();
    }
  }
  return specific_lang === undefined || specific_lang === lang.toLowerCase();
}