export class ResponseUtility {
  data: Record<string, any>;
  status: boolean;

  constructor() {
    this.data = {};
    this.status = false;
  }

  setData(key: string, value: any): ResponseUtility {
    this.data[key] = value;
    return this;
  }

  setStatus(status: boolean): ResponseUtility {
    this.status = status;
    return this;
  }

  getData() {
    return this.data;
  }

  getStatus() {
    return this.status;
  }
}
