import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
  @ApiProperty({ example: 'Phone', description: 'The name of the item' })
  name: string;

  @ApiProperty({ example: 500, description: 'The price of the item' })
  price: number;
}
