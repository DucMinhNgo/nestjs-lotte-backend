import { Injectable } from '@nestjs/common';
import { CreateLotteDto } from './dto/create-lotte.dto';
import { UpdateLotteDto } from './dto/update-lotte.dto';

@Injectable()
export class LotteService {
  getRandomNumber(): number {
    return Math.random();
  }

  selectRandomElementWithProbability(elements: any[], probabilities: number[]): any {
    if (elements.length !== probabilities.length) {
      throw new Error('Number of elements and probabilities must be the same.');
    }

    const randomValue = this.getRandomNumber();
    let cumulativeProbability = 0;

    for (let i = 0; i < probabilities.length; i++) {
      cumulativeProbability += probabilities[i];
      if (randomValue <= cumulativeProbability) {
        return elements[i];
      }
    }

    // Fallback to the last element if something goes wrong
    return elements[elements.length - 1];
  }

  create(createLotteDto: CreateLotteDto) {
    return 'This action adds a new lotte';
  }

  findAll() {
    const elements = ['50%', '20%', 'Free ship', 'Fail'];
    const probabilities = [0.001, 0.11, 0.09, 0.799];

    const selectedElement = this.selectRandomElementWithProbability(elements, probabilities);

    return { selectedElement };
  }

  findOne(id: number) {
    return `This action returns a #${id} lotte`;
  }

  update(id: number, updateLotteDto: UpdateLotteDto) {
    return `This action updates a #${id} lotte`;
  }

  remove(id: number) {
    return `This action removes a #${id} lotte`;
  }
}
