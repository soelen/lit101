/**
 * Converts a .
 *
 */
const textToHue = ( text :string ): number => {

  let hash = 0;
  let index = 0;

  for ( index = 0; index < text.length; index = index + 1 ) {
    hash = text.charCodeAt( index ) + ( ( hash << 5 ) - hash );
  }

  return hash % 360;
}

export default textToHue;
