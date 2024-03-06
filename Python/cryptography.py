rValues = ['b', '4', 'g', 'h', 'a', 'i', '6', 'r', 'd', 'k', 'e', '7', 'j', '5', " ", 'n', 'f', 'c', '9', '0', 't', 'x', '3', 'q', 'm', 'z', '2', 'l', 'o', "ç", '8', 's', 'u', 'v', 'p', 'w', 'y', 'l']

""" print("informe a chave:")
listKey = list(input())
key = []
for item in listKey:
    key.append(rValues.index(item))

print(key) """

chave = ["c", "h", "a", "v", "e", "z", "o", "n", "a"]
senha = ["a", "b", "c", "d", "e", "f", "g", "h"]
package = senha[:4]
senha = senha[4:]

chave_indices = [rValues.index(value) for value in chave]
package_indices = [rValues.index(value) for value in package]

i = 0
for indice in chave_indices:
    package_indices[i] += indice
    if i >= len(package_indices) -1:
        i = 0
    i+=1


print(package_indices)
print(chave_indices)
print(package_sum)