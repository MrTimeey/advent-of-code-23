package io.github.mrtimeey.aoc.utils;

import io.github.mrtimeey.aoc.model.Direction;
import io.github.mrtimeey.aoc.model.Position;

import java.util.ArrayList;
import java.util.List;

import static io.github.mrtimeey.aoc.utils.CharacterUtils.EMPTY_CHARACTER;

public class MazeUtils {

   public static int calculateFarthestPoint(List<String> inputLines) {
      String[][] input = parseInput(inputLines);
      return getLoop(input, "S").size() / 2;
   }

   public static int calculateTiles(List<String> inputLines) {
      return 0;
   }

   public static List<Position> getLoop(String[][] input, String startingPoint) {
      Position startPosition = getStartPosition(input, startingPoint);
      Direction cameFrom = null;
      String lastChar = "";
      List<Position> paths = new ArrayList<>();
      paths.add(startPosition);
      do {
         Position currentPosition = paths.get(paths.size() - 1);
         if (lastChar.isEmpty()) {
            for (Direction direction : Direction.values()) {
                  Position possibleNextPosition = currentPosition.go(direction);
                  String characterToCheck = getValue(input, possibleNextPosition);
                  if (isValidCharacter(characterToCheck, direction.opposite())) {
                     cameFrom = direction.opposite();
                     lastChar = characterToCheck;
                     paths.add(possibleNextPosition);
                     break;
                  }
            }
         } else {
            Direction nextDirection = CharacterUtils.getNextDirection(lastChar, cameFrom);
            Position possibleNextPosition = currentPosition.go(nextDirection);
            String characterToCheck = getValue(input, possibleNextPosition);
            paths.add(possibleNextPosition);
            cameFrom = nextDirection.opposite();
            lastChar = characterToCheck;
         }
      } while (!paths.get(0).equals(paths.get(paths.size()-1)));
      return paths;
   }

   private static boolean isValidCharacter(String characterToCheck, Direction cameFrom) {
      return CharacterUtils.parse(characterToCheck).contains(cameFrom);
   }

   private static Position getStartPosition(String[][] input, String startingPoint) {
      for (int y = 0; y < input.length; y++) {
         for (int x = 0; x < input[y].length; x++) {
            String character = input[y][x];
            if (startingPoint.equals(character)) {
               return Position.of(x, y);
            }
         }
      }
      return null;
   }

   private static String[][] parseInput(List<String> inputLines) {
      return inputLines.stream()
            .map(line -> line.trim().split(""))
            .toArray(String[][]::new);
   }

   private static String getValue(String[][] matrix, Position position) {
      if (matrix.length <= position.y() || position.y() < 0 || matrix[position.y()].length <= position.x() || position.x() < 0) {
         return EMPTY_CHARACTER.symbol();
      }
      return matrix[position.y()][position.x()];
   }

}
