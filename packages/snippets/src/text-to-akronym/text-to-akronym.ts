export const textToAkronym = ( text: string ): string => {

  const words = text.split( ' ' );
  if( words.length < 2 ) return '';

  const firstName = words.shift() as string;
  const lastName = words.pop() as string;

  return `${ firstName[ 0 ].toUpperCase() }${ lastName[ 0 ].toUpperCase() }`;

}

export default textToAkronym;
