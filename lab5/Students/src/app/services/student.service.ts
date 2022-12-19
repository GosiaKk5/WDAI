import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../students/student';
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

 
  constructor(private db: AngularFirestore) {}

  createStudent(student: Student): void {
    this.db.collection('/students').add({
      'name': student.name,
      'age': student.age
    });
  }

  updateStudent(key: string, value: any) {
    this.db.collection('/students').doc(key).set({
      'name': value.name,
      'age': value.age
    });
  }

  deleteStudent(key: string) {
    return this.db.collection('/students').doc(key).delete();
  }

  getStudentsList(): Observable<Student[]> {
    return this.db.collection<Student>('/students').valueChanges({ idField: 'key' });
  }

  deleteAll() {
    
    this.db.collection('/students').get().toPromise().then(students => { if(students != undefined)
      students.forEach(student => student.ref.delete());
    });
}}
