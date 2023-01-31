/**
 * FIXME:
 * make bold and title case on brand list when search
 */

export function toBold(name: string, searchInput: string) {
  var searchMask = searchInput;
  var regEx = new RegExp(searchMask, 'ig');

  var result = name.replace(regEx, `<strong>${searchInput}</strong>`);
  return result;
}
