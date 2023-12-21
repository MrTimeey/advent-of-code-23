package io.github.mrtimeey.aoc;

import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.stream.Stream;

public class Main {

   public static void main(String[] args) {
      List<String> input = loadInput();
      System.out.println("21.12.2023");
      System.out.println("Part 1: " + GardenUtils.part1(input, 64));
      System.out.println("Part 2: " + GardenUtils.part2(input));
   }

   private static List<String> loadInput() {
      URL resource = Main.class.getResource("/input.txt");
      if (resource == null) return List.of();
      try (Stream<String> stream = Files.lines(Path.of(resource.toURI()))) {
         return stream.toList();
      } catch (IOException | URISyntaxException e) {
         return List.of();
      }
   }
}
