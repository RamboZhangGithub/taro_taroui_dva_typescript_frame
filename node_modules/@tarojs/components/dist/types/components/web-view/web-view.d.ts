import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class WebView implements ComponentInterface {
  src: string;
  onLoad: EventEmitter;
  onError: EventEmitter;
  render(): any;
}
