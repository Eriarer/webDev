import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  deleteDoc,
} from '@angular/fire/firestore';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private firestore: Firestore) {}

  addUser(user: User) {
    const usersRef = collection(this.firestore, 'usuarios');
    return addDoc(usersRef, user);
  }

  getUsers(): Observable<User[]> {
    const usersRef = collection(this.firestore, 'usuarios');
    return collectionData(usersRef, { idField: 'id' }) as Observable<User[]>;
  }

  deleteUser(id: string) {
    const usersRef = doc(this.firestore, `usuarios/${id}`);
    return deleteDoc(usersRef);
  }
}
