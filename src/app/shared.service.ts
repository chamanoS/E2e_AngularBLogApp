import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  blogTitle = "My fancy blog"

  constructor() { }
}
