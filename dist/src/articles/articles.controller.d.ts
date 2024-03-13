import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    create(createArticleDto: CreateArticleDto): string;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        description: string;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): string;
    update(id: string, updateArticleDto: UpdateArticleDto): string;
    remove(id: string): string;
}
