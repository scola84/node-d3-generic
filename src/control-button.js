import { select } from 'd3-selection';
import 'd3-selection-multi';

export default class ControlButton {
  constructor() {
    this._disabled = false;

    this._text = null;
    this._textPadding = null;

    this._icon = null;
    this._iconPadding = null;
    this._iconName = null;

    this._root = select('body')
      .append('div')
      .remove()
      .classed('scola control-button', true)
      .attrs({
        type: 'button'
      })
      .styles({
        'align-items': 'center',
        'background': 'none',
        'border': 0,
        'cursor': 'pointer',
        'display': 'flex',
        'height': '3em',
        'justify-content': 'center',
        'padding': 0
      });

    this._leftPadding = this._root
      .append('div')
      .classed('scola padding', true)
      .styles({
        'height': '100%',
        'order': 1,
        'width': '0.5em'
      });

    this._rightPadding = this._root
      .append('div')
      .classed('scola padding', true)
      .styles({
        'height': '100%',
        'order': 5,
        'width': '0.5em'
      });
  }

  destroy() {
    this._root.dispatch('destroy');
    this._root.remove();
    this._root = null;
  }

  root() {
    return this._root;
  }

  type(value) {
    this._root.attr('type', value);
    return this;
  }

  center() {
    this._root.styles({
      'display': 'inline-flex',
      'flex-direction': 'row'
    });

    return this;
  }

  left() {
    this._root.styles({
      'flex-direction': 'row'
    });

    return this;
  }

  right() {
    this._root.styles({
      'flex-direction': 'row-reverse'
    });

    return this;
  }

  disabled(value = null) {
    if (value === null) {
      return this._disabled;
    }

    this._disabled = value;
    this._root.classed('disabled', value);

    return this;
  }

  icon(value = null, size = '2em') {
    if (value === null) {
      return this._icon;
    }

    if (value === false) {
      return this._deleteIcon();
    }

    if (this._icon) {
      return this._updateIcon(value, size);
    }

    return this._insertIcon(value, size);
  }

  text(value = null) {
    if (value === null) {
      return this._text;
    }

    if (value === false) {
      return this._deleteText();
    }

    if (this._text) {
      return this._updateText(value);
    }

    return this._insertText(value);
  }

  _insertIcon(name, size) {
    this._iconName = name;

    this._icon = this._root
      .append('div')
      .classed('scola icon', true)
      .classed(name, true)
      .styles({
        'font-size': size,
        'order': 2
      });

    this._iconPadding = this._root
      .append('div')
      .classed('scola padding', true)
      .styles({
        'height': '100%',
        'order': 3,
        'width': '0.5em'
      });

    return this;
  }

  _updateIcon(name, size) {
    this._icon
      .classed(this._iconName, false)
      .classed(name, true)
      .style('font-size', size);

    this._iconName = name;
    return this;
  }

  _deleteIcon() {
    if (this._icon) {
      this._icon.remove();
      this._icon = null;

      this._iconPadding.remove();
      this._iconPadding = null;
    }

    return this;
  }

  _insertText(text) {
    this._text = this._root
      .append('div')
      .classed('scola text', true)
      .styles({
        'order': 4,
        'overflow': 'hidden',
        'text-overflow': 'ellipsis',
        'white-space': 'nowrap'
      })
      .text(text);

    return this;
  }

  _updateText(text) {
    this._text.text(text);
    return this;
  }

  _deleteText() {
    if (this._text) {
      this._text.remove();
      this._text = null;
    }

    return this;
  }
}
