// custom.d.ts

import mongoose, { Connection } from "mongoose";

declare global {
  namespace NodeJS {
    interface Global {
      mongoose: {
        con: Connection | null;
        promise: Promise<typeof mongoose> | null;
      };
    }
  }
}