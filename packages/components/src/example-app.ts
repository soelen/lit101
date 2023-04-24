import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import {unsafeSVG} from 'lit/directives/unsafe-svg.js';
import './form-examples';

import {
  moonSVG,
  questionmarkSVG,
  settingsSVG,
  signOutSVG,
} from '@lit101/icons';


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement( 'example-app' )
export class ExampleApp extends LitElement {

  @property({type: Boolean, reflect: true, }) required: boolean = false;

  static styles = [css`
    :host {
      display: block;
    }
  `];

  render() {

    return html`
    <lit101-theme
      .theme="${ 'light' }"
    >
      <lit101-applayout>
        <lit101-nav slot="sidebar">
          <div slot="logo">
            Logo
          </div>
          <lit101-navitem active>
            <div slot="icon">
              ${ unsafeSVG( questionmarkSVG ) }
            </div>
            About
          </lit101-navitem>
          <lit101-divider direction="row"></lit101-divider>
          <lit101-navitem>
            <div slot="icon">
              ${ unsafeSVG( settingsSVG ) }
            </div>
            Settings
          </lit101-navitem>
          <lit101-navitem>
            <div slot="icon">
              ${ unsafeSVG( signOutSVG ) }
            </div>
            Sign out
          </lit101-navitem>
        </lit101-nav>
        <lit101-appbar>
          <div slot="end">
            <lit101-avatar></lit101-avatar>
          </div>
          <lit101-divider slot="end"></lit101-divider>
          <div slot="end">
            <lit101-iconbutton>
              ${ unsafeSVG( moonSVG ) }
            </lit101-iconbutton>
          </div>
        </lit101-appbar>
        <lit101-container>
          <lit101-breadcrumb>
            <button>Dashboard</button>
            <a href="#">About</a>
            wow
          </lit101-breadcrumb>
          <lit101-card .elevation="${ '10'}">
            <lit101-cardbody>
              Hello World!
            </lit101-cardbody>
          </lit101-card>
          <lit101-card>
            <lit101-cardbody>
            </lit101-cardbody>
          </lit101-card>
        </lit101-container>
      </lit101-applayout>
    </lit101-theme>
    `
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'example-app': ExampleApp,
  }
}

              // <form-examples></form-examples>
              // <form-examples size="large"></form-examples>
              // <form-examples size="small"></form-examples>
