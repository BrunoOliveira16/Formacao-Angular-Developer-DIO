## 📝 Aula 02: TypeScript para Angular
### Data Modifiers
Em TypeScript, modificadores de dados são usados para controlar a visibilidade dos membros da classe. O conceito de ‘Encapsulamento’ é usado para tornar os membros da classe públicos ou privados. Existem três tipos de modificadores de acesso em TypeScript: public, private e protected .

- Public: Os membros públicos são acessíveis de qualquer lugar na aplicação.

- Private: Os membros privados só são acessíveis dentro da classe que os define.

- Protected: Os membros protegidos são acessíveis dentro da classe que os define e suas subclasses.

Além desses modificadores de acesso, o TypeScript também fornece outros modificadores de dados, como static e readonly .

- Static: Membros estáticos pertencem à própria classe em vez de instâncias da classe.

- Readonly: Membros somente leitura só podem ser definidos durante a inicialização ou dentro do construtor.

Aqui está um exemplo de como os modificadores de dados podem ser usados no TypeScript:
```
class Pessoa {
  private nome: string;
  public idade: number;
  protected genero: string;

  constructor(nome: string, idade: number, genero: string) {
    this.nome = nome;
    this.idade = idade;
    this.genero = genero;
  }

  public dizerOla() {
    console.log(`Olá, meu nome é ${this.nome}.`);
  }
}

const pessoa = new Pessoa('João', 30, 'masculino');
pessoa.dizerOla(); // Saída: Olá, meu nome é João.
console.log(pessoa.idade); // Saída: 30
```
