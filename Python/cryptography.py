#cria uma criptografia e descriptografia

import random
import string
soup = string.printable

"""
def cryptograph():
    print("informe a chave:")
    listKey = list(input())
    key = []
    for item in listKey:
        key.append(item)
    print(key)

    print("informe a senha:")
    listPass = list(input())
    psswrd = []
    for psw in listPass:
        psswrd.append(psw)
    print(psswrd)
    
    encripted = []

    while len(psswrd) > 0:
        package = psswrd[:4]
        psswrd = psswrd[4:]
    
        key_indices = [rValues.index(value) for value in key]
        package_indices = [rValues.index(value) for value in package]
    
        i = 0
        for tooth in key_indices:
            package_indices[i % len(package_indices)] += tooth
            i+=1
    
        for i, packNum in enumerate(package_indices):
            try:
                binary = bin(packNum)
                binary = int(binary[2:], 2)
                #binary = binary[len(binary)//2:]+binary[0:len(binary)//2]
                
                package_indices[i] = rValues[binary // 38 - 1] + rValues[binary % 38]
                print("iterou o " + str(i))
            except:
                print("o " + str(i) + " não foi iterado")
                
        print(package_indices)
        encripted.extend(package_indices)
    encripted= ":".join(encripted)
    print(encripted)
cryptograph()
"""

def encrypt():
    print("você possui uma chave? (S/n)")
    hasKey = input().lower()
    key = None
    
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

    encrypted = ""
    while len(psswrd) > 0:
        package = psswrd[0:4]
        psswrd = psswrd[4:]
        package_indices = [soup.index(value) for value in package]
        key_indices = [soup.index(value) for value in key]

        for _ in range(int("".join(keyData))):
            i = 0
            for tooth in key_indices:
                package_indices[i % len(package_indices)] += tooth
                i+=1

        for item in package_indices:
            encrypted += hex(item//62) + soup[item%62]

        encrypted = encrypted.replace("0x", ":")
        #print(package_indices)
    
    print(encrypted)
    """random.seed(int(keyData))
    encrypted_list = list(encrypted)
    random.shuffle(encrypted_list)
    encrypted = "".join(encrypted_list)
    print(encrypted)
    random.seed(int(keyData))
    encrypted_list = list(encrypted)
    random.shuffle(encrypted_list)
    encrypted = "".join(encrypted_list)
    print(encrypted)"""

print("digite 1 para criptografar ou 2 para descriptografar:")
crypt = int(input())
if crypt == 1:
    encrypt()
elif crypt == 2:
    decrypt()
else:
    print("vai se foder")