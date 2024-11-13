import { info01 } from "./shader_1114"
import { info02 } from "./shader_1115"

export default class Jan{
  constructor(){
    this.info = []
  }
  get(){
    this.info.push(info01())
    this.info.push(info02())
    console.log(this.info);
  }
}

