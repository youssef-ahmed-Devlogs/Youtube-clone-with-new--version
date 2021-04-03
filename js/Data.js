class Data {
  constructor(api, setUi) {
    this.api = api;
    this.setUi = setUi;
  }

  async getData() {
    const response = await fetch(this.api);
    const data = await response.json();

    // set Ui
    this.setUi(data);
  }
}

export default Data;
