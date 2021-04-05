import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
  Param,
  Post,
  Put,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateCatDto, GetCatByIdParam } from './cat.dto';
import { CatsService } from './cat.service';

@ApiTags('cat')
@Controller('cats')
@UsePipes(
  // 컨트롤러 레벨에서의 파이프
  new ValidationPipe({
    whitelist: true,
    transform: true,
  }),
)
export class CatController {
  constructor(private readonly catService: CatsService) {}

  @Post('')
  @ApiOperation({ description: 'create new Cat' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: 'OK' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiInternalServerErrorResponse({
    description: 'data has been created successfully',
  })
  async createCat(@Body() cat: CreateCatDto) {
    return this.catService.create(cat);
  }

  @Get('')
  @ApiOperation({ description: 'Get All Cat' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: 'OK' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiInternalServerErrorResponse({
    description: 'data has been fetched successfully',
  })
  async listAll() {
    return this.catService.findAll();
  }

  @Get(':id')
  @ApiOperation({ description: 'Get Cat' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: 'OK' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiInternalServerErrorResponse({
    description: 'data has been fetched successfully',
  })
  async getCatById(@Param() param: GetCatByIdParam) {
    return this.catService.findById(param.id);
  }
}
