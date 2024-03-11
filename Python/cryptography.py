rValues = ['b', '4', 'g', 'h', 'a', 'i', '6', 'r', 'd', 'k', 'e', '7', 'j', '5', " ", 'n', 'f', 'c', '9', '0', 't', 'x', '3', 'q', 'm', 'z', '2', 'l', 'o', "ç", '8', 's', 'u', 'v', 'p', 'w', 'y', 'l']


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
    
        i  = 0
        for tooth in key_indices:
            package_indices[i % len(package_indices)] += tooth
            i+=1
    
        for i, packNum in enumerate(package_indices):
            try:
                binary = bin(packNum)
                binary = binary[2:]
                binary = binary[len(binary)//2:]+binary[0:len(binary)//2]

                if len(key_indices) > 10:
                    package_indices[i] = rValues[int(binary, 2) // (len(key_indices) // 10) + 2]
                else:
                    package_indices[i] = rValues[int(binary, 2)]

                print("iterou o " + str(i))
            except:
                print("o elemento " + str(i) + " não foi iterado")
                
        print(package_indices)
        encripted.extend(package_indices)
    print(encripted)
cryptograph()