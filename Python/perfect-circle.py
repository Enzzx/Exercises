#tentativa de fazer um círculo perfeito no site https://neal.fun/perfect-circle/
import pyautogui
import math
import time

time.sleep(3)
width, height = pyautogui.size()
centerX = width//2
centerY = height//2
radius = 150

def moveMouse(angle):
    x = centerX + radius * math.cos(math.radians(angle))
    y = centerY + radius * math.sin(math.radians(angle))
    pyautogui.moveTo(x, y)

i = 0
while i < 36000:
    moveMouse(i)
    i += 10