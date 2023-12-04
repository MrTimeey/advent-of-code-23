package io.github.mrtimeey.aoc;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

public class ScratchcardUtils {

   public static int sumExponentialAmount(List<String> input) {
      List<Game> games = input.stream()
            .map(ScratchcardUtils::createGame)
            .sorted(Comparator.comparingInt(Game::id))
            .toList();
      List<Game> wins = new ArrayList<>();
      for (Game game : games) {
         int matchingNumbers = getMatchingNumbers(game.winningNumbers(), game.numbers());
         for (int i = game.id() + 1; i < game.id() + matchingNumbers + 1; i++) {
            int wonGameId = i;
            Optional<Game> wonGame = games.stream().filter(g -> g.id().compareTo(wonGameId) == 0).findFirst();
            wonGame.ifPresent(w -> {
               wins.add(w);
               wins.stream().filter(g -> g.id().compareTo(game.id()) == 0).toList().forEach((c) -> wins.add(w));
            });

         }
      }
      return games.size() + wins.size();
   }

   public static int getTotalPoints(List<String> input) {
      return input.stream()
            .map(ScratchcardUtils::createGame)
            .map(Game::totalPoints)
            .reduce(0, Integer::sum);
   }

   private static Game createGame(String i) {
      String[] splitGame = i.split(":");
      String gameId = splitGame[0].replace("Card ", "").trim();
      String[] numbersSplit = splitGame[1].split("\\|");
      List<Integer> winningNumbers = getNumbers(numbersSplit[0]);
      List<Integer> playerNumbers = getNumbers(numbersSplit[1]);
      Integer totalPoints = calculateTotalPoints(winningNumbers, playerNumbers);
      return Game.of(Integer.parseInt(gameId), winningNumbers, playerNumbers, totalPoints);
   }

   private static Integer calculateTotalPoints(List<Integer> winningNumbers, List<Integer> playerNumbers) {
      int matchingNumbers = getMatchingNumbers(winningNumbers, playerNumbers);
      int result = 0;
      for (int i = 0; i < matchingNumbers; i++) {
         if (i == 0) {
            result++;
         } else {
            result = result * 2;
         }
      }
      return result;
   }

   private static int getMatchingNumbers(List<Integer> winningNumbers, List<Integer> playerNumbers) {
      return Math.toIntExact(winningNumbers.stream()
            .filter(playerNumbers::contains)
            .count());
   }

   private static List<Integer> getNumbers(String inputString) {
      return Arrays.stream(inputString.split(" "))
            .filter(s -> !s.isEmpty())
            .map(Integer::parseInt)
            .toList();
   }
}
