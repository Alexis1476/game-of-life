# game-of-life
Conway's game of life coded in python.  
Game of life is a **cellular automaton** devised by John Horton Conway.

The game evolves on a grid on squares called cells which have a binary state (dead or alive).

## Rules
1. **Death by subpopulation** If a living cell is too isolated (0 or 1 neighbour) then it dies at the next evolution.
2. **Death by overpopulation** If it is surrounded by too many cells (4 or more neighbors) it dies in the next generation.
3. If it is reasonably surrounded (2 or 3 neighbors) then it stays alive.
4. **Birth by reproduction** If a dead cell is surrounded by 3 living cells then it becomes alive (it is born) at the next evolution.

### References
- https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
- https://www.dcode.fr/jeu-de-la-vie
