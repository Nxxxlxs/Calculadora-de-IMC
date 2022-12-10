import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weight: number = 0
  height: number = 0
  imc: number = 0
  msg: string = ""

  constructor(private toastCtrl: ToastController) {}

  onCalculate() {
    if (this.height <= 0 || this.weight <= 0) {
      return
    }
    
    this.imc = this.weight / (this.height * this.height)

    if (this.imc <= 18.5) { this.msg = "Magreza"}
    else if (this.imc > 18.5 && this.imc <= 24.9) { this.msg = "Normal" }
    else if (this.imc > 25 && this.imc <= 29.9) { this.msg = "Sobrepeso" }
    else if (this.imc > 30 && this.imc <= 39.9) { this.msg = "Obesidade" }
    else if (this.imc >= 40) { this.msg = "Obesidade grave" }

    this.showIMC()
  }

  async showIMC() {
    const toast = await this.toastCtrl.create({
      message: `IMC = ${this.imc.toFixed(2)} - ${this.msg}`,
      duration: 3000,
      color: 'secondary'
    })
    
    toast.present()

  }


}
