package io.github.mrtimeey.aoc;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

class GardenUtilsTest {

   List<String> exampleInput = List.of(
         "...........",
         ".....###.#.",
         ".###.##..#.",
         "..#.#...#..",
         "....#.#....",
         ".##..S####.",
         ".##..#...#.",
         ".......##..",
         ".##.#.####.",
         ".##..##.##.",
         "...........");

   @Test
   void testPart1() {
      int result = GardenUtils.part1(exampleInput, 6);

      assertThat(result).isEqualTo(16);
   }

}
