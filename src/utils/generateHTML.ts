/**
 * Generates html string by consuming pre-designed params.
 */

export function generateHTML({
  title,
  desc,
  helper,
  inline,
}: {
  title: string;
  desc?: string;
  helper?: string;
  inline?: boolean;
}): string {
  return `
    <div ${inline ? 'style="display: inline-flex; align-items: center;"' : ""}>
    <h3>${title}</h3>
    ${desc ? `<p>${desc}</p>` : ""}
    ${helper ? `<p>${helper}</p>` : ""}
    </div>`;
}
