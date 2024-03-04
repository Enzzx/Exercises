import random
rNum = random.randint(1,100)
attempts = 7
inserts = []

def choiceNum() :
	global inserts
	try :
		value = int(input("escolha um número de 1 a 100: "))
		if value > 100 or value in inserts :
			print("insira outro valor")
		else :
			inserts.append(value)
			return value
	except ValueError :
		print("insira um valor válido")
		
		
def attempt() :
	global attempts
	value = choiceNum()
	if value == None:
		attempt()
	elif value == rNum :
		print("parabéns você acertou \(°√°)/")
	elif attempts == 1 :
		print("perdeu")
	else :
		attempts -= 1
		if value > rNum :
			print("tente um número menor \n \nvocê ainda tem mais "+ str(attempts) +" chances \n - - - - - - - - - - - - - - - - - - - -")
		else :
			print("tente um número maior \n \nvocê ainda tem mais "+ str(attempts) +" chances \n - - - - - - - - - - - - - - - - - - - -")
		attempt()
			

attempt()