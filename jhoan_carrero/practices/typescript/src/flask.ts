import { Socket, AddressInfo } from "node:net";
import express, { Application } from "express";

export default class Flask {
  public app: Application;

  constructor(public appName: string) {
    this.app = express();
  }

  run(options?: { port?: number }) {
    this.app.listen(options?.port, function (this: Socket) {
      console.log(
        `Server listening on http://localhost:${
          (this.address() as AddressInfo)?.port
        }`
      );
    });
  }
  get(path: string) {
    console.log(path);

    return function () {
      
    };
  }
}
