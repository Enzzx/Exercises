#algoritmo de criptografia
import random
import string
soup = string.printable

def encrypt():
    print("você possui uma chave? (S/n)")
    hasKey = input().lower()
    key = None
    
    #pegando dados
    if hasKey == "s":
        print("insira a chave:")
        key = input()
        if len(key) != 20:
            return crypt()
    elif hasKey == "n":
        caracteres = string.ascii_letters + string.digits
        key = "".join(random.choice(caracteres) for _ in range(18))
        key = "".join(random.choice(string.digits) for _ in range(2)) + key
        print("sua chave é: " + key)
    else:
        return crypt()
    
    print("insira a senha a ser criptografada:")
    psswrd = input()
    psswrd = [char for char in psswrd]
    key = [char for char in key]
    keyData = "".join(key[0:2])
    key = key[2:]


    #separar a senha em grupos de 4 valores e iterar o index de cada caractere da chave keyData vezes
    encrypted = ""
    while len(psswrd) > 0:
        package = psswrd[0:4]
        psswrd = psswrd[4:]
        package_indices = [soup.index(value) for value in package]
        key_indices = [soup.index(value) for value in key]

        for _ in range(int(keyData)):
            for i, tooth in enumerate(key_indices):
                package_indices[i % len(package_indices)] += tooth

        #criar um hex da divisão de cada valor por 62 + o resto 
        for item in package_indices:
            encrypted += hex(item//62) + soup[item%62]

        encrypted = encrypted.replace("0x", ":")
    
    print(encrypted[1:])

def decrypt():
    #pegando dados
    print("passe a chave:")
    key = input()
    print("passe a senha encriptada:")
    psswrd = input()
    key = [char for char in key]
    psswrd = psswrd.split(":")
    keyData = "".join(key[0:2])
    key = key[2:]

    #recuperando o número somando o hex * 62 + resto de cada valor
    for i, value in enumerate(psswrd):
        hexa = value[:len(value) -1]
        bit = value[len(value) -1]

        psswrd[i] = int(hexa, 16) * 62 + soup.index(bit)

    #fazendo o processo contrário da linha 33
    decrypted = []
    while len(psswrd) > 0:
        package = psswrd[0:4]
        psswrd = psswrd[4:]
        key_indices = [soup.index(value) for value in key]

        for _ in range(int(keyData)):
            for i, tooth in enumerate(key_indices):
                package[i % len(package)] -= tooth

        decrypted += [soup[value] for value in package]
    print("".join(decrypted))

print("digite 1 para criptografar ou 2 para descriptografar:")
crypt = int(input())
if crypt == 1:
    encrypt()
elif crypt == 2:
    decrypt()
else:
    print("beleeeza")