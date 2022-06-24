import pygame
from cell import *


def main():
    is_running = True  # En cours d'execution
    # Initialisation de pygame
    pygame.init()
    pygame.display.set_mode((400, 400))
    while is_running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                is_running = False

    pygame.quit()


if __name__ == '__main__':
    main()
