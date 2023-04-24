import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

import viteLogo from '/vite.svg'


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement( 'lit-app' )
export class LitApp extends LitElement {

  @property({ type: Number }) count = 0

  render() {
    return html`
      <lit101-theme>
        <lit101-applayout>
          <lit101-nav slot="sidebar">
            <div slot="logo">
              Logo
            </div>
            <lit101-navitem active>
              Affe
            </lit101-navitem>
          </lit101-nav>
          <lit101-container>
            <lit101-appbar>
            </lit101-appbar>
            <lit101-card>
              <lit101-cardbody>
                <a href="https://vitejs.dev" target="_blank">
                  <img src=${ viteLogo } class="logo" alt="Vite logo" />
                </a>
                <a href="https://lit.dev" target="_blank">
                  <img src=${ litLogo } class="logo lit" alt="Lit logo" />
                </a>
              </lit101-cardbody>
            </lit101-card>
            <lit101-card>
              <lit101-cardbody>
                <button @click=${this._onClick} part="button">
                  count is ${this.count}
                </button>
                <p class="read-the-docs">Click on the Vite and Lit logos to learn more</p>
              </lit101-cardbody>
            </lit101-card>
          </lit101-container>
        </lit101-applayout>
      </lit101-theme>
    `
  }

  private _onClick() {
    this.count++
  }

  static styles = css`
    :host {
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-app': LitApp,
  }
}
