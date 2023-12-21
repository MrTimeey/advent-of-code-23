package io.github.mrtimeey.aoc;

import io.github.mrtimeey.aoc.model.Direction;
import io.github.mrtimeey.aoc.model.Position;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class GardenUtils {

   public static int part1(List<String> inputLines, int totalSteps) {
      String[][] grid = parseInput(inputLines);
      Set<Position> positions = new HashSet<>();
      positions.add(getStartingPosition(grid));

      for (int i = 0; i < totalSteps; i++) {
         Set<Position> newPositions = new HashSet<>();
         for (Position position : positions) {
            for (Direction direction : Direction.values()) {
               Position newPosition = position.move(direction);
               if (newPosition.isValid(grid) && !"#".equals(grid[newPosition.y()][newPosition.x()])) {
                  newPositions.add(newPosition);
               }
            }
         }
         positions = newPositions;
      }

      return positions.size();
   }

   private static Position getStartingPosition(String[][] grid) {
      for (int y = 0; y < grid.length; y++) {
         for (int x = 0; x < grid[y].length; x++) {
            if ("S".equals(grid[y][x])) {
               return Position.of(x, y);
            }
         }
      }
      return Position.of(0, 0);
   }

   public static int part2(List<String> inputLines) {
      return 0;
   }

   private static String[][] parseInput(List<String> inputLines) {
      return inputLines.stream()
            .map(line -> line.trim().split(""))
            .toArray(String[][]::new);
   }
}
