class Grid:
    def __init__(self, width, height, scale, offset):
        self.scale = scale
        self.columns = int(height, scale)
        self.rows = int(width, scale)
        self.size = (self.rows, self.columns)
        self.offset = offset
