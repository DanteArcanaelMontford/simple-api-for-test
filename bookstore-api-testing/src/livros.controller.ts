import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livros } from "./livros.model";
import { LivrosServices } from "./livros.service";

@Controller('livraria')
export class LivrosController {


    constructor(private livrosServices: LivrosServices) {

    }

    @Get()
    public obterTodos(): Livros[] {
        return this.livrosServices.obterTodos();
    }

    @Get(':id')
    public obterUm(@Param() params): Livros {
        return this.livrosServices.obterUm(params.id);
    }

    @Post()
    public criarLivros(@Body() livro: Livros) {
        this.livrosServices.criarLivros(livro);

    }

    @Put()
    public alterarLivro(@Body() livro: Livros): Livros {
        return this.livrosServices.alterar(livro);
    }

    @Delete(':id') // para testar remoção do servidor
    public apagarLivro(@Param() params){
        this.livrosServices.apagar(params.id);
    }
}
