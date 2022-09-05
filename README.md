# game-of-life
Conway's Game of Life coded in JavaScript.

# Rules :
- Death by subpopulation If a living cell is too isolated (0 or 1 neighbour) then it dies at the next evolution.
- Death by overpopulation If it is surrounded by too many cells (4 or more neighbors), it dies in the next generation.
- If he is reasonably surrounded (2 or 3 neighbours), he stays alive.
- Birth by reproduction If a dead cell is surrounded by 3 living cells, it becomes alive (it is born) at the next evolution.
