package io.github.mrtimeey.aoc;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

class LayoutUtilsTest {

   @Test
   void testCalculateEnergizedTiles() {
      List<String> input = List.of(
            ".|...\\....",
            "|.-.\\.....",
            ".....|-...",
            "........|.",
            "..........",
            ".........\\",
            "..../.\\\\..",
            ".-.-/..|..",
            ".|....-|.\\",
            "..//.|....");

      int result = LayoutUtils.part1(input);
      assertThat(result).isEqualTo(46);
   }

   @Test
   void testCalculateEnergizedTilesWithVariousStarts() {
      List<String> input = List.of(
            ".|...\\....",
            "|.-.\\.....",
            ".....|-...",
            "........|.",
            "..........",
            ".........\\",
            "..../.\\\\..",
            ".-.-/..|..",
            ".|....-|.\\",
            "..//.|....");

      int result = LayoutUtils.part2(input);
      assertThat(result).isEqualTo(51);
   }

}
