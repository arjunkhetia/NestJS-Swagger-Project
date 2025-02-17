import { ApiProperty } from '@nestjs/swagger';

export class Item {
  @ApiProperty({ example: 1, description: 'The unique ID of the item' })
  id: number;

  @ApiProperty({ example: 'Laptop', description: 'The name of the item' })
  name: string;

  @ApiProperty({ example: 1000, description: 'The price of the item' })
  price: number;
}
