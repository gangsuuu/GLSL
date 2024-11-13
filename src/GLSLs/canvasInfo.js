import Jan from "./24/11/setInfo_11"

export default class CanvasInfo{
  constructor() {
    this.info = {
    }
    this.jan = new Jan()
  }

  getInfo() {
    this.info.jan = this.jan.get()
  }
}