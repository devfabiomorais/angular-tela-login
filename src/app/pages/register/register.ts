import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {

  login = '';
  senha = '';
  confirmarSenha = '';

  constructor(private router: Router) { }

  registrar() {

    if (!this.login || !this.senha || !this.confirmarSenha) {
      alert("Preencha todos os campos!");
      return;
    }

    if (this.senha !== this.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    // 1. Pegamos o array atual do localStorage
    const usuariosSalvos = localStorage.getItem('usuarios');
    let usuarios = usuariosSalvos ? JSON.parse(usuariosSalvos) : [];

    // 2. Verificar se já existe um usuário com o mesmo login
    const existe = usuarios.some((u: any) => u.login === this.login);
    if (existe) {
      alert("Login já está em uso!");
      return;
    }

    // 3. Criar o novo usuário
    const novoUsuario = {
      login: this.login,
      senha: this.senha,
    };

    // 4. Adicionar ao array
    usuarios.push(novoUsuario);

    // 5. Salvar tudo novamente no localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");

    // 6. Redirecionar para a tela de login
    this.router.navigate(['/']);
  }

}
