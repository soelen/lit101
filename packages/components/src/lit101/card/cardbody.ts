import { html, } from 'lit'
import { Lit101Element } from '../../elements/lit101-element';
import { customElement, property } from 'lit/decorators.js'
import cardbodyStyles from './cardbody-styles';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement( 'lit101-cardbody' )
export class Cardbody extends Lit101Element {

  @property({type: Boolean, reflect: true, }) required: boolean = false;

  static styles = [
    Lit101Element.styles,
    cardbodyStyles,
  ];

  render() {

    return html`
      <slot></slot>
    `
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'lit101-cardbody': Cardbody,
  }
}
