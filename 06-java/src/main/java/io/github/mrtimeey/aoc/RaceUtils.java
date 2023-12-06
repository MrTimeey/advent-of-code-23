package io.github.mrtimeey.aoc;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.stream.IntStream;

public final class RaceUtils {

   record Race(BigDecimal duration, BigDecimal record) {
   }

   public static int calculateWaysToWin(List<String> inputStrings) {
      List<Race> races = parseInput(inputStrings);
      return races.stream()
            .map(RaceUtils::getWinScenarios)
            .reduce((acc, val) -> acc * val)
            .orElse(0);
   }

   public static int calculateWins(List<String> inputStrings) {
      Race race = parseInputPartTwo(inputStrings);
      return RaceUtils.getWinScenarios(race);
   }

   private static Integer getWinScenarios(Race race) {
      int wins = 0;
      for (BigDecimal i = BigDecimal.ZERO; i.compareTo(race.duration) < 1; i = i.add(BigDecimal.ONE)) {
         BigDecimal distanceToGo = race.duration.subtract(i);
         BigDecimal totalDistanceMade = i.multiply(distanceToGo);
         if (totalDistanceMade.compareTo(race.record) > 0) wins++;
      }
      return wins;
   }

   private static List<Race> parseInput(List<String> inputStrings) {
      List<BigDecimal> durations = parseNumbers(inputStrings.get(0).replace("Time:", ""));
      List<BigDecimal> records = parseNumbers(inputStrings.get(1).replace("Distance:", ""));
      return IntStream.range(0, durations.size())
            .mapToObj(i -> new Race(durations.get(i), records.get(i)))
            .toList();
   }

   private static Race parseInputPartTwo(List<String> inputStrings) {
      BigDecimal duration = new BigDecimal(inputStrings.get(0).replace("Time:", "").replaceAll(" ", ""));
      BigDecimal record = new BigDecimal(inputStrings.get(1).replace("Distance:", "").replaceAll(" ", ""));
      return new Race(duration, record);
   }

   private static List<BigDecimal> parseNumbers(String numbers) {
      return Arrays.stream(numbers.split(" "))
            .filter(s -> s != null && !s.isEmpty())
            .map(BigDecimal::new)
            .toList();
   }
}
