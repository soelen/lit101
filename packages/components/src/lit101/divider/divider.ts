import { html, } from 'lit'
import { Lit101Element } from '../../elements/lit101-element';
import { customElement, property } from 'lit/decorators.js'
import dividerStyles from './divider-styles';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

type Direction = 'row' | 'column';

@customElement( 'lit101-divider' )
export class Divider extends Lit101Element {

  @property({type: String, reflect: true, }) direction: Direction = 'column';

  static styles = [
    Lit101Element.styles,
    dividerStyles,
  ];

  render() {

    return html`
    `
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'lit101-divider': Divider,
  }
}
