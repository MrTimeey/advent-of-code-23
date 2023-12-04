package io.github.mrtimeey.aoc;

import java.util.List;

public record Game(Integer id, List<Integer> winningNumbers, List<Integer> numbers, Integer totalPoints) {
   public static Game of(Integer id, List<Integer> winningNumbers, List<Integer> numbers, Integer totalPoints) {
      return new Game(id, winningNumbers, numbers, totalPoints);
   }
   public Game copy() {
      return new Game(id(), winningNumbers(), numbers(), totalPoints());
   }
}
