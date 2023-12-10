package io.github.mrtimeey.aoc;

import io.github.mrtimeey.aoc.utils.MazeUtils;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

class MazeUtilsTest {

   @Test
   void testSimpleExample() {
      List<String> input = List.of(
            ".....",
            ".S-7.",
            ".|.|.",
            ".L-J.",
            "....."
      );

      int result = MazeUtils.calculateFarthestPoint(input, "S");

      assertThat(result).isEqualTo(4);
   }

   @Test
   void testComplexExample() {
      List<String> input = List.of(
            "...|.",
            "..F7.",
            ".FJ|.",
            "SJ.L7",
            "|F--J",
            "LJ..."
      );

      int result = MazeUtils.calculateFarthestPoint(input, "S");

      assertThat(result).isEqualTo(8);
   }
}
