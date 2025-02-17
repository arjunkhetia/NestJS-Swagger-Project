import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  create(createItemDto: CreateItemDto) {
    const newItem = { id: this.items.length + 1, ...createItemDto };
    this.items.push(newItem);
    return newItem;
  }

  findAll() {
    return this.items;
  }

  findOne(id: number) {
    return this.items.find((item) => item.id === id);
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex === -1) return null;
    this.items[itemIndex] = { ...this.items[itemIndex], ...updateItemDto };
    return this.items[itemIndex];
  }

  remove(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
    return { message: 'Item deleted successfully' };
  }
}
