// app/javascript/controllers/greeting_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["name", "output"]

  greet() {
    const name = this.nameTarget.value || "World"
    this.outputTarget.textContent = `Hello, ${name}!`
  }
}
