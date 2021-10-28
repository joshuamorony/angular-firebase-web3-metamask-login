import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Message {
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor(private firestore: Firestore) {}

  public getMessages(): Observable<Message[]> {
    const collectionReference = collection(this.firestore, '/messages');
    return collectionData(collectionReference) as Observable<Message[]>;
  }
}
