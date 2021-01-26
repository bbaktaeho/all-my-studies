import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { SWAGGER_CONFIG } from './swagger.config';

export function createDocument(app: INestApplication): OpenAPIObject {
  const builder = new DocumentBuilder()
    .setDescription(SWAGGER_CONFIG.description)
    .setTitle(SWAGGER_CONFIG.title)
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token',
    )
    .setVersion(SWAGGER_CONFIG.version);

  for (const tag of SWAGGER_CONFIG.tags) builder.addTag(tag);
  const options = builder.build();
  return SwaggerModule.createDocument(app, options);
}
