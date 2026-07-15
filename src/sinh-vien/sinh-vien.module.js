"use strict";
import { SinhVienService } from './sinh-vien.service';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinhVienModule = void 0;
var common_1 = require("@nestjs/common");
var sinh_vien_controller_1 = require("./sinh-vien.controller");
var SinhVienModule = /** @class */ (function () {
    function SinhVienModule() {
    }
    SinhVienModule = __decorate([
        (0, common_1.Module)({
            controllers: [sinh_vien_controller_1.SinhVienController]
        })
    ], SinhVienModule);
    return SinhVienModule;
}());
exports.SinhVienModule = SinhVienModule;
