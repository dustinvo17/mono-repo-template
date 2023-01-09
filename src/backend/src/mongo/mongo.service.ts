import { Injectable } from '@nestjs/common';
import { MongoClient, Collection, Db } from 'mongodb';

@Injectable()
export class MongoService {
  private client: MongoClient;

  constructor() {
    this.client = new MongoClient(process.env.MONGO_DB_URI);
  }

  async getCollection(name: string, dbName: string): Promise<Collection> {
    await this.client.connect();
    const db = this.client.db(dbName);

    return db.collection(name);
  }

  async getDatabase(dbName: string): Promise<Db> {
    await this.client.connect();
    return this.client.db(dbName);
  }
}