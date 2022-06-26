import pygame


class Grid:
    def __init__(self, width, height, scale, offset):
        self.scale = scale
        self.columns = int(height / scale)
        self.rows = int(width / scale)
        self.size = (self.rows, self.columns)
        self.offset = offset

    def draw(self, surface):
        for x in range(self.rows):
            for y in range(self.columns):
                y_pos = y * self.scale
                x_pos = x * self.scale
                pygame.draw.rect(surface, (0, 0, 0), [x_pos, y_pos, self.scale - self.offset, self.scale - self.offset])
