package io.github.mrtimeey.aoc;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class HashUtils {

   public static int hashValues(String inputStrings) {
      return Arrays.stream(inputStrings.split(","))
            .map(HashUtils::hashValue)
            .reduce(Integer::sum)
            .orElse(0);
   }

   public static int focusingPower(String inputStrings) {
      List<List<Lens>> boxes = new ArrayList<>();
      for (int i = 0; i < 256; i++) {
         boxes.add(new ArrayList<>());
      }
      for (String input : inputStrings.split(",")) {
         if (input.contains("-")) {
            String toRemove = input.replace("-", "");
            boxes.get(hashValue(toRemove)).removeIf(l -> l.name().equals(toRemove));
         }
         if (input.contains("=")) {
            String[] split = input.split("=");
            Lens newLens = Lens.of(split[0], Integer.parseInt(split[1]));
            int boxIndex = hashValue(newLens.name());
            if (boxes.get(boxIndex).stream().anyMatch(l -> l.name().equals(newLens.name()))) {
               boxes.get(boxIndex).replaceAll(lens -> lens.name().equals(newLens.name()) ? newLens : lens);
            } else {
               boxes.get(boxIndex).add(newLens);
            }
         }
      }
      int total = 0;
      for (int boxIndex = 0; boxIndex < boxes.size(); boxIndex++) {
         for (int slotIndex = 0; slotIndex < boxes.get(boxIndex).size(); slotIndex++) {
            total += (boxIndex+1) * (slotIndex + 1) * boxes.get(boxIndex).get(slotIndex).focalLength();
         }
      }
      return total;
   }

   public static int hashValue(String input) {
      int currentValue = 0;
      for (char c : input.toCharArray()) {
         currentValue += c;
         currentValue = currentValue * 17;
         currentValue = currentValue % 256;
      }
      return currentValue;
   }

   record Lens(String name, int focalLength) {
      static Lens of(String name, int focalLength) {
         return new Lens(name, focalLength);
      }
   }

}
