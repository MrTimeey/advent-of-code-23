package io.github.mrtimeey.aoc.model;

public record Pair<T, R>(T first, R second) {
   public static <T, R> Pair<T, R> of(T position, R direction) {
      return new Pair<>(position, direction);
   }
}
