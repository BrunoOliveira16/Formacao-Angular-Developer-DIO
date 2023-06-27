## 🏆 Desafio 03 - A idade de Magali
Magali é mãe de três filhos que têm idades diferentes. Ela notou que, neste ano, a soma das idades dos seus três filhos é igual à idade dela. Neste problema, dada a idade de Magali e as idades de dois dos filhos, seu programa deve computar e imprimir a idade do filho mais velho. Por exemplo, se sabemos que Magali tem 52 anos e as idades conhecidas de dois dos filhos são 14 e 18 anos, então a idade do outro filho, que não era conhecida, tem que ser 20 anos, pois a soma das três idades tem que ser 52. Portanto, a idade do filho mais velho é 20. Em mais um exemplo, se Magali tem 47 anos e as idades de dois dos filhos são 21 e 9 anos, então o outro filho tem que ter 17 anos e, portanto, a idade do filho mais velho é 21.

<br>

## Entrada
A primeira linha da entrada contém um inteiro M representando a idade de Magali. A segunda linha da entrada contém um inteiro A representando a idade de um dos filhos. A terceira linha da entrada contém um inteiro B representando a idade de outro filho.

<br>

## Saída
Seu programa deve imprimir uma linha, contendo um número inteiro, representando a idade do filho mais velho de Magali.

Restrições
- 40 ≤ M ≤ 110

- 1 ≤ A < M

- 1 ≤ B < M

- A ≠ B

<br>

<table>
    <thead>
        <tr>
            <th>Exemplos de Entrada</th>
            <th>Exemplos de Saída</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>52</td>
            <td>20</td>
        </tr>
        <tr>
            <td>14</td>
            <td></td>
        </tr>
        <tr>
            <td>18</td>
            <td></td>
        </tr>
        <tr>
            <td>47</td>
            <td>21</td>
        </tr>
        <tr>
            <td>21</td>
            <td></td>
        </tr>
        <tr>
            <td>9</td>
            <td></td>
        </tr>
    </tbody>
</table>

<br>

Para executar os testes no terminal, verifique que está dentro da pasta do desafio e execute o comando abaixo no terminal:
```
node desafio-03.js
```

> O arquivo auxiliar.js é apenas um arquivo para inserir as entradas e utilizarmos as funções gets e print, simulando o mesmo ambiente da DIO.