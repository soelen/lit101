import { html, } from 'lit'
import { Lit101Element } from '../../elements/lit101-element';
import { customElement, property } from 'lit/decorators.js'
import appbaritemStyles from './appbaritem-styles';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
type Size = 'small' | 'medium' | 'large';

@customElement( 'lit101-appbaritem' )
export class Appbaritem extends Lit101Element {

  @property({type: String, reflect: true, }) size: Size = 'medium';

  static styles = [
    Lit101Element.styles,
    appbaritemStyles,
  ];

  render() {

    return html`
      <button type="button"><slot></slot></button>
    `
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'lit101-appbaritem': Appbaritem,
  }
}
