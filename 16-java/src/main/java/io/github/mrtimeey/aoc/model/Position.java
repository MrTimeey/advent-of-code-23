package io.github.mrtimeey.aoc.model;

public record Position(int x, int y) {
   public static Position of(int x, int y) {
      return new Position(x, y);
   }

   public <T> boolean isValid(T[][] grid) {
      if (x() < 0 || y() < 0) return false;
      return y() < grid.length && x() < grid[y()].length;
   }

   public Position move(Direction direction) {
      return switch (direction) {
         case RIGHT -> Position.of(x() + 1, y());
         case LEFT -> Position.of(x() - 1, y());
         case UP -> Position.of(x(), y() - 1);
         case DOWN -> Position.of(x(), y() + 1);
      };
   }
}
