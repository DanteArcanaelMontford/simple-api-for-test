"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivrosServices = void 0;
const common_1 = require("@nestjs/common");
const livros_model_1 = require("./livros.model");
let LivrosServices = class LivrosServices {
    constructor() {
        this.livros = [
            new livros_model_1.Livros("LIVRO01", "Livro de teste 1", 29.90),
            new livros_model_1.Livros("LIVRO02", "Livro de teste 2", 39.90),
            new livros_model_1.Livros("LIVRO03", "Livro de teste 3", 19.90)
        ];
    }
    obterTodos() {
        return this.livros;
    }
    obterUm(id) {
        return this.livros[0];
    }
    criarLivros(livro) {
        this.livros.push(livro);
    }
    alterar(livro) {
        return livro;
    }
    apagar(id) {
        this.livros.pop();
    }
};
LivrosServices = __decorate([
    common_1.Injectable()
], LivrosServices);
exports.LivrosServices = LivrosServices;
//# sourceMappingURL=livros.service.js.map