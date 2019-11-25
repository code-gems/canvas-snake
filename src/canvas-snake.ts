import { html, LitElement, css, customElement, property } from "lit-element";

@customElement("canvas-snake")
export class CanvasSnake extends LitElement {
	@property()
	disabled: boolean;

	constructor() {
		super();
		this.disabled = false;
	}

	static styles = css`
		:host {
			background: red;
		}
	`;

	render() {
		return html`
			<h1>WORKS !!!</h1>
		`;
	}
}
// window.customElements.define("canvas-snake", CanvasSnake);
