import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './auth.html',
  styleUrls: ['./auth.css'],
})
export class AuthComponent {

  login: string = '';
  senha: string = '';
  carregando: boolean = false;  // 🔥 loader ativado/desativado

  constructor(private router: Router) { }

  entrar() {
    if (!this.login || !this.senha) {
      alert("Preencha login e senha!");
      return;
    }

    const usuariosSalvos = localStorage.getItem('usuarios');
    const usuarios = usuariosSalvos ? JSON.parse(usuariosSalvos) : [];

    const usuarioEncontrado = usuarios.find(
      (u: any) => u.login === this.login && u.senha === this.senha
    );

    if (!usuarioEncontrado) {
      alert("Login ou senha incorretos!");
      return;
    }

    // Ativa o GIF de carregamento
    this.carregando = true;

    // Simula o carregamento por 3 segundos
    setTimeout(() => {
      localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
      this.router.navigate(['/home']);
    }, 3000);
  }
}
