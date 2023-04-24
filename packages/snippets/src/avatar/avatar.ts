
import { textToHue } from "../main";

interface HSL {
  h: number,
  s: number,
  l: number,
}
interface Avatar {
  foreground: HSL,
  background: HSL,
}

/**
 * Converts a .
 *
 */
const avatar = ( text :string, saturation: number, lightness: number): Avatar => {

  const hue = textToHue( text );
  return {
    foreground: { h: hue, s: saturation + 10, l: lightness - 10 },
    background: { h: hue, s: saturation - 10, l: lightness + 10 },
  }
}

export default avatar;
