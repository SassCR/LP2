import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
export declare class ProdutoController {
    private readonly produtoService;
    constructor(produtoService: ProdutoService);
    create(createProdutoDto: CreateProdutoDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateProdutoDto: UpdateProdutoDto): any;
    remove(id: string): any;
}
