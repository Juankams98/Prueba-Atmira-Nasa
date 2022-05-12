import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SessionService {
  constructor() { }

  setStorage(key: string, value: string): void {
    return sessionStorage.setItem(key, value);
  }

  getStorage(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  clearStorage(key: string): void {
    sessionStorage.removeItem(key);
  }

  setImageSelected(image: any): void {
    const imageString = JSON.stringify(image);
    return this.setStorage('image', imageString);
  }

  getImageSelected() {
    const imageString = this.getStorage('image');
    return imageString !== null ? JSON.parse(imageString) : null;
  }
}
