import { Livros } from "./livros.model";
import { LivrosServices } from "./livros.service";
export declare class LivrosController {
    private livrosServices;
    constructor(livrosServices: LivrosServices);
    obterTodos(): Livros[];
    obterUm(params: any): Livros;
    criarLivros(livro: Livros): void;
    alterarLivro(livro: Livros): Livros;
    apagarLivro(params: any): void;
}
