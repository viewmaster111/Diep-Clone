/**
 * @file Provides useful physics calculations for games.
 * @author Nebula
 * @copyright Diep-Clone  Copyright (C) 2017  Nebula
 */

/**
 * @license
 *
 * Please read LICENSE.txt for the full license.
 *
 * Diep-Clone: An Open-Source Clone of Diep.io
 * Copyright (C) 2017  Nebula
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

 /**
  * @module Physics
  */

var physCalc = require("./calc.js");

/**
 * @class
 * @classdesc This class allows physics algorithms to be performed on objects.
 * @requires Calc
 * @namespace
 * @function
 * @param {Object} [config={}] The initial config of this object.
 * @param {Number} [config.posX=0] The initial X position.
 * @param {Number} [config.posY=0] The initial Y position.
 * @param {Number} [config.velX=0] The initial X velocity.
 * @param {Number} [config.velY=0] The initial Y velocity.
 * @param {Number} [config.accelX=0] The initial X acceleration.
 * @param {Number} [config.accelY=0] The initial Y acceleration.
 * @param {Number} [config.velLimit=Infinity] The initial maximum velocity.
 * @param {Number} [config.accelLimit=Infinity] The initial maximum acceleration.
 * @param {Number} [config.friction=Infinity] The initial friction.
 * @property {Object} Physics - The Physics object.
 * @property {Number} Physics.posX - This object's X position.
 * @property {Number} Physics.posY - This object's Y position.
 * @property {Number} Physics.velX - This object's X velocity.
 * @property {Number} Physics.velY - This object's Y velocity.
 * @property {Number} Physics.accelX - This object's X acceleration.
 * @property {Number} Physics.accelY - This object's Y acceleration.
 * @property {Number} Physics.velLimit - This object's maximum velocity.
 * @property {Number} Physics.accelLimit - This object's maximum acceleration.
 * @property {Number} Physics.friction - The friction for this object (applies a force, decelerating the object).
 * @returns {Object}
 */
var Physics = function (config){
  this.posX = config.posX || 0;
  this.posY = config.posY || 0;
  this.velX = config.velX || 0;
  this.velY = config.velY || 0;
  this.accelX = config.accelX || 0;
  this.accelY = config.accelY || 0;
  this.velLimit = config.velLimit || Infinity;
  this.accelLimit = config.accelLimit || Infinity;
  this.friction = config.friction || 0.5;

  /**
   * Update every physics algorithm on this object for one time interval.
   *
   * @function update
   * @returns {Object} Returns an object with properties `posX` and `posY`, the coordinates of the updated object.
   */
  this.prototype.update = function (){

  };

  /**
   * Calculates the new acceleration given a force and an angle.
   *
   * @function applyForce
   * @param {Number} force The amount of force to apply.
   * @param {Number} angle The direction of the force, given as an angle (in radians).
   * @returns {Object} Returns an object with properties `velX` and `velY`, the velocity of the updated object.
   */
  this.prototype.applyForce = function (force, angle){

  };
};

exports.Physics = Physics;
