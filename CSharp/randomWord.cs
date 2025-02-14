using System;
using System.IO;
using System.Linq;

public class Program {
    static void Main() {
        Random rand = new();
        char[] alpha = "abcdefghijklmnopqrstuvwxyz".ToCharArray();
        string streamContent;

        using (StreamReader sr = new("dicionario.txt")) {
            streamContent = sr.ReadToEnd();
        }
        string[] wordList = streamContent.Split(new[] { ' ', '\n', '\r' }, StringSplitOptions.RemoveEmptyEntries);

        string span = "";

        bool seekWord = true;
        while (seekWord) {
            Console.Clear();
            span += alpha[rand.Next(26)];
            Console.WriteLine(span);

            bool wordLeft = false;
            foreach (var word in wordList) {
                if (word.StartsWith(span)) {
                    wordLeft = true;
                    break;
                }
            }
            Console.WriteLine(wordLeft);
            if (!wordLeft && span.Length > 1) {
                span = span[..^1];
            }

            if (wordList.Any(word => word == span)) {
                seekWord = false;
                Console.WriteLine($"Palavra formada: {span}");
            }

            Console.ReadLine();
        }
    }
}
