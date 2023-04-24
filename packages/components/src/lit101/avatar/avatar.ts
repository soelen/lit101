import { html, } from 'lit'
import { Lit101Element } from '../../elements/lit101-element';
import { customElement, property } from 'lit/decorators.js'
import avatarStyles from './avatar-styles';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement( 'lit101-avatar' )
export class Avatar extends Lit101Element {

  @property( { type: Boolean, reflect: true, } ) active: boolean = false;

  static styles = [
    Lit101Element.styles,
    avatarStyles,
  ];

  render() {

    return html`
    <svg version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" />
      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
      >UF</text>

    </svg>
    `
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'lit101-avatar': Avatar,
  }
}
