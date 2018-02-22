/*jslint node: true */
"use strict";

var Phone = class Phone {
  // Destructure the JSON object into the parameters with defaults
  constructor({title, description, color, price, image, display, storage, camera, battery, ram, os}) {
    this.title = title;
    this.description = description;
    this.color = color;
    this.price = price;
    this.image = image;
    this.display = display;
    this.storage = storage;
    this.camera = camera;
    this.battery = battery;
    this.ram = ram;
    this.os = os;
  }
}

module.exports.Phone = Phone;
