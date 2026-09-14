interface ElementOptions {
  className?: string;
  text?: string;
  attributes?: Readonly<Record<string, string>>;
}

export function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  options: ElementOptions = {},
): HTMLElementTagNameMap[K] {
  const element: HTMLElementTagNameMap[K] = document.createElement(tagName);

  if (options.className !== undefined) {
    element.className = options.className;
  }

  if (options.text !== undefined) {
    element.textContent = options.text;
  }

  if (options.attributes !== undefined) {
    const attributeEntries: ReadonlyArray<[string, string]> = Object.entries(options.attributes);

    for (const [name, value] of attributeEntries) {
      element.setAttribute(name, value);
    }
  }

  return element;
}
