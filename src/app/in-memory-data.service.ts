import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'f', family:'g', field:'FIELD1' },
      { id: 12, name: 'f', family:'g', field:'FIELD2' },
      { id: 13, name: 'f', family:'g', field:'FIELD3' },
      { id: 14, name: 'f', family:'g', field:'FIELD4' }
    ];
    return {heroes};
  }
}
