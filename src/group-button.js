export default class GroupButton {
  constructor() {
    this._model = null;
    this._name = null;
    this._value = null;

    this._handleModelSet = (e) => this._modelSet(e);
  }

  destroy() {
    if (this._model) {
      this._unbindModel();
      this._model = null;
    }
  }

  model(value) {
    this._model = value;

    this._bindModel();

    this._modelSet({
      action: 'model',
      name: this._name,
      value: value.get(this._name)
    });

    return this;
  }

  name(itemName) {
    this._name = itemName;
    return this;
  }

  value(itemValue) {
    this._value = itemValue;
    return this;
  }

  _bind() {
    this._root.on('click.scola-group-button', () => this._handleClick());
  }

  _unbind() {
    this._root.on('click.scola-group-button', null);
  }

  _handleClick() {
    this._model.set(this._name, this._value);
  }

  _bindModel() {
    this._model.setMaxListeners(this._model.getMaxListeners() + 1);
    this._model.addListener('set', this._handleModelSet);
  }

  _unbindModel() {
    this._model.setMaxListeners(this._model.getMaxListeners() - 1);
    this._model.removeListener('set', this._handleModelSet);
  }

  _modelSet() {
    throw new Error('Not implemented');
  }
}
