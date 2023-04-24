import { html, css, } from 'lit'
import { Lit101Element } from './elements/lit101-element';
import { customElement, property } from 'lit/decorators.js'
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

import {
  moonSVG,
} from '@lit101/icons';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('form-examples')
export class FormExamples extends Lit101Element {

  @property({ type: String, reflect: true, }) size: string = 'medium';

  static styles = [
    super.styles,
    css`
    :host {

      --line-height: 1;
    }
    .form-control, .form-select, .btn {
      all: unset;
      display: inline-block;
      appearance: none;
      border: 1px solid red;
      background: red;
      border-radius: 50rem;
      line-height: 1.5;
      padding: 8px 12px;
      font-size: 1rem;
    }
    svg {
      width: 1em;
      height: 1em;
      display: inline-block;
      vertical-align: -0.125em;
      fill: currentcolor;
    }
    :host([size="large"]) .form-control,
    :host([size="large"]) .form-select,
    :host([size="large"]) .btn {
      font-size: 1.5rem;
      padding: 10px 16px;
    }
    :host([size="small"]) .form-control,
    :host([size="small"]) .form-select,
    :host([size="small"]) .btn {
      font-size: .7rem;
    }
    `,

  ];

  render() {

    return html`
    <div class="p-3 p-md-4 border rounded-3 icon-demo-examples">
        <h1 class="fs-2 mb-3">
            ${ unsafeSVG( moonSVG )}
            Heading
        </h1>
        <div class="fs-4 mb-3">
            ${ unsafeSVG( moonSVG )}
            Smaller heading
        </div>
        <p>
            Inline text
            ${ unsafeSVG( moonSVG )}
        </p>
        <p>
            <a href="#" class="text-decoration-none">
                Example link text
                ${ unsafeSVG( moonSVG )}
            </a>
        </p>
        <div>
          <button type="button" class="btn">
              Button
          </button>
          <select class="form-select">
            <option>Affe</option>
            <option>Giraffe</option>
          </select>
          <input class="form-control" placeholder="Value">
        </div>
        <div class="grid">
          <button type="button" class="btn">
              ${ unsafeSVG( moonSVG )}
          </button>
          <button type="button" class="btn">
              ${ unsafeSVG( moonSVG )}
              Button
          </button>
          <button type="button" class="btn btn-secondary">
              ${ unsafeSVG( moonSVG )}
          </button>
          <select class="form-select">
            <option>Affe</option>
            <option>Giraffe</option>
          </select>
          <input class="form-control" placeholder="Value">
        </div>
    </div>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'form-examples': FormExamples,
  }
}

    /* .form-control {
      display: block;
      width: 100%;
      padding: 12px 12px;
      font-size: 1rem;
      font-weight: 400;
      line-height: var( --line-height );
      background: #dfe4e1;
      background-clip: padding-box;
      border: 1px solid #1c1b1f;
      appearance: none;
      border-top-left-radius: 0.375rem;
      border-top-right-radius: 0.375rem;
    } */

    // .form-select {
    //   display: block;
    //   width: 100%;
    //   padding: 12px 36px 12px 12px;
    //   -moz-padding-start: calc(0.75rem - 3px);
    //   font-size: 1rem;
    //   font-weight: 400;
    //   line-height: var( --line-height );
    //   color: #212529;
    //   background-color: #fff;
    //   background-repeat: no-repeat;
    //   background-position: right 0.75rem center;
    //   background-size: 16px 12px;
    //   border: 1px solid #ced4da;
    //   border-radius: 0.25rem;
    //   transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    //   appearance: none;
    // }
    // .btn {
    //   display: inline-block;
    //   padding: 12px 12px;
    //   font-size: 1rem;
    //   font-weight: 400;
    //   line-height: var( --line-height );
    //   text-align: center;
    //   text-decoration: none;
    //   vertical-align: middle;
    //   cursor: pointer;
    //   -webkit-user-select: none;
    //   -moz-user-select: none;
    //   user-select: none;
    //   color: white;
    //   border-radius: var( --lit101-border-radius-pill );
    //   background-color: var( --lit101-primary-40 );
    //   border: 1px solid var( --lit101-primary-40 );
    // }
    // .grid {
    //   display: grid;
    //   grid-template: 1fr / auto auto auto auto;
    //   grid-gap: 16px;
    // }
    // <div class="p-3 p-md-4 border rounded-3 icon-demo-examples">
    //     <h1 class="fs-2 mb-3">
    //         ${ unsafeSVG( moonSVG )}
    //         Heading
    //     </h1>
    //     <div class="fs-4 mb-3">
    //         ${ unsafeSVG( moonSVG )}
    //         Smaller heading
    //     </div>
    //     <p>
    //         Inline text
    //         ${ unsafeSVG( moonSVG )}
    //     </p>
    //     <p>
    //         <a href="#" class="text-decoration-none">
    //             Example link text
    //             ${ unsafeSVG( moonSVG )}
    //         </a>
    //     </p>
    //     <div class="grid">
    //         <div>
    //             <button type="button" class="btn">
    //                 ${ unsafeSVG( moonSVG )}
    //                 Button
    //             </button>
    //         </div>
    //         <div>
    //             <button type="button" class="btn btn-secondary">
    //                 ${ unsafeSVG( moonSVG )}
    //             </button>
    //         </div>
    //         <div>
    //             <input type="text" class="form-control" placeholder="Input group example">
    //         </div>
    //         <div>
    //           <select class="form-select">
    //             <option>Affe</option>
    //             <option>Giraffe</option>
    //           </select>
    //         </div>
    //     </div>
    // </div>
