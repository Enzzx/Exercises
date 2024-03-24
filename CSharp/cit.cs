//desafio CIT Senac
using System;
using System.Collections.Generic;

public class Desafi {

    static long potentiation() {
        Console.WriteLine("Digite o número de termos da expressão:");
        int N = int.Parse(Console.ReadLine());
        if (N >= 1 && N <= 10) {
            int[] expressionTerms = new int[N];

            for (int i = 0; i < N; i++) {
                Console.WriteLine($"\nDigite o {i+1}° termo:");
                int term = int.Parse(Console.ReadLine());
                expressionTerms[i] = term;
            }

            long sum = 0;
            foreach (int term in expressionTerms) {
                if (term < 10 || term > 9999) {
                    Console.WriteLine($"\no termo '{term}' está fora de restrição");
                    return 0;
                }
                sum += (long)Math.Pow(term/10, term%10);
            };

            if (sum > Math.Pow(10, 9)) {
                Console.WriteLine("\nO resultado ultrapassou o limite de valor permitido");
                return 0;
            }
            return sum;
        } else {
            Console.WriteLine("\nInsira um número entre 1 e 10");
            return potentiation();
        }
    }

    public static void Main() {
        long result = potentiation();
        if (result != 0) {
            Console.WriteLine("Resultado: " + result);
        }
    }
}