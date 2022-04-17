import EventEmitter from "events";
// EventEmitter.defaultMaxListeners = 0
export const bus = new EventEmitter()