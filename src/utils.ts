export function classNames(..._class: (false | null | undefined | string)[]): string {
  return _class.filter(Boolean).join(" ");
}
