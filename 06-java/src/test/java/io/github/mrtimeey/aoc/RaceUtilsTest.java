package io.github.mrtimeey.aoc;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

class RaceUtilsTest {

   @Test
   void testCalculateWins() {
      List<String> input = List.of("Time:      7  15   30", "Distance:  9  40  200");
      assertThat(RaceUtils.calculateWaysToWin(input)).isEqualTo(288);
   }

   @Test
   void testCalculateWinsBigRace() {
      List<String> input = List.of("Time:      7  15   30", "Distance:  9  40  200");
      assertThat(RaceUtils.calculateWins(input)).isEqualTo(71503);
   }
}
