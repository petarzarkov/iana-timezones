const colorIfAllowed = (colorFn: (text: string) => string) => (text: string) =>
  !process.env.NO_COLOR ? colorFn(text) : text;

const colors = {
  bold: colorIfAllowed((text) => `\x1B[1m${text}\x1B[0m`),
  under: colorIfAllowed((text) => `\x1B[4m${text}\x1B[0m`),
  red: colorIfAllowed((text) => `\x1B[31m${text}\x1B[39m`),
  green: colorIfAllowed((text) => `\x1B[32m${text}\x1B[39m`),
  yellow: colorIfAllowed((text) => `\x1B[33m${text}\x1B[39m`),
  blue: colorIfAllowed((text) => `\x1B[34m${text}\x1B[0m`),
  magenta: colorIfAllowed((text) => `\x1B[35m${text}\x1B[0m`),
  cyan: colorIfAllowed((text) => `\x1B[36m${text}\x1B[0m`),
  bgCyan: colorIfAllowed((text) => `\x1B[46m${text}\x1B[0m`),
  magentaBright: colorIfAllowed((text) => `\x1B[95m${text}\x1B[39m`),
  cyanBright: colorIfAllowed((text) => `\x1B[96m${text}\x1B[39m`),
};

function step(message: string, color: keyof typeof colors = 'cyan', ctx?: unknown) {
  const coloredMessage = colors[color](message);
  if (ctx) {
    console.log(coloredMessage, ctx);
    return;
  }

  console.log(coloredMessage);
}

export const logger = {
  debug: (message: string, ctx?: unknown) => {
    step(message, 'cyan', ctx);
  },
  info: (message: string, ctx?: unknown) => {
    step(message, 'green', ctx);
  },
  warn: (message: string, ctx?: unknown) => {
    step(message, 'yellow', ctx);
  },
  error: (message: string, ctx?: unknown) => {
    step(message, 'red', ctx);
  },
};
