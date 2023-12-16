package io.github.mrtimeey.aoc;

import io.github.mrtimeey.aoc.model.Direction;
import io.github.mrtimeey.aoc.model.Pair;
import io.github.mrtimeey.aoc.model.Position;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

public class LayoutUtils {

   public static int part1(List<String> input) {
      String[][] grid = parseInput(input);
      Pair<Position, Direction> startingPoint = Pair.of(Position.of(-1, 0), Direction.RIGHT);
      return countEnergizedFields(grid, startingPoint);
   }

   public static int part2(List<String> input) {
      String[][] grid = parseInput(input);
      List<Pair<Position, Direction>> startingPoints = new ArrayList<>();
      for (int y = 0; y < grid.length; y++) {
         startingPoints.add(Pair.of(Position.of(-1, y), Direction.RIGHT));
         startingPoints.add(Pair.of(Position.of(grid[y].length, y), Direction.LEFT));
      }
      for (int x = 0; x < grid[0].length; x++) {
         startingPoints.add(Pair.of(Position.of(x, -1), Direction.DOWN));
         startingPoints.add(Pair.of(Position.of(x, grid.length), Direction.UP));
      }

      return startingPoints.stream()
            .map(p -> countEnergizedFields(grid, p))
            .reduce(Integer::max)
            .orElse(0);
   }

   private static int countEnergizedFields(String[][] grid, Pair<Position, Direction> startingPoint) {
      Deque<Pair<Position, Direction>> stack = new ArrayDeque<>();
      stack.push(startingPoint);
      List<Pair<Position, Direction>> visited = new ArrayList<>();
      while (!stack.isEmpty()) {
         Pair<Position, Direction> pair = stack.pop();
         Position newPosition = pair.first().move(pair.second());
         if (!newPosition.isValid(grid)) {
            continue;
         }
         String character = grid[newPosition.y()][newPosition.x()];
         getNewDirection(character, pair.second()).stream()
               .map(d -> Pair.of(newPosition, d))
               .filter(p -> !visited.contains(p))
               .forEach(p -> {
                  stack.push(p);
                  visited.add(p);
               });
      }
      return Math.toIntExact(visited.stream().map(Pair::first).distinct().count());
   }

   private static List<Direction> getNewDirection(String character, Direction oldDirection) {
      if ("/".equals(character)) {
         return List.of(switch (oldDirection) {
            case RIGHT -> Direction.UP;
            case LEFT -> Direction.DOWN;
            case UP -> Direction.RIGHT;
            case DOWN -> Direction.LEFT;
         });
      } else if ("\\".equals(character)) {
         return List.of(switch (oldDirection) {
            case RIGHT -> Direction.DOWN;
            case LEFT -> Direction.UP;
            case UP -> Direction.LEFT;
            case DOWN -> Direction.RIGHT;
         });
      } else if ("|".equals(character)) {
         return switch (oldDirection) {
            case RIGHT, LEFT -> List.of(Direction.UP, Direction.DOWN);
            case UP, DOWN -> List.of(oldDirection);
         };
      } else if ("-".equals(character)) {
         return switch (oldDirection) {
            case RIGHT, LEFT -> List.of(oldDirection);
            case UP, DOWN -> List.of(Direction.RIGHT, Direction.LEFT);
         };
      } else {
         return List.of(oldDirection);
      }
   }

   private static String[][] parseInput(List<String> inputLines) {
      return inputLines.stream()
            .map(line -> line.trim().split(""))
            .toArray(String[][]::new);
   }

}
