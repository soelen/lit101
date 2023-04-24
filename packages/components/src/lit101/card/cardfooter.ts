import { html, } from 'lit'
import { Lit101Element } from '../../elements/lit101-element';
import { customElement, } from 'lit/decorators.js'
import cardfooterStyles from './cardfooter-styles';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement( 'lit101-cardfooter' )
export class Cardfooter extends Lit101Element {

  static styles = [
    Lit101Element.styles,
    cardfooterStyles,
  ];

  render() {

    return html`
      <slot></slot>
    `
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'lit101-cardfooter': Cardfooter,
  }
}
