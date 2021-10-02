import { Livros } from "./livros.model";
export declare class LivrosServices {
    livros: Livros[];
    obterTodos(): Livros[];
    obterUm(id: number): Livros;
    criarLivros(livro: Livros): void;
    alterar(livro: Livros): Livros;
    apagar(id: number): void;
}
