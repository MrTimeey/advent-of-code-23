package io.github.mrtimeey.aoc.model;

import java.util.Arrays;
import java.util.List;

public record Character(String symbol, List<Direction> connections) {

   public static Character of(String symbol, Direction... connections) {
      return new Character(symbol, Arrays.stream(connections).toList());
   }

   public boolean contains(Direction direction) {
      return connections().contains(direction);
   }
}
