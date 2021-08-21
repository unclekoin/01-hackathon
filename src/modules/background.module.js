import { Module } from '../core/module';
import { random } from "../utils"
export class BackgroundModule extends Module {

  trigger(){
    function changeBackgroundColor(){
      document.body.style.backgroundColor=
      `hsl(
        ${random(0,360)},
        ${random(0,100)}%,
        ${random(0,100)}%)
      `
    }
  }
}