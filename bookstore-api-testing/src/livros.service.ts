import { Injectable } from "@nestjs/common";
import { Livros } from "./livros.model";

@Injectable()
export class LivrosServices {
    livros: Livros[]  = [
        new Livros("LIVRO01", "Livro de teste 1", 29.90),
        new Livros("LIVRO02", "Livro de teste 2", 39.90),
        new Livros("LIVRO03", "Livro de teste 3", 19.90)
    ]

    obterTodos(): Livros[] {
        return this.livros;
        
    }

    obterUm(id: number): Livros{
        return this.livros[0];
    }

    criarLivros(livro: Livros): void {
        this.livros.push(livro);
    }

    alterar(livro: Livros): Livros {
        return livro;
    }

    apagar(id: number): void {
        this.livros.pop();
    }    
}