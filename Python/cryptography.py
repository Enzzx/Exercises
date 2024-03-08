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
    
        i = 0
        for packNum in package_indices:
            binary = bin(packNum)
            binary = binary[2:]
            binary = binary[len(binary)//2:]+binary[0:len(binary)//2]
            package_indices[i] = rValues[int(binary, 2)]
            i+=1
            print("iterou o " + str(i))
        print(package_indices)
        encripted.extend(package_indices)
    print(encripted)
cryptograph()