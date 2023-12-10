package io.github.mrtimeey.aoc.utils;

import io.github.mrtimeey.aoc.model.Character;
import io.github.mrtimeey.aoc.model.Direction;

import java.util.List;

import static io.github.mrtimeey.aoc.model.Direction.EAST;
import static io.github.mrtimeey.aoc.model.Direction.NORTH;
import static io.github.mrtimeey.aoc.model.Direction.SOUTH;
import static io.github.mrtimeey.aoc.model.Direction.WEST;


public final class CharacterUtils {

   public static final Character EMPTY_CHARACTER = Character.of(".");
   public static final List<Character> CHARACTERS = List.of(
         Character.of("|", NORTH, SOUTH),
         Character.of("-", WEST, EAST),
         Character.of("L", NORTH, EAST),
         Character.of("J", NORTH, WEST),
         Character.of("7", WEST, SOUTH),
         Character.of("F", EAST, SOUTH),
         EMPTY_CHARACTER,
         Character.of("S", NORTH, EAST, SOUTH, WEST)
   );

   public static Character parse(String value) {
      return CHARACTERS.stream().filter(c -> c.symbol().equals(value)).findFirst().orElse(Character.of("."));
   }

   public static Direction getNextDirection(String character, Direction cameFrom) {
      return parse(character).connections().stream().filter(d -> !d.equals(cameFrom)).findFirst().orElseThrow();
   }

}
