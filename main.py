import pygame

WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
WIDTH, HEIGHT = 700, 500
SIZE = (WIDTH, HEIGHT)


def main():
    is_running = True  # En cours d'Execution
    pygame.init()  # Initialisation de pygame
    window = pygame.display.set_mode((400, 400))
    window.fill(WHITE)
    while is_running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                is_running = False
        pygame.display.flip()
    pygame.quit()


if __name__ == '__main__':
    main()
