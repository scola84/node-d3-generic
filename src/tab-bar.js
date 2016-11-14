import { select } from 'd3-selection';
import 'd3-selection-multi';

export default class TabBar {
  constructor() {
    this._buttons = new Set();

    this._root = select('body')
      .append('div')
      .remove()
      .classed('scola tab-bar', true)
      .styles({
        'border': '1px solid #007AFF',
        'border-radius': '0.3em',
        'color': '#007AFF',
        'display': 'flex',
        'height': '2em',
        'overflow': 'hidden'
      });
  }

  destroy() {
    this._buttons.forEach((button) => {
      button.destroy();
    });

    this._root.dispatch('destroy');
    this._root.remove();
    this._root = null;
  }

  root() {
    return this._root;
  }

  append(value, action) {
    if (action === true) {
      this._buttons.add(value);
      this._root.node().appendChild(value.root().node());
    } else if (action === false) {
      this._buttons.delete(value);
      value.destroy();
    }
  }
}
