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

export const apiPage =
  '<body style="margin: 0; position: relative; background-image: url(\'https://raw.githubusercontent.com/udacity/cd0292-building-a-server-project-starter/master/images/icelandwaterfall.jpg\');"><div style="position: absolute; top: 0; left: 0; bottom: 0; right: 0; background-color: rgb(0 0 0); opacity: 0.1;"></div><div style="display: flex; flex-direction: column; align-items: center; position: relative; color: #224;"><h2>Welcome to image processing api</h2><div><div style="display: inline-flex; align-items: center;"><p>You can format a working URL like so </p>&nbsp;<pre style="background-color: #99999980; width: fit-content">http://localhost:3000/api/images?filename={}&amp;width={}&amp;height={}</pre></div><ul style="margin-block-start: 0px;"><li style="list-style: none"><b> 1: </b><a style="color: #224" href="http://localhost:3000/api/images?filename=santamonica">localhost:3000/api/images?filename=santamonica</a></li><li style="list-style: none"><b>2: </b><a style="color: #224" href="http://localhost:3000/api/images?filename=palmtunnel&amp;width=600&amp;height=300">localhost:3000/api/images?filename=palmtunnel&amp;width=600&amp;height=300</a></li></ul><p>P.S. filename can be one of the following (encenadaport, fjord, icelandwaterfall, palmtunnel, santamonica) and is mandatory.</p></div></div></body>';
