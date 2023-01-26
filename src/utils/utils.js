function renderLoading(isLoading) {
  if (isLoading) {
    this._buttonSubmit.textContent = 'Сохранение...';
  } else {
    this._buttonSubmit.textContent = this._buttonSubmitValue;
  }
}

export { renderLoading };