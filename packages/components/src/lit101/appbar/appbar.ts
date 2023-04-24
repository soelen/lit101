import { html, } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import{ menuSVG }from '@lit101/icons';

import { Lit101Element } from '../../elements/lit101-element';
import appbarStyles from './appbar-styles';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement( 'lit101-appbar' )
export class Appbar extends Lit101Element {

  @property({type: Boolean, reflect: true, }) required: boolean = false;

  static styles = [
    Lit101Element.styles,
    appbarStyles,
  ];

  render() {

    return html`
    <div id="start">
      <lit101-iconbutton>
        ${ unsafeSVG( menuSVG ) }
      </lit101-iconbutton>
      <slot></slot>
    </div>
    <div id="end">
      <slot name="end"></slot>
    </div>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'lit101-appbar': Appbar,
  }
}
