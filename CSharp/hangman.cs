using System;
using System.Linq;
using System.Collections.Generic;

namespace Jogo
{
    class HangmanGame
    {
        char[] answerArr = "cavalo".ToCharArray();
        List<char> guessedLetters = [];
        int guests = 5;
      
        public bool TryLetter(char letter)
        {
            if (guessedLetters.Contains(letter))
            {
                Console.WriteLine("A letra {0} já foi tentada\n\n", letter);
                return true;
            }
            guessedLetters.Add(letter);
            if (!answerArr.Any(ltter => ltter == letter))
            {
                guests--;
                return true;
            }

            for (int i = 0; i < answerArr.Length; i++)
            {
                if (letter == answerArr[i])
                {
                    answerArr[i] = char.ToUpper(answerArr[i]);
                }
            }

            if (answerArr.All(ltter => char.ToUpper(ltter) == ltter))
            {
                return false;
            }
            return true;
        }

        public bool TryGuest(string guest)
        {
            if (guest == String.Concat(answerArr).ToLower())
            {
                return false;
            }
            guests--;
            return true;
        }

        public void StartGame()
        {
            bool isRunning = true;
            while (isRunning)
            {
                Console.WriteLine($"Letras usadas: [ {string.Join(", ", guessedLetters)} ]");
                Console.WriteLine("Tentativas restantes: " + guests + "\n");
                foreach (var letter in answerArr)
                {
                    Console.Write($"{(char.IsUpper(letter) ? char.ToLower(letter) : '_')}  ");
                }

                Console.Write("\n\nDigite: ");
                string guest = Console.ReadLine();
                Console.Clear();

                if (guest.Length == 1)
                {
                    isRunning = TryLetter(Convert.ToChar(guest));
                }
                else if (guest.Length == answerArr.Length)
                {
                    isRunning = TryGuest(guest);
                }
                else
                {
                    Console.WriteLine("Digite uma letra ou um chute com {0} letras\n\n", answerArr.Length);
                }

                if (guests == 0)
                {
                    isRunning = false;
                }
            }

            if (guests > 0)
            {
                Console.WriteLine("ganhou");
            } else
            {
                Console.WriteLine("perdeu");
            }
        }

        static void Main()
        {
            HangmanGame game = new HangmanGame();
            game.StartGame();
        }
    }
}
