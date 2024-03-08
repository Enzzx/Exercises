import pyautogui
import math

centerX = 1
centerY = 1
radius = 2

def moveMouse(angle):
    x = centerX + radius * math.cos(math.radians(angle))
    y = centerY + radius * math.sin(math.radians(angle))
    pyautogui.move(x, y)

i = 0
while i < 360:
    moveMouse(i)
    i += 1
