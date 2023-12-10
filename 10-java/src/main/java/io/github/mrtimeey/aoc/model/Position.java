package io.github.mrtimeey.aoc.model;

public record Position(int x, int y) {
   public static Position of(int x, int y) {
      return new Position(x, y);
   }

   public Position go(Direction direction) {
      return switch (direction) {
         case NORTH -> Position.of(x(), y() - 1);
         case EAST -> Position.of(x() + 1, y());
         case SOUTH -> Position.of(x(), y() + 1);
         case WEST -> Position.of(x() - 1, y());
      };
   }
}
